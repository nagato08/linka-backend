import { JwtService } from '@nestjs/jwt';
import { UserRole, UserStatus } from '../../generated/prisma/enums';
import { PrismaService } from '../../core/prisma/prisma.service';
import { TypedConfigService } from '../../core/config/config.module';
import { HashService } from '../../core/crypto/hash.service';
export interface AccessTokenPayload {
    sub: string;
    sid: string;
    role: UserRole;
    status: UserStatus;
}
export interface TokenPair {
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
}
export declare class TokenService {
    private readonly prisma;
    private readonly jwt;
    private readonly hash;
    private readonly config;
    private readonly logger;
    constructor(prisma: PrismaService, jwt: JwtService, hash: HashService, config: TypedConfigService);
    issue(user: {
        id: string;
        role: UserRole;
        status: UserStatus;
    }, context: {
        deviceId?: string;
        ipAddress?: string;
        userAgent?: string;
    }): Promise<TokenPair>;
    rotate(refreshToken: string, context: {
        ipAddress?: string;
        userAgent?: string;
    }): Promise<TokenPair>;
    verifyAccessToken(token: string): Promise<AccessTokenPayload>;
    revokeSession(sessionId: string, reason?: string): Promise<void>;
    revokeAllForUser(userId: string, reason: string): Promise<number>;
    private signAccessToken;
    private assertUsable;
    private accessTtlSeconds;
}
