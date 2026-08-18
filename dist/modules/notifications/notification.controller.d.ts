import { NotificationService } from './notification.service';
import { RegisterPushTokenDto, RemovePushTokenDto, UpdateNotificationPreferencesDto } from './dto/notification.dto';
export declare class NotificationController {
    private readonly notifications;
    constructor(notifications: NotificationService);
    list(userId: string): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        type: import("../../generated/prisma/enums").NotificationType;
        id: string;
        createdAt: Date;
        readAt: Date | null;
        titleKey: string;
        bodyKey: string;
        data: import("@prisma/client/runtime/client").JsonValue;
    }[]>;
    unread(userId: string): Promise<{
        count: number;
    }>;
    markAllRead(userId: string): Promise<{
        updated: number;
    }>;
    registerToken(userId: string, dto: RegisterPushTokenDto): Promise<void>;
    removeToken(userId: string, dto: RemovePushTokenDto): Promise<void>;
    preferences(userId: string): import("../../generated/prisma/models").Prisma__NotificationPreferenceClient<{
        updatedAt: Date;
        userId: string;
        newMatch: boolean;
        newMessage: boolean;
        newLike: boolean;
        events: boolean;
        marketing: boolean;
        quietHoursStart: number | null;
        quietHoursEnd: number | null;
        timezone: string;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    updatePreferences(userId: string, dto: UpdateNotificationPreferencesDto): import("../../generated/prisma/models").Prisma__NotificationPreferenceClient<{
        updatedAt: Date;
        userId: string;
        newMatch: boolean;
        newMessage: boolean;
        newLike: boolean;
        events: boolean;
        marketing: boolean;
        quietHoursStart: number | null;
        quietHoursEnd: number | null;
        timezone: string;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
}
