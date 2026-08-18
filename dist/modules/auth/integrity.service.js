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
var IntegrityService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegrityService = void 0;
const common_1 = require("@nestjs/common");
const google_auth_library_1 = require("google-auth-library");
const enums_1 = require("../../generated/prisma/enums");
const config_module_1 = require("../../core/config/config.module");
let IntegrityService = IntegrityService_1 = class IntegrityService {
    config;
    logger = new common_1.Logger(IntegrityService_1.name);
    auth = null;
    packageName;
    required;
    constructor(config) {
        this.config = config;
        this.packageName = config.get('PLAY_INTEGRITY_PACKAGE_NAME');
        this.required = config.get('REQUIRE_DEVICE_INTEGRITY');
        const serviceAccount = config.get('GOOGLE_SERVICE_ACCOUNT_B64');
        if (serviceAccount && this.packageName) {
            this.auth = new google_auth_library_1.GoogleAuth({
                credentials: JSON.parse(Buffer.from(serviceAccount, 'base64').toString('utf8')),
                scopes: ['https://www.googleapis.com/auth/playintegrity'],
            });
        }
        if (this.required && !this.auth) {
            throw new Error('REQUIRE_DEVICE_INTEGRITY est actif mais PLAY_INTEGRITY_PACKAGE_NAME ou ' +
                'GOOGLE_SERVICE_ACCOUNT_B64 manque. Aucune attestation ne serait vérifiée.');
        }
        if (!this.auth) {
            this.logger.warn("Play Integrity non configuré : l'inscription n'est pas protégée");
        }
    }
    async verify(integrityToken) {
        if (!this.auth) {
            return enums_1.IntegrityVerdict.UNEVALUATED;
        }
        if (!integrityToken) {
            if (this.required) {
                throw new common_1.ForbiddenException("Cet appareil n'a pas pu être vérifié. Installez l'application depuis le Play Store.");
            }
            return enums_1.IntegrityVerdict.UNEVALUATED;
        }
        let verdict;
        try {
            const client = await this.auth.getClient();
            const response = await client.request({
                url: `https://playintegrity.googleapis.com/v1/${this.packageName}:decodeIntegrityToken`,
                method: 'POST',
                data: { integrityToken },
            });
            verdict = this.interpret(response.data);
        }
        catch (error) {
            this.logger.error(`Play Integrity injoignable : ${error.message}`);
            return enums_1.IntegrityVerdict.UNEVALUATED;
        }
        if (verdict === enums_1.IntegrityVerdict.FAIL && this.required) {
            this.logger.warn('Attestation refusée : appareil ou application non conforme');
            throw new common_1.ForbiddenException("Cet appareil n'a pas pu être vérifié. Installez l'application depuis le Play Store.");
        }
        return verdict;
    }
    interpret(data) {
        const payload = data.tokenPayloadExternal;
        if (!payload)
            return enums_1.IntegrityVerdict.UNEVALUATED;
        const appVerdict = payload.appIntegrity?.appRecognitionVerdict;
        const deviceVerdicts = payload.deviceIntegrity?.deviceRecognitionVerdict ?? [];
        const appIsGenuine = appVerdict === 'PLAY_RECOGNIZED';
        const deviceIsGenuine = deviceVerdicts.includes('MEETS_DEVICE_INTEGRITY');
        return appIsGenuine && deviceIsGenuine
            ? enums_1.IntegrityVerdict.PASS
            : enums_1.IntegrityVerdict.FAIL;
    }
    get isEnforced() {
        return this.required;
    }
};
exports.IntegrityService = IntegrityService;
exports.IntegrityService = IntegrityService = IntegrityService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_module_1.TypedConfigService])
], IntegrityService);
//# sourceMappingURL=integrity.service.js.map