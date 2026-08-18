import { LedgerReason } from '../../generated/prisma/enums';
import { PrismaService } from '../../core/prisma/prisma.service';
type Tx = Parameters<Parameters<PrismaService['$transaction']>[0]>[0];
export interface LedgerEntryInput {
    userId: string;
    delta: number;
    reason: LedgerReason;
    refType?: string;
    refId?: string;
    purchaseId?: string;
    idempotencyKey?: string;
    note?: string;
}
export declare class CreditLedgerService {
    private readonly prisma;
    private readonly logger;
    constructor(prisma: PrismaService);
    append(tx: Tx, entry: LedgerEntryInput): Promise<number>;
    credit(entry: LedgerEntryInput): Promise<number>;
    spend(userId: string, cost: number, reason: LedgerReason, context?: Omit<LedgerEntryInput, 'userId' | 'delta' | 'reason'>): Promise<number>;
    balanceOf(userId: string): Promise<number>;
    history(userId: string, limit?: number): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: string;
        createdAt: Date;
        delta: number;
        balanceAfter: number;
        reason: LedgerReason;
        note: string | null;
    }[]>;
}
export {};
