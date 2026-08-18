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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_decorators_1 = require("../auth/decorators/auth.decorators");
const pagination_dto_1 = require("../../common/dto/pagination.dto");
const chat_gateway_1 = require("./chat.gateway");
const chat_service_1 = require("./chat.service");
const conversation_service_1 = require("./conversation.service");
const chat_dto_1 = require("./dto/chat.dto");
let ChatController = class ChatController {
    chat;
    conversations;
    gateway;
    constructor(chat, conversations, gateway) {
        this.chat = chat;
        this.conversations = conversations;
        this.gateway = gateway;
    }
    list(userId, query) {
        return this.conversations.list(userId, query.cursor, query.limit);
    }
    history(userId, conversationId, query) {
        return this.chat.history(userId, conversationId, query);
    }
    async send(userId, conversationId, dto) {
        const result = await this.chat.send({
            ...dto,
            conversationId,
            senderId: userId,
        });
        if (!result.duplicate) {
            this.gateway.broadcast(result.recipients ?? [], 'message:new', result.message);
        }
        return result.message;
    }
    async markRead(userId, conversationId, dto) {
        const result = await this.chat.markRead(userId, conversationId, dto.upToMessageId);
        const access = await this.conversations.assertMember(userId, conversationId);
        this.gateway.broadcast(access.participantIds.filter((id) => id !== userId), 'message:read', { conversationId, userId, readAt: result.readAt });
        return result;
    }
    createMediaUpload(userId, conversationId, dto) {
        return this.chat.createMediaUpload(userId, conversationId, dto.contentType, dto.contentLength);
    }
    mute(userId, conversationId, dto) {
        return this.conversations.mute(userId, conversationId, dto.until ? new Date(dto.until) : null);
    }
    remove(userId, messageId) {
        return this.chat.remove(userId, messageId);
    }
};
exports.ChatController = ChatController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Lister ses conversations' }),
    __param(0, (0, auth_decorators_1.CurrentUser)('sub')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pagination_dto_1.CursorPaginationDto]),
    __metadata("design:returntype", void 0)
], ChatController.prototype, "list", null);
__decorate([
    (0, common_1.Get)(':id/messages'),
    (0, swagger_1.ApiOperation)({
        summary: 'Historique d’une conversation',
        description: "`before` remonte le fil. `after` rejoue ce qui a été manqué — c'est ce qui permet de reprendre après une coupure sans tout recharger.",
    }),
    __param(0, (0, auth_decorators_1.CurrentUser)('sub')),
    __param(1, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(2, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, chat_dto_1.HistoryQueryDto]),
    __metadata("design:returntype", void 0)
], ChatController.prototype, "history", null);
__decorate([
    (0, common_1.Post)(':id/messages'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({
        summary: 'Envoyer un message',
        description: 'Idempotent par `clientKey` : renvoyer le même message après une coupure ne le duplique pas.',
    }),
    __param(0, (0, auth_decorators_1.CurrentUser)('sub')),
    __param(1, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, chat_dto_1.SendMessageDto]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "send", null);
__decorate([
    (0, common_1.Post)(':id/read'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Marquer comme lu' }),
    __param(0, (0, auth_decorators_1.CurrentUser)('sub')),
    __param(1, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, chat_dto_1.MarkReadDto]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "markRead", null);
__decorate([
    (0, common_1.Post)(':id/media/upload-url'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({
        summary: 'Obtenir une URL de dépôt pour une image ou une note vocale',
    }),
    __param(0, (0, auth_decorators_1.CurrentUser)('sub')),
    __param(1, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, chat_dto_1.ChatMediaUploadDto]),
    __metadata("design:returntype", void 0)
], ChatController.prototype, "createMediaUpload", null);
__decorate([
    (0, common_1.Post)(':id/mute'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, swagger_1.ApiOperation)({ summary: 'Mettre la conversation en silence' }),
    __param(0, (0, auth_decorators_1.CurrentUser)('sub')),
    __param(1, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, chat_dto_1.MuteDto]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "mute", null);
__decorate([
    (0, common_1.Delete)('messages/:messageId'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, swagger_1.ApiOperation)({
        summary: 'Supprimer un message',
        description: 'Le contenu est réellement effacé, média compris — la suppression sert souvent à retirer une photo intime.',
    }),
    __param(0, (0, auth_decorators_1.CurrentUser)('sub')),
    __param(1, (0, common_1.Param)('messageId', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "remove", null);
exports.ChatController = ChatController = __decorate([
    (0, swagger_1.ApiTags)('chat'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('conversations'),
    __metadata("design:paramtypes", [chat_service_1.ChatService,
        conversation_service_1.ConversationService,
        chat_gateway_1.ChatGateway])
], ChatController);
//# sourceMappingURL=chat.controller.js.map