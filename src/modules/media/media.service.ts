import { InjectQueue } from '@nestjs/bullmq';
import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { Queue } from 'bullmq';
import { randomUUID } from 'node:crypto';
import { PhotoStatus } from '../../generated/prisma/enums';
import { PrismaService } from '../../core/prisma/prisma.service';
import { StorageService } from '../../core/storage/storage.service';
import { QUEUES } from '../../core/queue/queue.module';
import { ImageService } from './image.service';

export const MAX_PHOTOS = 6;
const MAX_UPLOAD_BYTES = 10 * 1024 * 1024;
const ACCEPTED_TYPES = new Set([
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/heic',
  'image/heif',
]);

export interface PhotoUploadTicket {
  photoId: string;
  uploadUrl: string;
  expiresIn: number;
}

@Injectable()
export class MediaService {
  private readonly logger = new Logger(MediaService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly storage: StorageService,
    @InjectQueue(QUEUES.MEDIA) private readonly mediaQueue: Queue,
  ) {}

  /**
   * Réserve un emplacement et délivre une URL de dépôt.
   *
   * La ligne est créée avant le téléversement, en PENDING : c'est elle qui
   * porte la clé de stockage, garantit l'unicité de la position, et permet
   * d'identifier les dépôts jamais confirmés pour les nettoyer.
   */
  async createUploadTicket(
    userId: string,
    contentType: string,
    contentLength: number,
  ): Promise<PhotoUploadTicket> {
    if (!ACCEPTED_TYPES.has(contentType)) {
      throw new BadRequestException(
        `Type de fichier non accepté : ${contentType}`,
      );
    }

    if (contentLength <= 0 || contentLength > MAX_UPLOAD_BYTES) {
      throw new BadRequestException(
        `Fichier trop volumineux, ${MAX_UPLOAD_BYTES / 1024 / 1024} Mo maximum`,
      );
    }

    // Les photos sont rattachées au profil, pas au compte. Sans ce contrôle,
    // l'appel remonte une violation de clé étrangère brute — « référence
    // invalide » — que le client n'a aucun moyen d'interpréter.
    const profile = await this.prisma.profile.findUnique({
      where: { userId },
      select: { userId: true },
    });

    if (!profile) {
      throw new BadRequestException(
        "Créez votre profil avant d'ajouter des photos",
      );
    }

    const count = await this.prisma.photo.count({
      where: { profileId: userId, deletedAt: null },
    });

    if (count >= MAX_PHOTOS) {
      throw new BadRequestException(`${MAX_PHOTOS} photos au maximum`);
    }

    const photoId = randomUUID();
    const storageKey = this.originalKey(userId, photoId);

    await this.prisma.photo.create({
      data: {
        id: photoId,
        profileId: userId,
        storageKey,
        position: await this.nextPosition(userId),
        status: PhotoStatus.PENDING,
      },
    });

    const upload = await this.storage.createUploadUrl(
      storageKey,
      contentType,
      contentLength,
    );

    return {
      photoId,
      uploadUrl: upload.url,
      expiresIn: upload.expiresIn,
    };
  }

  /**
   * Confirme le dépôt et déclenche le traitement.
   *
   * L'existence de l'objet est vérifiée auprès du stockage : un client peut
   * annoncer un envoi réussi sans l'avoir mené à bien, et le traitement
   * échouerait alors dans un worker au lieu de renvoyer une erreur claire.
   */
  async confirmUpload(
    userId: string,
    photoId: string,
  ): Promise<{ status: PhotoStatus }> {
    const photo = await this.prisma.photo.findFirst({
      where: { id: photoId, profileId: userId, deletedAt: null },
    });

    if (!photo) {
      throw new NotFoundException('Photo introuvable');
    }

    if (photo.status !== PhotoStatus.PENDING) {
      return { status: photo.status };
    }

    const meta = await this.storage.head(photo.storageKey);
    if (!meta || meta.contentLength === 0) {
      throw new BadRequestException("Le fichier n'a pas été reçu");
    }

    await this.prisma.photo.update({
      where: { id: photoId },
      data: { bytes: meta.contentLength },
    });

    await this.mediaQueue.add('process-photo', { photoId, userId });

    return { status: PhotoStatus.PENDING };
  }

  async listForUser(userId: string) {
    const photos = await this.prisma.photo.findMany({
      where: { profileId: userId, deletedAt: null },
      orderBy: { position: 'asc' },
    });

    return photos.map((photo) => this.toDto(photo));
  }

