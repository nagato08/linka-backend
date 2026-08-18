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
exports.SwipeResultResponse = exports.SwipeDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const enums_1 = require("../../../generated/prisma/enums");
class SwipeDto {
    targetId;
    source;
}
exports.SwipeDto = SwipeDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Identifiant du profil swipé' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], SwipeDto.prototype, "targetId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        enum: enums_1.SwipeSource,
        description: 'Origine du swipe : pile, écran des likes reçus, ou profil ouvert',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(enums_1.SwipeSource),
    __metadata("design:type", String)
], SwipeDto.prototype, "source", void 0);
class SwipeResultResponse {
    matched;
    matchId;
    conversationId;
}
exports.SwipeResultResponse = SwipeResultResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Vrai si le like était réciproque' }),
    __metadata("design:type", Boolean)
], SwipeResultResponse.prototype, "matched", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ nullable: true }),
    __metadata("design:type", Object)
], SwipeResultResponse.prototype, "matchId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        nullable: true,
        description: 'Conversation ouverte en même temps que le match',
    }),
    __metadata("design:type", Object)
], SwipeResultResponse.prototype, "conversationId", void 0);
//# sourceMappingURL=matching.dto.js.map