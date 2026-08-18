import { PrismaService } from '../../core/prisma/prisma.service';
import { MediaService } from '../media/media.service';
import { DeckCacheService } from '../discovery/deck-cache.service';
import { CreditLedgerService } from '../billing/credit-ledger.service';
import { EntitlementService } from '../billing/entitlement.service';
import { type CursorPage } from '../../common/dto/pagination.dto';
export interface ProfileCard {
    userId: string;
    firstName: string;
    age: number | null;
    isVerified: boolean;
    photo: ReturnType<MediaService['toDto']> | null;
}
export declare class MatchService {
    private readonly prisma;
    private readonly media;
    private readonly deckCache;
    private readonly ledger;
    private readonly entitlements;
    private readonly logger;
    constructor(prisma: PrismaService, media: MediaService, deckCache: DeckCacheService, ledger: CreditLedgerService, entitlements: EntitlementService);
    list(userId: string, cursor?: string, limit?: number): Promise<{
        data: {
            matchId: string;
            matchedAt: Date;
            fromSuperlike: boolean;
            conversationId: string | null;
            lastMessageAt: Date | null;
            lastMessagePreview: string | null;
            unreadCount: number;
            profile: ProfileCard | null;
        }[];
        pageInfo: import("../../common/dto/pagination.dto").PageInfo;
    }>;
    likesReceived(userId: string, cursor?: string, limit?: number): Promise<{
        data: {
            id: string;
            likedAt: Date;
            isSuperlike: boolean;
            profile: ProfileCard | null;
        }[];
        pageInfo: import("../../common/dto/pagination.dto").PageInfo;
    }>;
    unmatch(userId: string, matchId: string): Promise<void>;
    rewind(userId: string): Promise<{
        targetId: string;
        remainingFree: number;
    }>;
    private hasUnlimitedRewind;
    private loadCards;
    private ageFrom;
}
export type { CursorPage };
