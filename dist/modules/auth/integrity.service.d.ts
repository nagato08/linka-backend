import { IntegrityVerdict } from '../../generated/prisma/enums';
import { TypedConfigService } from '../../core/config/config.module';
export declare class IntegrityService {
    private readonly config;
    private readonly logger;
    private readonly auth;
    private readonly packageName;
    private readonly required;
    constructor(config: TypedConfigService);
    verify(integrityToken?: string): Promise<IntegrityVerdict>;
    private interpret;
    get isEnforced(): boolean;
}
