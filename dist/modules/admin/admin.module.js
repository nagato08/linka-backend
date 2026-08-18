"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminModule = void 0;
const common_1 = require("@nestjs/common");
const account_module_1 = require("../account/account.module");
const auth_module_1 = require("../auth/auth.module");
const discovery_module_1 = require("../discovery/discovery.module");
const events_module_1 = require("../events/events.module");
const safety_module_1 = require("../safety/safety.module");
const admin_controller_1 = require("./admin.controller");
const moderation_service_1 = require("./moderation.service");
let AdminModule = class AdminModule {
};
exports.AdminModule = AdminModule;
exports.AdminModule = AdminModule = __decorate([
    (0, common_1.Module)({
        imports: [
            auth_module_1.AuthModule,
            safety_module_1.SafetyModule,
            account_module_1.AccountModule,
            discovery_module_1.DiscoveryModule,
            events_module_1.EventsModule,
        ],
        controllers: [admin_controller_1.AdminController],
        providers: [moderation_service_1.ModerationService],
        exports: [moderation_service_1.ModerationService],
    })
], AdminModule);
//# sourceMappingURL=admin.module.js.map