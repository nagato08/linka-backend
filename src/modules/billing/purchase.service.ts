import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import {
  EntitlementKey,
  EntitlementSource,
  LedgerReason,
  NotificationType,
  PaymentProviderKind,
  PaymentStatus,
  ProductType,
  SubscriptionStatus,
  SubscriptionTier,
} from '../../generated/prisma/enums';
import { PrismaService } from '../../core/prisma/prisma.service';
import { PhoneService } from '../auth/phone.service';
import { NotificationService } from '../notifications/notification.service';
import { CreditLedgerService } from './credit-ledger.service';
import { EntitlementService } from './entitlement.service';
import { NotchPayProvider } from './providers/notchpay.provider';

/**
 * Correspondance produit → droit accordé.
 *
 * Chaque produit livre son propre droit consommable. Réutiliser une clé d'un
 * autre produit ferait communiquer deux soldes distincts : acheter des super
 * likes viderait le crédit de messages. Et un pack de rewinds ne donne surtout
 * pas UNLIMITED_REWIND, qui est un avantage d'abonnement.
 */
const PRODUCT_ENTITLEMENT: Partial<Record<ProductType, EntitlementKey>> = {
  SUPERLIKE_PACK: EntitlementKey.SUPERLIKE,
  MESSAGE_BEFORE_MATCH: EntitlementKey.MESSAGE_BEFORE_MATCH,
  REWIND_PACK: EntitlementKey.EXTRA_REWIND,
  EVENT_SLOT: EntitlementKey.EVENT_CREATION,
};

/** États dont on ne revient pas : seuls ceux-là valent une notification d'échec. */
const TERMINAL_FAILURES = new Set<PaymentStatus>([
  PaymentStatus.FAILED,
  PaymentStatus.CANCELLED,
  PaymentStatus.EXPIRED,
]);

@Injectable()
export class PurchaseService {
  private readonly logger = new Logger(PurchaseService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly ledger: CreditLedgerService,
    private readonly entitlements: EntitlementService,
    private readonly notchpay: NotchPayProvider,
    private readonly phone: PhoneService,
    private readonly notifications: NotificationService,
  ) {}

  /** Catalogue actif, dans la langue du client. */
  listProducts(type?: ProductType) {
    return this.prisma.product.findMany({
      where: { isActive: true, ...(type ? { type } : {}) },
      orderBy: { sortOrder: 'asc' },
      select: {
        id: true,
        sku: true,
        type: true,
        titleFr: true,
        titleEn: true,
        descriptionFr: true,
        descriptionEn: true,
        priceAmount: true,
        currencyCode: true,
        creditCost: true,
        creditGrant: true,
        quantity: true,
        durationDays: true,
        durationMinutes: true,
        boostTier: true,
        tier: true,
      },
    });
  }

