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
var EntitlementService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntitlementService = void 0;
const common_1 = require("@nestjs/common");
const enums_1 = require("../../generated/prisma/enums");
const prisma_service_1 = require("../../core/prisma/prisma.service");
const TIER_ENTITLEMENTS = {
    FREE: [],
    PLUS: [
        enums_1.EntitlementKey.UNLIMITED_REWIND,
        enums_1.EntitlementKey.NO_ADS,
        enums_1.EntitlementKey.ADVANCED_FILTERS,
    ],
    GOLD: [
        enums_1.EntitlementKey.UNLIMITED_REWIND,
        enums_1.EntitlementKey.NO_ADS,
        enums_1.EntitlementKey.ADVANCED_FILTERS,
        enums_1.EntitlementKey.INCOGNITO,
        enums_1.EntitlementKey.TRAVEL_MODE,
        enums_1.EntitlementKey.PRIORITY_DECK,
    ],
};
let EntitlementService = EntitlementService_1 = class EntitlementService {
    prisma;
    logger = new common_1.Logger(EntitlementService_1.name);
    constructor(prisma) {
        this.prisma = prisma;
    }
    async has(userId, key) {
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
    async consume(userId, key) {
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
        if (unlimited)
            return true;
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
        if (!consumable)
            return false;
        const updated = await this.prisma.entitlement.updateMany({
            where: { id: consumable.id, remaining: { gt: 0 } },
            data: { remaining: { decrement: 1 } },
        });
        return updated.count === 1;
    }
    async assert(userId, key, message) {
        if (!(await this.has(userId, key))) {
            throw new common_1.ForbiddenException(message);
        }
    }
    async grant(tx, input) {
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
    async grantTier(tx, userId, tier, expiresAt, subscriptionId) {
        for (const key of TIER_ENTITLEMENTS[tier]) {
            await tx.entitlement.create({
                data: {
                    userId,
                    key,
                    source: enums_1.EntitlementSource.SUBSCRIPTION,
                    expiresAt,
                    refType: 'subscription',
                    refId: subscriptionId,
                },
            });
        }
    }
    async revokeSubscriptionEntitlements(tx, userId, subscriptionId) {
        await tx.entitlement.updateMany({
            where: {
                userId,
                source: enums_1.EntitlementSource.SUBSCRIPTION,
                refId: subscriptionId,
                revokedAt: null,
            },
            data: { revokedAt: new Date() },
        });
    }
    async listActive(userId) {
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
};
exports.EntitlementService = EntitlementService;
exports.EntitlementService = EntitlementService = EntitlementService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], EntitlementService);
//# sourceMappingURL=entitlement.service.js.map