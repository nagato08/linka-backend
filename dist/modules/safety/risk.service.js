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
var RiskService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RiskService = void 0;
const common_1 = require("@nestjs/common");
const enums_1 = require("../../generated/prisma/enums");
const prisma_service_1 = require("../../core/prisma/prisma.service");
const redis_service_1 = require("../../core/redis/redis.service");
const geo_integrity_service_1 = require("./geo-integrity.service");
const OFF_PLATFORM_PATTERNS = [
    'whatsapp',
    'whatsap',
    'telegram',
    'wattsap',
    'snap',
    'mon numero',
    'mon numéro',
    'appelle moi',
    'appelle-moi',
    'ecris moi sur',
    'écris moi sur',
];
const SCORE_WEIGHTS = {
    likeSpray: 25,
    fastSwipes: 20,
    reports: 30,
    offPlatform: 25,
    duplicateMessages: 20,
    linkedAccounts: 15,
    rejectedPhotos: 15,
    spoofedLocation: 20,
};
const SHADOW_BAN_SCORE = 70;
let RiskService = RiskService_1 = class RiskService {
    prisma;
    redis;
    geo;
    logger = new common_1.Logger(RiskService_1.name);
    constructor(prisma, redis, geo) {
        this.prisma = prisma;
        this.redis = redis;
        this.geo = geo;
    }
    async evaluate(userId) {
        const signals = await this.collect(userId);
        let score = 0;
        if (signals.swipeCount >= 30 && signals.likeRatio > 0.9) {
            score += SCORE_WEIGHTS.likeSpray;
        }
        if (signals.fastSwipes >= 20) {
            score += SCORE_WEIGHTS.fastSwipes;
        }
        const reportRatio = signals.matchCount > 0
            ? signals.reportsReceived / signals.matchCount
            : signals.reportsReceived;
        if (signals.reportsReceived >= 2 && reportRatio > 0.05) {
            score += SCORE_WEIGHTS.reports;
        }
        if (signals.offPlatformMessages >= 3) {
            score += SCORE_WEIGHTS.offPlatform;
        }
        if (signals.duplicateMessages >= 3) {
            score += SCORE_WEIGHTS.duplicateMessages;
        }
        if (signals.linkedAccounts > 2) {
            score += SCORE_WEIGHTS.linkedAccounts;
        }
        if (signals.photosRejected >= 2) {
            score += SCORE_WEIGHTS.rejectedPhotos;
        }
        if (signals.impossibleJumps >= 2) {
            score += SCORE_WEIGHTS.spoofedLocation;
        }
        return { score: Math.min(100, score), level: this.levelOf(score), signals };
    }
    async refresh(userId) {
        const { score, level, signals } = await this.evaluate(userId);
        await this.prisma.riskScore.upsert({
            where: { userId },
            create: { userId, score, level, signals },
            update: { score, level, signals },
        });
        if (score >= SHADOW_BAN_SCORE) {
            await this.applyShadowBan(userId, score, signals);
        }
        return { score, level };
    }
    async applyShadowBan(userId, score, signals) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
            select: { status: true, shadowBannedAt: true },
        });
        if (!user || user.shadowBannedAt || user.status === enums_1.UserStatus.BANNED) {
            return;
        }
        await this.prisma.$transaction(async (tx) => {
            await tx.user.update({
                where: { id: userId },
                data: {
                    status: enums_1.UserStatus.SHADOW_BANNED,
                    shadowBannedAt: new Date(),
                },
            });
            await tx.riskScore.update({
                where: { userId },
                data: { shadowBannedAt: new Date() },
            });
            await tx.moderationTask.create({
                data: {
                    type: enums_1.ModerationTaskType.RISK_REVIEW,
                    subjectUserId: userId,
                    priority: 80,
                    notes: `Score de risque ${score} — ${JSON.stringify(signals)}`.slice(0, 1_000),
                },
            });
        });
        this.logger.warn(`Mise en retrait automatique de ${userId} : score ${score}`);
    }
    async collect(userId) {
        const [swipeCount, likeCount, reportsReceived, matchCount, photosRejected, fingerprints,] = await Promise.all([
            this.prisma.swipe.count({ where: { actorId: userId } }),
            this.prisma.swipe.count({
                where: {
                    actorId: userId,
                    action: { in: [enums_1.SwipeAction.LIKE, enums_1.SwipeAction.SUPERLIKE] },
                },
            }),
            this.prisma.report.count({
                where: {
                    reportedUserId: userId,
                    status: {
                        in: [
                            enums_1.ReportStatus.OPEN,
                            enums_1.ReportStatus.REVIEWING,
                            enums_1.ReportStatus.ACTIONED,
                        ],
                    },
                },
            }),
            this.prisma.match.count({
                where: { OR: [{ userAId: userId }, { userBId: userId }] },
            }),
            this.prisma.photo.count({
                where: { profileId: userId, status: 'REJECTED' },
            }),
            this.prisma.device.findMany({
                where: { userId },
                select: { fingerprint: true },
            }),
        ]);
        const fastSwipes = Number((await this.redis.client.get(`swipe:fast:${userId}`)) ?? 0);
        const linkedAccounts = await this.countLinkedAccounts(fingerprints.map((d) => d.fingerprint));
        const { offPlatform, duplicates } = await this.analyseMessages(userId);
        const impossibleJumps = await this.geo.countRecentJumps(userId);
        return {
            likeRatio: swipeCount > 0 ? likeCount / swipeCount : 0,
            swipeCount,
            fastSwipes,
            reportsReceived,
            matchCount,
            offPlatformMessages: offPlatform,
            duplicateMessages: duplicates,
            linkedAccounts,
            photosRejected,
            impossibleJumps,
        };
    }
    async countLinkedAccounts(fingerprints) {
        if (fingerprints.length === 0)
            return 0;
        const devices = await this.prisma.device.findMany({
            where: { fingerprint: { in: fingerprints } },
            select: { userId: true },
            distinct: ['userId'],
        });
        return devices.length;
    }
    async analyseMessages(userId) {
        const messages = await this.prisma.message.findMany({
            where: { senderId: userId, body: { not: null }, deletedAt: null },
            orderBy: { createdAt: 'desc' },
            take: 100,
            select: { body: true, conversationId: true },
        });
        let offPlatform = 0;
        const bodyToConversations = new Map();
        for (const message of messages) {
            const text = (message.body ?? '').toLowerCase();
            if (OFF_PLATFORM_PATTERNS.some((pattern) => text.includes(pattern))) {
                offPlatform += 1;
            }
            const normalized = text.replace(/\s+/g, ' ').trim();
            if (normalized.length >= 15) {
                const set = bodyToConversations.get(normalized) ?? new Set();
                set.add(message.conversationId);
                bodyToConversations.set(normalized, set);
            }
        }
        const duplicates = [...bodyToConversations.values()].filter((conversations) => conversations.size >= 3).length;
        return { offPlatform, duplicates };
    }
    levelOf(score) {
        if (score >= 70)
            return enums_1.RiskLevel.CRITICAL;
        if (score >= 45)
            return enums_1.RiskLevel.HIGH;
        if (score >= 20)
            return enums_1.RiskLevel.MEDIUM;
        return enums_1.RiskLevel.LOW;
    }
};
exports.RiskService = RiskService;
exports.RiskService = RiskService = RiskService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        redis_service_1.RedisService,
        geo_integrity_service_1.GeoIntegrityService])
], RiskService);
//# sourceMappingURL=risk.service.js.map