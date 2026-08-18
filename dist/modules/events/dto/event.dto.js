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
exports.SponsorEventDto = exports.ConfirmCoverDto = exports.CoverUploadDto = exports.NearbyEventsDto = exports.CancelEventDto = exports.CheckInDto = exports.RespondRequestDto = exports.JoinEventDto = exports.CreateEventDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const enums_1 = require("../../../generated/prisma/enums");
class CreateEventDto {
    title;
    description;
    category;
    latitude;
    longitude;
    locationLabel;
    startsAt;
    endsAt;
    capacity;
    seatsWomen;
    seatsMen;
    costAmount;
}
exports.CreateEventDto = CreateEventDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Randonnée au mont Fébé' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(5, 120),
    __metadata("design:type", String)
], CreateEventDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ maxLength: 1500 }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(20, 1500),
    __metadata("design:type", String)
], CreateEventDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: enums_1.EventCategory }),
    (0, class_validator_1.IsEnum)(enums_1.EventCategory),
    __metadata("design:type", String)
], CreateEventDto.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 4.0511 }),
    (0, class_validator_1.IsLatitude)(),
    __metadata("design:type", Number)
], CreateEventDto.prototype, "latitude", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 9.7679 }),
    (0, class_validator_1.IsLongitude)(),
    __metadata("design:type", Number)
], CreateEventDto.prototype, "longitude", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Bonapriso, devant la pharmacie' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(3, 200),
    __metadata("design:type", String)
], CreateEventDto.prototype, "locationLabel", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2026-09-15T15:00:00Z' }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateEventDto.prototype, "startsAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateEventDto.prototype, "endsAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ minimum: 2, maximum: 100 }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(2),
    (0, class_validator_1.Max)(100),
    __metadata("design:type", Number)
], CreateEventDto.prototype, "capacity", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Places réservées aux femmes. Sans répartition, un événement se remplit d’hommes en quelques minutes.',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(100),
    __metadata("design:type", Number)
], CreateEventDto.prototype, "seatsWomen", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Places réservées aux hommes' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(100),
    __metadata("design:type", Number)
], CreateEventDto.prototype, "seatsMen", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Coût indicatif en XAF, réglé sur place',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateEventDto.prototype, "costAmount", void 0);
class JoinEventDto {
    message;
}
exports.JoinEventDto = JoinEventDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ maxLength: 300 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 300),
    __metadata("design:type", String)
], JoinEventDto.prototype, "message", void 0);
class RespondRequestDto {
    accept;
}
exports.RespondRequestDto = RespondRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'true pour accepter, false pour refuser' }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], RespondRequestDto.prototype, "accept", void 0);
class CheckInDto {
    latitude;
    longitude;
}
exports.CheckInDto = CheckInDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsLatitude)(),
    __metadata("design:type", Number)
], CheckInDto.prototype, "latitude", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsLongitude)(),
    __metadata("design:type", Number)
], CheckInDto.prototype, "longitude", void 0);
class CancelEventDto {
    reason;
}
exports.CancelEventDto = CancelEventDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ maxLength: 300 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 300),
    __metadata("design:type", String)
], CancelEventDto.prototype, "reason", void 0);
class NearbyEventsDto {
    radiusKm;
    category;
    limit;
}
exports.NearbyEventsDto = NearbyEventsDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ minimum: 1, maximum: 500, default: 50 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(500),
    __metadata("design:type", Number)
], NearbyEventsDto.prototype, "radiusKm", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: enums_1.EventCategory }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(enums_1.EventCategory),
    __metadata("design:type", String)
], NearbyEventsDto.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ minimum: 1, maximum: 50, default: 20 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(50),
    __metadata("design:type", Number)
], NearbyEventsDto.prototype, "limit", void 0);
class CoverUploadDto {
    contentType;
    contentLength;
}
exports.CoverUploadDto = CoverUploadDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'image/jpeg' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(3, 64),
    __metadata("design:type", String)
], CoverUploadDto.prototype, "contentType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Taille du fichier en octets' }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], CoverUploadDto.prototype, "contentLength", void 0);
class ConfirmCoverDto {
    uploadKey;
}
exports.ConfirmCoverDto = ConfirmCoverDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Clé renvoyée par la demande de dépôt' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(10, 255),
    __metadata("design:type", String)
], ConfirmCoverDto.prototype, "uploadKey", void 0);
class SponsorEventDto {
    isSponsored;
    sponsorName;
}
exports.SponsorEventDto = SponsorEventDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], SponsorEventDto.prototype, "isSponsored", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ maxLength: 100 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 100),
    __metadata("design:type", String)
], SponsorEventDto.prototype, "sponsorName", void 0);
//# sourceMappingURL=event.dto.js.map