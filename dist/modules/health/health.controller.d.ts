import { HealthCheckResult, HealthCheckService, HealthIndicatorService } from '@nestjs/terminus';
import { PrismaService } from '../../core/prisma/prisma.service';
import { RedisService } from '../../core/redis/redis.service';
export declare class HealthController {
    private readonly health;
    private readonly indicator;
    private readonly prisma;
    private readonly redis;
    constructor(health: HealthCheckService, indicator: HealthIndicatorService, prisma: PrismaService, redis: RedisService);
    check(): Promise<HealthCheckResult>;
    private checkPostgres;
    private checkPostgis;
    private checkRedis;
}
