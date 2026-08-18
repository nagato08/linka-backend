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
var AuthService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const enums_1 = require("../../generated/prisma/enums");
const prisma_service_1 = require("../../core/prisma/prisma.service");
const hash_service_1 = require("../../core/crypto/hash.service");
const email_service_1 = require("./email.service");
const otp_service_1 = require("./otp.service");
const token_service_1 = require("./token.service");
const device_service_1 = require("./device.service");
const referral_service_1 = require("./referral.service");
const credit_ledger_service_1 = require("../billing/credit-ledger.service");
const SIGNUP_BONUS_COINS = 500;
let AuthService = AuthService_1 = class AuthService {
    prisma;
    email;
    otp;
    tokens;
    devices;
    referrals;
    hash;
    ledger;
    logger = new common_1.Logger(AuthService_1.name);
    constructor(prisma, email, otp, tokens, devices, referrals, hash, ledger) {
        this.prisma = prisma;
        this.email = email;
        this.otp = otp;
        this.tokens = tokens;
        this.devices = devices;
        this.referrals = referrals;
        this.hash = hash;
        this.ledger = ledger;
    }
    async requestOtp(rawEmail, locale = enums_1.AppLocale.FR, context = {}) {
        const email = this.email.normalize(rawEmail);
        const { expiresAt } = await this.otp.request(email, enums_1.OtpPurpose.LOGIN, locale, context.ipAddress);
        return { email: this.mask(email), expiresAt };
    }
    async verifyOtp(dto, context = {}) {
        const email = this.email.normalize(dto.email);
        await this.otp.verify(email, enums_1.OtpPurpose.LOGIN, dto.code);
        const existing = await this.prisma.user.findUnique({
            where: { email },
            select: { id: true, role: true, status: true },
        });
        await this.devices.enforceAccountCap(dto.device.fingerprint, existing?.id);
        const isNewAccount = !existing;
        const user = existing ?? (await this.createAccount(email, dto));
        const device = await this.devices.register(user.id, {
            platform: dto.device.platform,
            fingerprint: dto.device.fingerprint,
            model: dto.device.model,
            osVersion: dto.device.osVersion,
            appVersion: dto.device.appVersion,
            integrityToken: dto.device.integrityToken,
        });
        await this.prisma.user.update({
            where: { id: user.id },
            data: {
                lastActiveAt: new Date(),
                emailVerifiedAt: existing ? undefined : new Date(),
            },
        });
        const pair = await this.tokens.issue(user, {
            deviceId: device.id,
            ipAddress: context.ipAddress,
            userAgent: context.userAgent,
        });
        return { ...pair, status: user.status, isNewAccount };
    }
    async createAccount(email, dto) {
        const referralCode = await this.referrals.generateUniqueCode();
        return this.prisma.$transaction(async (tx) => {
            const user = await tx.user.create({
                data: {
                    email,
                    emailVerifiedAt: new Date(),
                    referralCode,
                    locale: dto.locale ?? enums_1.AppLocale.FR,
                    status: enums_1.UserStatus.PENDING_PROFILE,
                    preference: { create: {} },
                    notificationPreference: { create: {} },
                },
                select: { id: true, role: true, status: true },
            });
            await this.ledger.append(tx, {
                userId: user.id,
                delta: SIGNUP_BONUS_COINS,
                reason: enums_1.LedgerReason.BONUS_SIGNUP,
                note: 'Bienvenue sur Linka',
            });
            if (dto.referralCode) {
                await this.referrals.attach(tx, user.id, dto.referralCode);
            }
            this.logger.log(`Compte créé : ${user.id}`);
            return user;
        });
    }
    refresh(refreshToken, context = {}) {
        return this.tokens.rotate(refreshToken, context);
    }
    async logout(sessionId) {
        await this.tokens.revokeSession(sessionId);
    }
    async logoutAll(userId) {
        const revoked = await this.tokens.revokeAllForUser(userId, 'logout_all');
        return { revoked };
    }
    mask(email) {
        const [local, domain] = email.split('@');
        if (!local || !domain)
            return '***';
        const visible = local.length <= 2 ? local[0] : local.slice(0, 2);
        return `${visible}${'*'.repeat(Math.max(1, local.length - 3))}${local.slice(-1)}@${domain}`;
    }
    listSessions(userId, currentSessionId) {
        return this.prisma.session
            .findMany({
            where: { userId, revokedAt: null, expiresAt: { gt: new Date() } },
            orderBy: { lastUsedAt: 'desc' },
            select: {
                id: true,
                ipAddress: true,
                userAgent: true,
                createdAt: true,
                lastUsedAt: true,
                device: {
                    select: { platform: true, model: true, osVersion: true },
                },
            },
        })
            .then((sessions) => sessions.map((session) => ({
            ...session,
            isCurrent: session.id === currentSessionId,
        })));
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = AuthService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        email_service_1.EmailService,
        otp_service_1.OtpService,
        token_service_1.TokenService,
        device_service_1.DeviceService,
        referral_service_1.ReferralService,
        hash_service_1.HashService,
        credit_ledger_service_1.CreditLedgerService])
], AuthService);
//# sourceMappingURL=auth.service.js.map