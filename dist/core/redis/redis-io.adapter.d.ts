import { INestApplicationContext } from '@nestjs/common';
import { IoAdapter } from '@nestjs/platform-socket.io';
import type { ServerOptions } from 'socket.io';
export declare class RedisIoAdapter extends IoAdapter {
    private readonly app;
    private readonly logger;
    private adapterConstructor?;
    constructor(app: INestApplicationContext);
    connect(): void;
    createIOServer(port: number, options?: ServerOptions): unknown;
}
