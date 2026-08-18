import { DevicePlatform } from '../../../generated/prisma/enums';
export declare class RegisterPushTokenDto {
    token: string;
    platform: DevicePlatform;
    deviceId?: string;
}
export declare class RemovePushTokenDto {
    token: string;
}
export declare class UpdateNotificationPreferencesDto {
    newMatch?: boolean;
    newMessage?: boolean;
    newLike?: boolean;
    events?: boolean;
    marketing?: boolean;
    quietHoursStart?: number;
    quietHoursEnd?: number;
    timezone?: string;
}
