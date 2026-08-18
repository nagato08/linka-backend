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
exports.ProfileController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_decorators_1 = require("../auth/decorators/auth.decorators");
const profile_service_1 = require("./profile.service");
const profile_dto_1 = require("./dto/profile.dto");
let ProfileController = class ProfileController {
    profiles;
    constructor(profiles) {
        this.profiles = profiles;
    }
    getOwn(userId) {
        return this.profiles.getOwn(userId);
    }
    create(userId, dto) {
        return this.profiles.create(userId, dto);
    }
    update(userId, dto) {
        return this.profiles.update(userId, dto);
    }
    updateLocation(userId, dto) {
        return this.profiles.updateLocation(userId, dto.latitude, dto.longitude);
    }
    updatePreferences(userId, dto) {
        return this.profiles.updatePreferences(userId, dto);
    }
    updatePrivacy(userId, dto) {
        return this.profiles.updatePrivacy(userId, dto);
    }
    getPublic(viewerId, targetUserId) {
        return this.profiles.getPublic(viewerId, targetUserId);
    }
    listInterests() {
        return this.profiles.listInterests();
    }
    listPrompts() {
        return this.profiles.listPrompts();
    }
};
exports.ProfileController = ProfileController;
__decorate([
    (0, common_1.Get)('me/profile'),
    (0, swagger_1.ApiOperation)({
        summary: 'Consulter son profil',
        description: "Vue complète, avec le rapport de complétude et l'orientation déchiffrée — accessible au seul propriétaire.",
    }),
    __param(0, (0, auth_decorators_1.CurrentUser)('sub')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProfileController.prototype, "getOwn", null);
__decorate([
    (0, common_1.Post)('me/profile'),
    (0, swagger_1.ApiOperation)({
        summary: 'Créer son profil',
        description: "Un seul appel pour tout l'onboarding. La majorité est vérifiée côté serveur. Le compte passe en ACTIVE dès que le profil est exploitable.",
    }),
    __param(0, (0, auth_decorators_1.CurrentUser)('sub')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, profile_dto_1.CreateProfileDto]),
    __metadata("design:returntype", void 0)
], ProfileController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    (0, swagger_1.ApiOperation)({ summary: 'Modifier son profil' }),
    __param(0, (0, auth_decorators_1.CurrentUser)('sub')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, profile_dto_1.UpdateProfileDto]),
    __metadata("design:returntype", void 0)
], ProfileController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)('me/location'),
    (0, swagger_1.ApiOperation)({ summary: 'Mettre à jour sa position' }),
    __param(0, (0, auth_decorators_1.CurrentUser)('sub')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, profile_dto_1.UpdateLocationDto]),
    __metadata("design:returntype", void 0)
], ProfileController.prototype, "updateLocation", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    (0, swagger_1.ApiOperation)({ summary: 'Modifier ses filtres de recherche' }),
    __param(0, (0, auth_decorators_1.CurrentUser)('sub')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, profile_dto_1.UpdatePreferencesDto]),
    __metadata("design:returntype", void 0)
], ProfileController.prototype, "updatePreferences", null);
__decorate([
    (0, common_1.Patch)('me/privacy'),
    (0, swagger_1.ApiOperation)({ summary: 'Modifier ses réglages de visibilité' }),
    __param(0, (0, auth_decorators_1.CurrentUser)('sub')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, profile_dto_1.UpdatePrivacyDto]),
    __metadata("design:returntype", void 0)
], ProfileController.prototype, "updatePrivacy", null);
__decorate([
    (0, common_1.Get)('profiles/:userId'),
    (0, swagger_1.ApiOperation)({
        summary: 'Consulter le profil public d’un autre utilisateur',
        description: "L'orientation n'est jamais exposée. Les photos non modérées non plus.",
    }),
    __param(0, (0, auth_decorators_1.CurrentUser)('sub')),
    __param(1, (0, common_1.Param)('userId', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ProfileController.prototype, "getPublic", null);
__decorate([
    (0, common_1.Get)('interests'),
    (0, swagger_1.ApiOperation)({ summary: 'Référentiel des centres d’intérêt' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProfileController.prototype, "listInterests", null);
__decorate([
    (0, common_1.Get)('prompts'),
    (0, swagger_1.ApiOperation)({ summary: 'Référentiel des questions de profil' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProfileController.prototype, "listPrompts", null);
exports.ProfileController = ProfileController = __decorate([
    (0, swagger_1.ApiTags)('profile'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [profile_service_1.ProfileService])
], ProfileController);
//# sourceMappingURL=profile.controller.js.map