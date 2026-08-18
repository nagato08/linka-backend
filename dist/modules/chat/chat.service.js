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
var ChatService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatService = void 0;
const common_1 = require("@nestjs/common");
const node_crypto_1 = require("node:crypto");
const enums_1 = require("../../generated/prisma/enums");
const prisma_service_1 = require("../../core/prisma/prisma.service");
const storage_service_1 = require("../../core/storage/storage.service");
const conversation_service_1 = require("./conversation.service");
const credit_ledger_service_1 = require("../billing/credit-ledger.service");
const entitlement_service_1 = require("../billing/entitlement.service");
const notification_service_1 = require("../notifications/notification.service");
const MAX_BODY_LENGTH = 2_000;
const MAX_AUDIO_SECONDS = 120;
const MAX_MEDIA_BYTES = 8 * 1024 * 1024;
const ACCEPTED_MEDIA = {
    'image/jpeg': enums_1.MessageType.IMAGE,
    'image/png': enums_1.MessageType.IMAGE,
    'image/webp': enums_1.MessageType.IMAGE,
    'audio/mp4': enums_1.MessageType.AUDIO,
    'audio/aac': enums_1.MessageType.AUDIO,
    'audio/mpeg': enums_1.MessageType.AUDIO,
    'audio/ogg': enums_1.MessageType.AUDIO,
};
let ChatService = ChatService_1 = class ChatService {
    prisma;
    conversations;
    storage;
    ledger;
    entitlements;
    notifications;
    logger = new common_1.Logger(ChatService_1.name);
    constructor(prisma, conversations, storage, ledger, entitlements, notifications) {
        this.prisma = prisma;
        this.conversations = conversations;
        this.storage = storage;
        this.ledger = ledger;
        this.entitlements = entitlements;
        this.notifications = notifications;
    }
    async send(input) {
        const access = await this.conversations.assertMember(input.senderId, input.conversationId);
        if (access.status !== enums_1.ConversationStatus.ACTIVE) {
            throw new common_1.ForbiddenException('Cette conversation est fermée');
        }
        const existing = await this.prisma.message.findUnique({
            where: {
                conversationId_senderId_clientKey: {
                    conversationId: input.conversationId,
                    senderId: input.senderId,
                    clientKey: input.clientKey,
                },
            },
        });
        if (existing) {
            return { message: this.toDto(existing), duplicate: true };
        }
        const type = input.type ?? enums_1.MessageType.TEXT;
        this.validate(type, input);
        const recipients = access.participantIds.filter((id) => id !== input.senderId);
        const message = await this.prisma.$transaction(async (tx) => {
            const created = await tx.message.create({
                data: {
                    conversationId: input.conversationId,
                    senderId: input.senderId,
                    clientKey: input.clientKey,
                    type,
                    body: input.body?.trim(),
                    mediaKey: input.mediaKey,
                    mediaMimeType: input.mediaMimeType,
                    mediaBytes: input.mediaBytes,
                    mediaDuration: input.mediaDuration,
                    replyToId: input.replyToId,
                    status: enums_1.MessageStatus.SENT,
                },
            });
            await tx.conversation.update({
                where: { id: input.conversationId },
                data: {
                    lastMessageAt: created.createdAt,
                    lastMessagePreview: this.preview(type, input.body),
                },
            });
            await tx.conversationParticipant.updateMany({
                where: {
                    conversationId: input.conversationId,
                    userId: { in: recipients },
                },
                data: { unreadCount: { increment: 1 } },
            });
            await tx.match.updateMany({
                where: { conversation: { id: input.conversationId } },
                data: { lastInteractionAt: created.createdAt },
            });
            return created;
        });
        const sender = await this.prisma.profile.findUnique({
            where: { userId: input.senderId },
            select: { firstName: true },
        });
        await this.notifications.notifyMany(recipients.map((userId) => ({
            userId,
            type: enums_1.NotificationType.NEW_MESSAGE,
            vars: { firstName: sender?.firstName ?? 'Quelqu’un' },
            data: {
                screen: 'chat',
                conversationId: input.conversationId,
            },
            conversationId: input.conversationId,
        })));
        return { message: this.toDto(message), duplicate: false, recipients };
    }
    async history(userId, conversationId, options = {}) {
        await this.conversations.assertMember(userId, conversationId);
        const limit = Math.min(options.limit ?? 30, 100);
        if (options.after) {
            const anchor = await this.prisma.message.findUnique({
                where: { id: options.after },
                select: { createdAt: true },
            });
            if (!anchor)
                throw new common_1.NotFoundException('Message de reprise introuvable');
            const messages = await this.prisma.message.findMany({
                where: {
                    conversationId,
                    createdAt: { gt: anchor.createdAt },
                    deletedAt: null,
                },
                orderBy: { createdAt: 'asc' },
                take: limit,
            });
            return {
                data: messages.map((m) => this.toDto(m)),
                hasMore: messages.length === limit,
            };
        }
        const messages = await this.prisma.message.findMany({
            where: { conversationId, deletedAt: null },
            orderBy: { createdAt: 'desc' },
            take: limit + 1,
            ...(options.before ? { cursor: { id: options.before }, skip: 1 } : {}),
        });
        const hasMore = messages.length > limit;
        return {
            data: (hasMore ? messages.slice(0, limit) : messages)
                .reverse()
                .map((m) => this.toDto(m)),
            hasMore,
        };
    }
    async markRead(userId, conversationId, upToMessageId) {
        await this.conversations.assertMember(userId, conversationId);
        const readAt = new Date();
        await this.prisma.$transaction(async (tx) => {
            await tx.conversationParticipant.update({
                where: { conversationId_userId: { conversationId, userId } },
                data: { lastReadAt: readAt, unreadCount: 0 },
            });
            const messages = await tx.message.findMany({
                where: {
                    conversationId,
                    senderId: { not: userId },
                    ...(upToMessageId ? { id: { lte: upToMessageId } } : {}),
                },
                select: { id: true },
                orderBy: { createdAt: 'desc' },
                take: 200,
            });
            for (const message of messages) {
                await tx.messageReceipt.upsert({
                    where: { messageId_userId: { messageId: message.id, userId } },
                    create: {
                        messageId: message.id,
                        userId,
                        readAt,
                        deliveredAt: readAt,
                    },
                    update: { readAt },
                });
            }
        });
        return { readAt };
    }
    async createMediaUpload(userId, conversationId, contentType, contentLength) {
        await this.conversations.assertMember(userId, conversationId);
        const type = ACCEPTED_MEDIA[contentType];
        if (!type) {
            throw new common_1.BadRequestException(`Type de fichier non accepté : ${contentType}`);
        }
        if (contentLength <= 0 || contentLength > MAX_MEDIA_BYTES) {
            throw new common_1.BadRequestException(`Fichier trop volumineux, ${MAX_MEDIA_BYTES / 1024 / 1024} Mo maximum`);
        }
        const key = `chat/${conversationId}/${(0, node_crypto_1.randomUUID)()}`;
        const upload = await this.storage.createUploadUrl(key, contentType, contentLength);
        return {
            mediaKey: key,
            uploadUrl: upload.url,
            expiresIn: upload.expiresIn,
            type,
        };
    }
    async remove(userId, messageId) {
        const message = await this.prisma.message.findUnique({
            where: { id: messageId },
            select: { id: true, senderId: true, mediaKey: true, deletedAt: true },
        });
        if (!message || message.deletedAt) {
            throw new common_1.NotFoundException('Message introuvable');
        }
        if (message.senderId !== userId) {
            throw new common_1.ForbiddenException('Vous ne pouvez supprimer que vos messages');
        }
        if (message.mediaKey) {
            await this.storage.deleteObject(message.mediaKey);
        }
        await this.prisma.message.update({
            where: { id: messageId },
            data: {
                deletedAt: new Date(),
                status: enums_1.MessageStatus.DELETED,
                body: null,
                mediaKey: null,
            },
        });
    }
    validate(type, input) {
        if (type === enums_1.MessageType.TEXT) {
            const body = input.body?.trim();
            if (!body) {
                throw new common_1.BadRequestException('Le message est vide');
            }
            if (body.length > MAX_BODY_LENGTH) {
                throw new common_1.BadRequestException(`Message trop long, ${MAX_BODY_LENGTH} caractères maximum`);
            }
            return;
        }
        if (!input.mediaKey) {
            throw new common_1.BadRequestException('Média manquant');
        }
        if (type === enums_1.MessageType.AUDIO &&
            (input.mediaDuration ?? 0) > MAX_AUDIO_SECONDS) {
            throw new common_1.BadRequestException(`Note vocale trop longue, ${MAX_AUDIO_SECONDS} secondes maximum`);
        }
    }
    preview(type, body) {
        if (type === enums_1.MessageType.IMAGE)
            return '📷 Photo';
        if (type === enums_1.MessageType.AUDIO)
            return '🎤 Message vocal';
        return (body ?? '').trim().slice(0, 120);
    }
    toDto(message) {
        return {
            id: message.id,
            conversationId: message.conversationId,
            senderId: message.senderId,
            clientKey: message.clientKey,
            type: message.type,
            status: message.status,
            body: message.body,
            mediaUrl: message.mediaKey
                ? this.storage.publicUrlFor(message.mediaKey)
                : null,
            mediaMimeType: message.mediaMimeType,
            mediaDuration: message.mediaDuration,
            replyToId: message.replyToId,
            createdAt: message.createdAt,
            deletedAt: message.deletedAt,
        };
    }
};
exports.ChatService = ChatService;
exports.ChatService = ChatService = ChatService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        conversation_service_1.ConversationService,
        storage_service_1.StorageService,
        credit_ledger_service_1.CreditLedgerService,
        entitlement_service_1.EntitlementService,
        notification_service_1.NotificationService])
], ChatService);
//# sourceMappingURL=chat.service.js.map