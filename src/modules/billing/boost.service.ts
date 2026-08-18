import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import {
  BoostStatus,
  BoostTier,
  LedgerReason,
  NotificationType,
} from '../../generated/prisma/enums';
import { PrismaService } from '../../core/prisma/prisma.service';
import { NotificationService } from '../notifications/notification.service';
import { CreditLedgerService } from './credit-ledger.service';

/** Multiplicateur appliqué au score de classement du deck. */
const MULTIPLIER_BY_TIER: Record<BoostTier, number> = {
  BOOST_30M: 3,
  BOOST_1H: 4,
  BOOST_3H: 5,
  BOOST_6H: 6,
  BOOST_12H: 8,
  BOOST_24H: 10,
};

const DURATION_MINUTES: Record<BoostTier, number> = {
  BOOST_30M: 30,
  BOOST_1H: 60,
  BOOST_3H: 180,
  BOOST_6H: 360,
  BOOST_12H: 720,
  BOOST_24H: 1_440,
};

@Injectable()
export class BoostService {
  private readonly logger = new Logger(BoostService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly ledger: CreditLedgerService,
    private readonly notifications: NotificationService,
  ) {}

  /**
   * Achète et lance un boost.
   *
   * Le nombre de boosts simultanés est plafonné par ville. Au-delà, la demande
   * est mise en file au lieu d'être vendue : si tout le monde boost en même
   * temps, plus personne n'est mis en avant, et il faut rembourser. Vendre une
   * visibilité qui n'existe pas détruit la confiance dans tout le payant.
   */
  async activate(userId: string, sku: string) {
    const product = await this.prisma.product.findUnique({ where: { sku } });

    if (!product || !product.isActive || !product.boostTier) {
      throw new NotFoundException('Boost introuvable');
    }

    const running = await this.prisma.boost.findFirst({
      where: {
        userId,
        status: BoostStatus.ACTIVE,
        endAt: { gt: new Date() },
      },
      select: { id: true, endAt: true },
    });

    if (running) {
      throw new BadRequestException(
        `Un boost est déjà en cours jusqu'à ${running.endAt?.toISOString() ?? ''}`,
      );
    }

    const profile = await this.prisma.profile.findUnique({
      where: { userId },
      select: { cityId: true },
    });

    const tier = product.boostTier;
    const durationMinutes = product.durationMinutes ?? DURATION_MINUTES[tier];

    return this.prisma.$transaction(async (tx) => {
      if (product.creditCost) {
        await this.ledger.append(tx, {
          userId,
          delta: -product.creditCost,
          reason: LedgerReason.SPEND,
          refType: 'boost',
          note: product.titleFr,
        });
      }

      const slotAvailable = await this.hasFreeSlot(tx, profile?.cityId ?? null);

      const boost = await tx.boost.create({
        data: {
          userId,
          tier,
          cityId: profile?.cityId,
          multiplier: MULTIPLIER_BY_TIER[tier],
          status: slotAvailable ? BoostStatus.ACTIVE : BoostStatus.QUEUED,
          ...(slotAvailable
            ? {
                startAt: new Date(),
                endAt: new Date(Date.now() + durationMinutes * 60_000),
              }
            : {}),
        },
      });

      return {
        boostId: boost.id,
        status: boost.status,
        startAt: boost.startAt,
        endAt: boost.endAt,
        multiplier: boost.multiplier,
        // Le client peut ainsi annoncer une attente plutôt qu'un échec.
        queuedBehind: slotAvailable
          ? 0
          : await tx.boost.count({
              where: {
                cityId: profile?.cityId,
                status: BoostStatus.QUEUED,
                id: { not: boost.id },
              },
            }),
      };
    });
  }

  /**
   * Vérifie qu'un créneau est libre dans la ville.
   *
   * Sans ville rattachée, on laisse passer : mieux vaut un boost peu efficace
   * qu'un achat bloqué sans explication compréhensible.
   */
  private async hasFreeSlot(
    tx: Parameters<Parameters<PrismaService['$transaction']>[0]>[0],
    cityId: string | null,
  ): Promise<boolean> {
    if (!cityId) return true;

    const city = await tx.city.findUnique({
      where: { id: cityId },
      select: { boostSlots: true },
    });

    if (!city) return true;

    const active = await tx.boost.count({
      where: { cityId, status: BoostStatus.ACTIVE, endAt: { gt: new Date() } },
    });

    return active < city.boostSlots;
  }

