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
exports.AccountController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_decorators_1 = require("../auth/decorators/auth.decorators");
const account_service_1 = require("./account.service");
const account_dto_1 = require("./dto/account.dto");
let AccountController = class AccountController {
    account;
    constructor(account) {
        this.account = account;
    }
    requestDeletion(userId, dto) {
        return this.account.requestDeletion(userId, dto.reason);
    }
    cancelDeletion(userId) {
        return this.account.cancelDeletion(userId);
    }
    exportData(userId) {
        return this.account.exportData(userId);
    }
};
exports.AccountController = AccountController;
__decorate([
    (0, common_1.Delete)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: 'Supprimer son compte',
        description: 'Exigence formelle des stores pour la catégorie rencontre. Effet immédiat sur la visibilité et les sessions ; effacement définitif après 30 jours.',
    }),
    __param(0, (0, auth_decorators_1.CurrentUser)('sub')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, account_dto_1.DeleteAccountDto]),
    __metadata("design:returntype", void 0)
], AccountController.prototype, "requestDeletion", null);
__decorate([
    (0, common_1.Post)('restore'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, swagger_1.ApiOperation)({
        summary: 'Annuler la suppression',
        description: 'Possible tant que le délai de 30 jours n’est pas écoulé.',
    }),
    __param(0, (0, auth_decorators_1.CurrentUser)('sub')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AccountController.prototype, "cancelDeletion", null);
__decorate([
    (0, common_1.Get)('export'),
    (0, swagger_1.ApiOperation)({
        summary: 'Exporter ses données',
        description: "Droit d'accès du RGPD. L'orientation sexuelle est exclue de l'export — la renvoyer en clair irait contre la raison même de son chiffrement.",
    }),
    __param(0, (0, auth_decorators_1.CurrentUser)('sub')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AccountController.prototype, "exportData", null);
exports.AccountController = AccountController = __decorate([
    (0, swagger_1.ApiTags)('account'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('me/account'),
    __metadata("design:paramtypes", [account_service_1.AccountService])
], AccountController);
//# sourceMappingURL=account.controller.js.map