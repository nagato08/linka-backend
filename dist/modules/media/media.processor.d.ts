import { WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';
import { PrismaService } from '../../core/prisma/prisma.service';
import { StorageService } from '../../core/storage/storage.service';
import { NotificationService } from '../notifications/notification.service';
import { ImageService } from './image.service';
import { MediaService } from './media.service';
import { ModerationService } from './moderation.service';
interface ProcessPhotoJob {
    photoId: string;
    userId: string;
}
interface ProcessEventCoverJob {
    eventId: string;
    uploadKey: string;
}
export declare class MediaProcessor extends WorkerHost {
    private readonly prisma;
    private readonly storage;
    private readonly images;
    private readonly media;
    private readonly moderation;
    private readonly notifications;
    private readonly logger;
    constructor(prisma: PrismaService, storage: StorageService, images: ImageService, media: MediaService, moderation: ModerationService, notifications: NotificationService);
    process(job: Job<ProcessPhotoJob | ProcessEventCoverJob>): Promise<void>;
    private processPhoto;
    private processEventCover;
    private warnOrganizer;
    private findDuplicate;
    private reject;
}
export {};
