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
var AccountService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountService = void 0;
const common_1 = require("@nestjs/common");
const node_crypto_1 = require("node:crypto");
const enums_1 = require("../../generated/prisma/enums");
const prisma_service_1 = require("../../core/prisma/prisma.service");
const storage_service_1 = require("../../core/storage/storage.service");
const token_service_1 = require("../auth/token.service");
const deck_cache_service_1 = require("../discovery/deck-cache.service");
const PURGE_DELAY_DAYS = 30;
let AccountService = AccountService_1 = class AccountService {
    prisma;
    storage;
    tokens;
    deckCache;
    logger = new common_1.Logger(AccountService_1.name);
    constructor(prisma, storage, tokens, deckCache) {
        this.prisma = prisma;
        this.storage = storage;
        this.tokens = tokens;
        this.deckCache = deckCache;
    }
    async requestDeletion(userId, reason) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
            select: { status: true, deletionRequestedAt: true },
        });
        if (!user)
            throw new common_1.NotFoundException('Compte introuvable');
        if (user.deletionRequestedAt) {
            throw new common_1.BadRequestException('Une suppression est déjà en cours');
        }
        const requestedAt = new Date();
        const purgeAt = new Date(requestedAt.getTime() + PURGE_DELAY_DAYS * 86_400_000);
        await this.prisma.user.update({
            where: { id: userId },
            data: {
                status: enums_1.UserStatus.DELETION_PENDING,
                deletionRequestedAt: requestedAt,
                banReason: reason?.slice(0, 500),
            },
        });
        await this.tokens.revokeAllForUser(userId, 'account_deletion');
        await this.deckCache.invalidate(userId);
        this.logger.log(`Suppression demandée : ${userId}, purge le ${purgeAt.toISOString()}`);
        return { purgeAt };
    }
    async cancelDeletion(userId) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
            select: { deletionRequestedAt: true, deletedAt: true },
        });
        if (!user?.deletionRequestedAt || user.deletedAt) {
            throw new common_1.BadRequestException('Aucune suppression en cours');
        }
        await this.prisma.user.update({
            where: { id: userId },
            data: {
                status: enums_1.UserStatus.ACTIVE,
                deletionRequestedAt: null,
                banReason: null,
            },
        });
    }
    async purgeExpired() {
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
    async purge(userId) {
        const photos = await this.prisma.photo.findMany({
            where: { profileId: userId },
            select: { id: true, storageKey: true },
        });
        const messageMedia = await this.prisma.message.findMany({
            where: { senderId: userId, mediaKey: { not: null } },
            select: { mediaKey: true },
        });
        const keys = [
            ...photos.flatMap((photo) => [
                photo.storageKey,
                `photos/${userId}/${photo.id}/thumb.webp`,
                `photos/${userId}/${photo.id}/card.webp`,
                `photos/${userId}/${photo.id}/full.webp`,
            ]),
            ...messageMedia
                .map((message) => message.mediaKey)
                .filter((key) => key !== null),
        ];
        let orphanedKeys = [];
        try {
            await this.storage.deleteObjects(keys);
        }
        catch (error) {
            orphanedKeys = keys;
            this.logger.error(`Médias non supprimés pour ${userId} : ${error.message}`);
        }
        const anonymous = (0, node_crypto_1.randomUUID)();
        await this.prisma.$transaction(async (tx) => {
            await tx.profile.deleteMany({ where: { userId } });
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
                    status: enums_1.UserStatus.DELETED,
                    deletedAt: new Date(),
                    lastActiveAt: null,
                },
            });
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
        this.logger.log(orphanedKeys.length === 0
            ? `Compte ${userId} purgé`
            : `Compte ${userId} purgé, ${orphanedKeys.length} média(s) à nettoyer`);
    }
    async exportData(userId) {
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
        if (!user)
            throw new common_1.NotFoundException('Compte introuvable');
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
};
exports.AccountService = AccountService;
exports.AccountService = AccountService = AccountService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        storage_service_1.StorageService,
        token_service_1.TokenService,
        deck_cache_service_1.DeckCacheService])
], AccountService);
//# sourceMappingURL=account.service.js.map