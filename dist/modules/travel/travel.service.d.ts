import { PrismaService } from '../../core/prisma/prisma.service';
import { EntitlementService } from '../billing/entitlement.service';
import { DeckCacheService } from '../discovery/deck-cache.service';
export declare class TravelService {
    private readonly prisma;
    private readonly entitlements;
    private readonly deckCache;
    private readonly logger;
    constructor(prisma: PrismaService, entitlements: EntitlementService, deckCache: DeckCacheService);
    travelTo(userId: string, latitude: number, longitude: number, label?: string): Promise<{
        sessionId: string;
        destination: string;
        city: string;
        distanceKm: number;
        remainingFree: number | null;
    }>;
    returnHome(userId: string): Promise<{
        returned: boolean;
        city: string;
    }>;
    status(userId: string): Promise<{
        traveling: boolean;
        current: {
            id: string;
            startedAt: Date;
            locationLabel: string;
            city: {
                name: string;
                region: string;
            } | null;
        } | null;
        unlimited: boolean;
        remainingFree: number | null;
    }>;
    listDestinations(): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        name: string;
        id: string;
        latitude: number;
        longitude: number;
        region: string;
        activeUserCount: number;
    }[]>;
    private resolveCity;
    private distanceKm;
}
