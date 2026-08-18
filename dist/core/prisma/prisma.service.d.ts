import { OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '../../generated/prisma/client';
import { TypedConfigService } from '../config/config.module';
export declare class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    private readonly logger;
    constructor(config: TypedConfigService);
    onModuleInit(): Promise<void>;
    onModuleDestroy(): Promise<void>;
    truncateAll(): Promise<void>;
}
