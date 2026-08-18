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
exports.MuteDto = exports.ChatMediaUploadDto = exports.MarkReadDto = exports.HistoryQueryDto = exports.SendMessageDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const enums_1 = require("../../../generated/prisma/enums");
class SendMessageDto {
    clientKey;
    type;
    body;
    mediaKey;
    mediaMimeType;
    mediaBytes;
    mediaDuration;
    replyToId;
}
exports.SendMessageDto = SendMessageDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Identifiant généré par le client. Rend le renvoi après coupure inoffensif : le serveur reconnaît le doublon au lieu de créer un second message.',
        example: '9f2c1e7a-4b8d-4c2e-9a1f-2b3c4d5e6f70',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(8, 64),
    __metadata("design:type", String)
], SendMessageDto.prototype, "clientKey", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: enums_1.MessageType, default: enums_1.MessageType.TEXT }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(enums_1.MessageType),
    __metadata("design:type", String)
], SendMessageDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ maxLength: 2000 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 2000),
    __metadata("design:type", String)
], SendMessageDto.prototype, "body", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Clé renvoyée par /media/upload-url' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 255),
    __metadata("design:type", String)
], SendMessageDto.prototype, "mediaKey", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 100),
    __metadata("design:type", String)
], SendMessageDto.prototype, "mediaMimeType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Taille en octets' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], SendMessageDto.prototype, "mediaBytes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Durée en secondes, pour les notes vocales',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(120),
    __metadata("design:type", Number)
], SendMessageDto.prototype, "mediaDuration", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], SendMessageDto.prototype, "replyToId", void 0);
class HistoryQueryDto {
    before;
    after;
    limit = 30;
}
exports.HistoryQueryDto = HistoryQueryDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Remonter le fil : messages antérieurs à cet identifiant',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], HistoryQueryDto.prototype, "before", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Reprise après coupure : messages postérieurs à cet identifiant, dans l’ordre chronologique',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], HistoryQueryDto.prototype, "after", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ minimum: 1, maximum: 100, default: 30 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(100),
    __metadata("design:type", Object)
], HistoryQueryDto.prototype, "limit", void 0);
class MarkReadDto {
    upToMessageId;
}
exports.MarkReadDto = MarkReadDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Marquer comme lu jusqu’à ce message inclus',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], MarkReadDto.prototype, "upToMessageId", void 0);
class ChatMediaUploadDto {
    contentType;
    contentLength;
}
exports.ChatMediaUploadDto = ChatMediaUploadDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'audio/mp4' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ChatMediaUploadDto.prototype, "contentType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 240000 }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(8388608),
    __metadata("design:type", Number)
], ChatMediaUploadDto.prototype, "contentLength", void 0);
class MuteDto {
    until;
}
exports.MuteDto = MuteDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Date de fin du silence. Absente pour réactiver.',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MuteDto.prototype, "until", void 0);
//# sourceMappingURL=chat.dto.js.map