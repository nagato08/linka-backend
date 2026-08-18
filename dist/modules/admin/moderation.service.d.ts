import { ModerationDecision, ModerationTaskStatus, ModerationTaskType, PhotoRejectionReason, PhotoStatus, ReportStatus, UserStatus } from '../../generated/prisma/enums';
import { PrismaService } from '../../core/prisma/prisma.service';
import { StorageService } from '../../core/storage/storage.service';
import { NotificationService } from '../notifications/notification.service';
import { TokenService } from '../auth/token.service';
import { ReferralService } from '../auth/referral.service';
import { DeckCacheService } from '../discovery/deck-cache.service';
export declare class ModerationService {
    private readonly prisma;
    private readonly storage;
    private readonly tokens;
    private readonly referrals;
    private readonly deckCache;
    private readonly notifications;
    private readonly logger;
    private pendingCaptureDeletions;
    constructor(prisma: PrismaService, storage: StorageService, tokens: TokenService, referrals: ReferralService, deckCache: DeckCacheService, notifications: NotificationService);
    queue(options: {
        type?: ModerationTaskType;
        limit?: number;
        cursor?: string;
    }): Promise<{
        photoUrl: string | null;
        photo: {
            id: string;
            storageKey: string;
            phash: string | null;
            moderationScores: import("@prisma/client/runtime/client").JsonValue;
        } | null;
        report: {
            id: string;
            createdAt: Date;
            reason: import("../../generated/prisma/enums").ReportReason;
            details: string | null;
            evidenceKeys: string[];
        } | null;
        subjectUser: {
            id: string;
            status: UserStatus;
            createdAt: Date;
            profile: {
                firstName: string;
                birthdate: Date;
                bio: string | null;
            } | null;
            riskScore: {
                level: import("../../generated/prisma/enums").RiskLevel;
                score: number;
                signals: import("@prisma/client/runtime/client").JsonValue;
            } | null;
        } | null;
        type: ModerationTaskType;
        id: string;
        status: ModerationTaskStatus;
        createdAt: Date;
        eventId: string | null;
        decision: ModerationDecision | null;
        resolvedAt: Date | null;
        priority: number;
        subjectUserId: string | null;
        photoId: string | null;
        reportId: string | null;
        verificationId: string | null;
        assignedToId: string | null;
        notes: string | null;
        claimedAt: Date | null;
    }[]>;
    stats(): Promise<{
        queued: number;
        byType: (import("../../generated/prisma/internal/prismaNamespace").PickEnumerable<import("../../generated/prisma/models").ModerationTaskGroupByOutputType, "type"[]> & {
            _count: number;
        })[];
        shadowBanned: number;
        openReports: number;
    }>;
    claim(taskId: string, moderatorId: string): Promise<{
        claimed: boolean;
    }>;
    decide(taskId: string, moderatorId: string, decision: ModerationDecision, options?: {
        notes?: string;
        photoReason?: PhotoRejectionReason;
    }): Promise<{
        decided: boolean;
    }>;
    private applyPhotoDecision;
    private applyEventDecision;
    private applyVerificationDecision;
    private applyUserSanction;
    private flushCaptureDeletions;
    inspectUser(userId: string): Promise<{
        profile: {
            photos: {
                url: string;
                id: string;
                status: PhotoStatus;
                storageKey: string;
                position: number;
            }[];
            firstName: string;
            birthdate: Date;
            gender: import("../../generated/prisma/enums").Gender;
            bio: string | null;
            isVerified: boolean;
            completionScore: number;
        } | null;
        reports: {
            id: string;
            status: ReportStatus;
            createdAt: Date;
            reason: import("../../generated/prisma/enums").ReportReason;
            details: string | null;
        }[];
        id: string;
        email: string;
        status: UserStatus;
        referredById: string | null;
        bannedAt: Date | null;
        banReason: string | null;
        shadowBannedAt: Date | null;
        lastActiveAt: Date | null;
        createdAt: Date;
        riskScore: {
            level: import("../../generated/prisma/enums").RiskLevel;
            shadowBannedAt: Date | null;
            updatedAt: Date;
            userId: string;
            score: number;
            signals: import("@prisma/client/runtime/client").JsonValue | null;
            reviewedAt: Date | null;
        } | null;
        devices: {
            platform: import("../../generated/prisma/enums").DevicePlatform;
            fingerprint: string;
            integrityVerdict: import("../../generated/prisma/enums").IntegrityVerdict;
        }[];
        _count: {
            swipesGiven: number;
            messagesSent: number;
            reportsMade: number;
            reportsReceived: number;
        };
    }>;
}
