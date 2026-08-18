import { DevicePlatform } from '../../generated/prisma/enums';
import { TypedConfigService } from '../../core/config/config.module';
export interface PushMessage {
    token: string;
    title: string;
    body: string;
    data?: Record<string, string>;
    platform?: DevicePlatform;
}
export interface PushResult {
    delivered: boolean;
    tokenInvalid: boolean;
    error?: string;
}
export declare class PushService {
    private readonly config;
    private readonly logger;
    private readonly auth;
    private readonly projectId;
    constructor(config: TypedConfigService);
    get isConfigured(): boolean;
    send(message: PushMessage): Promise<PushResult>;
    private describe;
}