  /**
   * Supprime une photo et libère sa position.
   *
   * Les objets partent immédiatement du stockage — un média supprimé doit
   * l'être vraiment, pas seulement masqué — tandis que la ligne est conservée
   * en `deletedAt` pour garder l'empreinte perceptuelle : une photo retirée
   * après signalement ne doit pas pouvoir revenir sur un autre compte.
   */
  async remove(userId: string, photoId: string): Promise<void> {
    const photo = await this.prisma.photo.findFirst({
      where: { id: photoId, profileId: userId, deletedAt: null },
    });

    if (!photo) {
      throw new NotFoundException('Photo introuvable');
    }

    await this.storage.deleteObjects(this.allKeysFor(userId, photoId));

    await this.prisma.$transaction(async (tx) => {
      await tx.photo.update({
        where: { id: photoId },
        // La position est libérée pour ne pas bloquer l'unicité
        // (profileId, position) ; -1 la sort de la plage 0-5.
        data: { deletedAt: new Date(), position: -1 },
      });

      const remaining = await tx.photo.findMany({
        where: { profileId: userId, deletedAt: null },
        orderBy: { position: 'asc' },
        select: { id: true },
      });

      await this.applyOrder(
        tx,
        remaining.map((p) => p.id),
      );
    });
  }

  /** Réordonne le carrousel. La position 0 est la photo principale. */
  async reorder(userId: string, orderedIds: string[]): Promise<void> {
    const photos = await this.prisma.photo.findMany({
      where: { profileId: userId, deletedAt: null },
      select: { id: true },
    });

    const known = new Set(photos.map((p) => p.id));

    if (
      orderedIds.length !== photos.length ||
      !orderedIds.every((id) => known.has(id))
    ) {
      throw new BadRequestException(
        'La liste doit contenir exactement les photos du profil',
      );
    }

    await this.prisma.$transaction((tx) => this.applyOrder(tx, orderedIds));
  }

  /**
   * Réécrit les positions en deux temps.
   *
   * Les positions sont uniques par profil : les réaffecter directement
   * violerait la contrainte dès que deux photos échangent leur place. Le
   * passage par des valeurs négatives temporaires libère la plage.
   */
  private async applyOrder(
    tx: Parameters<Parameters<PrismaService['$transaction']>[0]>[0],
    orderedIds: string[],
  ): Promise<void> {
    for (const [index, id] of orderedIds.entries()) {
      await tx.photo.update({
        where: { id },
        data: { position: -(index + 10) },
      });
    }

    for (const [index, id] of orderedIds.entries()) {
      await tx.photo.update({ where: { id }, data: { position: index } });
    }
  }

  private async nextPosition(userId: string): Promise<number> {
    const last = await this.prisma.photo.findFirst({
      where: { profileId: userId, deletedAt: null },
      orderBy: { position: 'desc' },
      select: { position: true },
    });

    return (last?.position ?? -1) + 1;
  }

  originalKey(userId: string, photoId: string): string {
    return `photos/${userId}/${photoId}/original`;
  }

  variantKey(userId: string, photoId: string, variant: string): string {
    return `photos/${userId}/${photoId}/${variant}.webp`;
  }

  allKeysFor(userId: string, photoId: string): string[] {
    return [
      this.originalKey(userId, photoId),
      ...ImageService.variantNames.map((v) =>
        this.variantKey(userId, photoId, v),
      ),
    ];
  }

  /**
   * Les URL ne sont exposées que pour les photos approuvées : une photo en
   * attente ou rejetée ne doit jamais être servie, même à son propriétaire —
   * il pourrait en partager le lien.
   */
  toDto(photo: {
    id: string;
    profileId: string;
    position: number;
    status: PhotoStatus;
    rejectionReason: string | null;
    width: number | null;
    height: number | null;
  }) {
    const approved = photo.status === PhotoStatus.APPROVED;

    return {
      id: photo.id,
      position: photo.position,
      status: photo.status,
      rejectionReason: photo.rejectionReason,
      width: photo.width,
      height: photo.height,
      urls: approved
        ? Object.fromEntries(
            ImageService.variantNames.map((v) => [
              v,
              this.storage.publicUrlFor(
                this.variantKey(photo.profileId, photo.id, v),
              ),
            ]),
          )
        : null,
    };
  }
}
