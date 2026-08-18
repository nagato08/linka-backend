import { PrismaService } from '../../core/prisma/prisma.service';
export interface CompletionReport {
    score: number;
    isComplete: boolean;
    missing: string[];
}
export declare const MIN_APPROVED_PHOTOS = 2;
export declare class CompletionService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    evaluate(userId: string): Promise<CompletionReport>;
    refresh(userId: string): Promise<CompletionReport>;
}
