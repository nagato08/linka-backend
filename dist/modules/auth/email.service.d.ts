import { AppLocale } from '../../generated/prisma/enums';
import { TypedConfigService } from '../../core/config/config.module';
export declare class EmailService {
    private readonly config;
    private readonly logger;
    private readonly resend;
    private readonly from;
    constructor(config: TypedConfigService);
    normalize(raw: string): string;
    sendOtp(email: string, code: string, locale: AppLocale): Promise<void>;
    private template;
}
