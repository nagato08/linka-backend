import type { Request } from 'express';
import { AuthService } from './auth.service';
import { ReferralService } from './referral.service';
import { AuthTokensResponse, OtpRequestedResponse, RefreshTokenDto, RequestOtpDto, ValidateReferralDto, VerifyOtpDto } from './dto/auth.dto';
export declare class AuthController {
    private readonly auth;
    private readonly referrals;
    constructor(auth: AuthService, referrals: ReferralService);
    requestOtp(dto: RequestOtpDto, request: Request): Promise<OtpRequestedResponse>;
    verifyOtp(dto: VerifyOtpDto, request: Request): Promise<AuthTokensResponse>;
    refresh(dto: RefreshTokenDto, request: Request): Promise<Omit<AuthTokensResponse, 'status' | 'isNewAccount'>>;
    validateReferral(dto: ValidateReferralDto): Promise<{
        valid: boolean;
        firstName?: string;
    }>;
    logout(sessionId: string): Promise<void>;
    logoutAll(userId: string): Promise<{
        revoked: number;
    }>;
    listSessions(userId: string, sessionId: string): Promise<{
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
    private contextOf;
}
