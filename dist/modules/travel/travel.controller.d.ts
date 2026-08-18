import { TravelService } from './travel.service';
import { TravelToDto } from './dto/travel.dto';
export declare class TravelController {
    private readonly travel;
    constructor(travel: TravelService);
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
    destinations(): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        name: string;
        id: string;
        latitude: number;
        longitude: number;
        region: string;
        activeUserCount: number;
    }[]>;
    travelTo(userId: string, dto: TravelToDto): Promise<{
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
}
