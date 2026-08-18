import { ForbiddenException, Injectable, Logger } from '@nestjs/common';
import {
  EntitlementKey,
  EntitlementSource,
  SubscriptionTier,
} from '../../generated/prisma/enums';
import { PrismaService } from '../../core/prisma/prisma.service';

type Tx = Parameters<Parameters<PrismaService['$transaction']>[0]>[0];

/**
 * Droits inclus dans chaque formule.
 *
 * Les likes n'y figurent pas : ils sont illimités pour tout le monde, y
 * compris sur l'offre gratuite. Le plafond horaire de cent likes est une
 * protection anti-script, pas un levier commercial.
 */
const TIER_ENTITLEMENTS: Record<SubscriptionTier, EntitlementKey[]> = {
  FREE: [],
  PLUS: [
    EntitlementKey.UNLIMITED_REWIND,
    EntitlementKey.NO_ADS,
    EntitlementKey.ADVANCED_FILTERS,
  ],
  GOLD: [
    EntitlementKey.UNLIMITED_REWIND,
    EntitlementKey.NO_ADS,
    EntitlementKey.ADVANCED_FILTERS,
    EntitlementKey.INCOGNITO,
    EntitlementKey.TRAVEL_MODE,
    EntitlementKey.PRIORITY_DECK,
  ],
};

/**
 * Droits effectifs, découplés de leur origine.
 *
 * Un même droit peut venir d'un abonnement, d'un achat à l'unité, d'un quota
 * gratuit ou d'un geste commercial. Le reste du code n'interroge que cette
 * table : il n'a jamais à savoir d'où vient le droit, ce qui évite de
 * dupliquer la logique commerciale dans chaque fonctionnalité.
 */
@Injectable()
export class EntitlementService {
  private readonly logger = new Logger(EntitlementService.name);

  constructor(private readonly prisma: PrismaService) {}

  /** Vrai si le droit est actif, illimité ou avec un solde restant. */
  async has(userId: string, key: EntitlementKey): Promise<boolean> {
    const entitlement = await this.prisma.entitlement.findFirst({
      where: {
        userId,
        key,
        revokedAt: null,
        OR: [{ expiresAt: null }, { expiresAt: { gt: new Date() } }],
        AND: [{ OR: [{ remaining: null }, { remaining: { gt: 0 } }] }],
      },
      select: { id: true },
    });

    return entitlement !== null;
  }

  /**
   * Consomme une unité d'un droit consommable.
   *
   * Les droits illimités — ceux dont `remaining` est nul — ne sont jamais
   * décrémentés. Le décrément est conditionnel en base plutôt que lu puis
   * écrit : deux consommations simultanées passeraient sinon toutes les deux.
   */
  async consume(userId: string, key: EntitlementKey): Promise<boolean> {
    const unlimited = await this.prisma.entitlement.findFirst({
      where: {
        userId,
        key,
        remaining: null,
        revokedAt: null,
        OR: [{ expiresAt: null }, { expiresAt: { gt: new Date() } }],
      },
      select: { id: true },
    });

    if (unlimited) return true;

    const consumable = await this.prisma.entitlement.findFirst({
      where: {
        userId,
        key,
        remaining: { gt: 0 },
        revokedAt: null,
        OR: [{ expiresAt: null }, { expiresAt: { gt: new Date() } }],
      },
      orderBy: { expiresAt: 'asc' },
      select: { id: true },
    });

    if (!consumable) return false;

    const updated = await this.prisma.entitlement.updateMany({
      where: { id: consumable.id, remaining: { gt: 0 } },
      data: { remaining: { decrement: 1 } },
    });

    return updated.count === 1;
  }

  /** Lève si le droit manque, avec un message actionnable. */
  async assert(
    userId: string,
    key: EntitlementKey,
    message: string,
  ): Promise<void> {
    if (!(await this.has(userId, key))) {
      throw new ForbiddenException(message);
    }
  }

  async grant(
    tx: Tx,
    input: {
      userId: string;
      key: EntitlementKey;
      source: EntitlementSource;
      quantity?: number;
      expiresAt?: Date;
      refType?: string;
      refId?: string;
    },
  ): Promise<void> {
    // Un achat de consommables s'ajoute au solde existant plutôt que de le
    // remplacer : acheter cinq super likes quand il en reste deux doit en
    // donner sept.
    if (input.quantity !== undefined) {
      const existing = await tx.entitlement.findFirst({
        where: {
          userId: input.userId,
          key: input.key,
          revokedAt: null,
          remaining: { not: null },
          OR: [{ expiresAt: null }, { expiresAt: { gt: new Date() } }],
        },
        select: { id: true },
      });

      if (existing) {
        await tx.entitlement.update({
          where: { id: existing.id },
          data: { remaining: { increment: input.quantity } },
        });
        return;
      }
    }

    await tx.entitlement.create({
      data: {
        userId: input.userId,
        key: input.key,
        source: input.source,
        remaining: input.quantity,
        expiresAt: input.expiresAt,
        refType: input.refType,
        refId: input.refId,
      },
    });
  }

  /** Ouvre tous les droits d'une formule, alignés sur la fin d'abonnement. */
  async grantTier(
    tx: Tx,
    userId: string,
    tier: SubscriptionTier,
    expiresAt: Date,
    subscriptionId: string,
  ): Promise<void> {
    for (const key of TIER_ENTITLEMENTS[tier]) {
      await tx.entitlement.create({
        data: {
          userId,
          key,
          source: EntitlementSource.SUBSCRIPTION,
          expiresAt,
          refType: 'subscription',
          refId: subscriptionId,
        },
      });
    }
  }

  /**
   * Révoque les droits liés à un abonnement.
   *
   * Appelé au changement de formule : sans cela, passer de Gold à Plus
   * laisserait le mode incognito actif jusqu'à l'échéance initiale.
   */
  async revokeSubscriptionEntitlements(
    tx: Tx,
    userId: string,
    subscriptionId: string,
  ): Promise<void> {
    await tx.entitlement.updateMany({
      where: {
        userId,
        source: EntitlementSource.SUBSCRIPTION,
        refId: subscriptionId,
        revokedAt: null,
      },
      data: { revokedAt: new Date() },
    });
  }

  /** Droits actifs, pour l'écran « mon abonnement ». */
  async listActive(userId: string) {
    const entitlements = await this.prisma.entitlement.findMany({
      where: {
        userId,
        revokedAt: null,
        OR: [{ expiresAt: null }, { expiresAt: { gt: new Date() } }],
      },
      select: { key: true, source: true, remaining: true, expiresAt: true },
      orderBy: { grantedAt: 'desc' },
    });

    return entitlements;
  }
}
