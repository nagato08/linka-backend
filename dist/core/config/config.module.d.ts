import { ConfigService } from '@nestjs/config';
import { type Env } from './env.schema';
export declare class TypedConfigService {
    private readonly config;
    constructor(config: ConfigService);
    get<K extends keyof Env>(key: K): Env[K];
    get isProduction(): boolean;
    get isDevelopment(): boolean;
}
export declare class AppConfigModule {
}
