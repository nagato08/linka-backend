import { OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import Redis from 'ioredis';
import { TypedConfigService } from '../config/config.module';
export declare class RedisService implements OnModuleInit, OnModuleDestroy {
    private readonly logger;
    readonly client: Redis;
    readonly subscriber: Redis;
    readonly publisher: Redis;
    constructor(config: TypedConfigService);
    onModuleInit(): Promise<void>;
    private ensureConnected;
    onModuleDestroy(): Promise<void>;
    ping(): Promise<boolean>;
}
