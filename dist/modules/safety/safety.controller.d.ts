import { BlockService } from './block.service';
import { ReportService } from './report.service';
import { BlockContactsDto, BlockUserDto, ReportUserDto } from './dto/safety.dto';
export declare class SafetyController {
    private readonly reports;
    private readonly blocks;
    constructor(reports: ReportService, blocks: BlockService);
    report(userId: string, dto: ReportUserDto): Promise<{
        reportId: string;
    }>;
    listReports(userId: string): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: string;
        status: import("../../generated/prisma/enums").ReportStatus;
        createdAt: Date;
        reason: import("../../generated/prisma/enums").ReportReason;
        resolvedAt: Date | null;
    }[]>;
    block(userId: string, dto: BlockUserDto): Promise<void>;
    unblock(userId: string, blockedId: string): Promise<void>;
    listBlocks(userId: string): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        createdAt: Date;
        blockedId: string;
        blocked: {
            profile: {
                firstName: string;
            } | null;
        };
    }[]>;
    blockContacts(userId: string, dto: BlockContactsDto): Promise<{
        blocked: number;
        skipped: number;
    }>;
    countContacts(userId: string): Promise<{
        count: number;
    }>;
    clearContacts(userId: string): Promise<void>;
}
