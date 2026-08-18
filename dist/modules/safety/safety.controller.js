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
exports.SafetyController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_decorators_1 = require("../auth/decorators/auth.decorators");
const block_service_1 = require("./block.service");
const report_service_1 = require("./report.service");
const safety_dto_1 = require("./dto/safety.dto");
let SafetyController = class SafetyController {
    reports;
    blocks;
    constructor(reports, blocks) {
        this.reports = reports;
        this.blocks = blocks;
    }
    report(userId, dto) {
        return this.reports.report(userId, dto);
    }
    listReports(userId) {
        return this.reports.listMine(userId);
    }
    block(userId, dto) {
        return this.blocks.block(userId, dto.userId, dto.reason);
    }
    unblock(userId, blockedId) {
        return this.blocks.unblock(userId, blockedId);
    }
    listBlocks(userId) {
        return this.blocks.list(userId);
    }
    blockContacts(userId, dto) {
        return this.blocks.blockContacts(userId, dto.phoneNumbers);
    }
    async countContacts(userId) {
        return { count: await this.blocks.countContactBlocks(userId) };
    }
    clearContacts(userId) {
        return this.blocks.clearContactBlocks(userId);
    }
};
exports.SafetyController = SafetyController;
__decorate([
    (0, common_1.Post)('report'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({
        summary: 'Signaler un profil',
        description: 'Le blocage est automatique : personne ne signale quelqu’un dont il souhaite continuer à recevoir des messages.',
    }),
    __param(0, (0, auth_decorators_1.CurrentUser)('sub')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, safety_dto_1.ReportUserDto]),
    __metadata("design:returntype", void 0)
], SafetyController.prototype, "report", null);
__decorate([
    (0, common_1.Get)('reports'),
    (0, swagger_1.ApiOperation)({ summary: 'Suivi de ses propres signalements' }),
    __param(0, (0, auth_decorators_1.CurrentUser)('sub')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SafetyController.prototype, "listReports", null);
__decorate([
    (0, common_1.Post)('block'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, swagger_1.ApiOperation)({
        summary: 'Bloquer un profil',
        description: 'Effet mutuel et immédiat : disparition des deux piles, match défait, conversation fermée.',
    }),
    __param(0, (0, auth_decorators_1.CurrentUser)('sub')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, safety_dto_1.BlockUserDto]),
    __metadata("design:returntype", Promise)
], SafetyController.prototype, "block", null);
__decorate([
    (0, common_1.Delete)('block/:userId'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, swagger_1.ApiOperation)({
        summary: 'Débloquer',
        description: 'Le match n’est pas rétabli.',
    }),
    __param(0, (0, auth_decorators_1.CurrentUser)('sub')),
    __param(1, (0, common_1.Param)('userId', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], SafetyController.prototype, "unblock", null);
__decorate([
    (0, common_1.Get)('blocks'),
    (0, swagger_1.ApiOperation)({ summary: 'Lister les profils bloqués' }),
    __param(0, (0, auth_decorators_1.CurrentUser)('sub')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SafetyController.prototype, "listBlocks", null);
__decorate([
    (0, common_1.Post)('block-contacts'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: 'Bloquer ses contacts',
        description: 'Gratuit. Seuls des condensats sont conservés — le carnet d’adresses n’est jamais stocké. Évite de croiser sa famille ou ses collègues.',
    }),
    __param(0, (0, auth_decorators_1.CurrentUser)('sub')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, safety_dto_1.BlockContactsDto]),
    __metadata("design:returntype", void 0)
], SafetyController.prototype, "blockContacts", null);
__decorate([
    (0, common_1.Get)('block-contacts/count'),
    (0, swagger_1.ApiOperation)({ summary: 'Nombre de contacts bloqués' }),
    __param(0, (0, auth_decorators_1.CurrentUser)('sub')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SafetyController.prototype, "countContacts", null);
__decorate([
    (0, common_1.Delete)('block-contacts'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, swagger_1.ApiOperation)({ summary: 'Effacer les contacts bloqués' }),
    __param(0, (0, auth_decorators_1.CurrentUser)('sub')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SafetyController.prototype, "clearContacts", null);
exports.SafetyController = SafetyController = __decorate([
    (0, swagger_1.ApiTags)('safety'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('safety'),
    __metadata("design:paramtypes", [report_service_1.ReportService,
        block_service_1.BlockService])
], SafetyController);
//# sourceMappingURL=safety.controller.js.map