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
var ReportService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportService = void 0;
const common_1 = require("@nestjs/common");
const enums_1 = require("../../generated/prisma/enums");
const prisma_service_1 = require("../../core/prisma/prisma.service");
const block_service_1 = require("./block.service");
const PRIORITY_BY_REASON = {
    UNDERAGE: 100,
    VIOLENCE: 90,
    NUDITY: 70,
    SCAM_MONEY: 60,
    HARASSMENT: 60,
    FAKE_PROFILE: 40,
    OFF_PLATFORM: 30,
    SPAM: 20,
    OTHER: 10,
};
const AUTO_SHADOW_BAN_THRESHOLD = 3;
let ReportService = ReportService_1 = class ReportService {
    prisma;
    blocks;
    logger = new common_1.Logger(ReportService_1.name);
    constructor(prisma, blocks) {
        this.prisma = prisma;
        this.blocks = blocks;
    }
    async report(reporterId, input) {
        if (reporterId === input.reportedUserId) {
            throw new common_1.BadRequestException('Vous ne pouvez pas vous signaler vous-même');
        }
        const target = await this.prisma.user.findUnique({
            where: { id: input.reportedUserId },
            select: { id: true },
        });
        if (!target) {
            throw new common_1.NotFoundException('Profil introuvable');
        }
        const report = await this.prisma.report.create({
            data: {
                reporterId,
                reportedUserId: input.reportedUserId,
                reason: input.reason,
                details: input.details,
                messageId: input.messageId,
                evidenceKeys: input.evidenceKeys ?? [],
                status: enums_1.ReportStatus.OPEN,
            },
        });
        await this.prisma.moderationTask.create({
            data: {
                type: enums_1.ModerationTaskType.REPORT_REVIEW,
                reportId: report.id,
                subjectUserId: input.reportedUserId,
                priority: PRIORITY_BY_REASON[input.reason],
            },
        });
        await this.blocks.block(reporterId, input.reportedUserId, 'signalement');
        await this.escalateIfNeeded(input.reportedUserId);
        this.logger.log(`Signalement ${report.id} : ${input.reason} contre ${input.reportedUserId}`);
        return { reportId: report.id };
    }
    async escalateIfNeeded(reportedUserId) {
        const distinctReporters = await this.prisma.report.groupBy({
            by: ['reporterId'],
            where: {
                reportedUserId,
                status: { in: [enums_1.ReportStatus.OPEN, enums_1.ReportStatus.REVIEWING] },
            },
        });
        if (distinctReporters.length < AUTO_SHADOW_BAN_THRESHOLD)
            return;
        const user = await this.prisma.user.findUnique({
            where: { id: reportedUserId },
            select: { status: true, shadowBannedAt: true },
        });
        if (!user || user.shadowBannedAt)
            return;
        await this.prisma.user.update({
            where: { id: reportedUserId },
            data: { status: 'SHADOW_BANNED', shadowBannedAt: new Date() },
        });
        await this.prisma.moderationTask.updateMany({
            where: {
                subjectUserId: reportedUserId,
                status: { in: ['QUEUED', 'IN_REVIEW'] },
            },
            data: { priority: 95 },
        });
        this.logger.warn(`Mise en retrait automatique de ${reportedUserId} : ${distinctReporters.length} signalements distincts`);
    }
    listMine(reporterId) {
        return this.prisma.report.findMany({
            where: { reporterId },
            orderBy: { createdAt: 'desc' },
            take: 50,
            select: {
                id: true,
                reason: true,
                status: true,
                createdAt: true,
                resolvedAt: true,
            },
        });
    }
};
exports.ReportService = ReportService;
exports.ReportService = ReportService = ReportService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        block_service_1.BlockService])
], ReportService);
//# sourceMappingURL=report.service.js.map