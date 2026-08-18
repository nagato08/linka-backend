import { PhotoRejectionReason } from '../../generated/prisma/enums';
import { TypedConfigService } from '../../core/config/config.module';
export interface ModerationScores {
    nsfw: number;
    violence: number;
    minor: number;
    aiGenerated: number;
    [key: string]: number;
}
export type ModerationOutcome = {
    decision: 'APPROVE';
    scores: ModerationScores;
} | {
    decision: 'REJECT';
    reason: PhotoRejectionReason;
    scores: ModerationScores;
} | {
    decision: 'REVIEW';
    scores: ModerationScores;
};
export declare class ModerationService {
    private readonly config;
    private readonly logger;
    private readonly auth;
    constructor(config: TypedConfigService);
    get isConfigured(): boolean;
    moderateImage(buffer: Buffer): Promise<ModerationOutcome>;
}
