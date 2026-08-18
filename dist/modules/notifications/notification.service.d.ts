import { Queue } from 'bullmq';
import { AppLocale, DevicePlatform, NotificationType } from '../../generated/prisma/enums';
import { PrismaService } from '../../core/prisma/prisma.service';
import { PushService } from './push.service';
export interface NotifyInput {
    userId: string;
    type: NotificationType;
    vars?: Record<string, string>;
    data?: Record<string, string>;
    conversationId?: string;
}
export declare class NotificationService {
    private readonly prisma;
    private readonly push;
    private readonly queue;
    private readonly logger;
    constructor(prisma: PrismaService, push: PushService, queue: Queue);
    notify(input: NotifyInput): Promise<void>;
    notifyMany(inputs: NotifyInput[]): Promise<void>;
    dispatch(input: NotifyInput): Promise<void>;
    private shouldPush;
    private isQuietHour;
    registerToken(userId: string, token: string, platform: DevicePlatform, deviceId?: string): Promise<void>;
    removeToken(userId: string, token: string): Promise<void>;
    list(userId: string, limit?: number): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        type: NotificationType;
        id: string;
        createdAt: Date;
        readAt: Date | null;
        titleKey: string;
        bodyKey: string;
        data: import("@prisma/client/runtime/client").JsonValue;
    }[]>;
    unreadCount(userId: string): Promise<number>;
    markAllRead(userId: string): Promise<{
        updated: number;
    }>;
    updatePreferences(userId: string, preferences: {
        newMatch?: boolean;
        newMessage?: boolean;
        newLike?: boolean;
        events?: boolean;
        marketing?: boolean;
        quietHoursStart?: number | null;
        quietHoursEnd?: number | null;
        timezone?: string;
    }): import("../../generated/prisma/models").Prisma__NotificationPreferenceClient<{
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
    getPreferences(userId: string): import("../../generated/prisma/models").Prisma__NotificationPreferenceClient<{
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
    localeOf(userId: string): Promise<AppLocale>;
}
