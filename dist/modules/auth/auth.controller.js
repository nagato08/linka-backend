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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_service_1 = require("./auth.service");
const referral_service_1 = require("./referral.service");
const auth_decorators_1 = require("./decorators/auth.decorators");
const auth_dto_1 = require("./dto/auth.dto");
let AuthController = class AuthController {
    auth;
    referrals;
    constructor(auth, referrals) {
        this.auth = auth;
        this.referrals = referrals;
    }
    requestOtp(dto, request) {
        return this.auth.requestOtp(dto.email, dto.locale, this.contextOf(request));
    }
    async verifyOtp(dto, request) {
        const result = await this.auth.verifyOtp(dto, this.contextOf(request));
        return { ...result, status: result.status };
    }
    refresh(dto, request) {
        return this.auth.refresh(dto.refreshToken, this.contextOf(request));
    }
    validateReferral(dto) {
        return this.referrals.validateCode(dto.code);
    }
    logout(sessionId) {
        return this.auth.logout(sessionId);
    }
    logoutAll(userId) {
        return this.auth.logoutAll(userId);
    }
    listSessions(userId, sessionId) {
        return this.auth.listSessions(userId, sessionId);
    }
    contextOf(request) {
        const forwarded = request.headers['x-forwarded-for'];
        const ipAddress = (Array.isArray(forwarded) ? forwarded[0] : forwarded)
            ?.split(',')[0]
            ?.trim() ?? request.ip;
        return {
            ipAddress,
            userAgent: request.headers['user-agent'],
        };
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, auth_decorators_1.Public)(),
    (0, common_1.Post)('otp/request'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: 'Envoyer un code de vérification par e-mail',
        description: "La réponse est identique que l'adresse corresponde ou non à un compte existant : révéler qu'une personne est inscrite en ferait un outil de harcèlement.",
    }),
    (0, swagger_1.ApiResponse)({ status: 200, type: auth_dto_1.OtpRequestedResponse }),
    (0, swagger_1.ApiResponse)({ status: 429, description: 'Plafond de demandes atteint' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.RequestOtpDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "requestOtp", null);
__decorate([
    (0, auth_decorators_1.Public)(),
    (0, common_1.Post)('otp/verify'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: 'Vérifier le code et ouvrir une session',
        description: "Crée le compte s'il n'existe pas. Le statut renvoyé indique si le profil reste à compléter.",
    }),
    (0, swagger_1.ApiResponse)({ status: 200, type: auth_dto_1.AuthTokensResponse }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.VerifyOtpDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "verifyOtp", null);
__decorate([
    (0, auth_decorators_1.Public)(),
    (0, common_1.Post)('refresh'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: 'Renouveler les jetons',
        description: 'Rotation systématique. Un jeton déjà utilisé déclenche la révocation de toutes les sessions du compte.',
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.RefreshTokenDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "refresh", null);
__decorate([
    (0, auth_decorators_1.Public)(),
    (0, common_1.Post)('referral/validate'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Vérifier un code de parrainage avant inscription' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.ValidateReferralDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "validateReferral", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)('logout'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, swagger_1.ApiOperation)({ summary: 'Fermer la session courante' }),
    __param(0, (0, auth_decorators_1.CurrentUser)('sid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Delete)('sessions'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Fermer toutes les sessions du compte' }),
    __param(0, (0, auth_decorators_1.CurrentUser)('sub')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "logoutAll", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Get)('sessions'),
    (0, swagger_1.ApiOperation)({ summary: 'Lister les appareils connectés' }),
    __param(0, (0, auth_decorators_1.CurrentUser)('sub')),
    __param(1, (0, auth_decorators_1.CurrentUser)('sid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "listSessions", null);
exports.AuthController = AuthController = __decorate([
    (0, swagger_1.ApiTags)('auth'),
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        referral_service_1.ReferralService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map