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
exports.NotificationController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_decorators_1 = require("../auth/decorators/auth.decorators");
const notification_service_1 = require("./notification.service");
const notification_dto_1 = require("./dto/notification.dto");
let NotificationController = class NotificationController {
    notifications;
    constructor(notifications) {
        this.notifications = notifications;
    }
    list(userId) {
        return this.notifications.list(userId);
    }
    async unread(userId) {
        return { count: await this.notifications.unreadCount(userId) };
    }
    markAllRead(userId) {
        return this.notifications.markAllRead(userId);
    }
    registerToken(userId, dto) {
        return this.notifications.registerToken(userId, dto.token, dto.platform, dto.deviceId);
    }
    removeToken(userId, dto) {
        return this.notifications.removeToken(userId, dto.token);
    }
    preferences(userId) {
        return this.notifications.getPreferences(userId);
    }
    updatePreferences(userId, dto) {
        return this.notifications.updatePreferences(userId, dto);
    }
};
exports.NotificationController = NotificationController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Centre de notifications',
        description: 'Les notifications sont enregistrées même quand le push est coupé : les désactiver ne doit pas revenir à ne plus rien voir.',
    }),
    __param(0, (0, auth_decorators_1.CurrentUser)('sub')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], NotificationController.prototype, "list", null);
__decorate([
    (0, common_1.Get)('unread-count'),
    (0, swagger_1.ApiOperation)({ summary: 'Nombre de notifications non lues' }),
    __param(0, (0, auth_decorators_1.CurrentUser)('sub')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "unread", null);
__decorate([
    (0, common_1.Post)('read-all'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Tout marquer comme lu' }),
    __param(0, (0, auth_decorators_1.CurrentUser)('sub')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], NotificationController.prototype, "markAllRead", null);
__decorate([
    (0, common_1.Post)('tokens'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, swagger_1.ApiOperation)({
        summary: 'Enregistrer un jeton push',
        description: 'À rappeler à chaque démarrage : Firebase renouvelle les jetons sans prévenir.',
    }),
    __param(0, (0, auth_decorators_1.CurrentUser)('sub')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, notification_dto_1.RegisterPushTokenDto]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "registerToken", null);
__decorate([
    (0, common_1.Delete)('tokens'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, swagger_1.ApiOperation)({ summary: 'Retirer un jeton, à la déconnexion' }),
    __param(0, (0, auth_decorators_1.CurrentUser)('sub')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, notification_dto_1.RemovePushTokenDto]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "removeToken", null);
__decorate([
    (0, common_1.Get)('preferences'),
    (0, swagger_1.ApiOperation)({ summary: 'Préférences de notification' }),
    __param(0, (0, auth_decorators_1.CurrentUser)('sub')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], NotificationController.prototype, "preferences", null);
__decorate([
    (0, common_1.Patch)('preferences'),
    (0, swagger_1.ApiOperation)({
        summary: 'Modifier ses préférences',
        description: 'Les heures calmes s’expriment en minutes depuis minuit et peuvent enjamber minuit — 1320 à 420 pour 22 h–7 h.',
    }),
    __param(0, (0, auth_decorators_1.CurrentUser)('sub')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, notification_dto_1.UpdateNotificationPreferencesDto]),
    __metadata("design:returntype", void 0)
], NotificationController.prototype, "updatePreferences", null);
exports.NotificationController = NotificationController = __decorate([
    (0, swagger_1.ApiTags)('notifications'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('notifications'),
    __metadata("design:paramtypes", [notification_service_1.NotificationService])
], NotificationController);
//# sourceMappingURL=notification.controller.js.map