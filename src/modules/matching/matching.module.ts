import { Module } from '@nestjs/common';
import { DiscoveryModule } from '../discovery/discovery.module';
import { MediaModule } from '../media/media.module';
import { MatchService } from './match.service';
import { MatchingController } from './matching.controller';
import { SwipeService } from './swipe.service';

@Module({
  imports: [DiscoveryModule, MediaModule],
  controllers: [MatchingController],
  providers: [SwipeService, MatchService],
  exports: [SwipeService, MatchService],
})
export class MatchingModule {}
