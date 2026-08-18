import { BoostStatus, BoostTier } from '../../generated/prisma/enums';
import { PrismaService } from '../../core/prisma/prisma.service';
import { NotificationService } from '../notifications/notification.service';
import { CreditLedgerService } from './credit-ledger.service';
export declare class BoostService {
    private readonly prisma;
    private readonly ledger;
    private readonly notifications;
    private readonly logger;
    constructor(prisma: PrismaService, ledger: CreditLedgerService, notifications: NotificationService);
    activate(userId: string, sku: string): Promise<{
        boostId: string;
        status: BoostStatus;
        startAt: Date | null;
        endAt: Date | null;
        multiplier: number;
        queuedBehind: number;
    }>;
    private hasFreeSlot;
    processQueue(): Promise<{
        ended: number;
        started: number;
    }>;
    stats(userId: string, boostId: string): Promise<{
        id: string;
        status: BoostStatus;
        tier: BoostTier;
        multiplier: number;
        startAt: Date | null;
        endAt: Date | null;
        impressions: number;
        profileViews: number;
        likesGained: number;
        matchesGained: number;
    }>;
    history(userId: string, limit?: number): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: string;
        status: BoostStatus;
        tier: BoostTier;
        startAt: Date | null;
        endAt: Date | null;
        impressions: number;
        likesGained: number;
        matchesGained: number;
    }[]>;
    recordLike(targetId: string): Promise<void>;
    recordMatch(userIds: string[]): Promise<void>;
    recordImpressions(userIds: string[]): Promise<void>;
}
