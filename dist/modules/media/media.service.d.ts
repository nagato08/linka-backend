import { Queue } from 'bullmq';
import { PhotoStatus } from '../../generated/prisma/enums';
import { PrismaService } from '../../core/prisma/prisma.service';
import { StorageService } from '../../core/storage/storage.service';
export declare const MAX_PHOTOS = 6;
export interface PhotoUploadTicket {
    photoId: string;
    uploadUrl: string;
    expiresIn: number;
}
export declare class MediaService {
    private readonly prisma;
    private readonly storage;
    private readonly mediaQueue;
    private readonly logger;
    constructor(prisma: PrismaService, storage: StorageService, mediaQueue: Queue);
    createUploadTicket(userId: string, contentType: string, contentLength: number): Promise<PhotoUploadTicket>;
    confirmUpload(userId: string, photoId: string): Promise<{
        status: PhotoStatus;
    }>;
    listForUser(userId: string): Promise<{
        id: string;
        position: number;
        status: PhotoStatus;
        rejectionReason: string | null;
        width: number | null;
        height: number | null;
        urls: {
            [k: string]: string;
        } | null;
    }[]>;
    remove(userId: string, photoId: string): Promise<void>;
    reorder(userId: string, orderedIds: string[]): Promise<void>;
    private applyOrder;
    private nextPosition;
    originalKey(userId: string, photoId: string): string;
    variantKey(userId: string, photoId: string, variant: string): string;
    allKeysFor(userId: string, photoId: string): string[];
    toDto(photo: {
        id: string;
        profileId: string;
        position: number;
        status: PhotoStatus;
        rejectionReason: string | null;
        width: number | null;
        height: number | null;
    }): {
        id: string;
        position: number;
        status: PhotoStatus;
        rejectionReason: string | null;
        width: number | null;
        height: number | null;
        urls: {
            [k: string]: string;
        } | null;
    };
}
