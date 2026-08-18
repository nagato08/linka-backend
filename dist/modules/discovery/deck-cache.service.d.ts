import { RedisService } from '../../core/redis/redis.service';
export declare class DeckCacheService {
    private readonly redis;
    private readonly logger;
    constructor(redis: RedisService);
    private deckKey;
    private seenKey;
    store(userId: string, candidateIds: string[]): Promise<void>;
    take(userId: string, count: number): Promise<string[]>;
    remaining(userId: string): Promise<number>;
    invalidate(userId: string): Promise<void>;
    markSeen(userId: string, targetId: string): Promise<void>;
    unmarkSeen(userId: string, targetId: string): Promise<void>;
    private hasSeen;
}
