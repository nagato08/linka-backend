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
var CreditLedgerService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditLedgerService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../core/prisma/prisma.service");
let CreditLedgerService = CreditLedgerService_1 = class CreditLedgerService {
    prisma;
    logger = new common_1.Logger(CreditLedgerService_1.name);
    constructor(prisma) {
        this.prisma = prisma;
    }
    async append(tx, entry) {
        if (entry.delta === 0) {
            throw new Error('Un mouvement de pièces nul est un bug');
        }
        await tx.$executeRaw `SELECT pg_advisory_xact_lock(hashtext(${entry.userId}))`;
        const last = await tx.creditLedger.findFirst({
            where: { userId: entry.userId },
            orderBy: { createdAt: 'desc' },
            select: { balanceAfter: true },
        });
        const balanceAfter = (last?.balanceAfter ?? 0) + entry.delta;
        if (balanceAfter < 0) {
            throw new common_1.ForbiddenException('Solde de pièces insuffisant');
        }
        await tx.creditLedger.create({
            data: {
                userId: entry.userId,
                delta: entry.delta,
                balanceAfter,
                reason: entry.reason,
                refType: entry.refType,
                refId: entry.refId,
                purchaseId: entry.purchaseId,
                idempotencyKey: entry.idempotencyKey,
                note: entry.note,
            },
        });
        return balanceAfter;
    }
    credit(entry) {
        return this.prisma.$transaction((tx) => this.append(tx, entry));
    }
    spend(userId, cost, reason, context = {}) {
        return this.prisma.$transaction((tx) => this.append(tx, { ...context, userId, delta: -Math.abs(cost), reason }));
    }
    async balanceOf(userId) {
        const last = await this.prisma.creditLedger.findFirst({
            where: { userId },
            orderBy: { createdAt: 'desc' },
            select: { balanceAfter: true },
        });
        return last?.balanceAfter ?? 0;
    }
    history(userId, limit = 50) {
        return this.prisma.creditLedger.findMany({
            where: { userId },
            orderBy: { createdAt: 'desc' },
            take: limit,
            select: {
                id: true,
                delta: true,
                balanceAfter: true,
                reason: true,
                note: true,
                createdAt: true,
            },
        });
    }
};
exports.CreditLedgerService = CreditLedgerService;
exports.CreditLedgerService = CreditLedgerService = CreditLedgerService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CreditLedgerService);
//# sourceMappingURL=credit-ledger.service.js.map