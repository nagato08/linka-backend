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
var BoostService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoostService = void 0;
const common_1 = require("@nestjs/common");
const enums_1 = require("../../generated/prisma/enums");
const prisma_service_1 = require("../../core/prisma/prisma.service");
const notification_service_1 = require("../notifications/notification.service");
const credit_ledger_service_1 = require("./credit-ledger.service");
const MULTIPLIER_BY_TIER = {
    BOOST_30M: 3,
    BOOST_1H: 4,
    BOOST_3H: 5,
    BOOST_6H: 6,
    BOOST_12H: 8,
    BOOST_24H: 10,
};
const DURATION_MINUTES = {
    BOOST_30M: 30,
    BOOST_1H: 60,
    BOOST_3H: 180,
    BOOST_6H: 360,
    BOOST_12H: 720,
    BOOST_24H: 1_440,
};
let BoostService = BoostService_1 = class BoostService {
    prisma;
    ledger;
    notifications;
    logger = new common_1.Logger(BoostService_1.name);
    constructor(prisma, ledger, notifications) {
        this.prisma = prisma;
        this.ledger = ledger;
        this.notifications = notifications;
    }
    async activate(userId, sku) {
        const product = await this.prisma.product.findUnique({ where: { sku } });
        if (!product || !product.isActive || !product.boostTier) {
            throw new common_1.NotFoundException('Boost introuvable');
        }
        const running = await this.prisma.boost.findFirst({
            where: {
                userId,
                status: enums_1.BoostStatus.ACTIVE,
                endAt: { gt: new Date() },
            },
            select: { id: true, endAt: true },
        });
        if (running) {
            throw new common_1.BadRequestException(`Un boost est déjà en cours jusqu'à ${running.endAt?.toISOString() ?? ''}`);
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
                    reason: enums_1.LedgerReason.SPEND,
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
                    status: slotAvailable ? enums_1.BoostStatus.ACTIVE : enums_1.BoostStatus.QUEUED,
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
                queuedBehind: slotAvailable
                    ? 0
                    : await tx.boost.count({
                        where: {
                            cityId: profile?.cityId,
                            status: enums_1.BoostStatus.QUEUED,
                            id: { not: boost.id },
                        },
                    }),
            };
        });
    }
    async hasFreeSlot(tx, cityId) {
        if (!cityId)
            return true;
        const city = await tx.city.findUnique({
            where: { id: cityId },
            select: { boostSlots: true },
        });
        if (!city)
            return true;
        const active = await tx.boost.count({
            where: { cityId, status: enums_1.BoostStatus.ACTIVE, endAt: { gt: new Date() } },
        });
        return active < city.boostSlots;
    }
    async processQueue() {
        const ending = await this.prisma.boost.findMany({
            where: { status: enums_1.BoostStatus.ACTIVE, endAt: { lte: new Date() } },
            select: {
                id: true,
                userId: true,
                impressions: true,
                likesGained: true,
            },
        });
        const expired = await this.prisma.boost.updateMany({
            where: { id: { in: ending.map((b) => b.id) } },
            data: { status: enums_1.BoostStatus.COMPLETED },
        });
        await this.notifications.notifyMany(ending.map((boost) => ({
            userId: boost.userId,
            type: enums_1.NotificationType.BOOST_ENDED,
            vars: {
                impressions: String(boost.impressions),
                likes: String(boost.likesGained),
            },
            data: { screen: 'boost', boostId: boost.id },
        })));
        const cities = await this.prisma.boost.groupBy({
            by: ['cityId'],
            where: { status: enums_1.BoostStatus.QUEUED },
        });
        let started = 0;
        for (const { cityId } of cities) {
            if (!cityId)
                continue;
            const city = await this.prisma.city.findUnique({
                where: { id: cityId },
                select: { boostSlots: true },
            });
            if (!city)
                continue;
            const active = await this.prisma.boost.count({
                where: {
                    cityId,
                    status: enums_1.BoostStatus.ACTIVE,
                    endAt: { gt: new Date() },
                },
            });
            const free = city.boostSlots - active;
            if (free <= 0)
                continue;
            const waiting = await this.prisma.boost.findMany({
                where: { cityId, status: enums_1.BoostStatus.QUEUED },
                orderBy: { queuedAt: 'asc' },
                take: free,
                select: { id: true, tier: true },
            });
            for (const boost of waiting) {
                const minutes = DURATION_MINUTES[boost.tier];
                await this.prisma.boost.update({
                    where: { id: boost.id },
                    data: {
                        status: enums_1.BoostStatus.ACTIVE,
                        startAt: new Date(),
                        endAt: new Date(Date.now() + minutes * 60_000),
                    },
                });
                started += 1;
            }
        }
        if (expired.count > 0 || started > 0) {
            this.logger.log(`Boosts : ${expired.count} terminé(s), ${started} démarré(s) depuis la file`);
        }
        return { ended: expired.count, started };
    }
    async stats(userId, boostId) {
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
        if (!boost)
            throw new common_1.NotFoundException('Boost introuvable');
        return boost;
    }
    history(userId, limit = 20) {
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
    async recordLike(targetId) {
        await this.prisma.boost.updateMany({
            where: {
                userId: targetId,
                status: enums_1.BoostStatus.ACTIVE,
                endAt: { gt: new Date() },
            },
            data: { likesGained: { increment: 1 } },
        });
    }
    async recordMatch(userIds) {
        await this.prisma.boost.updateMany({
            where: {
                userId: { in: userIds },
                status: enums_1.BoostStatus.ACTIVE,
                endAt: { gt: new Date() },
            },
            data: { matchesGained: { increment: 1 } },
        });
    }
    async recordImpressions(userIds) {
        if (userIds.length === 0)
            return;
        await this.prisma.boost.updateMany({
            where: {
                userId: { in: userIds },
                status: enums_1.BoostStatus.ACTIVE,
                endAt: { gt: new Date() },
            },
            data: { impressions: { increment: 1 } },
        });
    }
};
exports.BoostService = BoostService;
exports.BoostService = BoostService = BoostService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        credit_ledger_service_1.CreditLedgerService,
        notification_service_1.NotificationService])
], BoostService);
//# sourceMappingURL=boost.service.js.map