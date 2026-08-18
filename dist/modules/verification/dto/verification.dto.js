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
exports.StartVerificationResponse = exports.VerificationUploadDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class VerificationUploadDto {
    contentType;
    contentLength;
}
exports.VerificationUploadDto = VerificationUploadDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'video/mp4' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], VerificationUploadDto.prototype, "contentType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 2400000 }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(15728640),
    __metadata("design:type", Number)
], VerificationUploadDto.prototype, "contentLength", void 0);
class StartVerificationResponse {
    verificationId;
    pose;
    expiresAt;
}
exports.StartVerificationResponse = StartVerificationResponse;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], StartVerificationResponse.prototype, "verificationId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Pose tirée au sort. L’aléa est ce qui empêche de rejouer une vidéo enregistrée à l’avance.',
        example: 'TURN_HEAD_LEFT',
    }),
    __metadata("design:type", String)
], StartVerificationResponse.prototype, "pose", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], StartVerificationResponse.prototype, "expiresAt", void 0);
//# sourceMappingURL=verification.dto.js.map