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
var SwipeService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwipeService = void 0;
const common_1 = require("@nestjs/common");
const enums_1 = require("../../generated/prisma/enums");
const prisma_service_1 = require("../../core/prisma/prisma.service");
const redis_service_1 = require("../../core/redis/redis.service");
const too_many_requests_exception_1 = require("../../common/exceptions/too-many-requests.exception");
const deck_cache_service_1 = require("../discovery/deck-cache.service");
const boost_service_1 = require("../billing/boost.service");
const notification_service_1 = require("../notifications/notification.service");
const credit_ledger_service_1 = require("../billing/credit-ledger.service");
const entitlement_service_1 = require("../billing/entitlement.service");
const MAX_LIKES_PER_HOUR = 100;
const SUSPICIOUS_SWIPE_MS = 300;
const FREE_SUPERLIKES_PER_DAY = 1;
const SUPERLIKE_COST = 100;
let SwipeService = SwipeService_1 = class SwipeService {
    prisma;
    redis;
    deckCache;
    ledger;
    entitlements;
    boosts;
    notifications;
    logger = new common_1.Logger(SwipeService_1.name);
    constructor(prisma, redis, deckCache, ledger, entitlements, boosts, notifications) {
        this.prisma = prisma;
        this.redis = redis;
        this.deckCache = deckCache;
        this.ledger = ledger;
        this.entitlements = entitlements;
        this.boosts = boosts;
        this.notifications = notifications;
    }
    async swipe(actorId, targetId, action, source = enums_1.SwipeSource.DECK) {
        if (actorId === targetId) {
            throw new common_1.BadRequestException('Vous ne pouvez pas vous swiper vous-même');
        }
        await this.assertTargetIsSwipeable(actorId, targetId);
        await this.recordPace(actorId);
        if (action !== enums_1.SwipeAction.PASS) {
            await this.enforceLikeQuota(actorId);
        }
        if (action === enums_1.SwipeAction.SUPERLIKE) {
            await this.consumeSuperlike(actorId);
        }
        await this.prisma.swipe.upsert({
            where: { actorId_targetId: { actorId, targetId } },
            create: { actorId, targetId, action, source },
            update: { action, source, isRewound: false, createdAt: new Date() },
        });
        await this.deckCache.markSeen(actorId, targetId);
        if (action !== enums_1.SwipeAction.PASS) {
            await this.boosts.recordLike(targetId);
        }
        if (action === enums_1.SwipeAction.PASS) {
            return { matched: false, matchId: null, conversationId: null };
        }
        const result = await this.tryCreateMatch(actorId, targetId, action);
        if (result.matched) {
            await this.notifyMatch(actorId, targetId, result);
        }
        else {
            await this.notifications.notify({
                userId: targetId,
                type: enums_1.NotificationType.NEW_LIKE,
                data: { screen: 'likes' },
            });
        }
        return result;
    }
    async tryCreateMatch(actorId, targetId, action) {
        const reciprocal = await this.prisma.swipe.findUnique({
            where: { actorId_targetId: { actorId: targetId, targetId: actorId } },
            select: { action: true, isRewound: true },
        });
        const isMutual = reciprocal !== null &&
            !reciprocal.isRewound &&
            reciprocal.action !== enums_1.SwipeAction.PASS;
        if (!isMutual) {
            return { matched: false, matchId: null, conversationId: null };
        }
        const [userAId, userBId] = [actorId, targetId].sort();
        try {
            const match = await this.prisma.$transaction(async (tx) => {
                const existing = await tx.match.findUnique({
                    where: { userAId_userBId: { userAId, userBId } },
                    include: { conversation: { select: { id: true } } },
                });
                if (existing)
                    return existing;
                return tx.match.create({
                    data: {
                        userAId,
                        userBId,
                        fromSuperlike: action === enums_1.SwipeAction.SUPERLIKE ||
                            reciprocal.action === enums_1.SwipeAction.SUPERLIKE,
                        status: enums_1.MatchStatus.ACTIVE,
                        lastInteractionAt: new Date(),
                        conversation: {
                            create: {
                                type: enums_1.ConversationType.MATCH,
                                participants: {
                                    create: [{ userId: userAId }, { userId: userBId }],
                                },
                            },
                        },
                    },
                    include: { conversation: { select: { id: true } } },
                });
            }, { isolationLevel: 'Serializable' });
            this.logger.log(`Match créé : ${match.id}`);
            await this.boosts.recordMatch([actorId, targetId]);
            return {
                matched: true,
                matchId: match.id,
                conversationId: match.conversation?.id ?? null,
            };
        }
        catch (error) {
            const existing = await this.prisma.match.findUnique({
                where: { userAId_userBId: { userAId, userBId } },
                include: { conversation: { select: { id: true } } },
            });
            if (existing) {
                return {
                    matched: true,
                    matchId: existing.id,
                    conversationId: existing.conversation?.id ?? null,
                };
            }
            throw error;
        }
    }
    async notifyMatch(actorId, targetId, result) {
        const profiles = await this.prisma.profile.findMany({
            where: { userId: { in: [actorId, targetId] } },
            select: { userId: true, firstName: true },
        });
        const nameOf = (userId) => profiles.find((p) => p.userId === userId)?.firstName ?? 'Quelqu’un';
        await this.notifications.notifyMany([
            {
                userId: actorId,
                type: enums_1.NotificationType.NEW_MATCH,
                vars: { firstName: nameOf(targetId) },
                data: {
                    screen: 'chat',
                    conversationId: result.conversationId ?? '',
                    matchId: result.matchId ?? '',
                },
            },
            {
                userId: targetId,
                type: enums_1.NotificationType.NEW_MATCH,
                vars: { firstName: nameOf(actorId) },
                data: {
                    screen: 'chat',
                    conversationId: result.conversationId ?? '',
                    matchId: result.matchId ?? '',
                },
            },
        ]);
    }
    async assertTargetIsSwipeable(actorId, targetId) {
        const target = await this.prisma.user.findUnique({
            where: { id: targetId },
            select: { status: true },
        });
        const swipeable = [
            enums_1.UserStatus.ACTIVE,
            enums_1.UserStatus.SHADOW_BANNED,
        ];
        if (!target || !swipeable.includes(target.status)) {
            throw new common_1.NotFoundException('Profil introuvable');
        }
        const blocked = await this.prisma.block.findFirst({
            where: {
                OR: [
                    { blockerId: actorId, blockedId: targetId },
                    { blockerId: targetId, blockedId: actorId },
                ],
            },
            select: { blockerId: true },
        });
        if (blocked) {
            throw new common_1.NotFoundException('Profil introuvable');
        }
    }
    async enforceLikeQuota(actorId) {
        const key = `likes:h:${actorId}`;
        const count = await this.redis.client.incr(key);
        if (count === 1) {
            await this.redis.client.expire(key, 3_600);
        }
        if (count > MAX_LIKES_PER_HOUR) {
            this.logger.warn(`Plafond horaire de likes atteint : ${actorId}`);
            const ttl = await this.redis.client.ttl(key);
            throw new too_many_requests_exception_1.TooManyRequestsException('Vous allez un peu vite. Reprenez dans quelques minutes.', ttl);
        }
    }
    async recordPace(actorId) {
        const key = `swipe:last:${actorId}`;
        const now = Date.now();
        const previous = await this.redis.client.getset(key, String(now));
        await this.redis.client.expire(key, 3_600);
        if (previous && now - Number(previous) < SUSPICIOUS_SWIPE_MS) {
            const fastKey = `swipe:fast:${actorId}`;
            await this.redis.client.incr(fastKey);
            await this.redis.client.expire(fastKey, 86_400);
        }
    }
    async consumeSuperlike(actorId) {
        const key = `superlike:d:${actorId}`;
        const used = await this.redis.client.incr(key);
        if (used === 1) {
            await this.redis.client.expire(key, 86_400);
        }
        if (used <= FREE_SUPERLIKES_PER_DAY)
            return;
        if (await this.entitlements.consume(actorId, enums_1.EntitlementKey.SUPERLIKE)) {
            return;
        }
        try {
            await this.ledger.spend(actorId, SUPERLIKE_COST, enums_1.LedgerReason.SPEND, {
                refType: 'superlike',
                note: 'Super like hors quota',
            });
        }
        catch {
            throw new common_1.ForbiddenException(`Super likes épuisés. ${SUPERLIKE_COST} pièces sont nécessaires, ou attendez demain.`);
        }
    }
};
exports.SwipeService = SwipeService;
exports.SwipeService = SwipeService = SwipeService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        redis_service_1.RedisService,
        deck_cache_service_1.DeckCacheService,
        credit_ledger_service_1.CreditLedgerService,
        entitlement_service_1.EntitlementService,
        boost_service_1.BoostService,
        notification_service_1.NotificationService])
], SwipeService);
//# sourceMappingURL=swipe.service.js.map