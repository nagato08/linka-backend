import { ReportReason } from '../../../generated/prisma/enums';
export declare class ReportUserDto {
    reportedUserId: string;
    reason: ReportReason;
    details?: string;
    messageId?: string;
    evidenceKeys?: string[];
}
export declare class BlockUserDto {
    userId: string;
    reason?: string;
}
export declare class BlockContactsDto {
    phoneNumbers: string[];
}
