import { TypedConfigService } from '../../core/config/config.module';
export interface FaceAnalysis {
    livenessScore: number;
    matchScore: number;
    embedding: number[] | null;
    challengePerformed: boolean;
}
export declare class FaceMatcherService {
    private readonly config;
    private readonly logger;
    constructor(config: TypedConfigService);
    get isConfigured(): boolean;
    analyse(_capture: Buffer, _profilePhotos: Buffer[], _expectedPose: string): Promise<FaceAnalysis>;
    cosineSimilarity(a: number[], b: number[]): number;
}
