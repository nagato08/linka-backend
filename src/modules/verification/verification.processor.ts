import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Logger } from '@nestjs/common';
import { Job } from 'bullmq';
import {
  ModerationTaskType,
  PhotoStatus,
  VerificationFailureReason,
  VerificationStatus,
} from '../../generated/prisma/enums';
import { PrismaService } from '../../core/prisma/prisma.service';
import { StorageService } from '../../core/storage/storage.service';
import { QUEUES } from '../../core/queue/queue.module';
import { FaceMatcherService } from './face-matcher.service';

interface VerificationJob {
  verificationId: string;
  userId: string;
}

/**
 * Seuils de décision.
 *
 * La vivacité passe avant tout : sans elle, une similarité parfaite ne prouve
 * rien, puisqu'une photo du profil tenue devant la caméra l'obtiendrait.
 */
const LIVENESS_APPROVE = 0.9;
const LIVENESS_REJECT = 0.5;

/** Seuils ArcFace usuels : au-delà de 0,6 il s'agit de la même personne. */
const MATCH_APPROVE = 0.6;
const MATCH_REJECT = 0.3;

/**
 * Similarité au-delà de laquelle deux comptes portent le même visage.
 *
 * Volontairement plus haut que le seuil d'approbation : accuser à tort
 * quelqu'un d'avoir un double compte est bien plus grave que de laisser passer
 * un doublon, qui sera de toute façon repris par le score de risque.
 */
const DUPLICATE_THRESHOLD = 0.75;

@Processor(QUEUES.MODERATION)
export class VerificationProcessor extends WorkerHost {
  private readonly logger = new Logger(VerificationProcessor.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly storage: StorageService,
    private readonly matcher: FaceMatcherService,
  ) {
    super();
  }

  async process(job: Job<VerificationJob>): Promise<void> {
    const { verificationId, userId } = job.data;

    const verification = await this.prisma.verification.findUnique({
      where: { id: verificationId },
    });

    if (
      !verification ||
      verification.status !== VerificationStatus.PROCESSING
    ) {
      return;
    }

    if (!verification.captureKey) {
      await this.fail(verificationId, VerificationFailureReason.POOR_QUALITY);
      return;
    }

    const capture = await this.storage.getObject(verification.captureKey);
    const referencePhotos = await this.loadReferencePhotos(userId);

    const analysis = await this.matcher.analyse(
      capture,
      referencePhotos,
      verification.poseChallenge,
    );

    const outcome = this.decide(analysis);

    if (outcome === 'APPROVE' && analysis.embedding) {
      const duplicate = await this.findDuplicateFace(
        analysis.embedding,
        userId,
      );

      if (duplicate) {
        await this.fail(
          verificationId,
          VerificationFailureReason.DUPLICATE_FACE,
          {
            duplicateOfUserId: duplicate.userId,
            distance: duplicate.similarity,
          },
        );

        await this.prisma.moderationTask.create({
          data: {
            type: ModerationTaskType.RISK_REVIEW,
            subjectUserId: userId,
            priority: 85,
            notes: `Même visage que le compte ${duplicate.userId} (similarité ${duplicate.similarity.toFixed(3)})`,
          },
        });

        await this.wipeCapture(verificationId, verification.captureKey);
        this.logger.warn(
          `Vérification ${verificationId} refusée : visage déjà rattaché à ${duplicate.userId}`,
        );
        return;
      }

      await this.approve(verificationId, userId, analysis);
      await this.wipeCapture(verificationId, verification.captureKey);
      return;
    }

    if (outcome === 'REJECT') {
      await this.fail(verificationId, this.failureReasonFor(analysis));
      await this.wipeCapture(verificationId, verification.captureKey);
      return;
    }

    // Zone grise, ou comparaison faciale non branchée : un humain tranche.
    // La capture est conservée le temps de la revue, puis effacée par la
    // décision de modération.
    await this.prisma.verification.update({
      where: { id: verificationId },
      data: {
        status: VerificationStatus.MANUAL_REVIEW,
        livenessScore: analysis.livenessScore,
        matchScore: analysis.matchScore,
        processedAt: new Date(),
      },
    });

    await this.prisma.moderationTask.create({
      data: {
        type: ModerationTaskType.VERIFICATION_REVIEW,
        verificationId,
        subjectUserId: userId,
        priority: 40,
        notes: this.matcher.isConfigured
          ? `Vivacité ${analysis.livenessScore.toFixed(2)}, similarité ${analysis.matchScore.toFixed(2)}`
          : 'Comparaison faciale non branchée — vérification entièrement manuelle',
      },
    });

    this.logger.log(`Vérification ${verificationId} envoyée en revue humaine`);
  }

  /**
   * Cherche le même visage sur un autre compte.
   *
   * Requête pgvector en distance cosinus, servie par l'index HNSW. C'est le
   * bénéfice gratuit du stockage des vecteurs : une fois la vérification en
   * place, la détection de comptes multiples ne coûte rien de plus.
   */
  private async findDuplicateFace(
    embedding: number[],
    userId: string,
  ): Promise<{ userId: string; similarity: number } | null> {
    const vector = `[${embedding.join(',')}]`;

    const rows = await this.prisma.$queryRaw<
      { userId: string; similarity: number }[]
    >`
      SELECT
        fe."userId",
        (1 - (fe.embedding <=> ${vector}::vector))::float8 AS "similarity"
      FROM face_embeddings fe
      JOIN users u ON u.id = fe."userId"
      WHERE fe."userId" <> ${userId}::uuid
        AND fe.embedding IS NOT NULL
        AND u."deletedAt" IS NULL
      ORDER BY fe.embedding <=> ${vector}::vector
      LIMIT 1
    `;

    const nearest = rows[0];

    return nearest && nearest.similarity >= DUPLICATE_THRESHOLD
      ? nearest
      : null;
  }

