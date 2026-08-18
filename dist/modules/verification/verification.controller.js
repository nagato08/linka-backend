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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerificationController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_decorators_1 = require("../auth/decorators/auth.decorators");
const verification_service_1 = require("./verification.service");
const verification_dto_1 = require("./dto/verification.dto");
let VerificationController = class VerificationController {
    verification;
    constructor(verification) {
        this.verification = verification;
    }
    status(userId) {
        return this.verification.status(userId);
    }
    start(userId) {
        return this.verification.start(userId);
    }
    createUploadUrl(userId, verificationId, dto) {
        return this.verification.createUploadUrl(userId, verificationId, dto.contentType, dto.contentLength);
    }
    submit(userId, verificationId) {
        return this.verification.submit(userId, verificationId);
    }
};
exports.VerificationController = VerificationController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'État de vérification du profil' }),
    __param(0, (0, auth_decorators_1.CurrentUser)('sub')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VerificationController.prototype, "status", null);
__decorate([
    (0, common_1.Post)('start'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({
        summary: 'Démarrer une vérification',
        description: 'Renvoie une pose tirée au sort. Le selfie sera comparé aux photos du profil : c’est cette comparaison qui attrape le catfishing.',
    }),
    __param(0, (0, auth_decorators_1.CurrentUser)('sub')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VerificationController.prototype, "start", null);
__decorate([
    (0, common_1.Post)(':id/upload-url'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({ summary: 'Obtenir une URL de dépôt pour la capture' }),
    __param(0, (0, auth_decorators_1.CurrentUser)('sub')),
    __param(1, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, verification_dto_1.VerificationUploadDto]),
    __metadata("design:returntype", void 0)
], VerificationController.prototype, "createUploadUrl", null);
__decorate([
    (0, common_1.Post)(':id/submit'),
    (0, common_1.HttpCode)(common_1.HttpStatus.ACCEPTED),
    (0, swagger_1.ApiOperation)({
        summary: 'Soumettre la capture',
        description: 'La vidéo est supprimée dès le traitement terminé. Seul un vecteur non réversible est conservé.',
    }),
    __param(0, (0, auth_decorators_1.CurrentUser)('sub')),
    __param(1, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], VerificationController.prototype, "submit", null);
exports.VerificationController = VerificationController = __decorate([
    (0, swagger_1.ApiTags)('verification'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('verification'),
    __metadata("design:paramtypes", [verification_service_1.VerificationService])
], VerificationController);
//# sourceMappingURL=verification.controller.js.map