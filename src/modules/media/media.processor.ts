import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Logger } from '@nestjs/common';
import { Job } from 'bullmq';
import { randomUUID } from 'node:crypto';
import {
  EventStatus,
  ModerationTaskType,
  NotificationType,
  PhotoRejectionReason,
  PhotoStatus,
} from '../../generated/prisma/enums';
import { PrismaService } from '../../core/prisma/prisma.service';
import { StorageService } from '../../core/storage/storage.service';
import { QUEUES } from '../../core/queue/queue.module';
import { NotificationService } from '../notifications/notification.service';
import { ImageService, type ProcessedImage } from './image.service';
import { MediaService } from './media.service';
import { ModerationService } from './moderation.service';

interface ProcessPhotoJob {
  photoId: string;
  userId: string;
}

interface ProcessEventCoverJob {
  eventId: string;
  uploadKey: string;
}

/** Écart maximal, en bits sur 64, en deçà duquel deux photos sont jugées identiques. */
const DUPLICATE_THRESHOLD = 10;

/**
 * Traitement des photos, hors du cycle de la requête.
 *
 * Générer trois variantes prend plusieurs secondes de CPU. Le faire pendant la
 * requête bloquerait la boucle d'événements de Node et dégraderait toutes les
 * autres réponses du processus.
 */
@Processor(QUEUES.MEDIA)
export class MediaProcessor extends WorkerHost {
  private readonly logger = new Logger(MediaProcessor.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly storage: StorageService,
    private readonly images: ImageService,
    private readonly media: MediaService,
    private readonly moderation: ModerationService,
    private readonly notifications: NotificationService,
  ) {
    super();
  }

  async process(
    job: Job<ProcessPhotoJob | ProcessEventCoverJob>,
  ): Promise<void> {
    if (job.name === 'process-event-cover') {
      await this.processEventCover(job.data as ProcessEventCoverJob);
      return;
    }

    await this.processPhoto(job.data as ProcessPhotoJob);
  }

  private async processPhoto(data: ProcessPhotoJob): Promise<void> {
    const { photoId, userId } = data;

    const photo = await this.prisma.photo.findUnique({
      where: { id: photoId },
    });
    if (!photo || photo.deletedAt) {
      this.logger.warn(
        `Photo ${photoId} absente ou supprimée, traitement ignoré`,
      );
      return;
    }

    const original = await this.storage.getObject(photo.storageKey);

    let processed: ProcessedImage;
    try {
      processed = await this.images.process(original);
    } catch (error) {
      // Fichier corrompu ou format refusé : la photo est rejetée et
      // l'original supprimé, inutile de conserver un objet illisible.
      await this.reject(photoId, PhotoRejectionReason.LOW_QUALITY);
      await this.storage.deleteObject(photo.storageKey);
      this.logger.warn(
        `Photo ${photoId} rejetée : ${(error as Error).message}`,
      );
      return;
    }

    // Doublon avant tout traitement supplémentaire : inutile de dépenser du
    // CPU et du stockage pour une image déjà présente ailleurs.
    const duplicate = await this.findDuplicate(processed.phash, userId);
    if (duplicate) {
      await this.reject(photoId, PhotoRejectionReason.DUPLICATE, {
        duplicateOf: duplicate.profileId,
      });
      await this.storage.deleteObject(photo.storageKey);
      this.logger.warn(
        `Photo ${photoId} rejetée : déjà présente sur le compte ${duplicate.profileId}`,
      );
      return;
    }

    await Promise.all(
      processed.variants.map((variant) =>
        this.storage.putObject(
          this.media.variantKey(userId, photoId, variant.name),
          variant.buffer,
          'image/webp',
        ),
      ),
    );

    const outcome = await this.moderation.moderateImage(original);

    await this.prisma.photo.update({
      where: { id: photoId },
      data: {
        phash: processed.phash,
        width: processed.width,
        height: processed.height,
        moderationScores: outcome.scores,
        moderatedAt: new Date(),
        status:
          outcome.decision === 'APPROVE'
            ? PhotoStatus.APPROVED
            : outcome.decision === 'REJECT'
              ? PhotoStatus.REJECTED
              : PhotoStatus.PENDING,
        rejectionReason:
          outcome.decision === 'REJECT' ? outcome.reason : undefined,
      },
    });

    if (outcome.decision === 'REVIEW') {
      await this.prisma.moderationTask.create({
        data: {
          type: ModerationTaskType.PHOTO_REVIEW,
          photoId,
          subjectUserId: userId,
          priority: 10,
        },
      });
    }

    // L'original n'a plus d'usage une fois les variantes produites. Le garder
    // doublerait la facture de stockage et élargirait la surface exposée en
    // cas de fuite — c'est le fichier non recadré, avec le visage en pleine
    // définition.
    if (outcome.decision !== 'REVIEW') {
      await this.storage.deleteObject(photo.storageKey);
    }

    this.logger.log(`Photo ${photoId} traitée : ${outcome.decision}`);
  }

