"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var MaintenanceService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintenanceService = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const prisma_service_1 = require("../../core/prisma/prisma.service");
const risk_service_1 = require("../safety/risk.service");
const boost_service_1 = require("../billing/boost.service");
const purchase_service_1 = require("../billing/purchase.service");
const event_service_1 = require("../events/event.service");
const account_service_1 = require("./account.service");
let MaintenanceService = MaintenanceService_1 = class MaintenanceService {
    prisma;
    account;
    risk;
    boosts;
    purchases;
    events;
    logger = new common_1.Logger(MaintenanceService_1.name);
    constructor(prisma, account, risk, boosts, purchases, events) {
        this.prisma = prisma;
        this.account = account;
        this.risk = risk;
        this.boosts = boosts;
        this.purchases = purchases;
        this.events = events;
    }
    async processBoostQueue() {
        try {
            await this.boosts.processQueue();
        }
        catch (error) {
            this.logger.error(`Traitement de la file de boosts impossible : ${error.message}`);
        }
    }
    async reconcilePayments() {
        try {
            const { settled } = await this.purchases.reconcilePending();
            if (settled > 0) {
                this.logger.log(`Réconciliation : ${settled} paiement(s) rattrapé(s)`);
            }
        }
        catch (error) {
            this.logger.error(`Réconciliation impossible : ${error.message}`);
        }
    }
    async sendEventReminders() {
        try {
            const { events, notified } = await this.events.sendReminders();
            if (events > 0) {
                this.logger.log(`Rappels : ${events} événement(s), ${notified} personne(s)`);
            }
        }
        catch (error) {
            this.logger.error(`Envoi des rappels impossible : ${error.message}`);
        }
    }
    async purgeDeletedAccounts() {
        try {
            const { purged } = await this.account.purgeExpired();
            if (purged > 0) {
                this.logger.log(`Purge quotidienne : ${purged} compte(s)`);
            }
        }
        catch (error) {
            this.logger.error(`Échec de la purge : ${error.message}`);
        }
    }
    async refreshRiskScores() {
        const since = new Date(Date.now() - 3_600_000);
        const users = await this.prisma.user.findMany({
            where: {
                lastActiveAt: { gte: since },
                status: { in: ['ACTIVE', 'SHADOW_BANNED'] },
            },
            select: { id: true },
            take: 500,
        });
        let flagged = 0;
        for (const user of users) {
            try {
                const { level } = await this.risk.refresh(user.id);
                if (level === 'HIGH' || level === 'CRITICAL')
                    flagged += 1;
            }
            catch (error) {
                this.logger.warn(`Score de risque impossible pour ${user.id} : ${error.message}`);
            }
        }
        if (users.length > 0) {
            this.logger.log(`Scores recalculés : ${users.length} compte(s), ${flagged} à risque élevé`);
        }
    }
    async cleanupExpiredCodes() {
        const cutoff = new Date(Date.now() - 7 * 86_400_000);
        const [codes, sessions] = await Promise.all([
            this.prisma.otpCode.deleteMany({ where: { expiresAt: { lt: cutoff } } }),
            this.prisma.session.deleteMany({ where: { expiresAt: { lt: cutoff } } }),
        ]);
        if (codes.count + sessions.count > 0) {
            this.logger.log(`Nettoyage : ${codes.count} code(s), ${sessions.count} session(s)`);
        }
    }
};
exports.MaintenanceService = MaintenanceService;
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_MINUTE, { name: 'file-des-boosts' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MaintenanceService.prototype, "processBoostQueue", null);
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_5_MINUTES, { name: 'reconciliation-paiements' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MaintenanceService.prototype, "reconcilePayments", null);
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_10_MINUTES, { name: 'rappels-evenements' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MaintenanceService.prototype, "sendEventReminders", null);
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_DAY_AT_3AM, { name: 'purge-comptes' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MaintenanceService.prototype, "purgeDeletedAccounts", null);
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_HOUR, { name: 'scores-de-risque' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MaintenanceService.prototype, "refreshRiskScores", null);
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_DAY_AT_4AM, { name: 'nettoyage-codes' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MaintenanceService.prototype, "cleanupExpiredCodes", null);
exports.MaintenanceService = MaintenanceService = MaintenanceService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        account_service_1.AccountService,
        risk_service_1.RiskService,
        boost_service_1.BoostService,
        purchase_service_1.PurchaseService,
        event_service_1.EventService])
], MaintenanceService);
//# sourceMappingURL=maintenance.service.js.map