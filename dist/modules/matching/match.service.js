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
var MatchService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchService = void 0;
const common_1 = require("@nestjs/common");
const enums_1 = require("../../generated/prisma/enums");
const prisma_service_1 = require("../../core/prisma/prisma.service");
const media_service_1 = require("../media/media.service");
const deck_cache_service_1 = require("../discovery/deck-cache.service");
const credit_ledger_service_1 = require("../billing/credit-ledger.service");
const entitlement_service_1 = require("../billing/entitlement.service");
const pagination_dto_1 = require("../../common/dto/pagination.dto");
const FREE_REWINDS = 10;
const REWIND_COST = 50;
let MatchService = MatchService_1 = class MatchService {
    prisma;
    media;
    deckCache;
    ledger;
    entitlements;
    logger = new common_1.Logger(MatchService_1.name);
    constructor(prisma, media, deckCache, ledger, entitlements) {
        this.prisma = prisma;
        this.media = media;
        this.deckCache = deckCache;
        this.ledger = ledger;
        this.entitlements = entitlements;
    }
    async list(userId, cursor, limit = 20) {
        const matches = await this.prisma.match.findMany({
            where: {
                status: enums_1.MatchStatus.ACTIVE,
                OR: [{ userAId: userId }, { userBId: userId }],
            },
            orderBy: [{ lastInteractionAt: 'desc' }, { matchedAt: 'desc' }],
            take: limit + 1,
            ...(cursor ? { cursor: { id: cursor }, skip: 1 } : {}),
            include: {
                conversation: {
                    select: {
                        id: true,
                        lastMessageAt: true,
                        lastMessagePreview: true,
                        participants: {
                            where: { userId },
                            select: { unreadCount: true },
                        },
                    },
                },
            },
        });
        const page = (0, pagination_dto_1.buildCursorPage)(matches, limit);
        const otherIds = page.data.map((m) => m.userAId === userId ? m.userBId : m.userAId);
        const profiles = await this.loadCards(otherIds);
        return {
            data: page.data.map((match) => {
                const otherId = match.userAId === userId ? match.userBId : match.userAId;
                return {
                    matchId: match.id,
                    matchedAt: match.matchedAt,
                    fromSuperlike: match.fromSuperlike,
                    conversationId: match.conversation?.id ?? null,
                    lastMessageAt: match.conversation?.lastMessageAt ?? null,
                    lastMessagePreview: match.conversation?.lastMessagePreview ?? null,
                    unreadCount: match.conversation?.participants[0]?.unreadCount ?? 0,
                    profile: profiles.get(otherId) ?? null,
                };
            }),
            pageInfo: page.pageInfo,
        };
    }
    async likesReceived(userId, cursor, limit = 20) {
        const likes = await this.prisma.swipe.findMany({
            where: {
                targetId: userId,
                action: { in: [enums_1.SwipeAction.LIKE, enums_1.SwipeAction.SUPERLIKE] },
                isRewound: false,
                actor: {
                    swipesReceived: { none: { actorId: userId, isRewound: false } },
                },
            },
            orderBy: { createdAt: 'desc' },
            take: limit + 1,
            ...(cursor ? { cursor: { id: cursor }, skip: 1 } : {}),
            select: { id: true, actorId: true, action: true, createdAt: true },
        });
        const page = (0, pagination_dto_1.buildCursorPage)(likes, limit);
        const profiles = await this.loadCards(page.data.map((l) => l.actorId));
        return {
            data: page.data.map((like) => ({
                id: like.id,
                likedAt: like.createdAt,
                isSuperlike: like.action === enums_1.SwipeAction.SUPERLIKE,
                profile: profiles.get(like.actorId) ?? null,
            })),
            pageInfo: page.pageInfo,
        };
    }
    async unmatch(userId, matchId) {
        const match = await this.prisma.match.findUnique({
            where: { id: matchId },
            include: { conversation: { select: { id: true } } },
        });
        if (!match || (match.userAId !== userId && match.userBId !== userId)) {
            throw new common_1.NotFoundException('Match introuvable');
        }
        if (match.status !== enums_1.MatchStatus.ACTIVE) {
            throw new common_1.ForbiddenException('Ce match est déjà défait');
        }
        await this.prisma.$transaction(async (tx) => {
            await tx.match.update({
                where: { id: matchId },
                data: {
                    status: enums_1.MatchStatus.UNMATCHED,
                    unmatchedAt: new Date(),
                    unmatchedById: userId,
                },
            });
            if (match.conversation) {
                await tx.conversation.update({
                    where: { id: match.conversation.id },
                    data: { status: enums_1.ConversationStatus.CLOSED, closedAt: new Date() },
                });
            }
        });
        this.logger.log(`Match défait : ${matchId}`);
    }
    async rewind(userId) {
        const last = await this.prisma.swipe.findFirst({
            where: { actorId: userId, isRewound: false },
            orderBy: { createdAt: 'desc' },
        });
        if (!last) {
            throw new common_1.NotFoundException('Aucun swipe à annuler');
        }
        const usedFree = await this.prisma.rewind.count({
            where: { userId, wasFree: true },
        });
        const hasUnlimited = await this.hasUnlimitedRewind(userId);
        const isFree = !hasUnlimited && usedFree < FREE_REWINDS;
        const fromPack = !isFree &&
            !hasUnlimited &&
            (await this.entitlements.consume(userId, enums_1.EntitlementKey.EXTRA_REWIND));
        await this.prisma.$transaction(async (tx) => {
            if (!isFree && !hasUnlimited && !fromPack) {
                await this.ledger.append(tx, {
                    userId,
                    delta: -REWIND_COST,
                    reason: enums_1.LedgerReason.SPEND,
                    refType: 'rewind',
                    note: 'Rewind au-delà du quota gratuit',
                });
            }
            await tx.swipe.update({
                where: { id: last.id },
                data: { isRewound: true },
            });
            await tx.rewind.create({
                data: { userId, swipeId: last.id, wasFree: isFree },
            });
            const [userAId, userBId] = [userId, last.targetId].sort();
            await tx.match.updateMany({
                where: { userAId, userBId, status: enums_1.MatchStatus.ACTIVE },
                data: { status: enums_1.MatchStatus.UNMATCHED, unmatchedAt: new Date() },
            });
        });
        await this.deckCache.unmarkSeen(userId, last.targetId);
        await this.deckCache.invalidate(userId);
        return {
            targetId: last.targetId,
            remainingFree: hasUnlimited
                ? FREE_REWINDS
                : Math.max(0, FREE_REWINDS - usedFree - 1),
        };
    }
    async hasUnlimitedRewind(userId) {
        const entitlement = await this.prisma.entitlement.findFirst({
            where: {
                userId,
                key: 'UNLIMITED_REWIND',
                revokedAt: null,
                OR: [{ expiresAt: null }, { expiresAt: { gt: new Date() } }],
            },
            select: { id: true },
        });
        return entitlement !== null;
    }
    async loadCards(userIds) {
        if (userIds.length === 0)
            return new Map();
        const profiles = await this.prisma.profile.findMany({
            where: { userId: { in: userIds } },
            select: {
                userId: true,
                firstName: true,
                birthdate: true,
                hideAge: true,
                isVerified: true,
                photos: {
                    where: { deletedAt: null, status: enums_1.PhotoStatus.APPROVED },
                    orderBy: { position: 'asc' },
                    take: 1,
                },
            },
        });
        return new Map(profiles.map((profile) => [
            profile.userId,
            {
                userId: profile.userId,
                firstName: profile.firstName,
                age: profile.hideAge ? null : this.ageFrom(profile.birthdate),
                isVerified: profile.isVerified,
                photo: profile.photos[0] ? this.media.toDto(profile.photos[0]) : null,
            },
        ]));
    }
    ageFrom(birthdate) {
        const now = new Date();
        let age = now.getUTCFullYear() - birthdate.getUTCFullYear();
        const monthDiff = now.getUTCMonth() - birthdate.getUTCMonth();
        if (monthDiff < 0 ||
            (monthDiff === 0 && now.getUTCDate() < birthdate.getUTCDate())) {
            age -= 1;
        }
        return age;
    }
};
exports.MatchService = MatchService;
exports.MatchService = MatchService = MatchService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        media_service_1.MediaService,
        deck_cache_service_1.DeckCacheService,
        credit_ledger_service_1.CreditLedgerService,
        entitlement_service_1.EntitlementService])
], MatchService);
//# sourceMappingURL=match.service.js.map