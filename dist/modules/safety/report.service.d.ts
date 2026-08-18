import { ReportReason, ReportStatus } from '../../generated/prisma/enums';
import { PrismaService } from '../../core/prisma/prisma.service';
import { BlockService } from './block.service';
export declare class ReportService {
    private readonly prisma;
    private readonly blocks;
    private readonly logger;
    constructor(prisma: PrismaService, blocks: BlockService);
    report(reporterId: string, input: {
        reportedUserId: string;
        reason: ReportReason;
        details?: string;
        messageId?: string;
        evidenceKeys?: string[];
    }): Promise<{
        reportId: string;
    }>;
    private escalateIfNeeded;
    listMine(reporterId: string): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: string;
        status: ReportStatus;
        createdAt: Date;
        reason: ReportReason;
        resolvedAt: Date | null;
    }[]>;
}
