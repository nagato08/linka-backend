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
var BlockService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockService = void 0;
const common_1 = require("@nestjs/common");
const enums_1 = require("../../generated/prisma/enums");
const prisma_service_1 = require("../../core/prisma/prisma.service");
const hash_service_1 = require("../../core/crypto/hash.service");
const phone_service_1 = require("../auth/phone.service");
const deck_cache_service_1 = require("../discovery/deck-cache.service");
const MAX_CONTACTS_PER_BATCH = 500;
let BlockService = BlockService_1 = class BlockService {
    prisma;
    hash;
    phone;
    deckCache;
    logger = new common_1.Logger(BlockService_1.name);
    constructor(prisma, hash, phone, deckCache) {
        this.prisma = prisma;
        this.hash = hash;
        this.phone = phone;
        this.deckCache = deckCache;
    }
    async block(blockerId, blockedId, reason) {
        if (blockerId === blockedId) {
            throw new common_1.BadRequestException('Vous ne pouvez pas vous bloquer vous-même');
        }
        const [userAId, userBId] = [blockerId, blockedId].sort();
        await this.prisma.$transaction(async (tx) => {
            await tx.block.upsert({
                where: { blockerId_blockedId: { blockerId, blockedId } },
                create: { blockerId, blockedId, reason },
                update: {},
            });
            const match = await tx.match.findUnique({
                where: { userAId_userBId: { userAId, userBId } },
                select: { id: true, conversation: { select: { id: true } } },
            });
            if (match) {
                await tx.match.update({
                    where: { id: match.id },
                    data: {
                        status: enums_1.MatchStatus.BLOCKED,
                        unmatchedAt: new Date(),
                        unmatchedById: blockerId,
                    },
                });
                if (match.conversation) {
                    await tx.conversation.update({
                        where: { id: match.conversation.id },
                        data: {
                            status: enums_1.ConversationStatus.CLOSED,
                            closedAt: new Date(),
                        },
                    });
                }
            }
        });
        await Promise.all([
            this.deckCache.invalidate(blockerId),
            this.deckCache.invalidate(blockedId),
            this.deckCache.markSeen(blockerId, blockedId),
            this.deckCache.markSeen(blockedId, blockerId),
        ]);
        this.logger.log(`Blocage : ${blockerId} → ${blockedId}`);
    }
    async unblock(blockerId, blockedId) {
        await this.prisma.block.deleteMany({
            where: { blockerId, blockedId },
        });
        await this.deckCache.invalidate(blockerId);
    }
    list(blockerId) {
        return this.prisma.block.findMany({
            where: { blockerId },
            orderBy: { createdAt: 'desc' },
            select: {
                blockedId: true,
                createdAt: true,
                blocked: {
                    select: { profile: { select: { firstName: true } } },
                },
            },
        });
    }
    async blockContacts(userId, phoneNumbers) {
        if (phoneNumbers.length > MAX_CONTACTS_PER_BATCH) {
            throw new common_1.BadRequestException(`${MAX_CONTACTS_PER_BATCH} numéros au maximum par envoi`);
        }
        const hashes = new Set();
        let skipped = 0;
        for (const raw of phoneNumbers) {
            try {
                const normalized = this.phone.normalize(raw);
                hashes.add(this.hash.hashPhone(normalized.e164));
            }
            catch {
                skipped += 1;
            }
        }
        if (hashes.size > 0) {
            await this.prisma.contactBlock.createMany({
                data: [...hashes].map((phoneHash) => ({ userId, phoneHash })),
                skipDuplicates: true,
            });
            await this.deckCache.invalidate(userId);
        }
        return { blocked: hashes.size, skipped };
    }
    async clearContactBlocks(userId) {
        await this.prisma.contactBlock.deleteMany({ where: { userId } });
        await this.deckCache.invalidate(userId);
    }
    async countContactBlocks(userId) {
        return this.prisma.contactBlock.count({ where: { userId } });
    }
};
exports.BlockService = BlockService;
exports.BlockService = BlockService = BlockService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        hash_service_1.HashService,
        phone_service_1.PhoneService,
        deck_cache_service_1.DeckCacheService])
], BlockService);
//# sourceMappingURL=block.service.js.map