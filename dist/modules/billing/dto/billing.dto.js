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
exports.ActivateBoostDto = exports.ProductQueryDto = exports.PurchaseWithCreditsDto = exports.InitiatePaymentDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const enums_1 = require("../../../generated/prisma/enums");
class InitiatePaymentDto {
    sku;
    payerPhone;
    idempotencyKey;
}
exports.InitiatePaymentDto = InitiatePaymentDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'coins_3000' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 60),
    __metadata("design:type", String)
], InitiatePaymentDto.prototype, "sku", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Numéro mobile money. MTN ou Orange uniquement.',
        example: '670000001',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(9, 20),
    __metadata("design:type", String)
], InitiatePaymentDto.prototype, "payerPhone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Clé fournie par le client. Empêche le double débit quand le réseau coupe entre l’envoi et la réponse.',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(8, 64),
    __metadata("design:type", String)
], InitiatePaymentDto.prototype, "idempotencyKey", void 0);
class PurchaseWithCreditsDto {
    sku;
}
exports.PurchaseWithCreditsDto = PurchaseWithCreditsDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'superlikes_5' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 60),
    __metadata("design:type", String)
], PurchaseWithCreditsDto.prototype, "sku", void 0);
class ProductQueryDto {
    type;
}
exports.ProductQueryDto = ProductQueryDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: enums_1.ProductType }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(enums_1.ProductType),
    __metadata("design:type", String)
], ProductQueryDto.prototype, "type", void 0);
class ActivateBoostDto {
    sku;
}
exports.ActivateBoostDto = ActivateBoostDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'boost_1h' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 60),
    __metadata("design:type", String)
], ActivateBoostDto.prototype, "sku", void 0);
//# sourceMappingURL=billing.dto.js.map