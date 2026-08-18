import { BullModule } from '@nestjs/bullmq';
import { Global, Module } from '@nestjs/common';
import { TypedConfigService } from '../config/config.module';

/** Noms des files. Centralisés pour éviter les chaînes recopiées à la main. */
export const QUEUES = {
  MEDIA: 'media',
  MODERATION: 'moderation',
  NOTIFICATION: 'notification',
} as const;

@Global()
@Module({
  imports: [
    BullModule.forRootAsync({
      inject: [TypedConfigService],
      useFactory: (config: TypedConfigService) => {
        const url = new URL(config.get('REDIS_URL'));

        return {
          connection: {
            host: url.hostname,
            port: Number(url.port || 6379),
            password: url.password || undefined,
          },
          defaultJobOptions: {
            // Trois tentatives avec attente croissante : le traitement d'image
            // dépend du stockage objet, dont les échecs sont souvent
            // transitoires.
            attempts: 3,
            backoff: { type: 'exponential', delay: 2_000 },
            // Les travaux réussis sont purgés, les échecs conservés : sans
            // eux, impossible de comprendre pourquoi une photo n'est jamais
            // apparue.
            removeOnComplete: { count: 100 },
            removeOnFail: { count: 1_000 },
          },
        };
      },
    }),
    BullModule.registerQueue(
      { name: QUEUES.MEDIA },
      { name: QUEUES.MODERATION },
      { name: QUEUES.NOTIFICATION },
    ),
  ],
  exports: [BullModule],
})
export class QueueModule {}
