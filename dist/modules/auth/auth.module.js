"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const email_service_1 = require("./email.service");
const integrity_service_1 = require("./integrity.service");
const auth_controller_1 = require("./auth.controller");
const auth_service_1 = require("./auth.service");
const device_service_1 = require("./device.service");
const otp_service_1 = require("./otp.service");
const phone_service_1 = require("./phone.service");
const referral_service_1 = require("./referral.service");
const token_service_1 = require("./token.service");
const jwt_auth_guard_1 = require("./guards/jwt-auth.guard");
const roles_guard_1 = require("./guards/roles.guard");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [jwt_1.JwtModule.register({})],
        controllers: [auth_controller_1.AuthController],
        providers: [
            auth_service_1.AuthService,
            otp_service_1.OtpService,
            email_service_1.EmailService,
            integrity_service_1.IntegrityService,
            phone_service_1.PhoneService,
            token_service_1.TokenService,
            device_service_1.DeviceService,
            referral_service_1.ReferralService,
            jwt_auth_guard_1.JwtAuthGuard,
            roles_guard_1.RolesGuard,
        ],
        exports: [
            token_service_1.TokenService,
            referral_service_1.ReferralService,
            phone_service_1.PhoneService,
            jwt_auth_guard_1.JwtAuthGuard,
            roles_guard_1.RolesGuard,
        ],
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map