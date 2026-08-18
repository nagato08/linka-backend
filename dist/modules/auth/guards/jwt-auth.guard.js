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
exports.JwtAuthGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const enums_1 = require("../../../generated/prisma/enums");
const token_service_1 = require("../token.service");
const prisma_service_1 = require("../../../core/prisma/prisma.service");
const auth_decorators_1 = require("../decorators/auth.decorators");
let JwtAuthGuard = class JwtAuthGuard {
    reflector;
    tokens;
    prisma;
    constructor(reflector, tokens, prisma) {
        this.reflector = reflector;
        this.tokens = tokens;
        this.prisma = prisma;
    }
    async canActivate(context) {
        const isPublic = this.reflector.getAllAndOverride(auth_decorators_1.IS_PUBLIC_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        if (isPublic)
            return true;
        const request = context.switchToHttp().getRequest();
        const token = this.extractToken(request);
        if (!token) {
            throw new common_1.UnauthorizedException('Jeton manquant');
        }
        const payload = await this.tokens.verifyAccessToken(token);
        const session = await this.prisma.session.findUnique({
            where: { id: payload.sid },
            select: {
                revokedAt: true,
                expiresAt: true,
                user: { select: { status: true, role: true } },
            },
        });
        if (!session || session.revokedAt || session.expiresAt < new Date()) {
            throw new common_1.UnauthorizedException('Session révoquée ou expirée');
        }
        this.assertUsable(session.user.status);
        request.user = {
            ...payload,
            status: session.user.status,
            role: session.user.role,
        };
        return true;
    }
    extractToken(request) {
        const header = request.headers.authorization;
        if (!header)
            return null;
        const [scheme, value] = header.split(' ');
        return scheme?.toLowerCase() === 'bearer' && value ? value : null;
    }
    assertUsable(status) {
        if (status === enums_1.UserStatus.BANNED) {
            throw new common_1.ForbiddenException('Compte suspendu');
        }
        if (status === enums_1.UserStatus.DELETED ||
            status === enums_1.UserStatus.DELETION_PENDING) {
            throw new common_1.UnauthorizedException('Compte supprimé');
        }
    }
};
exports.JwtAuthGuard = JwtAuthGuard;
exports.JwtAuthGuard = JwtAuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector,
        token_service_1.TokenService,
        prisma_service_1.PrismaService])
], JwtAuthGuard);
//# sourceMappingURL=jwt-auth.guard.js.map