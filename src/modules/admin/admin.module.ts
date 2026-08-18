import { Module } from '@nestjs/common';
import { AccountModule } from '../account/account.module';
import { AuthModule } from '../auth/auth.module';
import { DiscoveryModule } from '../discovery/discovery.module';
import { EventsModule } from '../events/events.module';
import { SafetyModule } from '../safety/safety.module';
import { AdminController } from './admin.controller';
import { ModerationService } from './moderation.service';

@Module({
  imports: [
    AuthModule,
    SafetyModule,
    AccountModule,
    DiscoveryModule,
    EventsModule,
  ],
  controllers: [AdminController],
  providers: [ModerationService],
  exports: [ModerationService],
})
export class AdminModule {}
