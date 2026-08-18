import { Module } from '@nestjs/common';
import { MediaModule } from '../media/media.module';
import { DeckCacheService } from './deck-cache.service';
import { DeckService } from './deck.service';
import { DiscoveryController } from './discovery.controller';
import { DiscoveryService } from './discovery.service';

@Module({
  imports: [MediaModule],
  controllers: [DiscoveryController],
  providers: [DiscoveryService, DeckService, DeckCacheService],
  exports: [DeckCacheService, DiscoveryService],
})
export class DiscoveryModule {}
