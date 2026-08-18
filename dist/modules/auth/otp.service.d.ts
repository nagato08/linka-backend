import { AppLocale, OtpChannel, OtpPurpose } from '../../generated/prisma/enums';
import { PrismaService } from '../../core/prisma/prisma.service';
import { RedisService } from '../../core/redis/redis.service';
import { HashService } from '../../core/crypto/hash.service';
import { EmailService } from './email.service';
export declare class OtpService {
    private readonly prisma;
    private readonly redis;
    private readonly hash;
    private readonly email;
    private readonly logger;
    constructor(prisma: PrismaService, redis: RedisService, hash: HashService, email: EmailService);
    request(identifier: string, purpose: OtpPurpose, locale: AppLocale, ipAddress?: string, channel?: OtpChannel): Promise<{
        expiresAt: Date;
    }>;
    verify(identifier: string, purpose: OtpPurpose, code: string): Promise<void>;
    private enforceRateLimits;
}
