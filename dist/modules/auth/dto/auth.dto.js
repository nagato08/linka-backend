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
exports.AuthTokensResponse = exports.OtpRequestedResponse = exports.ValidateReferralDto = exports.RefreshTokenDto = exports.VerifyOtpDto = exports.RequestOtpDto = exports.DeviceInfoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const enums_1 = require("../../../generated/prisma/enums");
class DeviceInfoDto {
    platform;
    fingerprint;
    model;
    osVersion;
    appVersion;
    integrityToken;
}
exports.DeviceInfoDto = DeviceInfoDto;
__decorate([
    (0, swagger_1.ApiProperty)({ enum: enums_1.DevicePlatform }),
    (0, class_validator_1.IsEnum)(enums_1.DevicePlatform),
    __metadata("design:type", String)
], DeviceInfoDto.prototype, "platform", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Empreinte stable de l'appareil, hachée côté client",
        minLength: 16,
        maxLength: 64,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(16, 64),
    __metadata("design:type", String)
], DeviceInfoDto.prototype, "fingerprint", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Tecno Spark 10' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 100),
    __metadata("design:type", String)
], DeviceInfoDto.prototype, "model", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Android 13' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], DeviceInfoDto.prototype, "osVersion", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '1.0.0' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 20),
    __metadata("design:type", String)
], DeviceInfoDto.prototype, "appVersion", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Jeton Play Integrity (Android) ou DeviceCheck (iOS)',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DeviceInfoDto.prototype, "integrityToken", void 0);
class RequestOtpDto {
    email;
    locale;
}
exports.RequestOtpDto = RequestOtpDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Adresse e-mail. Les domaines jetables sont refusés.',
        example: 'aicha@example.com',
    }),
    (0, class_validator_1.IsEmail)({}, { message: 'Adresse e-mail invalide' }),
    (0, class_validator_1.Length)(5, 255),
    __metadata("design:type", String)
], RequestOtpDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: enums_1.AppLocale, default: enums_1.AppLocale.FR }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(enums_1.AppLocale),
    __metadata("design:type", String)
], RequestOtpDto.prototype, "locale", void 0);
class VerifyOtpDto {
    email;
    code;
    device;
    referralCode;
    locale;
}
exports.VerifyOtpDto = VerifyOtpDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'aicha@example.com' }),
    (0, class_validator_1.IsEmail)({}, { message: 'Adresse e-mail invalide' }),
    __metadata("design:type", String)
], VerifyOtpDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '123456', minLength: 6, maxLength: 6 }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^\d{6}$/, { message: 'Le code doit comporter six chiffres' }),
    __metadata("design:type", String)
], VerifyOtpDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: DeviceInfoDto }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => DeviceInfoDto),
    __metadata("design:type", DeviceInfoDto)
], VerifyOtpDto.prototype, "device", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Code de parrainage, six caractères',
        example: 'K7M2PQ',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^[A-Za-z0-9]{6}$/, { message: 'Code de parrainage invalide' }),
    __metadata("design:type", String)
], VerifyOtpDto.prototype, "referralCode", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: enums_1.AppLocale }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(enums_1.AppLocale),
    __metadata("design:type", String)
], VerifyOtpDto.prototype, "locale", void 0);
class RefreshTokenDto {
    refreshToken;
}
exports.RefreshTokenDto = RefreshTokenDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], RefreshTokenDto.prototype, "refreshToken", void 0);
class ValidateReferralDto {
    code;
}
exports.ValidateReferralDto = ValidateReferralDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'K7M2PQ' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^[A-Za-z0-9]{6}$/, { message: 'Code de parrainage invalide' }),
    __metadata("design:type", String)
], ValidateReferralDto.prototype, "code", void 0);
class OtpRequestedResponse {
    email;
    expiresAt;
}
exports.OtpRequestedResponse = OtpRequestedResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Adresse masquée, à réafficher au client' }),
    __metadata("design:type", String)
], OtpRequestedResponse.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], OtpRequestedResponse.prototype, "expiresAt", void 0);
class AuthTokensResponse {
    accessToken;
    refreshToken;
    expiresIn;
    status;
    isNewAccount;
}
exports.AuthTokensResponse = AuthTokensResponse;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], AuthTokensResponse.prototype, "accessToken", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], AuthTokensResponse.prototype, "refreshToken", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Durée de validité du jeton d'accès, en secondes",
    }),
    __metadata("design:type", Number)
], AuthTokensResponse.prototype, "expiresIn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "PENDING_PROFILE tant que le profil n'est pas complété, ACTIVE ensuite",
    }),
    __metadata("design:type", String)
], AuthTokensResponse.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Vrai si le compte vient d’être créé' }),
    __metadata("design:type", Boolean)
], AuthTokensResponse.prototype, "isNewAccount", void 0);
//# sourceMappingURL=auth.dto.js.map