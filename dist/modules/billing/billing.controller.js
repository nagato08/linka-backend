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
exports.BillingController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_decorators_1 = require("../auth/decorators/auth.decorators");
const boost_service_1 = require("./boost.service");
const credit_ledger_service_1 = require("./credit-ledger.service");
const entitlement_service_1 = require("./entitlement.service");
const purchase_service_1 = require("./purchase.service");
const billing_dto_1 = require("./dto/billing.dto");
let BillingController = class BillingController {
    purchases;
    ledger;
    entitlements;
    boosts;
    constructor(purchases, ledger, entitlements, boosts) {
        this.purchases = purchases;
        this.ledger = ledger;
        this.entitlements = entitlements;
        this.boosts = boosts;
    }
    products(query) {
        return this.purchases.listProducts(query.type);
    }
    async balance(userId) {
        return { balance: await this.ledger.balanceOf(userId) };
    }
    history(userId) {
        return this.ledger.history(userId);
    }
    entitlementList(userId) {
        return this.entitlements.listActive(userId);
    }
    purchaseHistory(userId) {
        return this.purchases.listPurchases(userId);
    }
    initiatePayment(userId, dto) {
        return this.purchases.initiatePayment(userId, dto.sku, dto.payerPhone, dto.idempotencyKey);
    }
    purchaseWithCredits(userId, dto) {
        return this.purchases.purchaseWithCredits(userId, dto.sku);
    }
    activateBoost(userId, dto) {
        return this.boosts.activate(userId, dto.sku);
    }
    boostHistory(userId) {
        return this.boosts.history(userId);
    }
    boostStats(userId, boostId) {
        return this.boosts.stats(userId, boostId);
    }
};
exports.BillingController = BillingController;
__decorate([
    (0, common_1.Get)('products'),
    (0, swagger_1.ApiOperation)({ summary: 'Catalogue' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [billing_dto_1.ProductQueryDto]),
    __metadata("design:returntype", void 0)
], BillingController.prototype, "products", null);
__decorate([
    (0, common_1.Get)('balance'),
    (0, swagger_1.ApiOperation)({ summary: 'Solde de pièces' }),
    __param(0, (0, auth_decorators_1.CurrentUser)('sub')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BillingController.prototype, "balance", null);
__decorate([
    (0, common_1.Get)('ledger'),
    (0, swagger_1.ApiOperation)({ summary: 'Historique des mouvements de pièces' }),
    __param(0, (0, auth_decorators_1.CurrentUser)('sub')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BillingController.prototype, "history", null);
__decorate([
    (0, common_1.Get)('entitlements'),
    (0, swagger_1.ApiOperation)({ summary: 'Droits actifs' }),
    __param(0, (0, auth_decorators_1.CurrentUser)('sub')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BillingController.prototype, "entitlementList", null);
__decorate([
    (0, common_1.Get)('purchases'),
    (0, swagger_1.ApiOperation)({ summary: 'Historique des achats' }),
    __param(0, (0, auth_decorators_1.CurrentUser)('sub')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BillingController.prototype, "purchaseHistory", null);
__decorate([
    (0, common_1.Post)('payments'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({
        summary: 'Payer en mobile money',
        description: "Packs de pièces et abonnements uniquement. L'utilisateur confirme ensuite avec son code PIN sur son téléphone — ce qui vérifie son numéro au passage.",
    }),
    __param(0, (0, auth_decorators_1.CurrentUser)('sub')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, billing_dto_1.InitiatePaymentDto]),
    __metadata("design:returntype", void 0)
], BillingController.prototype, "initiatePayment", null);
__decorate([
    (0, common_1.Post)('purchases'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({
        summary: 'Acheter avec des pièces',
        description: 'Débit et livraison dans la même transaction : débiter sans livrer vole l’utilisateur, livrer sans débiter vole la plateforme.',
    }),
    __param(0, (0, auth_decorators_1.CurrentUser)('sub')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, billing_dto_1.PurchaseWithCreditsDto]),
    __metadata("design:returntype", void 0)
], BillingController.prototype, "purchaseWithCredits", null);
__decorate([
    (0, common_1.Post)('boosts'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({
        summary: 'Activer un boost',
        description: 'Mis en file si la ville a atteint son plafond de boosts simultanés — vendre une visibilité qui n’existe pas obligerait à rembourser.',
    }),
    __param(0, (0, auth_decorators_1.CurrentUser)('sub')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, billing_dto_1.ActivateBoostDto]),
    __metadata("design:returntype", void 0)
], BillingController.prototype, "activateBoost", null);
__decorate([
    (0, common_1.Get)('boosts'),
    (0, swagger_1.ApiOperation)({ summary: 'Historique des boosts' }),
    __param(0, (0, auth_decorators_1.CurrentUser)('sub')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BillingController.prototype, "boostHistory", null);
__decorate([
    (0, common_1.Get)('boosts/:id'),
    (0, swagger_1.ApiOperation)({
        summary: 'Résultats d’un boost',
        description: 'C’est ce retour chiffré qui déclenche le rachat, bien plus que le boost lui-même.',
    }),
    __param(0, (0, auth_decorators_1.CurrentUser)('sub')),
    __param(1, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], BillingController.prototype, "boostStats", null);
exports.BillingController = BillingController = __decorate([
    (0, swagger_1.ApiTags)('billing'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('billing'),
    __metadata("design:paramtypes", [purchase_service_1.PurchaseService,
        credit_ledger_service_1.CreditLedgerService,
        entitlement_service_1.EntitlementService,
        boost_service_1.BoostService])
], BillingController);
//# sourceMappingURL=billing.controller.js.map