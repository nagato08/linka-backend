import { AccountService } from '../account/account.service';
import { RiskService } from '../safety/risk.service';
import { EventService } from '../events/event.service';
import { SponsorEventDto } from '../events/dto/event.dto';
import { ModerationService } from './moderation.service';
import { ModerationDecisionDto, ModerationQueueDto } from './dto/admin.dto';
export declare class AdminController {
    private readonly moderation;
    private readonly risk;
    private readonly account;
    private readonly events;
    constructor(moderation: ModerationService, risk: RiskService, account: AccountService, events: EventService);
    queue(query: ModerationQueueDto): Promise<{
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
            status: import("../../generated/prisma/enums").UserStatus;
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
        type: import("../../generated/prisma/enums").ModerationTaskType;
        id: string;
        status: import("../../generated/prisma/enums").ModerationTaskStatus;
        createdAt: Date;
        eventId: string | null;
        decision: import("../../generated/prisma/enums").ModerationDecision | null;
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
    claim(moderatorId: string, taskId: string): Promise<{
        claimed: boolean;
    }>;
    decide(moderatorId: string, taskId: string, dto: ModerationDecisionDto): Promise<{
        decided: boolean;
    }>;
    inspect(userId: string): Promise<{
        profile: {
            photos: {
                url: string;
                id: string;
                status: import("../../generated/prisma/enums").PhotoStatus;
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
            status: import("../../generated/prisma/enums").ReportStatus;
            createdAt: Date;
            reason: import("../../generated/prisma/enums").ReportReason;
            details: string | null;
        }[];
        id: string;
        email: string;
        status: import("../../generated/prisma/enums").UserStatus;
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
    refreshRisk(userId: string): Promise<{
        score: number;
        level: import("../../generated/prisma/enums").RiskLevel;
    }>;
    purge(userId: string): Promise<void>;
    sponsor(eventId: string, dto: SponsorEventDto): Promise<{
        id: string;
        isSponsored: boolean;
        sponsorName: string | null;
    }>;
}
