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
var ReferralService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferralService = void 0;
const common_1 = require("@nestjs/common");
const enums_1 = require("../../generated/prisma/enums");
const prisma_service_1 = require("../../core/prisma/prisma.service");
const hash_service_1 = require("../../core/crypto/hash.service");
const credit_ledger_service_1 = require("../billing/credit-ledger.service");
const REFERRER_REWARD = 300;
const REFEREE_BONUS = 200;
let ReferralService = ReferralService_1 = class ReferralService {
    prisma;
    hash;
    ledger;
    logger = new common_1.Logger(ReferralService_1.name);
    constructor(prisma, hash, ledger) {
        this.prisma = prisma;
        this.hash = hash;
        this.ledger = ledger;
    }
    async generateUniqueCode() {
        for (let attempt = 0; attempt < 10; attempt += 1) {
            const code = this.hash.generateReferralCode();
            const taken = await this.prisma.user.findUnique({
                where: { referralCode: code },
                select: { id: true },
            });
            if (!taken)
                return code;
        }
        throw new Error('Impossible de générer un code de parrainage unique');
    }
    async validateCode(code) {
        const referrer = await this.prisma.user.findUnique({
            where: { referralCode: code.trim().toUpperCase() },
            select: {
                id: true,
                status: true,
                bannedAt: true,
                profile: { select: { firstName: true } },
            },
        });
        if (!referrer || referrer.bannedAt) {
            return { valid: false };
        }
        return { valid: true, firstName: referrer.profile?.firstName };
    }
    async attach(tx, refereeId, code) {
        const normalized = code.trim().toUpperCase();
        const referrer = await tx.user.findUnique({
            where: { referralCode: normalized },
            select: { id: true, bannedAt: true },
        });
        if (!referrer) {
            throw new common_1.BadRequestException('Code de parrainage invalide');
        }
        if (referrer.id === refereeId) {
            throw new common_1.BadRequestException('Vous ne pouvez pas utiliser votre propre code');
        }
        if (referrer.bannedAt) {
            throw new common_1.BadRequestException('Code de parrainage invalide');
        }
        await tx.user.update({
            where: { id: refereeId },
            data: { referredById: referrer.id },
        });
        await tx.referral.create({
            data: {
                referrerId: referrer.id,
                refereeId,
                code: normalized,
                rewardCredits: REFERRER_REWARD,
                status: enums_1.ReferralStatus.PENDING,
            },
        });
        await this.ledger.append(tx, {
            userId: refereeId,
            delta: REFEREE_BONUS,
            reason: enums_1.LedgerReason.BONUS_REFERRAL,
            refType: 'referral',
            note: `Bonus de parrainage (code ${normalized})`,
        });
    }
    async qualify(refereeId) {
        const referral = await this.prisma.referral.findUnique({
            where: { refereeId },
        });
        if (!referral || referral.status !== enums_1.ReferralStatus.PENDING)
            return;
        await this.prisma.$transaction(async (tx) => {
            await this.ledger.append(tx, {
                userId: referral.referrerId,
                delta: referral.rewardCredits,
                reason: enums_1.LedgerReason.BONUS_REFERRAL,
                refType: 'referral',
                refId: referral.id,
                idempotencyKey: `referral:${referral.id}`,
                note: 'Filleul devenu actif',
            });
            await tx.referral.update({
                where: { id: referral.id },
                data: {
                    status: enums_1.ReferralStatus.REWARDED,
                    qualifiedAt: new Date(),
                    rewardedAt: new Date(),
                },
            });
        });
        this.logger.log(`Parrainage récompensé : ${referral.id}`);
    }
    async revokeBranch(referrerId, reason) {
        const referrals = await this.prisma.referral.findMany({
            where: { referrerId, revokedAt: null },
            select: { id: true, refereeId: true },
        });
        if (referrals.length === 0)
            return [];
        await this.prisma.referral.updateMany({
            where: { id: { in: referrals.map((r) => r.id) } },
            data: {
                status: enums_1.ReferralStatus.REVOKED,
                revokedAt: new Date(),
                revokedReason: reason,
            },
        });
        this.logger.warn(`Branche de parrainage révoquée : ${referrals.length} filleul(s) à réauditer`);
        return referrals.map((r) => r.refereeId);
    }
};
exports.ReferralService = ReferralService;
exports.ReferralService = ReferralService = ReferralService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        hash_service_1.HashService,
        credit_ledger_service_1.CreditLedgerService])
], ReferralService);
//# sourceMappingURL=referral.service.js.map