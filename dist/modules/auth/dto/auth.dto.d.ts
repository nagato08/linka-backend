import { AppLocale, DevicePlatform } from '../../../generated/prisma/enums';
export declare class DeviceInfoDto {
    platform: DevicePlatform;
    fingerprint: string;
    model?: string;
    osVersion?: string;
    appVersion?: string;
    integrityToken?: string;
}
export declare class RequestOtpDto {
    email: string;
    locale?: AppLocale;
}
export declare class VerifyOtpDto {
    email: string;
    code: string;
    device: DeviceInfoDto;
    referralCode?: string;
    locale?: AppLocale;
}
export declare class RefreshTokenDto {
    refreshToken: string;
}
export declare class ValidateReferralDto {
    code: string;
}
export declare class OtpRequestedResponse {
    email: string;
    expiresAt: Date;
}
export declare class AuthTokensResponse {
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
    status: string;
    isNewAccount: boolean;
}
