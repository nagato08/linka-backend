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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var NotificationService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationService = void 0;
const bullmq_1 = require("@nestjs/bullmq");
const common_1 = require("@nestjs/common");
const bullmq_2 = require("bullmq");
const enums_1 = require("../../generated/prisma/enums");
const prisma_service_1 = require("../../core/prisma/prisma.service");
const queue_module_1 = require("../../core/queue/queue.module");
const templates_1 = require("./templates");
const push_service_1 = require("./push.service");
const PREFERENCE_KEY = {
    NEW_MATCH: 'newMatch',
    NEW_MESSAGE: 'newMessage',
    NEW_LIKE: 'newLike',
    EVENT_REQUEST: 'events',
    EVENT_ACCEPTED: 'events',
    EVENT_REMINDER: 'events',
    MARKETING: 'marketing',
};
let NotificationService = NotificationService_1 = class NotificationService {
    prisma;
    push;
    queue;
    logger = new common_1.Logger(NotificationService_1.name);
    constructor(prisma, push, queue) {
        this.prisma = prisma;
        this.push = push;
        this.queue = queue;
    }
    async notify(input) {
        await this.queue.add('send-notification', input, {
            attempts: 2,
            backoff: { type: 'fixed', delay: 5_000 },
        });
    }
    async notifyMany(inputs) {
        if (inputs.length === 0)
            return;
        await this.queue.addBulk(inputs.map((input) => ({
            name: 'send-notification',
            data: input,
            opts: {
                attempts: 2,
                backoff: { type: 'fixed', delay: 5_000 },
            },
        })));
    }
    async dispatch(input) {
        const user = await this.prisma.user.findUnique({
            where: { id: input.userId },
            select: {
                locale: true,
                status: true,
                notificationPreference: true,
            },
        });
        if (!user)
            return;
        if (!['ACTIVE', 'SHADOW_BANNED', 'PENDING_PROFILE'].includes(user.status)) {
            return;
        }
        const template = (0, templates_1.renderTemplate)(input.type, user.locale, input.vars);
        const notification = await this.prisma.notification.create({
            data: {
                userId: input.userId,
                type: input.type,
                channel: enums_1.NotificationChannel.PUSH,
                titleKey: template.title,
                bodyKey: template.body,
                data: input.data ?? {},
            },
        });
        const allowed = await this.shouldPush(input, user);
        if (!allowed) {
            return;
        }
        const tokens = await this.prisma.pushToken.findMany({
            where: { userId: input.userId, isActive: true },
            select: { id: true, token: true, platform: true },
        });
        if (tokens.length === 0)
            return;
        let delivered = 0;
        for (const pushToken of tokens) {
            const result = await this.push.send({
                token: pushToken.token,
                title: template.title,
                body: template.body,
                data: { type: input.type, ...(input.data ?? {}) },
                platform: pushToken.platform,
            });
            if (result.delivered) {
                delivered += 1;
                await this.prisma.pushToken.update({
                    where: { id: pushToken.id },
                    data: { lastUsedAt: new Date() },
                });
            }
            else if (result.tokenInvalid) {
                await this.prisma.pushToken.update({
                    where: { id: pushToken.id },
                    data: { isActive: false },
                });
            }
        }
        await this.prisma.notification.update({
            where: { id: notification.id },
            data: delivered > 0 ? { sentAt: new Date() } : { failedAt: new Date() },
        });
    }
    async shouldPush(input, user) {
        const preference = user.notificationPreference;
        if (!preference)
            return true;
        const key = PREFERENCE_KEY[input.type];
        if (key && !preference[key])
            return false;
        if (input.conversationId) {
            const membership = await this.prisma.conversationParticipant.findUnique({
                where: {
                    conversationId_userId: {
                        conversationId: input.conversationId,
                        userId: input.userId,
                    },
                },
                select: { mutedUntil: true },
            });
            if (membership?.mutedUntil && membership.mutedUntil > new Date()) {
                return false;
            }
        }
        return !this.isQuietHour(preference);
    }
    isQuietHour(preference) {
        const { quietHoursStart: start, quietHoursEnd: end, timezone } = preference;
        if (start === null || end === null)
            return false;
        const formatter = new Intl.DateTimeFormat('fr-FR', {
            timeZone: timezone || 'Africa/Douala',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
        });
        const [hours, minutes] = formatter
            .format(new Date())
            .split(':')
            .map((part) => Number(part));
        const nowMinutes = (hours ?? 0) * 60 + (minutes ?? 0);
        return start <= end
            ? nowMinutes >= start && nowMinutes < end
            : nowMinutes >= start || nowMinutes < end;
    }
    async registerToken(userId, token, platform, deviceId) {
        await this.prisma.pushToken.upsert({
            where: { token },
            create: { userId, token, platform, deviceId },
            update: { userId, platform, deviceId, isActive: true },
        });
    }
    async removeToken(userId, token) {
        await this.prisma.pushToken.deleteMany({ where: { userId, token } });
    }
    list(userId, limit = 50) {
        return this.prisma.notification.findMany({
            where: { userId },
            orderBy: { createdAt: 'desc' },
            take: limit,
            select: {
                id: true,
                type: true,
                titleKey: true,
                bodyKey: true,
                data: true,
                readAt: true,
                createdAt: true,
            },
        });
    }
    async unreadCount(userId) {
        return this.prisma.notification.count({
            where: { userId, readAt: null },
        });
    }
    async markAllRead(userId) {
        const result = await this.prisma.notification.updateMany({
            where: { userId, readAt: null },
            data: { readAt: new Date() },
        });
        return { updated: result.count };
    }
    updatePreferences(userId, preferences) {
        return this.prisma.notificationPreference.upsert({
            where: { userId },
            create: { userId, ...preferences },
            update: preferences,
        });
    }
    getPreferences(userId) {
        return this.prisma.notificationPreference.findUnique({ where: { userId } });
    }
    async localeOf(userId) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
            select: { locale: true },
        });
        return user?.locale ?? enums_1.AppLocale.FR;
    }
};
exports.NotificationService = NotificationService;
exports.NotificationService = NotificationService = NotificationService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, bullmq_1.InjectQueue)(queue_module_1.QUEUES.NOTIFICATION)),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        push_service_1.PushService,
        bullmq_2.Queue])
], NotificationService);
//# sourceMappingURL=notification.service.js.map