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
exports.ModerationDecisionDto = exports.ModerationQueueDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const enums_1 = require("../../../generated/prisma/enums");
class ModerationQueueDto {
    type;
    limit = 20;
    cursor;
}
exports.ModerationQueueDto = ModerationQueueDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: enums_1.ModerationTaskType }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(enums_1.ModerationTaskType),
    __metadata("design:type", String)
], ModerationQueueDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ minimum: 1, maximum: 50, default: 20 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(50),
    __metadata("design:type", Object)
], ModerationQueueDto.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ModerationQueueDto.prototype, "cursor", void 0);
class ModerationDecisionDto {
    decision;
    notes;
    photoReason;
}
exports.ModerationDecisionDto = ModerationDecisionDto;
__decorate([
    (0, swagger_1.ApiProperty)({ enum: enums_1.ModerationDecision }),
    (0, class_validator_1.IsEnum)(enums_1.ModerationDecision),
    __metadata("design:type", String)
], ModerationDecisionDto.prototype, "decision", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ maxLength: 1000 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 1000),
    __metadata("design:type", String)
], ModerationDecisionDto.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        enum: enums_1.PhotoRejectionReason,
        description: 'Motif de rejet, pour les tâches photo',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(enums_1.PhotoRejectionReason),
    __metadata("design:type", String)
], ModerationDecisionDto.prototype, "photoReason", void 0);
//# sourceMappingURL=admin.dto.js.map