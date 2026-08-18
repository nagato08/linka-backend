import { EntitlementKey, EntitlementSource, SubscriptionTier } from '../../generated/prisma/enums';
import { PrismaService } from '../../core/prisma/prisma.service';
type Tx = Parameters<Parameters<PrismaService['$transaction']>[0]>[0];
export declare class EntitlementService {
    private readonly prisma;
    private readonly logger;
    constructor(prisma: PrismaService);
    has(userId: string, key: EntitlementKey): Promise<boolean>;
    consume(userId: string, key: EntitlementKey): Promise<boolean>;
    assert(userId: string, key: EntitlementKey, message: string): Promise<void>;
    grant(tx: Tx, input: {
        userId: string;
        key: EntitlementKey;
        source: EntitlementSource;
        quantity?: number;
        expiresAt?: Date;
        refType?: string;
        refId?: string;
    }): Promise<void>;
    grantTier(tx: Tx, userId: string, tier: SubscriptionTier, expiresAt: Date, subscriptionId: string): Promise<void>;
    revokeSubscriptionEntitlements(tx: Tx, userId: string, subscriptionId: string): Promise<void>;
    listActive(userId: string): Promise<{
        expiresAt: Date | null;
        key: EntitlementKey;
        source: EntitlementSource;
        remaining: number | null;
    }[]>;
}
export {};
