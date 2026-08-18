import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Logger } from '@nestjs/common';
import { Job } from 'bullmq';
import { QUEUES } from '../../core/queue/queue.module';
import { NotificationService, type NotifyInput } from './notification.service';

/**
 * Envoi des notifications, hors du cycle de la requête.
 *
 * Un aller-retour vers Firebase prend plusieurs centaines de millisecondes.
 * L'imposer à l'intérieur d'un swipe rendrait perceptible une action qui doit
 * paraître instantanée.
 */
@Processor(QUEUES.NOTIFICATION)
export class NotificationProcessor extends WorkerHost {
  private readonly logger = new Logger(NotificationProcessor.name);

  constructor(private readonly notifications: NotificationService) {
    super();
  }

  async process(job: Job<NotifyInput>): Promise<void> {
    try {
      await this.notifications.dispatch(job.data);
    } catch (error) {
      this.logger.warn(
        `Notification ${job.data.type} non délivrée à ${job.data.userId} : ${(error as Error).message}`,
      );
      throw error;
    }
  }
}
