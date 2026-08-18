import { RiskLevel } from '../../generated/prisma/enums';
import { PrismaService } from '../../core/prisma/prisma.service';
import { RedisService } from '../../core/redis/redis.service';
import { GeoIntegrityService } from './geo-integrity.service';
export interface RiskSignals {
    likeRatio: number;
    swipeCount: number;
    fastSwipes: number;
    reportsReceived: number;
    matchCount: number;
    offPlatformMessages: number;
    duplicateMessages: number;
    linkedAccounts: number;
    photosRejected: number;
    impossibleJumps: number;
    [key: string]: number;
}
export declare class RiskService {
    private readonly prisma;
    private readonly redis;
    private readonly geo;
    private readonly logger;
    constructor(prisma: PrismaService, redis: RedisService, geo: GeoIntegrityService);
    evaluate(userId: string): Promise<{
        score: number;
        level: RiskLevel;
        signals: RiskSignals;
    }>;
    refresh(userId: string): Promise<{
        score: number;
        level: RiskLevel;
    }>;
    private applyShadowBan;
    private collect;
    private countLinkedAccounts;
    private analyseMessages;
    private levelOf;
}
