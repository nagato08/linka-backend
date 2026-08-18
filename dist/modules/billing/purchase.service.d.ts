import { PaymentStatus, ProductType, SubscriptionTier } from '../../generated/prisma/enums';
import { PrismaService } from '../../core/prisma/prisma.service';
import { PhoneService } from '../auth/phone.service';
import { NotificationService } from '../notifications/notification.service';
import { CreditLedgerService } from './credit-ledger.service';
import { EntitlementService } from './entitlement.service';
import { NotchPayProvider } from './providers/notchpay.provider';
export declare class PurchaseService {
    private readonly prisma;
    private readonly ledger;
    private readonly entitlements;
    private readonly notchpay;
    private readonly phone;
    private readonly notifications;
    private readonly logger;
    constructor(prisma: PrismaService, ledger: CreditLedgerService, entitlements: EntitlementService, notchpay: NotchPayProvider, phone: PhoneService, notifications: NotificationService);
    listProducts(type?: ProductType): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        type: ProductType;
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
        tier: SubscriptionTier | null;
    }[]>;
    initiatePayment(userId: string, sku: string, payerPhone: string, idempotencyKey: string): Promise<{
        duplicate: boolean;
        authorizationUrl: string | null;
        id: string;
        status: PaymentStatus;
        currencyCode: string;
        amount: number;
        providerRef: string | null;
    }>;
    settlePayment(reference: string, status: PaymentStatus, raw?: unknown): Promise<{
        settled: boolean;
    }>;
    purchaseWithCredits(userId: string, sku: string): Promise<{
        purchased: boolean;
        balance: number;
    }>;
    private deliver;
    private activateSubscription;
    reconcilePending(): Promise<{
        settled: number;
    }>;
    listPurchases(userId: string, limit?: number): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: string;
        createdAt: Date;
        currencyCode: string;
        amount: number;
        creditsGranted: number;
        refundedAt: Date | null;
        product: {
            type: ProductType;
            sku: string;
            titleFr: string;
        };
    }[]>;
}
