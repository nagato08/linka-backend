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
var EncryptionService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncryptionService = void 0;
const common_1 = require("@nestjs/common");
const node_crypto_1 = require("node:crypto");
const config_module_1 = require("../config/config.module");
const ALGORITHM = 'aes-256-gcm';
const IV_LENGTH = 12;
const TAG_LENGTH = 16;
let EncryptionService = EncryptionService_1 = class EncryptionService {
    logger = new common_1.Logger(EncryptionService_1.name);
    key;
    constructor(config) {
        this.key = Buffer.from(config.get('FIELD_ENCRYPTION_KEY'), 'hex');
    }
    encrypt(plaintext) {
        const iv = (0, node_crypto_1.randomBytes)(IV_LENGTH);
        const cipher = (0, node_crypto_1.createCipheriv)(ALGORITHM, this.key, iv);
        const encrypted = Buffer.concat([
            cipher.update(plaintext, 'utf8'),
            cipher.final(),
        ]);
        return [
            iv.toString('base64url'),
            cipher.getAuthTag().toString('base64url'),
            encrypted.toString('base64url'),
        ].join(':');
    }
    decrypt(payload) {
        try {
            const [ivPart, tagPart, dataPart] = payload.split(':');
            if (!ivPart || !tagPart || !dataPart)
                return null;
            const iv = Buffer.from(ivPart, 'base64url');
            const tag = Buffer.from(tagPart, 'base64url');
            if (iv.length !== IV_LENGTH || tag.length !== TAG_LENGTH)
                return null;
            const decipher = (0, node_crypto_1.createDecipheriv)(ALGORITHM, this.key, iv);
            decipher.setAuthTag(tag);
            return Buffer.concat([
                decipher.update(Buffer.from(dataPart, 'base64url')),
                decipher.final(),
            ]).toString('utf8');
        }
        catch {
            this.logger.warn('Déchiffrement impossible : cryptogramme altéré');
            return null;
        }
    }
    encryptNullable(plaintext) {
        return plaintext ? this.encrypt(plaintext) : null;
    }
    decryptNullable(payload) {
        return payload ? this.decrypt(payload) : null;
    }
};
exports.EncryptionService = EncryptionService;
exports.EncryptionService = EncryptionService = EncryptionService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_module_1.TypedConfigService])
], EncryptionService);
//# sourceMappingURL=encryption.service.js.map