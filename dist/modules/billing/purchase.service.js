"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var PurchaseService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseService = void 0;
const common_1 = require("@nestjs/common");
const node_crypto_1 = require("node:crypto");
const enums_1 = require("../../generated/prisma/enums");
const prisma_service_1 = require("../../core/prisma/prisma.service");
const phone_service_1 = require("../auth/phone.service");
const notification_service_1 = require("../notifications/notification.service");
const credit_ledger_service_1 = require("./credit-ledger.service");
const entitlement_service_1 = require("./entitlement.service");
const notchpay_provider_1 = require("./providers/notchpay.provider");
const PRODUCT_ENTITLEMENT = {
    SUPERLIKE_PACK: enums_1.EntitlementKey.SUPERLIKE,
    MESSAGE_BEFORE_MATCH: enums_1.EntitlementKey.MESSAGE_BEFORE_MATCH,
    REWIND_PACK: enums_1.EntitlementKey.EXTRA_REWIND,
    EVENT_SLOT: enums_1.EntitlementKey.EVENT_CREATION,
};
const TERMINAL_FAILURES = new Set([
    enums_1.PaymentStatus.FAILED,
    enums_1.PaymentStatus.CANCELLED,
    enums_1.PaymentStatus.EXPIRED,
]);
let PurchaseService = PurchaseService_1 = class PurchaseService {
    prisma;
    ledger;
    entitlements;
    notchpay;
    phone;
    notifications;
    logger = new common_1.Logger(PurchaseService_1.name);
    constructor(prisma, ledger, entitlements, notchpay, phone, notifications) {
        this.prisma = prisma;
        this.ledger = ledger;
        this.entitlements = entitlements;
        this.notchpay = notchpay;
        this.phone = phone;
        this.notifications = notifications;
    }
    listProducts(type) {
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
    async initiatePayment(userId, sku, payerPhone, idempotencyKey) {
        const product = await this.prisma.product.findUnique({ where: { sku } });
        if (!product || !product.isActive) {
            throw new common_1.NotFoundException('Produit introuvable');
        }
        if (!product.priceAmount || !product.currencyCode) {
            throw new common_1.BadRequestException('Ce produit s’achète en pièces, pas en argent');
        }
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
            throw new common_1.BadRequestException('Ce numéro ne permet pas le paiement mobile. Utilisez un numéro MTN ou Orange.');
        }
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
            select: { email: true },
        });
        const reference = `linka_${(0, node_crypto_1.randomUUID)()}`;
        const intent = await this.prisma.paymentIntent.create({
            data: {
                userId,
                productId: product.id,
                provider: enums_1.PaymentProviderKind.MOBILE_MONEY,
                operator: normalized.operator,
                amount: product.priceAmount,
                currencyCode: product.currencyCode,
                status: enums_1.PaymentStatus.CREATED,
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
        }
        catch (error) {
            await this.prisma.paymentIntent.update({
                where: { id: intent.id },
                data: {
                    status: enums_1.PaymentStatus.FAILED,
                    failureMessage: error.message.slice(0, 300),
                },
            });
            this.logger.error(`Paiement non initié : ${error.message}`);
            throw new common_1.BadRequestException('Le paiement n’a pas pu être lancé. Réessayez dans un instant.');
        }
    }
    async settlePayment(reference, status, raw) {
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
        if (status !== enums_1.PaymentStatus.SUCCEEDED) {
            await this.prisma.paymentIntent.update({
                where: { id: intent.id },
                data: {
                    status,
                    providerPayload: raw,
                    completedAt: new Date(),
                },
            });
            if (TERMINAL_FAILURES.has(status)) {
                await this.notifications.notify({
                    userId: intent.userId,
                    type: enums_1.NotificationType.PAYMENT_RESULT,
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
                    status: enums_1.PaymentStatus.SUCCEEDED,
                    providerPayload: raw,
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
        await this.notifications.notify({
            userId: intent.userId,
            type: enums_1.NotificationType.PAYMENT_RESULT,
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
    async purchaseWithCredits(userId, sku) {
        const product = await this.prisma.product.findUnique({ where: { sku } });
        if (!product || !product.isActive) {
            throw new common_1.NotFoundException('Produit introuvable');
        }
        if (!product.creditCost) {
            throw new common_1.BadRequestException('Ce produit se paie en argent, pas en pièces');
        }
        const balance = await this.prisma.$transaction(async (tx) => {
            const remaining = await this.ledger.append(tx, {
                userId,
                delta: -product.creditCost,
                reason: enums_1.LedgerReason.SPEND,
                refType: 'product',
                refId: product.id,
                note: product.titleFr,
            });
            const purchase = await tx.purchase.create({
                data: {
                    userId,
                    productId: product.id,
                    provider: enums_1.PaymentProviderKind.MANUAL,
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
    async deliver(tx, userId, product, purchaseId) {
        if (product.type === enums_1.ProductType.CREDIT_PACK && product.creditGrant) {
            await this.ledger.append(tx, {
                userId,
                delta: product.creditGrant,
                reason: enums_1.LedgerReason.PURCHASE,
                refType: 'purchase',
                refId: purchaseId,
                purchaseId,
                idempotencyKey: `purchase:${purchaseId}`,
                note: product.titleFr,
            });
            return;
        }
        if (product.type === enums_1.ProductType.SUBSCRIPTION && product.tier) {
            await this.activateSubscription(tx, userId, product.tier, product.durationDays ?? 30, purchaseId);
            return;
        }
        const key = PRODUCT_ENTITLEMENT[product.type];
        if (key) {
            await this.entitlements.grant(tx, {
                userId,
                key,
                source: enums_1.EntitlementSource.PURCHASE,
                quantity: product.quantity ?? 1,
                refType: 'purchase',
                refId: purchaseId,
            });
        }
    }
    async activateSubscription(tx, userId, tier, durationDays, purchaseId) {
        const current = await tx.subscription.findFirst({
            where: { userId, status: enums_1.SubscriptionStatus.ACTIVE },
            orderBy: { expiresAt: 'desc' },
        });
        const base = current && current.expiresAt > new Date() && current.tier === tier
            ? current.expiresAt
            : new Date();
        const expiresAt = new Date(base.getTime() + durationDays * 86_400_000);
        if (current && current.tier !== tier) {
            await tx.subscription.update({
                where: { id: current.id },
                data: { status: enums_1.SubscriptionStatus.CANCELLED, cancelledAt: new Date() },
            });
            await this.entitlements.revokeSubscriptionEntitlements(tx, userId, current.id);
        }
        const subscription = current && current.tier === tier
            ? await tx.subscription.update({
                where: { id: current.id },
                data: { expiresAt, status: enums_1.SubscriptionStatus.ACTIVE },
            })
            : await tx.subscription.create({
                data: {
                    userId,
                    tier,
                    status: enums_1.SubscriptionStatus.ACTIVE,
                    provider: enums_1.PaymentProviderKind.MOBILE_MONEY,
                    purchaseId,
                    expiresAt,
                },
            });
        await this.entitlements.revokeSubscriptionEntitlements(tx, userId, subscription.id);
        await this.entitlements.grantTier(tx, userId, tier, expiresAt, subscription.id);
    }
    async reconcilePending() {
        if (!this.notchpay.isConfigured)
            return { settled: 0 };
        const pending = await this.prisma.paymentIntent.findMany({
            where: {
                status: {
                    in: [
                        enums_1.PaymentStatus.CREATED,
                        enums_1.PaymentStatus.PENDING,
                        enums_1.PaymentStatus.PROCESSING,
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
            if (!intent.providerRef)
                continue;
            try {
                const status = await this.notchpay.fetchStatus(intent.providerRef);
                if (status.status !== enums_1.PaymentStatus.PENDING) {
                    const result = await this.settlePayment(intent.providerRef, status.status, status.raw);
                    if (result.settled)
                        settled += 1;
                }
                await this.prisma.paymentIntent.update({
                    where: { id: intent.id },
                    data: { reconciledAt: new Date() },
                });
            }
            catch (error) {
                this.logger.warn(`Réconciliation impossible pour ${intent.providerRef} : ${error.message}`);
            }
        }
        return { settled };
    }
    listPurchases(userId, limit = 50) {
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
};
exports.PurchaseService = PurchaseService;
exports.PurchaseService = PurchaseService = PurchaseService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        credit_ledger_service_1.CreditLedgerService,
        entitlement_service_1.EntitlementService,
        notchpay_provider_1.NotchPayProvider,
        phone_service_1.PhoneService,
        notification_service_1.NotificationService])
], PurchaseService);
//# sourceMappingURL=purchase.service.js.map