  /**
   * Termine les boosts échus et démarre ceux qui attendent.
   *
   * Appelé par la tâche planifiée. Sans elle, un boost resterait actif
   * indéfiniment et la file ne s'écoulerait jamais.
   */
  async processQueue(): Promise<{ ended: number; started: number }> {
    // Les lignes sont relues avant d'être closes : le bilan chiffré part avec
    // la notification, et c'est lui qui déclenche le rachat. Un `updateMany`
    // seul ne dirait pas de quels boosts il s'agit.
    const ending = await this.prisma.boost.findMany({
      where: { status: BoostStatus.ACTIVE, endAt: { lte: new Date() } },
      select: {
        id: true,
        userId: true,
        impressions: true,
        likesGained: true,
      },
    });

    const expired = await this.prisma.boost.updateMany({
      where: { id: { in: ending.map((b) => b.id) } },
      data: { status: BoostStatus.COMPLETED },
    });

    await this.notifications.notifyMany(
      ending.map((boost) => ({
        userId: boost.userId,
        type: NotificationType.BOOST_ENDED,
        vars: {
          impressions: String(boost.impressions),
          likes: String(boost.likesGained),
        },
        data: { screen: 'boost', boostId: boost.id },
      })),
    );

    const cities = await this.prisma.boost.groupBy({
      by: ['cityId'],
      where: { status: BoostStatus.QUEUED },
    });

    let started = 0;

    for (const { cityId } of cities) {
      if (!cityId) continue;

      const city = await this.prisma.city.findUnique({
        where: { id: cityId },
        select: { boostSlots: true },
      });

      if (!city) continue;

      const active = await this.prisma.boost.count({
        where: {
          cityId,
          status: BoostStatus.ACTIVE,
          endAt: { gt: new Date() },
        },
      });

      const free = city.boostSlots - active;
      if (free <= 0) continue;

      // Premier arrivé, premier servi : c'est le seul ordre défendable pour
      // quelqu'un qui a déjà payé.
      const waiting = await this.prisma.boost.findMany({
        where: { cityId, status: BoostStatus.QUEUED },
        orderBy: { queuedAt: 'asc' },
        take: free,
        select: { id: true, tier: true },
      });

      for (const boost of waiting) {
        const minutes = DURATION_MINUTES[boost.tier];

        await this.prisma.boost.update({
          where: { id: boost.id },
          data: {
            status: BoostStatus.ACTIVE,
            startAt: new Date(),
            endAt: new Date(Date.now() + minutes * 60_000),
          },
        });

        started += 1;
      }
    }

    if (expired.count > 0 || started > 0) {
      this.logger.log(
        `Boosts : ${expired.count} terminé(s), ${started} démarré(s) depuis la file`,
      );
    }

    return { ended: expired.count, started };
  }

  /**
   * Statistiques d'un boost.
   *
   * C'est ce retour chiffré qui déclenche le rachat, bien davantage que le
   * boost lui-même : sans chiffre, l'utilisateur ne perçoit rien.
   */
  async stats(userId: string, boostId: string) {
    const boost = await this.prisma.boost.findFirst({
      where: { id: boostId, userId },
      select: {
        id: true,
        tier: true,
        status: true,
        startAt: true,
        endAt: true,
        multiplier: true,
        impressions: true,
        profileViews: true,
        likesGained: true,
        matchesGained: true,
      },
    });

    if (!boost) throw new NotFoundException('Boost introuvable');

    return boost;
  }

  history(userId: string, limit = 20) {
    return this.prisma.boost.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      take: limit,
      select: {
        id: true,
        tier: true,
        status: true,
        startAt: true,
        endAt: true,
        impressions: true,
        likesGained: true,
        matchesGained: true,
      },
    });
  }

  /**
   * Comptabilise les likes reçus pendant un boost actif.
   *
   * Appelé par le module de matching à chaque like : c'est la seule façon
   * d'attribuer un résultat au boost qui l'a produit.
   */
  async recordLike(targetId: string): Promise<void> {
    await this.prisma.boost.updateMany({
      where: {
        userId: targetId,
        status: BoostStatus.ACTIVE,
        endAt: { gt: new Date() },
      },
      data: { likesGained: { increment: 1 } },
    });
  }

  async recordMatch(userIds: string[]): Promise<void> {
    await this.prisma.boost.updateMany({
      where: {
        userId: { in: userIds },
        status: BoostStatus.ACTIVE,
        endAt: { gt: new Date() },
      },
      data: { matchesGained: { increment: 1 } },
    });
  }

  /** Impressions cumulées à la construction du deck. */
  async recordImpressions(userIds: string[]): Promise<void> {
    if (userIds.length === 0) return;

    await this.prisma.boost.updateMany({
      where: {
        userId: { in: userIds },
        status: BoostStatus.ACTIVE,
        endAt: { gt: new Date() },
      },
      data: { impressions: { increment: 1 } },
    });
  }
}
