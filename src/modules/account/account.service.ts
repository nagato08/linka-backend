import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { UserStatus } from '../../generated/prisma/enums';
import { PrismaService } from '../../core/prisma/prisma.service';
import { StorageService } from '../../core/storage/storage.service';
import { TokenService } from '../auth/token.service';
import { DeckCacheService } from '../discovery/deck-cache.service';

/**
 * Délai avant effacement définitif.
 *
 * Trente jours, comme l'exige le RGPD pour laisser un droit au remords. La
 * plupart des suppressions sont impulsives — après une mauvaise rencontre, un
 * message blessant — et une part notable des comptes revient.
 */
const PURGE_DELAY_DAYS = 30;

@Injectable()
export class AccountService {
  private readonly logger = new Logger(AccountService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly storage: StorageService,
    private readonly tokens: TokenService,
    private readonly deckCache: DeckCacheService,
  ) {}

  /**
   * Demande de suppression.
   *
   * Exigence formelle d'Apple et de Google pour la catégorie rencontre : la
   * suppression doit être accessible dans l'application, sans passer par un
   * formulaire web ni écrire au support.
   *
   * Le compte disparaît immédiatement des piles et des sessions ; seul
   * l'effacement des données est différé.
   */
  async requestDeletion(
    userId: string,
    reason?: string,
  ): Promise<{ purgeAt: Date }> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { status: true, deletionRequestedAt: true },
    });

    if (!user) throw new NotFoundException('Compte introuvable');

    if (user.deletionRequestedAt) {
      throw new BadRequestException('Une suppression est déjà en cours');
    }

    const requestedAt = new Date();
    const purgeAt = new Date(
      requestedAt.getTime() + PURGE_DELAY_DAYS * 86_400_000,
    );

    await this.prisma.user.update({
      where: { id: userId },
      data: {
        status: UserStatus.DELETION_PENDING,
        deletionRequestedAt: requestedAt,
        banReason: reason?.slice(0, 500),
      },
    });

    // Déconnexion de tous les appareils : le compte ne doit plus être
    // utilisable pendant le délai de rétractation.
    await this.tokens.revokeAllForUser(userId, 'account_deletion');
    await this.deckCache.invalidate(userId);

    this.logger.log(
      `Suppression demandée : ${userId}, purge le ${purgeAt.toISOString()}`,
    );

    return { purgeAt };
  }

  /** Annule la suppression, tant que la purge n'a pas eu lieu. */
  async cancelDeletion(userId: string): Promise<void> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { deletionRequestedAt: true, deletedAt: true },
    });

    if (!user?.deletionRequestedAt || user.deletedAt) {
      throw new BadRequestException('Aucune suppression en cours');
    }

    await this.prisma.user.update({
      where: { id: userId },
      data: {
        status: UserStatus.ACTIVE,
        deletionRequestedAt: null,
        banReason: null,
      },
    });
  }

  /**
   * Efface définitivement les comptes dont le délai est écoulé.
   *
   * Anonymisation plutôt que suppression de la ligne : effacer l'utilisateur
   * emporterait en cascade les signalements le concernant, or ils protègent
   * d'autres personnes, ainsi que le registre de pièces, qui doit rester
   * réconciliable. On efface donc tout ce qui identifie, et on garde ce qui
   * relève de la sûreté et de la comptabilité.
   */
  async purgeExpired(): Promise<{ purged: number }> {
    const expired = await this.prisma.user.findMany({
      where: {
        deletionRequestedAt: {
          lte: new Date(Date.now() - PURGE_DELAY_DAYS * 86_400_000),
        },
        deletedAt: null,
      },
      select: { id: true },
      take: 100,
    });

    for (const user of expired) {
      await this.purge(user.id);
    }

    if (expired.length > 0) {
      this.logger.log(`${expired.length} compte(s) purgé(s)`);
    }

    return { purged: expired.length };
  }

  /** Purge immédiate d'un compte, utilisée aussi par la modération. */
  async purge(userId: string): Promise<void> {
    const photos = await this.prisma.photo.findMany({
      where: { profileId: userId },
      select: { id: true, storageKey: true },
    });

    const messageMedia = await this.prisma.message.findMany({
      where: { senderId: userId, mediaKey: { not: null } },
      select: { mediaKey: true },
    });

    // Les objets partent en premier : si la transaction échoue ensuite, on
    // préfère des lignes orphelines à des fichiers restés en ligne.
    const keys = [
      ...photos.flatMap((photo) => [
        photo.storageKey,
        `photos/${userId}/${photo.id}/thumb.webp`,
        `photos/${userId}/${photo.id}/card.webp`,
        `photos/${userId}/${photo.id}/full.webp`,
      ]),
      ...messageMedia
        .map((message) => message.mediaKey)
        .filter((key): key is string => key !== null),
    ];

    // Un stockage indisponible ne doit pas bloquer la purge : le délai RGPD ne
    // se suspend pas parce que S3 répond mal. On efface donc la base dans tous
    // les cas, et on consigne les clés restées en ligne pour un nettoyage
    // ultérieur — un compte identifiable est un problème plus grave qu'un
    // fichier orphelin dans un bucket privé.
    let orphanedKeys: string[] = [];

    try {
      await this.storage.deleteObjects(keys);
    } catch (error) {
      orphanedKeys = keys;
      this.logger.error(
        `Médias non supprimés pour ${userId} : ${(error as Error).message}`,
      );
    }

    const anonymous = randomUUID();

    await this.prisma.$transaction(async (tx) => {
      // Le profil porte l'essentiel des données personnelles : il disparaît
      // entièrement, photos comprises.
      await tx.profile.deleteMany({ where: { userId } });

      // Contenu des messages effacé, enveloppe conservée : sans elle, les
      // conversations de l'autre personne deviendraient incohérentes.
      await tx.message.updateMany({
        where: { senderId: userId },
        data: {
          body: null,
          mediaKey: null,
          mediaMimeType: null,
          deletedAt: new Date(),
          status: 'DELETED',
        },
      });

      await tx.faceEmbedding.deleteMany({ where: { userId } });
      await tx.verification.deleteMany({ where: { userId } });
      await tx.contactBlock.deleteMany({ where: { userId } });
      await tx.pushToken.deleteMany({ where: { userId } });
      await tx.device.deleteMany({ where: { userId } });
      await tx.session.deleteMany({ where: { userId } });
      await tx.notification.deleteMany({ where: { userId } });

      // Identifiants remplacés par des valeurs neutres mais uniques : les
      // contraintes d'unicité restent satisfaites, et le compte ne peut plus
      // être retrouvé par son adresse ou son numéro.
      await tx.user.update({
        where: { id: userId },
        data: {
          email: `deleted-${anonymous}@linka.invalid`,
          emailVerifiedAt: null,
          phone: null,
          phoneHash: null,
          phoneVerifiedAt: null,
          passwordHash: null,
          providerUid: null,
          status: UserStatus.DELETED,
          deletedAt: new Date(),
          lastActiveAt: null,
        },
      });

      // Trace de purge, et liste des médias à reprendre si le stockage a
      // échoué. Sans elle, ces fichiers resteraient introuvables : le profil
      // qui portait leurs clés vient d'être supprimé.
      await tx.auditLog.create({
        data: {
          actorType: 'SYSTEM',
          action: 'account.purged',
          entityType: 'user',
          entityId: userId,
          after: {
            mediaDeleted: orphanedKeys.length === 0,
            orphanedKeys: orphanedKeys.slice(0, 100),
          },
        },
      });
    });

    await this.deckCache.invalidate(userId);

    this.logger.log(
      orphanedKeys.length === 0
        ? `Compte ${userId} purgé`
        : `Compte ${userId} purgé, ${orphanedKeys.length} média(s) à nettoyer`,
    );
  }

  /**
   * Export des données personnelles.
   *
   * Droit d'accès du RGPD. L'orientation sexuelle est volontairement exclue de
   * la sortie : la renvoyer en clair dans un fichier que l'utilisateur peut
   * partager, stocker ou se faire réclamer irait à l'encontre de la raison
   * même pour laquelle elle est chiffrée.
   */
  async exportData(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        phone: true,
        locale: true,
        createdAt: true,
        lastActiveAt: true,
        referralCode: true,
        profile: {
          select: {
            firstName: true,
            birthdate: true,
            gender: true,
            bio: true,
            heightCm: true,
            profession: true,
            religion: true,
            education: true,
            languages: true,
            locationLabel: true,
            createdAt: true,
            interests: { select: { interest: { select: { slug: true } } } },
            prompts: {
              select: { answer: true, prompt: { select: { slug: true } } },
            },
            photos: {
              where: { deletedAt: null },
              select: { position: true, status: true, createdAt: true },
            },
          },
        },
        preference: true,
        notificationPreference: true,
      },
    });

    if (!user) throw new NotFoundException('Compte introuvable');

    const [matches, messages, credits] = await Promise.all([
      this.prisma.match.count({
        where: { OR: [{ userAId: userId }, { userBId: userId }] },
      }),
      this.prisma.message.findMany({
        where: { senderId: userId, deletedAt: null },
        select: { body: true, type: true, createdAt: true },
        orderBy: { createdAt: 'asc' },
      }),
      this.prisma.creditLedger.findMany({
        where: { userId },
        select: {
          delta: true,
          balanceAfter: true,
          reason: true,
          createdAt: true,
        },
        orderBy: { createdAt: 'asc' },
      }),
    ]);

    return {
      exportedAt: new Date(),
      account: user,
      stats: { matches, messagesSent: messages.length },
      messages,
      credits,
    };
  }
}
