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
var OtpService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OtpService = void 0;
const common_1 = require("@nestjs/common");
const enums_1 = require("../../generated/prisma/enums");
const too_many_requests_exception_1 = require("../../common/exceptions/too-many-requests.exception");
const prisma_service_1 = require("../../core/prisma/prisma.service");
const redis_service_1 = require("../../core/redis/redis.service");
const hash_service_1 = require("../../core/crypto/hash.service");
const email_service_1 = require("./email.service");
const OTP_TTL_SECONDS = 600;
const MAX_ATTEMPTS = 5;
const LIMITS = {
    perIdentifierHour: { max: 5, windowSeconds: 3_600 },
    perIdentifierDay: { max: 15, windowSeconds: 86_400 },
    perIpDay: { max: 30, windowSeconds: 86_400 },
};
let OtpService = OtpService_1 = class OtpService {
    prisma;
    redis;
    hash;
    email;
    logger = new common_1.Logger(OtpService_1.name);
    constructor(prisma, redis, hash, email) {
        this.prisma = prisma;
        this.redis = redis;
        this.hash = hash;
        this.email = email;
    }
    async request(identifier, purpose, locale, ipAddress, channel = enums_1.OtpChannel.EMAIL) {
        await this.enforceRateLimits(identifier, ipAddress);
        await this.prisma.otpCode.updateMany({
            where: { identifier, purpose, consumedAt: null },
            data: { consumedAt: new Date() },
        });
        const code = this.hash.generateOtpCode();
        const expiresAt = new Date(Date.now() + OTP_TTL_SECONDS * 1_000);
        await this.prisma.otpCode.create({
            data: {
                identifier,
                channel,
                purpose,
                codeHash: this.hash.hashOtp(code, identifier),
                expiresAt,
                maxAttempts: MAX_ATTEMPTS,
                ipAddress,
            },
        });
        if (channel === enums_1.OtpChannel.EMAIL) {
            await this.email.sendOtp(identifier, code, locale);
        }
        else {
            throw new common_1.BadRequestException("Le canal SMS n'est pas encore disponible");
        }
        return { expiresAt };
    }
    async verify(identifier, purpose, code) {
        const record = await this.prisma.otpCode.findFirst({
            where: { identifier, purpose, consumedAt: null },
            orderBy: { createdAt: 'desc' },
        });
        if (!record) {
            throw new common_1.BadRequestException('Aucun code en attente pour cette adresse');
        }
        if (record.expiresAt < new Date()) {
            throw new common_1.BadRequestException('Code expiré, demandez-en un nouveau');
        }
        if (record.attempts >= record.maxAttempts) {
            await this.prisma.otpCode.update({
                where: { id: record.id },
                data: { consumedAt: new Date() },
            });
            throw new common_1.BadRequestException('Trop de tentatives, demandez un nouveau code');
        }
        const updated = await this.prisma.otpCode.update({
            where: { id: record.id },
            data: { attempts: { increment: 1 } },
        });
        if (!this.hash.safeEqual(updated.codeHash, this.hash.hashOtp(code, identifier))) {
            const left = updated.maxAttempts - updated.attempts;
            throw new common_1.BadRequestException(left > 0
                ? `Code incorrect, ${left} tentative(s) restante(s)`
                : 'Code incorrect, demandez un nouveau code');
        }
        await this.prisma.otpCode.update({
            where: { id: record.id },
            data: { consumedAt: new Date() },
        });
    }
    async enforceRateLimits(identifier, ipAddress) {
        const checks = [
            {
                key: `otp:id:h:${identifier}`,
                max: LIMITS.perIdentifierHour.max,
                window: LIMITS.perIdentifierHour.windowSeconds,
            },
            {
                key: `otp:id:d:${identifier}`,
                max: LIMITS.perIdentifierDay.max,
                window: LIMITS.perIdentifierDay.windowSeconds,
            },
        ];
        if (ipAddress) {
            checks.push({
                key: `otp:ip:d:${ipAddress}`,
                max: LIMITS.perIpDay.max,
                window: LIMITS.perIpDay.windowSeconds,
            });
        }
        for (const check of checks) {
            const count = await this.redis.client.incr(check.key);
            if (count === 1) {
                await this.redis.client.expire(check.key, check.window);
            }
            if (count > check.max) {
                const ttl = await this.redis.client.ttl(check.key);
                this.logger.warn(`Plafond de codes atteint : ${check.key}`);
                throw new too_many_requests_exception_1.TooManyRequestsException(`Trop de demandes. Réessayez dans ${Math.ceil(ttl / 60)} minute(s).`, ttl);
            }
        }
    }
};
exports.OtpService = OtpService;
exports.OtpService = OtpService = OtpService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        redis_service_1.RedisService,
        hash_service_1.HashService,
        email_service_1.EmailService])
], OtpService);
//# sourceMappingURL=otp.service.js.map