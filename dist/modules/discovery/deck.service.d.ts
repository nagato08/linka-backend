import { PrismaService } from '../../core/prisma/prisma.service';
export interface DeckCandidate {
    userId: string;
    firstName: string;
    age: number;
    distanceKm: number;
    isVerified: boolean;
    score: number;
}
export declare class DeckService {
    private readonly prisma;
    private readonly logger;
    constructor(prisma: PrismaService);
    build(userId: string, limit?: number): Promise<DeckCandidate[]>;
    private radiusPlan;
    private query;
    private loadViewer;
}
