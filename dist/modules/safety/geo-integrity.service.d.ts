import { PrismaService } from '../../core/prisma/prisma.service';
import { RedisService } from '../../core/redis/redis.service';
export declare class GeoIntegrityService {
    private readonly prisma;
    private readonly redis;
    private readonly logger;
    constructor(prisma: PrismaService, redis: RedisService);
    recordLocationChange(userId: string, previous: {
        latitude: number | null;
        longitude: number | null;
    }, next: {
        latitude: number;
        longitude: number;
    }): Promise<void>;
    countRecentJumps(userId: string): Promise<number>;
    private distanceKm;
}
