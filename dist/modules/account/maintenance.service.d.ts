import { PrismaService } from '../../core/prisma/prisma.service';
import { RiskService } from '../safety/risk.service';
import { BoostService } from '../billing/boost.service';
import { PurchaseService } from '../billing/purchase.service';
import { EventService } from '../events/event.service';
import { AccountService } from './account.service';
export declare class MaintenanceService {
    private readonly prisma;
    private readonly account;
    private readonly risk;
    private readonly boosts;
    private readonly purchases;
    private readonly events;
    private readonly logger;
    constructor(prisma: PrismaService, account: AccountService, risk: RiskService, boosts: BoostService, purchases: PurchaseService, events: EventService);
    processBoostQueue(): Promise<void>;
    reconcilePayments(): Promise<void>;
    sendEventReminders(): Promise<void>;
    purgeDeletedAccounts(): Promise<void>;
    refreshRiskScores(): Promise<void>;
    cleanupExpiredCodes(): Promise<void>;
}
