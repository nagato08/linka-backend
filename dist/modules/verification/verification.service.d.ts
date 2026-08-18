import { Queue } from 'bullmq';
import { VerificationStatus } from '../../generated/prisma/enums';
import { PrismaService } from '../../core/prisma/prisma.service';
import { StorageService } from '../../core/storage/storage.service';
export declare const POSE_CHALLENGES: readonly ["TURN_HEAD_LEFT", "TURN_HEAD_RIGHT", "SMILE", "RAISE_RIGHT_HAND", "BLINK_TWICE", "LOOK_UP"];
export type PoseChallenge = (typeof POSE_CHALLENGES)[number];
export declare class VerificationService {
    private readonly prisma;
    private readonly storage;
    private readonly queue;
    private readonly logger;
    constructor(prisma: PrismaService, storage: StorageService, queue: Queue);
    start(userId: string): Promise<{
        verificationId: string;
        pose: PoseChallenge;
        expiresAt: Date;
    }>;
    createUploadUrl(userId: string, verificationId: string, contentType: string, contentLength: number): Promise<{
        uploadUrl: string;
        expiresIn: number;
    }>;
    submit(userId: string, verificationId: string): Promise<{
        status: "APPROVED" | "REJECTED" | "EXPIRED" | "PROCESSING" | "MANUAL_REVIEW";
    }>;
    status(userId: string): Promise<{
        isVerified: boolean;
        lastAttempt: {
            id: string;
            status: VerificationStatus;
            createdAt: Date;
            expiresAt: Date;
            poseChallenge: string;
            failureReason: import("../../generated/prisma/enums").VerificationFailureReason | null;
            processedAt: Date | null;
        } | null;
    }>;
    private enforceAttemptLimit;
    private load;
}
