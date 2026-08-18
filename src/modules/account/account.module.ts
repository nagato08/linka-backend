import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { DiscoveryModule } from '../discovery/discovery.module';
import { EventsModule } from '../events/events.module';
import { SafetyModule } from '../safety/safety.module';
import { AccountController } from './account.controller';
import { AccountService } from './account.service';
import { MaintenanceService } from './maintenance.service';

@Module({
  imports: [AuthModule, DiscoveryModule, EventsModule, SafetyModule],
  controllers: [AccountController],
  providers: [AccountService, MaintenanceService],
  exports: [AccountService],
})
export class AccountModule {}
