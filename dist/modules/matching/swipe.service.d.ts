import { SwipeAction, SwipeSource } from '../../generated/prisma/enums';
import { PrismaService } from '../../core/prisma/prisma.service';
import { RedisService } from '../../core/redis/redis.service';
import { DeckCacheService } from '../discovery/deck-cache.service';
import { BoostService } from '../billing/boost.service';
import { NotificationService } from '../notifications/notification.service';
import { CreditLedgerService } from '../billing/credit-ledger.service';
import { EntitlementService } from '../billing/entitlement.service';
export interface SwipeResult {
    matched: boolean;
    matchId: string | null;
    conversationId: string | null;
}
export declare class SwipeService {
    private readonly prisma;
    private readonly redis;
    private readonly deckCache;
    private readonly ledger;
    private readonly entitlements;
    private readonly boosts;
    private readonly notifications;
    private readonly logger;
    constructor(prisma: PrismaService, redis: RedisService, deckCache: DeckCacheService, ledger: CreditLedgerService, entitlements: EntitlementService, boosts: BoostService, notifications: NotificationService);
    swipe(actorId: string, targetId: string, action: SwipeAction, source?: SwipeSource): Promise<SwipeResult>;
    private tryCreateMatch;
    private notifyMatch;
    private assertTargetIsSwipeable;
    private enforceLikeQuota;
    private recordPace;
    private consumeSuperlike;
}