  /**
   * Traite l'affiche d'un événement.
   *
   * Une seule variante, pas trois : l'affiche s'affiche en bandeau dans la
   * liste et en tête du détail, jamais dans une pile de vignettes, et la
   * taille carte convient aux deux.
   *
   * Une image douteuse n'est pas mise en attente de revue comme une photo de
   * profil : l'affiche est visible de tous ceux qui parcourent la liste, sans
   * lien avec l'organisateur. La publier avant d'avoir tranché coûterait bien
   * plus cher que de demander une autre image.
   */
  private async processEventCover(data: ProcessEventCoverJob): Promise<void> {
    const { eventId, uploadKey } = data;

    const event = await this.prisma.event.findUnique({
      where: { id: eventId },
      select: { id: true, organizerId: true, coverKey: true, status: true },
    });

    if (!event || event.status === EventStatus.CANCELLED) {
      await this.storage.deleteObject(uploadKey);
      this.logger.warn(
        `Événement ${eventId} absent ou annulé, affiche ignorée`,
      );
      return;
    }

    const original = await this.storage.getObject(uploadKey);

    let processed: ProcessedImage;
    try {
      processed = await this.images.process(original);
    } catch (error) {
      await this.storage.deleteObject(uploadKey);
      await this.warnOrganizer(
        event.organizerId,
        eventId,
        'Votre affiche n’a pas pu être traitée. Essayez une autre image.',
      );
      this.logger.warn(
        `Affiche de ${eventId} refusée : ${(error as Error).message}`,
      );
      return;
    }

    const outcome = await this.moderation.moderateImage(original);

    await this.storage.deleteObject(uploadKey);

    if (outcome.decision !== 'APPROVE') {
      await this.warnOrganizer(
        event.organizerId,
        eventId,
        'Votre affiche a été refusée. Choisissez une image sans contenu sensible.',
      );
      this.logger.log(`Affiche de ${eventId} refusée : ${outcome.decision}`);
      return;
    }

    const variant =
      processed.variants.find((v) => v.name === 'card') ??
      processed.variants[0];

    // Nouvelle clé à chaque remplacement : réécrire la même ferait servir
    // l'ancienne image tant que le CDN n'a pas expiré son cache.
    const coverKey = `events/${eventId}/cover-${randomUUID()}.webp`;

    await this.storage.putObject(coverKey, variant.buffer, 'image/webp');

    await this.prisma.event.update({
      where: { id: eventId },
      data: { coverKey },
    });

    if (event.coverKey) {
      await this.storage.deleteObject(event.coverKey);
    }

    this.logger.log(`Affiche de l'événement ${eventId} publiée`);
  }

  private async warnOrganizer(
    userId: string,
    eventId: string,
    message: string,
  ): Promise<void> {
    await this.notifications.notify({
      userId,
      type: NotificationType.MODERATION,
      vars: { message },
      data: { screen: 'event', eventId },
    });
  }

  /**
   * Cherche la même image sur un autre compte.
   *
   * Les photos supprimées sont incluses volontairement : une image retirée
   * après signalement ne doit pas pouvoir réapparaître sur un compte neuf.
   */
  private async findDuplicate(phash: string, userId: string) {
    const candidates = await this.prisma.photo.findMany({
      where: { phash: { not: null }, profileId: { not: userId } },
      select: { id: true, profileId: true, phash: true },
      take: 5_000,
      orderBy: { createdAt: 'desc' },
    });

    return candidates.find(
      (candidate) =>
        this.images.hammingDistance(phash, candidate.phash!) <=
        DUPLICATE_THRESHOLD,
    );
  }

  private async reject(
    photoId: string,
    reason: PhotoRejectionReason,
    details?: Record<string, string>,
  ): Promise<void> {
    await this.prisma.photo.update({
      where: { id: photoId },
      data: {
        status: PhotoStatus.REJECTED,
        rejectionReason: reason,
        moderatedAt: new Date(),
        moderationScores: details,
      },
    });
  }
}