  private async approve(
    verificationId: string,
    userId: string,
    analysis: {
      livenessScore: number;
      matchScore: number;
      embedding: number[] | null;
    },
  ): Promise<void> {
    await this.prisma.$transaction(async (tx) => {
      await tx.verification.update({
        where: { id: verificationId },
        data: {
          status: VerificationStatus.APPROVED,
          livenessScore: analysis.livenessScore,
          matchScore: analysis.matchScore,
          processedAt: new Date(),
        },
      });

      await tx.profile.update({
        where: { userId },
        data: { isVerified: true },
      });
    });

    if (analysis.embedding) {
      await this.storeEmbedding(verificationId, userId, analysis.embedding);
    }

    this.logger.log(`Profil ${userId} vérifié`);
  }

  /**
   * Enregistre le vecteur.
   *
   * Écriture en SQL brut : Prisma ne modélise pas le type `vector`. Seul le
   * vecteur survit, jamais la capture — il ne permet pas de reconstituer un
   * visage, mais permet de comparer, ce qui est exactement ce dont on a
   * besoin.
   */
  private async storeEmbedding(
    verificationId: string,
    userId: string,
    embedding: number[],
  ): Promise<void> {
    const record = await this.prisma.faceEmbedding.upsert({
      where: { verificationId },
      create: {
        userId,
        verificationId,
        model: 'arcface-buffalo_l',
        dimension: embedding.length,
      },
      update: {},
      select: { id: true },
    });

    const vector = `[${embedding.join(',')}]`;

    await this.prisma.$executeRaw`
      UPDATE face_embeddings
      SET embedding = ${vector}::vector
      WHERE id = ${record.id}::uuid
    `;
  }

  private decide(analysis: {
    livenessScore: number;
    matchScore: number;
    challengePerformed: boolean;
  }): 'APPROVE' | 'REJECT' | 'REVIEW' {
    if (
      analysis.livenessScore >= LIVENESS_APPROVE &&
      analysis.matchScore >= MATCH_APPROVE &&
      analysis.challengePerformed
    ) {
      return 'APPROVE';
    }

    if (
      analysis.livenessScore < LIVENESS_REJECT ||
      analysis.matchScore < MATCH_REJECT
    ) {
      // Un score nul signifie « non branché », pas « refusé » : sans modèle,
      // aucune décision automatique ne serait fondée.
      return analysis.livenessScore === 0 && analysis.matchScore === 0
        ? 'REVIEW'
        : 'REJECT';
    }

    return 'REVIEW';
  }

  private failureReasonFor(analysis: {
    livenessScore: number;
    matchScore: number;
    challengePerformed: boolean;
  }): VerificationFailureReason {
    if (!analysis.challengePerformed) {
      return VerificationFailureReason.CHALLENGE_NOT_PERFORMED;
    }
    if (analysis.livenessScore < LIVENESS_REJECT) {
      return VerificationFailureReason.LIVENESS_FAILED;
    }
    return VerificationFailureReason.FACE_MISMATCH;
  }

  private async loadReferencePhotos(userId: string): Promise<Buffer[]> {
    const photos = await this.prisma.photo.findMany({
      where: {
        profileId: userId,
        status: PhotoStatus.APPROVED,
        deletedAt: null,
      },
      orderBy: { position: 'asc' },
      take: 3,
      select: { id: true },
    });

    const buffers: Buffer[] = [];

    for (const photo of photos) {
      try {
        // La variante « full » suffit : les originaux sont supprimés après
        // modération.
        buffers.push(
          await this.storage.getObject(
            `photos/${userId}/${photo.id}/full.webp`,
          ),
        );
      } catch {
        this.logger.warn(`Photo de référence illisible : ${photo.id}`);
      }
    }

    return buffers;
  }

  private async fail(
    verificationId: string,
    reason: VerificationFailureReason,
    details?: Record<string, unknown>,
  ): Promise<void> {
    await this.prisma.verification.update({
      where: { id: verificationId },
      data: {
        status: VerificationStatus.REJECTED,
        failureReason: reason,
        processedAt: new Date(),
        reviewNote: details ? JSON.stringify(details).slice(0, 500) : undefined,
      },
    });
  }

  /**
   * Efface la capture du stockage.
   *
   * La vidéo d'un visage est la donnée la plus sensible que l'application
   * manipule. Elle ne sert qu'au traitement : la conserver n'apporte rien et
   * transforme une fuite de stockage en fuite biométrique.
   */
  private async wipeCapture(
    verificationId: string,
    captureKey: string,
  ): Promise<void> {
    try {
      await this.storage.deleteObject(captureKey);
    } catch (error) {
      this.logger.error(
        `Capture non supprimée pour ${verificationId} : ${(error as Error).message}`,
      );
      return;
    }

    await this.prisma.verification.update({
      where: { id: verificationId },
      data: { captureWiped: true, captureKey: null },
    });
  }
}
