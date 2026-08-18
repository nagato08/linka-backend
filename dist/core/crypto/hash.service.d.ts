import { TypedConfigService } from '../config/config.module';
export declare class HashService {
    private readonly pepper;
    constructor(config: TypedConfigService);
    hashPhone(phoneE164: string): string;
    hashOtp(code: string, phoneE164: string): string;
    hashToken(token: string): string;
    safeEqual(a: string, b: string): boolean;
    hashPassword(password: string): Promise<string>;
    verifyPassword(hash: string, password: string): Promise<boolean>;
    generateOtpCode(): string;
    generateRefreshToken(): string;
    generateReferralCode(): string;
}
