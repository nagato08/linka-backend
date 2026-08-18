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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var ChatGateway_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatGateway = void 0;
const common_1 = require("@nestjs/common");
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const prisma_service_1 = require("../../core/prisma/prisma.service");
const redis_service_1 = require("../../core/redis/redis.service");
const token_service_1 = require("../auth/token.service");
const chat_service_1 = require("./chat.service");
const conversation_service_1 = require("./conversation.service");
const ws_dto_1 = require("./dto/ws.dto");
const TYPING_TTL_SECONDS = 8;
let ChatGateway = ChatGateway_1 = class ChatGateway {
    tokens;
    prisma;
    redis;
    chat;
    conversations;
    logger = new common_1.Logger(ChatGateway_1.name);
    server;
    constructor(tokens, prisma, redis, chat, conversations) {
        this.tokens = tokens;
        this.prisma = prisma;
        this.redis = redis;
        this.chat = chat;
        this.conversations = conversations;
    }
    async handleConnection(client) {
        try {
            const token = client.handshake.auth?.token ??
                client.handshake.query?.token;
            if (!token)
                throw new Error('jeton absent');
            const payload = await this.tokens.verifyAccessToken(token);
            const session = await this.prisma.session.findUnique({
                where: { id: payload.sid },
                select: { revokedAt: true, expiresAt: true },
            });
            if (!session || session.revokedAt || session.expiresAt < new Date()) {
                throw new Error('session révoquée');
            }
            client.userId = payload.sub;
            client.sessionId = payload.sid;
            await client.join(`user:${payload.sub}`);
            await this.setPresence(payload.sub, true);
            client.emit('connected', { userId: payload.sub });
        }
        catch (error) {
            this.logger.debug(`Connexion refusée : ${error.message}`);
            client.emit('unauthorized', { message: 'Authentification requise' });
            client.disconnect(true);
        }
    }
    async handleDisconnect(client) {
        if (!client.userId)
            return;
        const sockets = await this.server
            .in(`user:${client.userId}`)
            .fetchSockets();
        if (sockets.length === 0) {
            await this.setPresence(client.userId, false);
        }
    }
    async onSend(client, payload) {
        if (!client.userId)
            return { error: 'unauthorized' };
        try {
            const result = await this.chat.send({
                ...payload,
                senderId: client.userId,
            });
            if (!result.duplicate) {
                this.broadcast(result.recipients ?? [], 'message:new', result.message);
            }
            return { ok: true, message: result.message, duplicate: result.duplicate };
        }
        catch (error) {
            return { ok: false, error: error.message };
        }
    }
    async onRead(client, payload) {
        if (!client.userId)
            return { error: 'unauthorized' };
        const { readAt } = await this.chat.markRead(client.userId, payload.conversationId, payload.upToMessageId);
        const access = await this.conversations.assertMember(client.userId, payload.conversationId);
        this.broadcast(access.participantIds.filter((id) => id !== client.userId), 'message:read', {
            conversationId: payload.conversationId,
            userId: client.userId,
            readAt,
        });
        return { ok: true };
    }
    async onTyping(client, payload) {
        if (!client.userId)
            return { error: 'unauthorized' };
        const access = await this.conversations.assertMember(client.userId, payload.conversationId);
        const key = `typing:${payload.conversationId}:${client.userId}`;
        if (payload.isTyping) {
            await this.redis.client.set(key, '1', 'EX', TYPING_TTL_SECONDS);
        }
        else {
            await this.redis.client.del(key);
        }
        this.broadcast(access.participantIds.filter((id) => id !== client.userId), 'typing', {
            conversationId: payload.conversationId,
            userId: client.userId,
            isTyping: payload.isTyping,
        });
        return { ok: true };
    }
    async onSync(client, payload) {
        if (!client.userId)
            return { error: 'unauthorized' };
        return this.chat.history(client.userId, payload.conversationId, {
            after: payload.afterMessageId,
        });
    }
    broadcast(userIds, event, payload) {
        for (const userId of userIds) {
            this.server.to(`user:${userId}`).emit(event, payload);
        }
    }
    async setPresence(userId, online) {
        const key = `presence:${userId}`;
        if (online) {
            await this.redis.client.set(key, '1', 'EX', 120);
        }
        else {
            await this.redis.client.del(key);
            await this.prisma.user.update({
                where: { id: userId },
                data: { lastActiveAt: new Date() },
            });
        }
    }
};
exports.ChatGateway = ChatGateway;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], ChatGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('message:send'),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __param(1, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, ws_dto_1.WsSendMessageDto]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "onSend", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('message:read'),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __param(1, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, ws_dto_1.WsMarkReadDto]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "onRead", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('typing'),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __param(1, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, ws_dto_1.WsTypingDto]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "onTyping", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('message:sync'),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __param(1, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, ws_dto_1.WsSyncDto]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "onSync", null);
exports.ChatGateway = ChatGateway = ChatGateway_1 = __decorate([
    (0, websockets_1.WebSocketGateway)({
        namespace: '/ws/chat',
        cors: { origin: '*' },
        pingInterval: 25_000,
        pingTimeout: 60_000,
    }),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    })),
    __metadata("design:paramtypes", [token_service_1.TokenService,
        prisma_service_1.PrismaService,
        redis_service_1.RedisService,
        chat_service_1.ChatService,
        conversation_service_1.ConversationService])
], ChatGateway);
//# sourceMappingURL=chat.gateway.js.map