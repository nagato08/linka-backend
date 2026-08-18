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
exports.UploadTicketResponse = exports.ReorderPhotosDto = exports.CreateUploadDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const media_service_1 = require("../media.service");
class CreateUploadDto {
    contentType;
    contentLength;
}
exports.CreateUploadDto = CreateUploadDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'image/jpeg' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUploadDto.prototype, "contentType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Taille du fichier en octets, intégrée à la signature',
        example: 2_400_000,
    }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(10 * 1024 * 1024),
    __metadata("design:type", Number)
], CreateUploadDto.prototype, "contentLength", void 0);
class ReorderPhotosDto {
    photoIds;
}
exports.ReorderPhotosDto = ReorderPhotosDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Identifiants dans le nouvel ordre ; le premier est la photo principale',
        type: [String],
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(1),
    (0, class_validator_1.ArrayMaxSize)(media_service_1.MAX_PHOTOS),
    (0, class_validator_1.IsUUID)('all', { each: true }),
    __metadata("design:type", Array)
], ReorderPhotosDto.prototype, "photoIds", void 0);
class UploadTicketResponse {
    photoId;
    uploadUrl;
    expiresIn;
}
exports.UploadTicketResponse = UploadTicketResponse;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UploadTicketResponse.prototype, "photoId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'URL de dépôt direct vers le stockage objet' }),
    __metadata("design:type", String)
], UploadTicketResponse.prototype, "uploadUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Validité de l’URL, en secondes' }),
    __metadata("design:type", Number)
], UploadTicketResponse.prototype, "expiresIn", void 0);
//# sourceMappingURL=media.dto.js.map