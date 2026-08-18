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
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashService = void 0;
const common_1 = require("@nestjs/common");
const argon2_1 = require("@node-rs/argon2");
const node_crypto_1 = require("node:crypto");
const config_module_1 = require("../config/config.module");
let HashService = class HashService {
    pepper;
    constructor(config) {
        this.pepper = config.get('PHONE_HASH_PEPPER');
    }
    hashPhone(phoneE164) {
        return (0, node_crypto_1.createHmac)('sha256', this.pepper).update(phoneE164).digest('hex');
    }
    hashOtp(code, phoneE164) {
        return (0, node_crypto_1.createHmac)('sha256', this.pepper)
            .update(`${phoneE164}:${code}`)
            .digest('hex');
    }
    hashToken(token) {
        return (0, node_crypto_1.createHmac)('sha256', this.pepper).update(token).digest('hex');
    }
    safeEqual(a, b) {
        const bufA = Buffer.from(a, 'utf8');
        const bufB = Buffer.from(b, 'utf8');
        if (bufA.length !== bufB.length)
            return false;
        return (0, node_crypto_1.timingSafeEqual)(bufA, bufB);
    }
    hashPassword(password) {
        return (0, argon2_1.hash)(password, {
            memoryCost: 19_456,
            timeCost: 2,
            parallelism: 1,
        });
    }
    async verifyPassword(hash, password) {
        try {
            return await (0, argon2_1.verify)(hash, password);
        }
        catch {
            return false;
        }
    }
    generateOtpCode() {
        return (0, node_crypto_1.randomInt)(0, 1_000_000).toString().padStart(6, '0');
    }
    generateRefreshToken() {
        return (0, node_crypto_1.randomBytes)(32).toString('base64url');
    }
    generateReferralCode() {
        const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
        const bytes = (0, node_crypto_1.randomBytes)(6);
        let code = '';
        for (const byte of bytes) {
            code += alphabet[byte % alphabet.length];
        }
        return code;
    }
};
exports.HashService = HashService;
exports.HashService = HashService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_module_1.TypedConfigService])
], HashService);
//# sourceMappingURL=hash.service.js.map