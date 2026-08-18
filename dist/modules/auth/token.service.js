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
var TokenService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const enums_1 = require("../../generated/prisma/enums");
const prisma_service_1 = require("../../core/prisma/prisma.service");
const config_module_1 = require("../../core/config/config.module");
const hash_service_1 = require("../../core/crypto/hash.service");
const REFRESH_TTL_DAYS = 30;
let TokenService = TokenService_1 = class TokenService {
    prisma;
    jwt;
    hash;
    config;
    logger = new common_1.Logger(TokenService_1.name);
    constructor(prisma, jwt, hash, config) {
        this.prisma = prisma;
        this.jwt = jwt;
        this.hash = hash;
        this.config = config;
    }
    async issue(user, context) {
        const refreshToken = this.hash.generateRefreshToken();
        const session = await this.prisma.session.create({
            data: {
                userId: user.id,
                refreshTokenHash: this.hash.hashToken(refreshToken),
                deviceId: context.deviceId,
                ipAddress: context.ipAddress,
                userAgent: context.userAgent?.slice(0, 500),
                expiresAt: new Date(Date.now() + REFRESH_TTL_DAYS * 86_400_000),
            },
        });
        return {
            accessToken: await this.signAccessToken(user, session.id),
            refreshToken,
            expiresIn: this.accessTtlSeconds(),
        };
    }
    async rotate(refreshToken, context) {
        const tokenHash = this.hash.hashToken(refreshToken);
        const session = await this.prisma.session.findUnique({
            where: { refreshTokenHash: tokenHash },
            include: { user: true },
        });
        if (!session) {
            throw new common_1.UnauthorizedException('Session invalide');
        }
        if (session.revokedAt) {
            this.logger.warn(`Rejeu de jeton détecté pour l'utilisateur ${session.userId} : révocation globale`);
            await this.revokeAllForUser(session.userId, 'token_reuse');
            throw new common_1.UnauthorizedException('Session compromise, reconnectez-vous');
        }
        if (session.expiresAt < new Date()) {
            throw new common_1.UnauthorizedException('Session expirée');
        }
        this.assertUsable(session.user.status);
        const newToken = this.hash.generateRefreshToken();
        const rotated = await this.prisma.$transaction(async (tx) => {
            await tx.session.update({
                where: { id: session.id },
                data: { revokedAt: new Date(), revokedReason: 'rotated' },
            });
            return tx.session.create({
                data: {
                    userId: session.userId,
                    refreshTokenHash: this.hash.hashToken(newToken),
                    deviceId: session.deviceId,
                    ipAddress: context.ipAddress ?? session.ipAddress,
                    userAgent: context.userAgent?.slice(0, 500) ?? session.userAgent,
                    expiresAt: new Date(Date.now() + REFRESH_TTL_DAYS * 86_400_000),
                },
            });
        });
        return {
            accessToken: await this.signAccessToken(session.user, rotated.id),
            refreshToken: newToken,
            expiresIn: this.accessTtlSeconds(),
        };
    }
    async verifyAccessToken(token) {
        try {
            return await this.jwt.verifyAsync(token, {
                secret: this.config.get('JWT_ACCESS_SECRET'),
            });
        }
        catch {
            throw new common_1.UnauthorizedException('Jeton invalide ou expiré');
        }
    }
    async revokeSession(sessionId, reason = 'logout') {
        await this.prisma.session.updateMany({
            where: { id: sessionId, revokedAt: null },
            data: { revokedAt: new Date(), revokedReason: reason },
        });
    }
    async revokeAllForUser(userId, reason) {
        const result = await this.prisma.session.updateMany({
            where: { userId, revokedAt: null },
            data: { revokedAt: new Date(), revokedReason: reason },
        });
        return result.count;
    }
    signAccessToken(user, sessionId) {
        const payload = {
            sub: user.id,
            sid: sessionId,
            role: user.role,
            status: user.status,
        };
        return this.jwt.signAsync(payload, {
            secret: this.config.get('JWT_ACCESS_SECRET'),
            expiresIn: this.accessTtlSeconds(),
        });
    }
    assertUsable(status) {
        if (status === enums_1.UserStatus.BANNED ||
            status === enums_1.UserStatus.DELETED ||
            status === enums_1.UserStatus.DELETION_PENDING) {
            throw new common_1.UnauthorizedException('Compte indisponible');
        }
    }
    accessTtlSeconds() {
        const ttl = this.config.get('JWT_ACCESS_TTL');
        const match = /^(\d+)([smhd])$/.exec(ttl);
        if (!match)
            return 900;
        const value = Number(match[1]);
        const unit = match[2];
        const multipliers = {
            s: 1,
            m: 60,
            h: 3_600,
            d: 86_400,
        };
        return value * (multipliers[unit] ?? 60);
    }
};
exports.TokenService = TokenService;
exports.TokenService = TokenService = TokenService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService,
        hash_service_1.HashService,
        config_module_1.TypedConfigService])
], TokenService);
//# sourceMappingURL=token.service.js.map