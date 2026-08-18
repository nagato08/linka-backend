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
exports.UpdateNotificationPreferencesDto = exports.RemovePushTokenDto = exports.RegisterPushTokenDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const enums_1 = require("../../../generated/prisma/enums");
class RegisterPushTokenDto {
    token;
    platform;
    deviceId;
}
exports.RegisterPushTokenDto = RegisterPushTokenDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Jeton FCM fourni par le client' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(10, 255),
    __metadata("design:type", String)
], RegisterPushTokenDto.prototype, "token", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: enums_1.DevicePlatform }),
    (0, class_validator_1.IsEnum)(enums_1.DevicePlatform),
    __metadata("design:type", String)
], RegisterPushTokenDto.prototype, "platform", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], RegisterPushTokenDto.prototype, "deviceId", void 0);
class RemovePushTokenDto {
    token;
}
exports.RemovePushTokenDto = RemovePushTokenDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(10, 255),
    __metadata("design:type", String)
], RemovePushTokenDto.prototype, "token", void 0);
class UpdateNotificationPreferencesDto {
    newMatch;
    newMessage;
    newLike;
    events;
    marketing;
    quietHoursStart;
    quietHoursEnd;
    timezone;
}
exports.UpdateNotificationPreferencesDto = UpdateNotificationPreferencesDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateNotificationPreferencesDto.prototype, "newMatch", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateNotificationPreferencesDto.prototype, "newMessage", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateNotificationPreferencesDto.prototype, "newLike", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateNotificationPreferencesDto.prototype, "events", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateNotificationPreferencesDto.prototype, "marketing", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Début des heures calmes, en minutes depuis minuit. 1320 = 22 h.',
        minimum: 0,
        maximum: 1439,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(1439),
    __metadata("design:type", Number)
], UpdateNotificationPreferencesDto.prototype, "quietHoursStart", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Fin des heures calmes. 420 = 7 h. La plage peut enjamber minuit.',
        minimum: 0,
        maximum: 1439,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(1439),
    __metadata("design:type", Number)
], UpdateNotificationPreferencesDto.prototype, "quietHoursEnd", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Africa/Douala' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(3, 50),
    __metadata("design:type", String)
], UpdateNotificationPreferencesDto.prototype, "timezone", void 0);
//# sourceMappingURL=notification.dto.js.map