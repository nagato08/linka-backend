import { PrismaService } from '../../core/prisma/prisma.service';
import { HashService } from '../../core/crypto/hash.service';
import { PhoneService } from '../auth/phone.service';
import { DeckCacheService } from '../discovery/deck-cache.service';
export declare class BlockService {
    private readonly prisma;
    private readonly hash;
    private readonly phone;
    private readonly deckCache;
    private readonly logger;
    constructor(prisma: PrismaService, hash: HashService, phone: PhoneService, deckCache: DeckCacheService);
    block(blockerId: string, blockedId: string, reason?: string): Promise<void>;
    unblock(blockerId: string, blockedId: string): Promise<void>;
    list(blockerId: string): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        createdAt: Date;
        blockedId: string;
        blocked: {
            profile: {
                firstName: string;
            } | null;
        };
    }[]>;
    blockContacts(userId: string, phoneNumbers: string[]): Promise<{
        blocked: number;
        skipped: number;
    }>;
    clearContactBlocks(userId: string): Promise<void>;
    countContactBlocks(userId: string): Promise<number>;
}
