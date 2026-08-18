import { WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';
import { NotificationService, type NotifyInput } from './notification.service';
export declare class NotificationProcessor extends WorkerHost {
    private readonly notifications;
    private readonly logger;
    constructor(notifications: NotificationService);
    process(job: Job<NotifyInput>): Promise<void>;
}
