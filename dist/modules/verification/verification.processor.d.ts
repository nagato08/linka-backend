import { WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';
import { PrismaService } from '../../core/prisma/prisma.service';
import { StorageService } from '../../core/storage/storage.service';
import { FaceMatcherService } from './face-matcher.service';
interface VerificationJob {
    verificationId: string;
    userId: string;
}
export declare class VerificationProcessor extends WorkerHost {
    private readonly prisma;
    private readonly storage;
    private readonly matcher;
    private readonly logger;
    constructor(prisma: PrismaService, storage: StorageService, matcher: FaceMatcherService);
    process(job: Job<VerificationJob>): Promise<void>;
    private findDuplicateFace;
    private approve;
    private storeEmbedding;
    private decide;
    private failureReasonFor;
    private loadReferencePhotos;
    private fail;
    private wipeCapture;
}
export {};
