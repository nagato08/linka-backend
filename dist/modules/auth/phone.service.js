"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var PhoneService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneService = void 0;
const common_1 = require("@nestjs/common");
const libphonenumber_js_1 = require("libphonenumber-js");
const enums_1 = require("../../generated/prisma/enums");
let PhoneService = class PhoneService {
    static { PhoneService_1 = this; }
    static CM_RANGES = [
        {
            pattern: /^67\d{7}$/,
            operator: enums_1.MobileMoneyOperator.MTN_MOMO,
            label: 'MTN',
        },
        {
            pattern: /^65[0-4]\d{6}$/,
            operator: enums_1.MobileMoneyOperator.MTN_MOMO,
            label: 'MTN',
        },
        {
            pattern: /^68[0-4]\d{6}$/,
            operator: enums_1.MobileMoneyOperator.MTN_MOMO,
            label: 'MTN',
        },
        {
            pattern: /^69\d{7}$/,
            operator: enums_1.MobileMoneyOperator.ORANGE_MONEY,
            label: 'Orange',
        },
        {
            pattern: /^65[5-9]\d{6}$/,
            operator: enums_1.MobileMoneyOperator.ORANGE_MONEY,
            label: 'Orange',
        },
        {
            pattern: /^68[5-9]\d{6}$/,
            operator: enums_1.MobileMoneyOperator.ORANGE_MONEY,
            label: 'Orange',
        },
        { pattern: /^66\d{7}$/, operator: null, label: 'Nexttel' },
        { pattern: /^62\d{7}$/, operator: null, label: 'Camtel' },
    ];
    static ALLOWED_COUNTRIES = new Set(['CM']);
    normalize(raw) {
        let parsed;
        try {
            parsed = (0, libphonenumber_js_1.parsePhoneNumberWithError)(raw.trim(), 'CM');
        }
        catch {
            throw new common_1.BadRequestException('Numéro de téléphone invalide');
        }
        if (!parsed.isValid()) {
            throw new common_1.BadRequestException('Numéro de téléphone invalide');
        }
        const country = parsed.country ?? '';
        if (!PhoneService_1.ALLOWED_COUNTRIES.has(country)) {
            throw new common_1.BadRequestException("L'application n'est pas encore disponible dans ce pays");
        }
        const national = parsed.nationalNumber;
        const range = PhoneService_1.CM_RANGES.find((r) => r.pattern.test(national));
        if (!range) {
            throw new common_1.BadRequestException('Seuls les numéros mobiles camerounais sont acceptés');
        }
        return {
            e164: parsed.number,
            country,
            operator: range.operator,
        };
    }
    mask(e164) {
        if (e164.length < 6)
            return '***';
        return `${e164.slice(0, 6)}${'X'.repeat(e164.length - 10)}${e164.slice(-4)}`;
    }
};
exports.PhoneService = PhoneService;
exports.PhoneService = PhoneService = PhoneService_1 = __decorate([
    (0, common_1.Injectable)()
], PhoneService);
//# sourceMappingURL=phone.service.js.map