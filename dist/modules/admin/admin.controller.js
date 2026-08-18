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
exports.AdminController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const enums_1 = require("../../generated/prisma/enums");
const auth_decorators_1 = require("../auth/decorators/auth.decorators");
const account_service_1 = require("../account/account.service");
const risk_service_1 = require("../safety/risk.service");
const event_service_1 = require("../events/event.service");
const event_dto_1 = require("../events/dto/event.dto");
const moderation_service_1 = require("./moderation.service");
const admin_dto_1 = require("./dto/admin.dto");
let AdminController = class AdminController {
    moderation;
    risk;
    account;
    events;
    constructor(moderation, risk, account, events) {
        this.moderation = moderation;
        this.risk = risk;
        this.account = account;
        this.events = events;
    }
    queue(query) {
        return this.moderation.queue(query);
    }
    stats() {
        return this.moderation.stats();
    }
    claim(moderatorId, taskId) {
        return this.moderation.claim(taskId, moderatorId);
    }
    decide(moderatorId, taskId, dto) {
        return this.moderation.decide(taskId, moderatorId, dto.decision, {
            notes: dto.notes,
            photoReason: dto.photoReason,
        });
    }
    inspect(userId) {
        return this.moderation.inspectUser(userId);
    }
    refreshRisk(userId) {
        return this.risk.refresh(userId);
    }
    purge(userId) {
        return this.account.purge(userId);
    }
    sponsor(eventId, dto) {
        return this.events.setSponsor(eventId, dto);
    }
};
exports.AdminController = AdminController;
__decorate([
    (0, common_1.Get)('moderation/queue'),
    (0, swagger_1.ApiOperation)({ summary: 'File de modération, triée par priorité' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [admin_dto_1.ModerationQueueDto]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "queue", null);
__decorate([
    (0, common_1.Get)('moderation/stats'),
    (0, swagger_1.ApiOperation)({ summary: 'Charge de modération en cours' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "stats", null);
__decorate([
    (0, common_1.Post)('moderation/:id/claim'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: 'Prendre une tâche en charge',
        description: 'Évite que deux modérateurs traitent la même.',
    }),
    __param(0, (0, auth_decorators_1.CurrentUser)('sub')),
    __param(1, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "claim", null);
__decorate([
    (0, common_1.Post)('moderation/:id/decide'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: 'Trancher une tâche',
        description: 'Un bannissement révoque les sessions et remonte les filleuls pour réaudit. Une approbation lève un retrait silencieux.',
    }),
    __param(0, (0, auth_decorators_1.CurrentUser)('sub')),
    __param(1, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, admin_dto_1.ModerationDecisionDto]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "decide", null);
__decorate([
    (0, common_1.Get)('users/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Fiche complète d’un compte' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "inspect", null);
__decorate([
    (0, common_1.Post)('users/:id/risk/refresh'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Recalculer le score de risque' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "refreshRisk", null);
__decorate([
    (0, common_1.Post)('users/:id/purge'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, auth_decorators_1.Roles)(enums_1.UserRole.ADMIN),
    (0, swagger_1.ApiOperation)({
        summary: 'Purger immédiatement un compte',
        description: 'Réservé aux administrateurs. Irréversible : médias supprimés, profil effacé, identifiants anonymisés.',
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "purge", null);
__decorate([
    (0, common_1.Post)('events/:id/sponsor'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, auth_decorators_1.Roles)(enums_1.UserRole.ADMIN),
    (0, swagger_1.ApiOperation)({
        summary: 'Rattacher un événement à un partenaire',
        description: 'Le nom du partenaire s’affiche à côté du titre : laisser un organisateur l’écrire lui-même reviendrait à donner l’espace publicitaire au premier faussaire venu.',
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, event_dto_1.SponsorEventDto]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "sponsor", null);
exports.AdminController = AdminController = __decorate([
    (0, swagger_1.ApiTags)('admin'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, auth_decorators_1.Roles)(enums_1.UserRole.MODERATOR, enums_1.UserRole.ADMIN),
    (0, common_1.Controller)('admin'),
    __metadata("design:paramtypes", [moderation_service_1.ModerationService,
        risk_service_1.RiskService,
        account_service_1.AccountService,
        event_service_1.EventService])
], AdminController);
//# sourceMappingURL=admin.controller.js.map