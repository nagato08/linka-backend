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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationService = void 0;
const common_1 = require("@nestjs/common");
const enums_1 = require("../../generated/prisma/enums");
const prisma_service_1 = require("../../core/prisma/prisma.service");
const media_service_1 = require("../media/media.service");
const pagination_dto_1 = require("../../common/dto/pagination.dto");
let ConversationService = class ConversationService {
    prisma;
    media;
    constructor(prisma, media) {
        this.prisma = prisma;
        this.media = media;
    }
    async assertMember(userId, conversationId) {
        const conversation = await this.prisma.conversation.findUnique({
            where: { id: conversationId },
            select: {
                id: true,
                status: true,
                participants: {
                    where: { leftAt: null },
                    select: { userId: true },
                },
            },
        });
        const participantIds = conversation?.participants.map((p) => p.userId) ?? [];
        if (!conversation || !participantIds.includes(userId)) {
            throw new common_1.ForbiddenException('Conversation introuvable');
        }
        return {
            conversationId: conversation.id,
            participantIds,
            status: conversation.status,
        };
    }
    async list(userId, cursor, limit = 20) {
        const memberships = await this.prisma.conversationParticipant.findMany({
            where: {
                userId,
                leftAt: null,
                conversation: { status: enums_1.ConversationStatus.ACTIVE },
            },
            orderBy: { conversation: { lastMessageAt: 'desc' } },
            take: limit + 1,
            ...(cursor
                ? {
                    cursor: {
                        conversationId_userId: { conversationId: cursor, userId },
                    },
                    skip: 1,
                }
                : {}),
            include: {
                conversation: {
                    include: {
                        participants: {
                            where: { userId: { not: userId } },
                            select: { userId: true },
                        },
                    },
                },
            },
        });
        const rows = memberships.map((m) => ({ ...m, id: m.conversationId }));
        const page = (0, pagination_dto_1.buildCursorPage)(rows, limit);
        const otherIds = page.data.flatMap((m) => m.conversation.participants.map((p) => p.userId));
        const profiles = await this.loadCards(otherIds);
        return {
            data: page.data.map((membership) => ({
                conversationId: membership.conversationId,
                type: membership.conversation.type,
                lastMessageAt: membership.conversation.lastMessageAt,
                lastMessagePreview: membership.conversation.lastMessagePreview,
                unreadCount: membership.unreadCount,
                mutedUntil: membership.mutedUntil,
                participants: membership.conversation.participants
                    .map((p) => profiles.get(p.userId))
                    .filter((p) => p !== undefined),
            })),
            pageInfo: page.pageInfo,
        };
    }
    async mute(userId, conversationId, until) {
        await this.assertMember(userId, conversationId);
        await this.prisma.conversationParticipant.update({
            where: { conversationId_userId: { conversationId, userId } },
            data: { mutedUntil: until },
        });
    }
    async loadCards(userIds) {
        if (userIds.length === 0)
            return new Map();
        const profiles = await this.prisma.profile.findMany({
            where: { userId: { in: [...new Set(userIds)] } },
            select: {
                userId: true,
                firstName: true,
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
                isVerified: profile.isVerified,
                photo: profile.photos[0] ? this.media.toDto(profile.photos[0]) : null,
            },
        ]));
    }
};
exports.ConversationService = ConversationService;
exports.ConversationService = ConversationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        media_service_1.MediaService])
], ConversationService);
//# sourceMappingURL=conversation.service.js.map