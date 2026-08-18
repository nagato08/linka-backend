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
var NotchPayProvider_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotchPayProvider = void 0;
const common_1 = require("@nestjs/common");
const node_crypto_1 = require("node:crypto");
const enums_1 = require("../../../generated/prisma/enums");
const config_module_1 = require("../../../core/config/config.module");
const API_BASE = 'https://api.notchpay.co';
const STATUS_MAP = {
    pending: enums_1.PaymentStatus.PENDING,
    processing: enums_1.PaymentStatus.PROCESSING,
    incomplete: enums_1.PaymentStatus.PENDING,
    complete: enums_1.PaymentStatus.SUCCEEDED,
    successful: enums_1.PaymentStatus.SUCCEEDED,
    failed: enums_1.PaymentStatus.FAILED,
    canceled: enums_1.PaymentStatus.CANCELLED,
    cancelled: enums_1.PaymentStatus.CANCELLED,
    expired: enums_1.PaymentStatus.EXPIRED,
    refunded: enums_1.PaymentStatus.REFUNDED,
};
let NotchPayProvider = NotchPayProvider_1 = class NotchPayProvider {
    config;
    name = 'notchpay';
    logger = new common_1.Logger(NotchPayProvider_1.name);
    publicKey;
    privateKey;
    webhookSecret;
    callbackUrl;
    constructor(config) {
        this.config = config;
        this.publicKey = config.get('NOTCHPAY_PUBLIC_KEY');
        this.privateKey = config.get('NOTCHPAY_PRIVATE_KEY');
        this.webhookSecret = config.get('NOTCHPAY_WEBHOOK_SECRET');
        this.callbackUrl = `${config.get('APP_PUBLIC_URL')}/api/v1/billing/webhooks/notchpay`;
        if (!this.isConfigured && config.isProduction) {
            throw new Error('NotchPay non configuré. Les clés sont requises en production : sans elles, aucun paiement ne peut aboutir.');
        }
        if (!this.isConfigured) {
            this.logger.warn('NotchPay non configuré : les paiements sont indisponibles');
        }
    }
    get isConfigured() {
        return Boolean(this.publicKey && this.privateKey && this.webhookSecret);
    }
    async initiate(input) {
        const response = await this.request('/payments', {
            method: 'POST',
            body: {
                amount: input.amount,
                currency: input.currencyCode,
                description: input.description,
                reference: input.reference,
                callback: this.callbackUrl,
                customer: {
                    email: input.payerEmail,
                    phone: input.payerPhone,
                },
            },
        });
        const transaction = response.transaction;
        const providerRef = transaction?.reference ?? transaction?.trxref;
        if (!providerRef) {
            throw new Error(`NotchPay n'a pas renvoyé de référence : ${response.message ?? 'réponse inattendue'}`);
        }
        return {
            providerRef,
            status: this.mapStatus(transaction?.status),
            authorizationUrl: response.authorization_url,
        };
    }
    async fetchStatus(providerRef) {
        const response = await this.request(`/payments/${encodeURIComponent(providerRef)}`, { method: 'GET' });
        const transaction = response.transaction;
        return {
            status: this.mapStatus(transaction?.status),
            providerRef,
            failureCode: transaction?.code,
            failureMessage: transaction?.message,
            raw: response,
        };
    }
    parseWebhook(rawBody, signature) {
        if (!signature || !this.webhookSecret) {
            this.logger.warn('Webhook NotchPay sans signature : rejeté');
            return null;
        }
        const expected = (0, node_crypto_1.createHmac)('sha256', this.webhookSecret)
            .update(rawBody)
            .digest('hex');
        const received = Buffer.from(signature, 'utf8');
        const computed = Buffer.from(expected, 'utf8');
        if (received.length !== computed.length ||
            !(0, node_crypto_1.timingSafeEqual)(received, computed)) {
            this.logger.warn('Signature de webhook NotchPay invalide : rejeté');
            return null;
        }
        let payload;
        try {
            payload = JSON.parse(rawBody);
        }
        catch {
            this.logger.warn('Corps de webhook NotchPay illisible');
            return null;
        }
        const transaction = payload.transaction;
        const reference = payload.merchant_reference ??
            transaction?.trxref;
        if (!reference) {
            this.logger.warn('Webhook NotchPay sans référence exploitable');
            return null;
        }
        return {
            reference,
            status: this.mapStatus(transaction?.status ?? payload.status),
            providerRef: transaction?.reference,
            failureCode: transaction?.code,
            failureMessage: transaction?.message,
            raw: payload,
        };
    }
    mapStatus(status) {
        if (!status)
            return enums_1.PaymentStatus.PENDING;
        return STATUS_MAP[status.toLowerCase()] ?? enums_1.PaymentStatus.PENDING;
    }
    async request(path, options) {
        if (!this.isConfigured) {
            throw new Error('NotchPay non configuré');
        }
        const response = await fetch(`${API_BASE}${path}`, {
            method: options.method,
            headers: {
                Authorization: this.publicKey,
                'X-Grant': this.privateKey,
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: options.body ? JSON.stringify(options.body) : undefined,
            signal: AbortSignal.timeout(20_000),
        });
        const text = await response.text();
        if (!response.ok) {
            throw new Error(`NotchPay ${response.status} : ${text.slice(0, 200)}`);
        }
        return JSON.parse(text);
    }
};
exports.NotchPayProvider = NotchPayProvider;
exports.NotchPayProvider = NotchPayProvider = NotchPayProvider_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_module_1.TypedConfigService])
], NotchPayProvider);
//# sourceMappingURL=notchpay.provider.js.map