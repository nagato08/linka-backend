"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountModule = void 0;
const common_1 = require("@nestjs/common");
const auth_module_1 = require("../auth/auth.module");
const discovery_module_1 = require("../discovery/discovery.module");
const events_module_1 = require("../events/events.module");
const safety_module_1 = require("../safety/safety.module");
const account_controller_1 = require("./account.controller");
const account_service_1 = require("./account.service");
const maintenance_service_1 = require("./maintenance.service");
let AccountModule = class AccountModule {
};
exports.AccountModule = AccountModule;
exports.AccountModule = AccountModule = __decorate([
    (0, common_1.Module)({
        imports: [auth_module_1.AuthModule, discovery_module_1.DiscoveryModule, events_module_1.EventsModule, safety_module_1.SafetyModule],
        controllers: [account_controller_1.AccountController],
        providers: [account_service_1.AccountService, maintenance_service_1.MaintenanceService],
        exports: [account_service_1.AccountService],
    })
], AccountModule);
//# sourceMappingURL=account.module.js.map