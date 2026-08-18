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
var ModerationService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModerationService = void 0;
const common_1 = require("@nestjs/common");
const enums_1 = require("../../generated/prisma/enums");
const prisma_service_1 = require("../../core/prisma/prisma.service");
const storage_service_1 = require("../../core/storage/storage.service");
const notification_service_1 = require("../notifications/notification.service");
const token_service_1 = require("../auth/token.service");
const referral_service_1 = require("../auth/referral.service");
const deck_cache_service_1 = require("../discovery/deck-cache.service");
let ModerationService = ModerationService_1 = class ModerationService {
    prisma;
    storage;
    tokens;
    referrals;
    deckCache;
    notifications;
    logger = new common_1.Logger(ModerationService_1.name);
    pendingCaptureDeletions = [];
    constructor(prisma, storage, tokens, referrals, deckCache, notifications) {
        this.prisma = prisma;
        this.storage = storage;
        this.tokens = tokens;
        this.referrals = referrals;
        this.deckCache = deckCache;
        this.notifications = notifications;
    }
    async queue(options) {
        const limit = Math.min(options.limit ?? 20, 50);
        const tasks = await this.prisma.moderationTask.findMany({
            where: {
                status: {
                    in: [enums_1.ModerationTaskStatus.QUEUED, enums_1.ModerationTaskStatus.IN_REVIEW],
                },
                ...(options.type ? { type: options.type } : {}),
            },
            orderBy: [{ priority: 'desc' }, { createdAt: 'asc' }],
            take: limit,
            ...(options.cursor ? { cursor: { id: options.cursor }, skip: 1 } : {}),
            include: {
                photo: {
                    select: {
                        id: true,
                        storageKey: true,
                        phash: true,
                        moderationScores: true,
                    },
                },
                report: {
                    select: {
                        id: true,
                        reason: true,
                        details: true,
                        evidenceKeys: true,
                        createdAt: true,
                    },
                },
                subjectUser: {
                    select: {
                        id: true,
                        createdAt: true,
                        status: true,
                        profile: {
                            select: { firstName: true, birthdate: true, bio: true },
                        },
                        riskScore: { select: { score: true, level: true, signals: true } },
                    },
                },
            },
        });
        return Promise.all(tasks.map(async (task) => ({
            ...task,
            photoUrl: task.photo
                ? await this.storage.createDownloadUrl(task.photo.storageKey, 900)
                : null,
        })));
    }
    async stats() {
        const [queued, byType, shadowBanned, openReports] = await Promise.all([
            this.prisma.moderationTask.count({
                where: { status: enums_1.ModerationTaskStatus.QUEUED },
            }),
            this.prisma.moderationTask.groupBy({
                by: ['type'],
                where: { status: enums_1.ModerationTaskStatus.QUEUED },
                _count: true,
            }),
            this.prisma.user.count({ where: { status: enums_1.UserStatus.SHADOW_BANNED } }),
            this.prisma.report.count({ where: { status: enums_1.ReportStatus.OPEN } }),
        ]);
        return { queued, byType, shadowBanned, openReports };
    }
    async claim(taskId, moderatorId) {
        const claimed = await this.prisma.moderationTask.updateMany({
            where: { id: taskId, status: enums_1.ModerationTaskStatus.QUEUED },
            data: {
                status: enums_1.ModerationTaskStatus.IN_REVIEW,
                assignedToId: moderatorId,
                claimedAt: new Date(),
            },
        });
        if (claimed.count === 0) {
            throw new common_1.BadRequestException('Tâche déjà prise en charge');
        }
        return { claimed: true };
    }
    async decide(taskId, moderatorId, decision, options = {}) {
        const task = await this.prisma.moderationTask.findUnique({
            where: { id: taskId },
            include: { photo: true, report: true },
        });
        if (!task)
            throw new common_1.NotFoundException('Tâche introuvable');
        if (task.status === enums_1.ModerationTaskStatus.RESOLVED) {
            throw new common_1.BadRequestException('Tâche déjà traitée');
        }
        const pending = [];
        await this.prisma.$transaction(async (tx) => {
            await tx.moderationTask.update({
                where: { id: taskId },
                data: {
                    status: enums_1.ModerationTaskStatus.RESOLVED,
                    decision,
                    notes: options.notes,
                    assignedToId: moderatorId,
                    resolvedAt: new Date(),
                },
            });
            if (task.reportId) {
                await tx.report.update({
                    where: { id: task.reportId },
                    data: {
                        status: decision === enums_1.ModerationDecision.NO_ACTION
                            ? enums_1.ReportStatus.DISMISSED
                            : enums_1.ReportStatus.ACTIONED,
                        decision,
                        resolvedById: moderatorId,
                        resolvedAt: new Date(),
                        resolutionNote: options.notes,
                    },
                });
            }
            if (task.photoId) {
                await this.applyPhotoDecision(tx, task.photoId, decision, options.photoReason);
            }
            if (task.verificationId) {
                await this.applyVerificationDecision(tx, task.verificationId, decision, pending, options.notes);
            }
            if (task.eventId) {
                await this.applyEventDecision(tx, task.eventId, decision, moderatorId, pending, options.notes);
            }
            await tx.auditLog.create({
                data: {
                    actorId: moderatorId,
                    actorType: 'ADMIN',
                    action: `moderation.${decision.toLowerCase()}`,
                    entityType: task.subjectUserId ? 'user' : 'moderation_task',
                    entityId: task.subjectUserId ?? task.id,
                    after: { decision, notes: options.notes ?? null },
                },
            });
        });
        await this.flushCaptureDeletions();
        for (const notification of pending) {
            await this.notifications.notify(notification);
        }
        if (task.subjectUserId) {
            await this.applyUserSanction(task.subjectUserId, decision, options.notes);
        }
        this.logger.log(`Décision ${decision} sur la tâche ${taskId}`);
        return { decided: true };
    }
    async applyPhotoDecision(tx, photoId, decision, reason) {
        const approved = decision === enums_1.ModerationDecision.APPROVE;
        await tx.photo.update({
            where: { id: photoId },
            data: {
                status: approved ? enums_1.PhotoStatus.APPROVED : enums_1.PhotoStatus.REJECTED,
                rejectionReason: approved
                    ? null
                    : (reason ?? enums_1.PhotoRejectionReason.OTHER),
                moderatedAt: new Date(),
            },
        });
    }
    async applyEventDecision(tx, eventId, decision, moderatorId, pending, notes) {
        const event = await tx.event.findUnique({
            where: { id: eventId },
            select: {
                status: true,
                organizerId: true,
                conversation: { select: { id: true } },
            },
        });
        if (!event)
            return;
        const approved = decision === enums_1.ModerationDecision.APPROVE;
        if (event.status === enums_1.EventStatus.CANCELLED ||
            event.status === enums_1.EventStatus.COMPLETED) {
            return;
        }
        await tx.event.update({
            where: { id: eventId },
            data: approved
                ? { status: enums_1.EventStatus.PUBLISHED, publishedAt: new Date() }
                : { status: enums_1.EventStatus.CANCELLED, cancelledAt: new Date() },
        });
        pending.push({
            userId: event.organizerId,
            type: enums_1.NotificationType.MODERATION,
            vars: {
                message: approved
                    ? 'Votre événement est publié. Il apparaît désormais à proximité.'
                    : notes
                        ? `Événement refusé : ${notes}`
                        : 'Votre événement a été refusé par la modération.',
            },
            data: { screen: 'event', eventId },
        });
        if (!approved) {
            await tx.eventRequest.updateMany({
                where: { eventId, status: { in: ['PENDING', 'WAITLISTED'] } },
                data: { status: enums_1.EventRequestStatus.CANCELLED },
            });
            if (event.conversation) {
                await tx.message.create({
                    data: {
                        conversationId: event.conversation.id,
                        senderId: moderatorId,
                        type: enums_1.MessageType.SYSTEM,
                        clientKey: `event-rejected-${eventId}`,
                        body: notes
                            ? `Événement refusé par la modération : ${notes}`
                            : 'Événement refusé par la modération.',
                    },
                });
            }
        }
    }
    async applyVerificationDecision(tx, verificationId, decision, pending, notes) {
        const verification = await tx.verification.findUnique({
            where: { id: verificationId },
            select: { userId: true, captureKey: true },
        });
        if (!verification)
            return;
        const approved = decision === enums_1.ModerationDecision.APPROVE;
        await tx.verification.update({
            where: { id: verificationId },
            data: {
                status: approved
                    ? enums_1.VerificationStatus.APPROVED
                    : enums_1.VerificationStatus.REJECTED,
                failureReason: approved
                    ? null
                    : enums_1.VerificationFailureReason.MANUAL_REJECT,
                reviewNote: notes?.slice(0, 500),
                processedAt: new Date(),
                captureKey: null,
                captureWiped: true,
            },
        });
        if (approved) {
            await tx.profile.updateMany({
                where: { userId: verification.userId },
                data: { isVerified: true },
            });
        }
        pending.push({
            userId: verification.userId,
            type: enums_1.NotificationType.VERIFICATION_RESULT,
            vars: { approved: String(approved) },
            data: { screen: 'verification' },
        });
        this.pendingCaptureDeletions.push(verification.captureKey);
    }
    async applyUserSanction(userId, decision, notes) {
        switch (decision) {
            case enums_1.ModerationDecision.BAN: {
                await this.prisma.user.update({
                    where: { id: userId },
                    data: {
                        status: enums_1.UserStatus.BANNED,
                        bannedAt: new Date(),
                        banReason: notes?.slice(0, 500),
                    },
                });
                await this.tokens.revokeAllForUser(userId, 'banned');
                const referees = await this.referrals.revokeBranch(userId, 'parrain banni');
                if (referees.length > 0) {
                    await this.prisma.moderationTask.createMany({
                        data: referees.map((refereeId) => ({
                            type: enums_1.ModerationTaskType.RISK_REVIEW,
                            subjectUserId: refereeId,
                            priority: 50,
                            notes: `Filleul d'un compte banni (${userId})`,
                        })),
                    });
                }
                break;
            }
            case enums_1.ModerationDecision.SHADOW_BAN:
                await this.prisma.user.update({
                    where: { id: userId },
                    data: {
                        status: enums_1.UserStatus.SHADOW_BANNED,
                        shadowBannedAt: new Date(),
                    },
                });
                break;
            case enums_1.ModerationDecision.SUSPEND:
                await this.prisma.user.update({
                    where: { id: userId },
                    data: {
                        status: enums_1.UserStatus.SUSPENDED,
                        suspendedUntil: new Date(Date.now() + 7 * 86_400_000),
                    },
                });
                await this.tokens.revokeAllForUser(userId, 'suspended');
                break;
            case enums_1.ModerationDecision.APPROVE:
            case enums_1.ModerationDecision.NO_ACTION: {
                const user = await this.prisma.user.findUnique({
                    where: { id: userId },
                    select: { status: true },
                });
                if (user?.status === enums_1.UserStatus.SHADOW_BANNED) {
                    await this.prisma.user.update({
                        where: { id: userId },
                        data: {
                            status: enums_1.UserStatus.ACTIVE,
                            shadowBannedAt: null,
                        },
                    });
                    await this.prisma.riskScore.updateMany({
                        where: { userId },
                        data: { shadowBannedAt: null, reviewedAt: new Date() },
                    });
                }
                break;
            }
            default:
                break;
        }
        await this.deckCache.invalidate(userId);
    }
    async flushCaptureDeletions() {
        const keys = this.pendingCaptureDeletions.filter((key) => key !== null);
        this.pendingCaptureDeletions = [];
        if (keys.length === 0)
            return;
        try {
            await this.storage.deleteObjects(keys);
        }
        catch (error) {
            this.logger.error(`Captures de vérification non supprimées : ${error.message}`);
        }
    }
    async inspectUser(userId) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
            select: {
                id: true,
                email: true,
                status: true,
                createdAt: true,
                lastActiveAt: true,
                bannedAt: true,
                banReason: true,
                shadowBannedAt: true,
                referredById: true,
                profile: {
                    select: {
                        firstName: true,
                        birthdate: true,
                        bio: true,
                        gender: true,
                        completionScore: true,
                        isVerified: true,
                        photos: {
                            where: { deletedAt: null },
                            select: {
                                id: true,
                                status: true,
                                position: true,
                                storageKey: true,
                            },
                            orderBy: { position: 'asc' },
                        },
                    },
                },
                riskScore: true,
                devices: {
                    select: { fingerprint: true, platform: true, integrityVerdict: true },
                },
                _count: {
                    select: {
                        reportsReceived: true,
                        reportsMade: true,
                        swipesGiven: true,
                        messagesSent: true,
                    },
                },
            },
        });
        if (!user)
            throw new common_1.NotFoundException('Compte introuvable');
        const photos = await Promise.all((user.profile?.photos ?? []).map(async (photo) => ({
            ...photo,
            url: await this.storage.createDownloadUrl(photo.storageKey, 900),
        })));
        const reports = await this.prisma.report.findMany({
            where: { reportedUserId: userId },
            orderBy: { createdAt: 'desc' },
            take: 20,
            select: {
                id: true,
                reason: true,
                details: true,
                status: true,
                createdAt: true,
            },
        });
        return {
            ...user,
            profile: user.profile ? { ...user.profile, photos } : null,
            reports,
        };
    }
};
exports.ModerationService = ModerationService;
exports.ModerationService = ModerationService = ModerationService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        storage_service_1.StorageService,
        token_service_1.TokenService,
        referral_service_1.ReferralService,
        deck_cache_service_1.DeckCacheService,
        notification_service_1.NotificationService])
], ModerationService);
//# sourceMappingURL=moderation.service.js.map