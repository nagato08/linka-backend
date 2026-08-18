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
exports.WsSyncDto = exports.WsTypingDto = exports.WsMarkReadDto = exports.WsSendMessageDto = void 0;
const class_validator_1 = require("class-validator");
const chat_dto_1 = require("./chat.dto");
class WsSendMessageDto extends chat_dto_1.SendMessageDto {
    conversationId;
}
exports.WsSendMessageDto = WsSendMessageDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], WsSendMessageDto.prototype, "conversationId", void 0);
class WsMarkReadDto {
    conversationId;
    upToMessageId;
}
exports.WsMarkReadDto = WsMarkReadDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], WsMarkReadDto.prototype, "conversationId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], WsMarkReadDto.prototype, "upToMessageId", void 0);
class WsTypingDto {
    conversationId;
    isTyping;
}
exports.WsTypingDto = WsTypingDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], WsTypingDto.prototype, "conversationId", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], WsTypingDto.prototype, "isTyping", void 0);
class WsSyncDto {
    conversationId;
    afterMessageId;
}
exports.WsSyncDto = WsSyncDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], WsSyncDto.prototype, "conversationId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], WsSyncDto.prototype, "afterMessageId", void 0);
//# sourceMappingURL=ws.dto.js.map