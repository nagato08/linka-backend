import { AppLocale, UserStatus } from '../../generated/prisma/enums';
import { PrismaService } from '../../core/prisma/prisma.service';
import { HashService } from '../../core/crypto/hash.service';
import { EmailService } from './email.service';
import { OtpService } from './otp.service';
import { TokenService, type TokenPair } from './token.service';
import { DeviceService } from './device.service';
import { ReferralService } from './referral.service';
import { CreditLedgerService } from '../billing/credit-ledger.service';
import type { VerifyOtpDto } from './dto/auth.dto';
export interface RequestContext {
    ipAddress?: string;
    userAgent?: string;
}
export declare class AuthService {
    private readonly prisma;
    private readonly email;
    private readonly otp;
    private readonly tokens;
    private readonly devices;
    private readonly referrals;
    private readonly hash;
    private readonly ledger;
    private readonly logger;
    constructor(prisma: PrismaService, email: EmailService, otp: OtpService, tokens: TokenService, devices: DeviceService, referrals: ReferralService, hash: HashService, ledger: CreditLedgerService);
    requestOtp(rawEmail: string, locale?: AppLocale, context?: RequestContext): Promise<{
        email: string;
        expiresAt: Date;
    }>;
    verifyOtp(dto: VerifyOtpDto, context?: RequestContext): Promise<TokenPair & {
        status: UserStatus;
        isNewAccount: boolean;
    }>;
    private createAccount;
    refresh(refreshToken: string, context?: RequestContext): Promise<TokenPair>;
    logout(sessionId: string): Promise<void>;
    logoutAll(userId: string): Promise<{
        revoked: number;
    }>;
    private mask;
    listSessions(userId: string, currentSessionId: string): Promise<{
        isCurrent: boolean;
        id: string;
        createdAt: Date;
        ipAddress: string | null;
        userAgent: string | null;
        lastUsedAt: Date;
        device: {
            platform: import("../../generated/prisma/enums").DevicePlatform;
            model: string | null;
            osVersion: string | null;
        } | null;
    }[]>;
}
