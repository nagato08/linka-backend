import { VerificationService } from './verification.service';
import { StartVerificationResponse, VerificationUploadDto } from './dto/verification.dto';
export declare class VerificationController {
    private readonly verification;
    constructor(verification: VerificationService);
    status(userId: string): Promise<{
        isVerified: boolean;
        lastAttempt: {
            id: string;
            status: import("../../generated/prisma/enums").VerificationStatus;
            createdAt: Date;
            expiresAt: Date;
            poseChallenge: string;
            failureReason: import("../../generated/prisma/enums").VerificationFailureReason | null;
            processedAt: Date | null;
        } | null;
    }>;
    start(userId: string): Promise<StartVerificationResponse>;
    createUploadUrl(userId: string, verificationId: string, dto: VerificationUploadDto): Promise<{
        uploadUrl: string;
        expiresIn: number;
    }>;
    submit(userId: string, verificationId: string): Promise<{
        status: "APPROVED" | "REJECTED" | "EXPIRED" | "PROCESSING" | "MANUAL_REVIEW";
    }>;
}
