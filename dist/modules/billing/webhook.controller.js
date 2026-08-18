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
var WebhookController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhookController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_decorators_1 = require("../auth/decorators/auth.decorators");
const notchpay_provider_1 = require("./providers/notchpay.provider");
const purchase_service_1 = require("./purchase.service");
let WebhookController = WebhookController_1 = class WebhookController {
    notchpay;
    purchases;
    logger = new common_1.Logger(WebhookController_1.name);
    constructor(notchpay, purchases) {
        this.notchpay = notchpay;
        this.purchases = purchases;
    }
    async notchpayWebhook(request, signature) {
        const rawBody = request.rawBody?.toString('utf8');
        if (!rawBody) {
            throw new common_1.UnauthorizedException('Corps de requête absent');
        }
        const event = this.notchpay.parseWebhook(rawBody, signature);
        if (!event) {
            throw new common_1.UnauthorizedException('Signature invalide');
        }
        await this.purchases.settlePayment(event.reference, event.status, event.raw);
        return { received: true };
    }
};
exports.WebhookController = WebhookController;
__decorate([
    (0, auth_decorators_1.Public)(),
    (0, common_1.Post)('notchpay'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Headers)('x-notch-signature')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], WebhookController.prototype, "notchpayWebhook", null);
exports.WebhookController = WebhookController = WebhookController_1 = __decorate([
    (0, swagger_1.ApiExcludeController)(),
    (0, common_1.Controller)('billing/webhooks'),
    __metadata("design:paramtypes", [notchpay_provider_1.NotchPayProvider,
        purchase_service_1.PurchaseService])
], WebhookController);
//# sourceMappingURL=webhook.controller.js.map