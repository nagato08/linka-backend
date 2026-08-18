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
exports.BlockContactsDto = exports.BlockUserDto = exports.ReportUserDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const enums_1 = require("../../../generated/prisma/enums");
class ReportUserDto {
    reportedUserId;
    reason;
    details;
    messageId;
    evidenceKeys;
}
exports.ReportUserDto = ReportUserDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ReportUserDto.prototype, "reportedUserId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: enums_1.ReportReason }),
    (0, class_validator_1.IsEnum)(enums_1.ReportReason),
    __metadata("design:type", String)
], ReportUserDto.prototype, "reason", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ maxLength: 1000 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 1000),
    __metadata("design:type", String)
], ReportUserDto.prototype, "details", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Message incriminé' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ReportUserDto.prototype, "messageId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Clés des captures fournies par le signalant',
        type: [String],
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMaxSize)(5),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], ReportUserDto.prototype, "evidenceKeys", void 0);
class BlockUserDto {
    userId;
    reason;
}
exports.BlockUserDto = BlockUserDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], BlockUserDto.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ maxLength: 200 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 200),
    __metadata("design:type", String)
], BlockUserDto.prototype, "reason", void 0);
class BlockContactsDto {
    phoneNumbers;
}
exports.BlockContactsDto = BlockContactsDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Numéros du carnet d’adresses. Seuls des condensats sont conservés — aucun numéro n’est stocké.',
        type: [String],
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(1),
    (0, class_validator_1.ArrayMaxSize)(500),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], BlockContactsDto.prototype, "phoneNumbers", void 0);
//# sourceMappingURL=safety.dto.js.map