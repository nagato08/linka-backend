import { InjectQueue } from '@nestjs/bullmq';
import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { Queue } from 'bullmq';
import { randomInt, randomUUID } from 'node:crypto';
import {
  PhotoStatus,
  VerificationStatus,
  VerificationType,
} from '../../generated/prisma/enums';
import { PrismaService } from '../../core/prisma/prisma.service';
import { StorageService } from '../../core/storage/storage.service';
import { QUEUES } from '../../core/queue/queue.module';

/**
 * Poses possibles.
 *
 * Le tirage au sort est le cœur du dispositif de vivacité : sans lui, une
 * vidéo enregistrée une fois passe le contrôle indéfiniment, et le badge ne
 * garantit plus rien. La consigne est envoyée au démarrage de la session et
 * comparée à ce qui a réellement été filmé.
 */
export const POSE_CHALLENGES = [
  'TURN_HEAD_LEFT',
  'TURN_HEAD_RIGHT',
  'SMILE',
  'RAISE_RIGHT_HAND',
  'BLINK_TWICE',
  'LOOK_UP',
] as const;

export type PoseChallenge = (typeof POSE_CHALLENGES)[number];

const CHALLENGE_TTL_MINUTES = 10;
const MAX_ATTEMPTS_PER_DAY = 5;
const MAX_CAPTURE_BYTES = 15 * 1024 * 1024;

const ACCEPTED_CAPTURE_TYPES = new Set([
  'video/mp4',
  'video/webm',
  'image/jpeg',
]);

@Injectable()
export class VerificationService {
  private readonly logger = new Logger(VerificationService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly storage: StorageService,
    @InjectQueue(QUEUES.MODERATION) private readonly queue: Queue,
  ) {}

  /**
   * Ouvre une session de vérification.
   *
   * Le profil doit déjà porter des photos approuvées : c'est à elles que le
   * selfie sera comparé. Sans photo de référence, la comparaison n'a pas
   * d'objet — et c'est précisément cette comparaison qui attrape le
   * catfishing, pas une pièce d'identité.
   */
  async start(userId: string): Promise<{
    verificationId: string;
    pose: PoseChallenge;
    expiresAt: Date;
  }> {
    const photos = await this.prisma.photo.count({
      where: {
        profileId: userId,
        status: PhotoStatus.APPROVED,
        deletedAt: null,
      },
    });

    if (photos === 0) {
      throw new BadRequestException(
        'Ajoutez au moins une photo approuvée avant de vous faire vérifier',
      );
    }

    const alreadyVerified = await this.prisma.profile.findUnique({
      where: { userId },
      select: { isVerified: true },
    });

    if (alreadyVerified?.isVerified) {
      throw new BadRequestException('Votre profil est déjà vérifié');
    }

    await this.enforceAttemptLimit(userId);

    // Les sessions en cours sont abandonnées : en laisser plusieurs ouvertes
    // permettrait de tenter les poses jusqu'à tomber sur une facile.
    await this.prisma.verification.updateMany({
      where: {
        userId,
        status: {
          in: [VerificationStatus.PENDING, VerificationStatus.PROCESSING],
        },
      },
      data: { status: VerificationStatus.EXPIRED },
    });

    const pose = POSE_CHALLENGES[randomInt(0, POSE_CHALLENGES.length)];
    const expiresAt = new Date(Date.now() + CHALLENGE_TTL_MINUTES * 60_000);

    const verification = await this.prisma.verification.create({
      data: {
        userId,
        type: VerificationType.LIVENESS_FACE_MATCH,
        status: VerificationStatus.PENDING,
        poseChallenge: pose,
        expiresAt,
      },
    });

    return { verificationId: verification.id, pose, expiresAt };
  }

  /** URL de dépôt de la capture, valable le temps de la session. */
  async createUploadUrl(
    userId: string,
    verificationId: string,
    contentType: string,
    contentLength: number,
  ) {
    const verification = await this.load(userId, verificationId);

    if (verification.status !== VerificationStatus.PENDING) {
      throw new BadRequestException('Cette session est terminée');
    }

    if (verification.expiresAt < new Date()) {
      throw new BadRequestException('Session expirée, recommencez');
    }

    if (!ACCEPTED_CAPTURE_TYPES.has(contentType)) {
      throw new BadRequestException(`Format non accepté : ${contentType}`);
    }

    if (contentLength <= 0 || contentLength > MAX_CAPTURE_BYTES) {
      throw new BadRequestException(
        `Capture trop volumineuse, ${MAX_CAPTURE_BYTES / 1024 / 1024} Mo maximum`,
      );
    }

    const captureKey = `verifications/${userId}/${randomUUID()}`;

    const upload = await this.storage.createUploadUrl(
      captureKey,
      contentType,
      contentLength,
      600,
    );

    await this.prisma.verification.update({
      where: { id: verificationId },
      data: { captureKey },
    });

    return { uploadUrl: upload.url, expiresIn: upload.expiresIn };
  }

  /** Confirme le dépôt et lance l'analyse. */
  async submit(userId: string, verificationId: string) {
    const verification = await this.load(userId, verificationId);

    if (verification.status !== VerificationStatus.PENDING) {
      return { status: verification.status };
    }

    if (verification.expiresAt < new Date()) {
      await this.prisma.verification.update({
        where: { id: verificationId },
        data: { status: VerificationStatus.EXPIRED },
      });
      throw new BadRequestException('Session expirée, recommencez');
    }

    if (!verification.captureKey) {
      throw new BadRequestException('Aucune capture reçue');
    }

    const meta = await this.storage.head(verification.captureKey);

    if (!meta || meta.contentLength === 0) {
      throw new BadRequestException("La capture n'a pas été reçue");
    }

    await this.prisma.verification.update({
      where: { id: verificationId },
      data: {
        status: VerificationStatus.PROCESSING,
        submittedAt: new Date(),
        attempts: { increment: 1 },
      },
    });

    await this.queue.add('process-verification', { verificationId, userId });

    return { status: VerificationStatus.PROCESSING };
  }

  async status(userId: string) {
    const verification = await this.prisma.verification.findFirst({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        status: true,
        failureReason: true,
        poseChallenge: true,
        createdAt: true,
        processedAt: true,
        expiresAt: true,
      },
    });

    const profile = await this.prisma.profile.findUnique({
      where: { userId },
      select: { isVerified: true },
    });

    return {
      isVerified: profile?.isVerified ?? false,
      lastAttempt: verification,
    };
  }

  /**
   * Plafonne les tentatives quotidiennes.
   *
   * Chaque essai renvoie une pose différente : sans plafond, on finit par
   * obtenir celle qu'on a préparée à l'avance, ce qui vide le tirage au sort
   * de son intérêt.
   */
  private async enforceAttemptLimit(userId: string): Promise<void> {
    const since = new Date(Date.now() - 86_400_000);

    const attempts = await this.prisma.verification.count({
      where: { userId, createdAt: { gte: since } },
    });

    if (attempts >= MAX_ATTEMPTS_PER_DAY) {
      throw new BadRequestException(
        'Trop de tentatives aujourd’hui. Réessayez demain.',
      );
    }
  }

  private async load(userId: string, verificationId: string) {
    const verification = await this.prisma.verification.findFirst({
      where: { id: verificationId, userId },
    });

    if (!verification) {
      throw new NotFoundException('Session de vérification introuvable');
    }

    return verification;
  }
}
