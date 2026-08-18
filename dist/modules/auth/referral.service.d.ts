import { PrismaService } from '../../core/prisma/prisma.service';
import { HashService } from '../../core/crypto/hash.service';
import { CreditLedgerService } from '../billing/credit-ledger.service';
export declare class ReferralService {
    private readonly prisma;
    private readonly hash;
    private readonly ledger;
    private readonly logger;
    constructor(prisma: PrismaService, hash: HashService, ledger: CreditLedgerService);
    generateUniqueCode(): Promise<string>;
    validateCode(code: string): Promise<{
        valid: boolean;
        firstName?: string;
    }>;
    attach(tx: Parameters<Parameters<PrismaService['$transaction']>[0]>[0], refereeId: string, code: string): Promise<void>;
    qualify(refereeId: string): Promise<void>;
    revokeBranch(referrerId: string, reason: string): Promise<string[]>;
}
