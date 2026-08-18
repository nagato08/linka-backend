import { Module } from '@nestjs/common';
import { DiscoveryModule } from '../discovery/discovery.module';
import { TravelController } from './travel.controller';
import { TravelService } from './travel.service';

@Module({
  imports: [DiscoveryModule],
  controllers: [TravelController],
  providers: [TravelService],
  exports: [TravelService],
})
export class TravelModule {}
