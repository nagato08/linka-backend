import { BoostService } from './boost.service';
import { CreditLedgerService } from './credit-ledger.service';
import { EntitlementService } from './entitlement.service';
import { PurchaseService } from './purchase.service';
import { ActivateBoostDto, InitiatePaymentDto, ProductQueryDto, PurchaseWithCreditsDto } from './dto/billing.dto';
export declare class BillingController {
    private readonly purchases;
    private readonly ledger;
    private readonly entitlements;
    private readonly boosts;
    constructor(purchases: PurchaseService, ledger: CreditLedgerService, entitlements: EntitlementService, boosts: BoostService);
    products(query: ProductQueryDto): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        type: import("../../generated/prisma/enums").ProductType;
        id: string;
        sku: string;
        titleFr: string;
        titleEn: string;
        descriptionFr: string | null;
        descriptionEn: string | null;
        priceAmount: number | null;
        currencyCode: string | null;
        creditCost: number | null;
        creditGrant: number | null;
        quantity: number | null;
        durationDays: number | null;
        durationMinutes: number | null;
        boostTier: import("../../generated/prisma/enums").BoostTier | null;
        tier: import("../../generated/prisma/enums").SubscriptionTier | null;
    }[]>;
    balance(userId: string): Promise<{
        balance: number;
    }>;
    history(userId: string): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: string;
        createdAt: Date;
        delta: number;
        balanceAfter: number;
        reason: import("../../generated/prisma/enums").LedgerReason;
        note: string | null;
    }[]>;
    entitlementList(userId: string): Promise<{
        expiresAt: Date | null;
        key: import("../../generated/prisma/enums").EntitlementKey;
        source: import("../../generated/prisma/enums").EntitlementSource;
        remaining: number | null;
    }[]>;
    purchaseHistory(userId: string): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: string;
        createdAt: Date;
        currencyCode: string;
        amount: number;
        creditsGranted: number;
        refundedAt: Date | null;
        product: {
            type: import("../../generated/prisma/enums").ProductType;
            sku: string;
            titleFr: string;
        };
    }[]>;
    initiatePayment(userId: string, dto: InitiatePaymentDto): Promise<{
        duplicate: boolean;
        authorizationUrl: string | null;
        id: string;
        status: import("../../generated/prisma/enums").PaymentStatus;
        currencyCode: string;
        amount: number;
        providerRef: string | null;
    }>;
    purchaseWithCredits(userId: string, dto: PurchaseWithCreditsDto): Promise<{
        purchased: boolean;
        balance: number;
    }>;
    activateBoost(userId: string, dto: ActivateBoostDto): Promise<{
        boostId: string;
        status: import("../../generated/prisma/enums").BoostStatus;
        startAt: Date | null;
        endAt: Date | null;
        multiplier: number;
        queuedBehind: number;
    }>;
    boostHistory(userId: string): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: string;
        status: import("../../generated/prisma/enums").BoostStatus;
        tier: import("../../generated/prisma/enums").BoostTier;
        startAt: Date | null;
        endAt: Date | null;
        impressions: number;
        likesGained: number;
        matchesGained: number;
    }[]>;
    boostStats(userId: string, boostId: string): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").BoostStatus;
        tier: import("../../generated/prisma/enums").BoostTier;
        multiplier: number;
        startAt: Date | null;
        endAt: Date | null;
        impressions: number;
        profileViews: number;
        likesGained: number;
        matchesGained: number;
    }>;
}
