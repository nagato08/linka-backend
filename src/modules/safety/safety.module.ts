import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { DiscoveryModule } from '../discovery/discovery.module';
import { BlockService } from './block.service';
import { GeoIntegrityService } from './geo-integrity.service';
import { ReportService } from './report.service';
import { RiskService } from './risk.service';
import { SafetyController } from './safety.controller';

@Module({
  imports: [AuthModule, DiscoveryModule],
  controllers: [SafetyController],
  providers: [ReportService, BlockService, RiskService, GeoIntegrityService],
  exports: [ReportService, BlockService, RiskService, GeoIntegrityService],
})
export class SafetyModule {}