  /**
   * Démarre un paiement en argent réel.
   *
   * Réservé aux produits tarifés en monnaie : packs de pièces et abonnements.
   * Tout le reste se paie en pièces, sans passer par le prestataire — ce qui
   * évite une commission de 2,5 à 3,5 % sur chaque petit achat.
   */
  async initiatePayment(
    userId: string,
    sku: string,
    payerPhone: string,
    idempotencyKey: string,
  ) {
    const product = await this.prisma.product.findUnique({ where: { sku } });

    if (!product || !product.isActive) {
      throw new NotFoundException('Produit introuvable');
    }

    if (!product.priceAmount || !product.currencyCode) {
      throw new BadRequestException(
        'Ce produit s’achète en pièces, pas en argent',
      );
    }

    // Un renvoi après coupure ne doit pas déclencher un second débit : le
    // réseau tombe souvent, et l'utilisateur relance sans savoir si le premier
    // appel a abouti.
    const existing = await this.prisma.paymentIntent.findUnique({
      where: { idempotencyKey },
      select: {
        id: true,
        status: true,
        providerRef: true,
        amount: true,
        currencyCode: true,
      },
    });

    if (existing) {
      return { ...existing, duplicate: true, authorizationUrl: null };
    }

    const normalized = this.phone.normalize(payerPhone);

    if (!normalized.operator) {
      throw new BadRequestException(
        'Ce numéro ne permet pas le paiement mobile. Utilisez un numéro MTN ou Orange.',
      );
    }

    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { email: true },
    });

    const reference = `linka_${randomUUID()}`;

    const intent = await this.prisma.paymentIntent.create({
      data: {
        userId,
        productId: product.id,
        provider: PaymentProviderKind.MOBILE_MONEY,
        operator: normalized.operator,
        amount: product.priceAmount,
        currencyCode: product.currencyCode,
        status: PaymentStatus.CREATED,
        payerPhone: normalized.e164,
        idempotencyKey,
        providerRef: reference,
        expiresAt: new Date(Date.now() + 30 * 60_000),
      },
    });

    try {
      const result = await this.notchpay.initiate({
        reference,
        amount: product.priceAmount,
        currencyCode: product.currencyCode,
        description: product.titleFr,
        payerPhone: normalized.e164,
        payerEmail: user?.email,
        operator: normalized.operator,
      });

      const updated = await this.prisma.paymentIntent.update({
        where: { id: intent.id },
        data: { status: result.status, providerRef: result.providerRef },
        select: {
          id: true,
          status: true,
          providerRef: true,
          amount: true,
          currencyCode: true,
        },
      });

      return {
        ...updated,
        duplicate: false,
        authorizationUrl: result.authorizationUrl ?? null,
      };
    } catch (error) {
      await this.prisma.paymentIntent.update({
        where: { id: intent.id },
        data: {
          status: PaymentStatus.FAILED,
          failureMessage: (error as Error).message.slice(0, 300),
        },
      });

      this.logger.error(`Paiement non initié : ${(error as Error).message}`);
      throw new BadRequestException(
        'Le paiement n’a pas pu être lancé. Réessayez dans un instant.',
      );
    }
  }

  /**
   * Livre un paiement abouti.
   *
   * Point d'entrée unique du webhook et du job de réconciliation, d'où
   * l'idempotence : les deux peuvent traiter la même transaction, et un
   * double crédit est un trou de caisse.
   */
  async settlePayment(
    reference: string,
    status: PaymentStatus,
    raw?: unknown,
  ): Promise<{ settled: boolean }> {
    const intent = await this.prisma.paymentIntent.findFirst({
      where: { providerRef: reference },
      include: { product: true, purchase: { select: { id: true } } },
    });

    if (!intent) {
      this.logger.warn(`Paiement inconnu : ${reference}`);
      return { settled: false };
    }

    if (intent.purchase) {
      return { settled: true };
    }

    if (status !== PaymentStatus.SUCCEEDED) {
      await this.prisma.paymentIntent.update({
        where: { id: intent.id },
        data: {
          status,
          providerPayload: raw as never,
          completedAt: new Date(),
        },
      });

      // L'échec se notifie autant que la réussite : en mobile money, la
      // personne quitte l'application pour saisir son code PIN et revient sans
      // savoir où en est son paiement. Le silence se lit comme un débit sans
      // contrepartie.
      //
      // Uniquement sur un état terminal : le prestataire repasse par PENDING
      // et PROCESSING avant de conclure, et annoncer un échec à chaque étape
      // ferait sonner le téléphone trois fois pour un paiement qui aboutit.
      if (TERMINAL_FAILURES.has(status)) {
        await this.notifications.notify({
          userId: intent.userId,
          type: NotificationType.PAYMENT_RESULT,
          vars: { success: 'false' },
          data: { screen: 'wallet' },
        });
      }

      return { settled: false };
    }

    await this.prisma.$transaction(async (tx) => {
      await tx.paymentIntent.update({
        where: { id: intent.id },
        data: {
          status: PaymentStatus.SUCCEEDED,
          providerPayload: raw as never,
          completedAt: new Date(),
        },
      });

      const purchase = await tx.purchase.create({
        data: {
          userId: intent.userId,
          productId: intent.productId,
          paymentIntentId: intent.id,
          provider: intent.provider,
          amount: intent.amount,
          currencyCode: intent.currencyCode,
          creditsGranted: intent.product.creditGrant ?? 0,
        },
      });

      await this.deliver(tx, intent.userId, intent.product, purchase.id);
    });

    // Après la transaction : notifier depuis l'intérieur annoncerait une
    // livraison qu'un échec ultérieur annulerait.
    await this.notifications.notify({
      userId: intent.userId,
      type: NotificationType.PAYMENT_RESULT,
      vars: {
        success: 'true',
        credits: String(intent.product.creditGrant ?? 0),
        item: intent.product.titleFr,
        itemEn: intent.product.titleEn,
      },
      data: { screen: 'wallet' },
    });

    this.logger.log(`Paiement ${reference} livré`);
    return { settled: true };
  }

  /**
   * Achat payé en pièces.
   *
   * Le débit et la livraison sont dans la même transaction : débiter sans
   * livrer vole l'utilisateur, livrer sans débiter vole la plateforme.
   */
  async purchaseWithCredits(userId: string, sku: string) {
    const product = await this.prisma.product.findUnique({ where: { sku } });

    if (!product || !product.isActive) {
      throw new NotFoundException('Produit introuvable');
    }

    if (!product.creditCost) {
      throw new BadRequestException(
        'Ce produit se paie en argent, pas en pièces',
      );
    }

    const balance = await this.prisma.$transaction(async (tx) => {
      const remaining = await this.ledger.append(tx, {
        userId,
        delta: -product.creditCost!,
        reason: LedgerReason.SPEND,
        refType: 'product',
        refId: product.id,
        note: product.titleFr,
      });

      const purchase = await tx.purchase.create({
        data: {
          userId,
          productId: product.id,
          provider: PaymentProviderKind.MANUAL,
          amount: 0,
          currencyCode: product.currencyCode ?? 'XAF',
          creditsGranted: 0,
        },
      });

      await this.deliver(tx, userId, product, purchase.id);

      return remaining;
    });

    return { purchased: true, balance };
  }

  /**
   * Livre le contenu d'un produit.
   *
   * Toujours appelé dans une transaction : la livraison ne doit jamais
   * survivre à un échec du débit, ni l'inverse.
   */
  private async deliver(
    tx: Parameters<Parameters<PrismaService['$transaction']>[0]>[0],
    userId: string,
    product: {
      id: string;
      type: ProductType;
      creditGrant: number | null;
      quantity: number | null;
      durationDays: number | null;
      tier: SubscriptionTier | null;
      titleFr: string;
    },
    purchaseId: string,
  ): Promise<void> {
    if (product.type === ProductType.CREDIT_PACK && product.creditGrant) {
      await this.ledger.append(tx, {
        userId,
        delta: product.creditGrant,
        reason: LedgerReason.PURCHASE,
        refType: 'purchase',
        refId: purchaseId,
        purchaseId,
        idempotencyKey: `purchase:${purchaseId}`,
        note: product.titleFr,
      });
      return;
    }

    if (product.type === ProductType.SUBSCRIPTION && product.tier) {
      await this.activateSubscription(
        tx,
        userId,
        product.tier,
        product.durationDays ?? 30,
        purchaseId,
      );
      return;
    }

    const key = PRODUCT_ENTITLEMENT[product.type];

    if (key) {
      await this.entitlements.grant(tx, {
        userId,
        key,
        source: EntitlementSource.PURCHASE,
        quantity: product.quantity ?? 1,
        refType: 'purchase',
        refId: purchaseId,
      });
    }

    // Les boosts ne sont pas livrés ici : l'achat crée un droit que le service
    // de boost consomme au moment de l'activation, puisque la mise en avant
    // dépend des créneaux disponibles dans la ville.
  }

  /**
   * Active ou prolonge un abonnement.
   *
   * Un renouvellement prolonge la date de fin au lieu de la remplacer : sinon
   * renouveler quinze jours avant l'échéance ferait perdre ces quinze jours.
   */
  private async activateSubscription(
    tx: Parameters<Parameters<PrismaService['$transaction']>[0]>[0],
    userId: string,
    tier: SubscriptionTier,
    durationDays: number,
    purchaseId: string,
  ): Promise<void> {
    const current = await tx.subscription.findFirst({
      where: { userId, status: SubscriptionStatus.ACTIVE },
      orderBy: { expiresAt: 'desc' },
    });

    const base =
      current && current.expiresAt > new Date() && current.tier === tier
        ? current.expiresAt
        : new Date();

    const expiresAt = new Date(base.getTime() + durationDays * 86_400_000);

    // Changement de formule : l'ancienne est close et ses droits révoqués,
    // sans quoi le mode incognito d'un Gold survivrait à un passage en Plus.
    if (current && current.tier !== tier) {
      await tx.subscription.update({
        where: { id: current.id },
        data: { status: SubscriptionStatus.CANCELLED, cancelledAt: new Date() },
      });
      await this.entitlements.revokeSubscriptionEntitlements(
        tx,
        userId,
        current.id,
      );
    }

    const subscription =
      current && current.tier === tier
        ? await tx.subscription.update({
            where: { id: current.id },
            data: { expiresAt, status: SubscriptionStatus.ACTIVE },
          })
        : await tx.subscription.create({
            data: {
              userId,
              tier,
              status: SubscriptionStatus.ACTIVE,
              provider: PaymentProviderKind.MOBILE_MONEY,
              purchaseId,
              expiresAt,
            },
          });

    await this.entitlements.revokeSubscriptionEntitlements(
      tx,
      userId,
      subscription.id,
    );
    await this.entitlements.grantTier(
      tx,
      userId,
      tier,
      expiresAt,
      subscription.id,
    );
  }

  /**
   * Rattrape les paiements dont le rappel s'est perdu.
   *
   * Indispensable en mobile money, et pas seulement en secours : l'utilisateur
   * saisit son code PIN hors de l'application, le paiement peut aboutir
   * plusieurs minutes plus tard, et le webhook n'arrive pas toujours. Sans ce
   * balayage, des paiements réussis ne seraient jamais crédités — le pire cas
   * possible pour la confiance.
   *
   * Le prestataire reste connu de ce seul service : la tâche planifiée
   * l'appelle sans savoir si l'on paie par mobile money, par les stores ou par
   * carte.
   */
  async reconcilePending(): Promise<{ settled: number }> {
    if (!this.notchpay.isConfigured) return { settled: 0 };

    const pending = await this.prisma.paymentIntent.findMany({
      where: {
        status: {
          in: [
            PaymentStatus.CREATED,
            PaymentStatus.PENDING,
            PaymentStatus.PROCESSING,
          ],
        },
        createdAt: { gte: new Date(Date.now() - 24 * 3_600_000) },
        providerRef: { not: null },
      },
      select: { id: true, providerRef: true },
      take: 50,
    });

    let settled = 0;

    for (const intent of pending) {
      if (!intent.providerRef) continue;

      try {
        const status = await this.notchpay.fetchStatus(intent.providerRef);

        if (status.status !== PaymentStatus.PENDING) {
          const result = await this.settlePayment(
            intent.providerRef,
            status.status,
            status.raw,
          );
          if (result.settled) settled += 1;
        }

        await this.prisma.paymentIntent.update({
          where: { id: intent.id },
          data: { reconciledAt: new Date() },
        });
      } catch (error) {
        this.logger.warn(
          `Réconciliation impossible pour ${intent.providerRef} : ${(error as Error).message}`,
        );
      }
    }

    return { settled };
  }

  /** Historique d'achats, pour le support et les litiges. */
  listPurchases(userId: string, limit = 50) {
    return this.prisma.purchase.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      take: limit,
      select: {
        id: true,
        amount: true,
        currencyCode: true,
        creditsGranted: true,
        createdAt: true,
        refundedAt: true,
        product: { select: { sku: true, titleFr: true, type: true } },
      },
    });
  }
}
