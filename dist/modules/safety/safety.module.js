"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SafetyModule = void 0;
const common_1 = require("@nestjs/common");
const auth_module_1 = require("../auth/auth.module");
const discovery_module_1 = require("../discovery/discovery.module");
const block_service_1 = require("./block.service");
const geo_integrity_service_1 = require("./geo-integrity.service");
const report_service_1 = require("./report.service");
const risk_service_1 = require("./risk.service");
const safety_controller_1 = require("./safety.controller");
let SafetyModule = class SafetyModule {
};
exports.SafetyModule = SafetyModule;
exports.SafetyModule = SafetyModule = __decorate([
    (0, common_1.Module)({
        imports: [auth_module_1.AuthModule, discovery_module_1.DiscoveryModule],
        controllers: [safety_controller_1.SafetyController],
        providers: [report_service_1.ReportService, block_service_1.BlockService, risk_service_1.RiskService, geo_integrity_service_1.GeoIntegrityService],
        exports: [report_service_1.ReportService, block_service_1.BlockService, risk_service_1.RiskService, geo_integrity_service_1.GeoIntegrityService],
    })
], SafetyModule);
//# sourceMappingURL=safety.module.js.map