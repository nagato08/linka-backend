import { Global, Module } from '@nestjs/common';
import { NotificationController } from './notification.controller';
import { NotificationProcessor } from './notification.processor';
import { NotificationService } from './notification.service';
import { PushService } from './push.service';

/**
 * Global : les matchs, les messages, les événements, la vérification et les
 * paiements déclenchent tous des notifications. Les faire importer un module
 * dédié n'apporterait qu'un enchevêtrement d'imports.
 */
@Global()
@Module({
  controllers: [NotificationController],
  providers: [NotificationService, PushService, NotificationProcessor],
  exports: [NotificationService],
})
export class NotificationsModule {}
