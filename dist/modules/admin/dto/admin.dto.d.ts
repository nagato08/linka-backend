import { ModerationDecision, ModerationTaskType, PhotoRejectionReason } from '../../../generated/prisma/enums';
export declare class ModerationQueueDto {
    type?: ModerationTaskType;
    limit: number;
    cursor?: string;
}
export declare class ModerationDecisionDto {
    decision: ModerationDecision;
    notes?: string;
    photoReason?: PhotoRejectionReason;
}
