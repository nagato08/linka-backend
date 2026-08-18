"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingModule = void 0;
const common_1 = require("@nestjs/common");
const auth_module_1 = require("../auth/auth.module");
const billing_controller_1 = require("./billing.controller");
const boost_service_1 = require("./boost.service");
const credit_ledger_service_1 = require("./credit-ledger.service");
const entitlement_service_1 = require("./entitlement.service");
const purchase_service_1 = require("./purchase.service");
const webhook_controller_1 = require("./webhook.controller");
const notchpay_provider_1 = require("./providers/notchpay.provider");
let BillingModule = class BillingModule {
};
exports.BillingModule = BillingModule;
exports.BillingModule = BillingModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [auth_module_1.AuthModule],
        controllers: [billing_controller_1.BillingController, webhook_controller_1.WebhookController],
        providers: [
            credit_ledger_service_1.CreditLedgerService,
            entitlement_service_1.EntitlementService,
            purchase_service_1.PurchaseService,
            boost_service_1.BoostService,
            notchpay_provider_1.NotchPayProvider,
        ],
        exports: [
            credit_ledger_service_1.CreditLedgerService,
            entitlement_service_1.EntitlementService,
            purchase_service_1.PurchaseService,
            boost_service_1.BoostService,
        ],
    })
], BillingModule);
//# sourceMappingURL=billing.module.js.map