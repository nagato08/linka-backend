import { PrismaService } from '../../core/prisma/prisma.service';
import { StorageService } from '../../core/storage/storage.service';
import { TokenService } from '../auth/token.service';
import { DeckCacheService } from '../discovery/deck-cache.service';
export declare class AccountService {
    private readonly prisma;
    private readonly storage;
    private readonly tokens;
    private readonly deckCache;
    private readonly logger;
    constructor(prisma: PrismaService, storage: StorageService, tokens: TokenService, deckCache: DeckCacheService);
    requestDeletion(userId: string, reason?: string): Promise<{
        purgeAt: Date;
    }>;
    cancelDeletion(userId: string): Promise<void>;
    purgeExpired(): Promise<{
        purged: number;
    }>;
    purge(userId: string): Promise<void>;
    exportData(userId: string): Promise<{
        exportedAt: Date;
        account: {
            id: string;
            email: string;
            phone: string | null;
            locale: import("../../generated/prisma/enums").AppLocale;
            referralCode: string;
            lastActiveAt: Date | null;
            createdAt: Date;
            profile: {
                createdAt: Date;
                locationLabel: string | null;
                firstName: string;
                birthdate: Date;
                gender: import("../../generated/prisma/enums").Gender;
                bio: string | null;
                heightCm: number | null;
                profession: string | null;
                religion: import("../../generated/prisma/enums").Religion | null;
                education: import("../../generated/prisma/enums").EducationLevel | null;
                languages: string[];
                photos: {
                    status: import("../../generated/prisma/enums").PhotoStatus;
                    createdAt: Date;
                    position: number;
                }[];
                interests: {
                    interest: {
                        slug: string;
                    };
                }[];
                prompts: {
                    answer: string;
                    prompt: {
                        slug: string;
                    };
                }[];
            } | null;
            preference: {
                createdAt: Date;
                updatedAt: Date;
                userId: string;
                hasChildren: boolean | null;
                minAge: number;
                maxAge: number;
                maxDistanceKm: number;
                intentionFilter: import("../../generated/prisma/enums").Intention[];
                religionFilter: import("../../generated/prisma/enums").Religion[];
                minHeightCm: number | null;
                maxHeightCm: number | null;
                smokingFilter: import("../../generated/prisma/enums").Frequency[];
                drinkingFilter: import("../../generated/prisma/enums").Frequency[];
                languagesFilter: string[];
                verifiedOnly: boolean;
                allowRadiusExpansion: boolean;
            } | null;
            notificationPreference: {
                updatedAt: Date;
                userId: string;
                newMatch: boolean;
                newMessage: boolean;
                newLike: boolean;
                events: boolean;
                marketing: boolean;
                quietHoursStart: number | null;
                quietHoursEnd: number | null;
                timezone: string;
            } | null;
        };
        stats: {
            matches: number;
            messagesSent: number;
        };
        messages: {
            type: import("../../generated/prisma/enums").MessageType;
            createdAt: Date;
            body: string | null;
        }[];
        credits: {
            createdAt: Date;
            delta: number;
            balanceAfter: number;
            reason: import("../../generated/prisma/enums").LedgerReason;
        }[];
    }>;
}
