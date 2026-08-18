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
exports.MatchingController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const enums_1 = require("../../generated/prisma/enums");
const auth_decorators_1 = require("../auth/decorators/auth.decorators");
const pagination_dto_1 = require("../../common/dto/pagination.dto");
const match_service_1 = require("./match.service");
const swipe_service_1 = require("./swipe.service");
const matching_dto_1 = require("./dto/matching.dto");
let MatchingController = class MatchingController {
    swipes;
    matches;
    constructor(swipes, matches) {
        this.swipes = swipes;
        this.matches = matches;
    }
    like(userId, dto) {
        return this.swipes.swipe(userId, dto.targetId, enums_1.SwipeAction.LIKE, dto.source);
    }
    pass(userId, dto) {
        return this.swipes.swipe(userId, dto.targetId, enums_1.SwipeAction.PASS, dto.source);
    }
    superlike(userId, dto) {
        return this.swipes.swipe(userId, dto.targetId, enums_1.SwipeAction.SUPERLIKE, dto.source);
    }
    rewind(userId) {
        return this.matches.rewind(userId);
    }
    list(userId, query) {
        return this.matches.list(userId, query.cursor, query.limit);
    }
    likesReceived(userId, query) {
        return this.matches.likesReceived(userId, query.cursor, query.limit);
    }
    unmatch(userId, matchId) {
        return this.matches.unmatch(userId, matchId);
    }
};
exports.MatchingController = MatchingController;
__decorate([
    (0, common_1.Post)('swipes/like'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Liker un profil' }),
    __param(0, (0, auth_decorators_1.CurrentUser)('sub')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, matching_dto_1.SwipeDto]),
    __metadata("design:returntype", Promise)
], MatchingController.prototype, "like", null);
__decorate([
    (0, common_1.Post)('swipes/pass'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Passer un profil' }),
    __param(0, (0, auth_decorators_1.CurrentUser)('sub')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, matching_dto_1.SwipeDto]),
    __metadata("design:returntype", Promise)
], MatchingController.prototype, "pass", null);
__decorate([
    (0, common_1.Post)('swipes/superlike'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Super liker un profil' }),
    __param(0, (0, auth_decorators_1.CurrentUser)('sub')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, matching_dto_1.SwipeDto]),
    __metadata("design:returntype", Promise)
], MatchingController.prototype, "superlike", null);
__decorate([
    (0, common_1.Post)('swipes/rewind'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: 'Annuler le dernier swipe',
        description: 'Dix gratuits au total, puis illimité avec un abonnement.',
    }),
    __param(0, (0, auth_decorators_1.CurrentUser)('sub')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MatchingController.prototype, "rewind", null);
__decorate([
    (0, common_1.Get)('matches'),
    (0, swagger_1.ApiOperation)({ summary: 'Lister ses matchs' }),
    __param(0, (0, auth_decorators_1.CurrentUser)('sub')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pagination_dto_1.CursorPaginationDto]),
    __metadata("design:returntype", void 0)
], MatchingController.prototype, "list", null);
__decorate([
    (0, common_1.Get)('matches/likes-received'),
    (0, swagger_1.ApiOperation)({
        summary: 'Voir qui vous a liké',
        description: 'Gratuit — c’est ce qui fait revenir les utilisateurs.',
    }),
    __param(0, (0, auth_decorators_1.CurrentUser)('sub')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pagination_dto_1.CursorPaginationDto]),
    __metadata("design:returntype", void 0)
], MatchingController.prototype, "likesReceived", null);
__decorate([
    (0, common_1.Delete)('matches/:id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, swagger_1.ApiOperation)({ summary: 'Défaire un match' }),
    __param(0, (0, auth_decorators_1.CurrentUser)('sub')),
    __param(1, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], MatchingController.prototype, "unmatch", null);
exports.MatchingController = MatchingController = __decorate([
    (0, swagger_1.ApiTags)('matching'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [swipe_service_1.SwipeService,
        match_service_1.MatchService])
], MatchingController);
//# sourceMappingURL=matching.controller.js.map