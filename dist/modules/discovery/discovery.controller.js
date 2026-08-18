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
exports.DiscoveryController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_decorators_1 = require("../auth/decorators/auth.decorators");
const discovery_service_1 = require("./discovery.service");
const deck_dto_1 = require("./dto/deck.dto");
let DiscoveryController = class DiscoveryController {
    discovery;
    constructor(discovery) {
        this.discovery = discovery;
    }
    getDeck(userId, query) {
        return this.discovery.getDeck(userId, query.limit);
    }
    refresh(userId, query) {
        return this.discovery.refresh(userId, query.limit);
    }
};
exports.DiscoveryController = DiscoveryController;
__decorate([
    (0, common_1.Get)('deck'),
    (0, swagger_1.ApiOperation)({
        summary: 'Obtenir les prochains profils',
        description: "La pile est pré-calculée dans Redis. Le rayon s'élargit automatiquement quand la zone est peu dense — un deck vide fait perdre un utilisateur définitivement.",
    }),
    __param(0, (0, auth_decorators_1.CurrentUser)('sub')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, deck_dto_1.DeckQueryDto]),
    __metadata("design:returntype", void 0)
], DiscoveryController.prototype, "getDeck", null);
__decorate([
    (0, common_1.Post)('deck/refresh'),
    (0, swagger_1.ApiOperation)({
        summary: 'Reconstruire la pile',
        description: 'À appeler après un changement de filtres ou de position.',
    }),
    __param(0, (0, auth_decorators_1.CurrentUser)('sub')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, deck_dto_1.DeckQueryDto]),
    __metadata("design:returntype", void 0)
], DiscoveryController.prototype, "refresh", null);
exports.DiscoveryController = DiscoveryController = __decorate([
    (0, swagger_1.ApiTags)('discovery'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('discovery'),
    __metadata("design:paramtypes", [discovery_service_1.DiscoveryService])
], DiscoveryController);
//# sourceMappingURL=discovery.controller.js.map