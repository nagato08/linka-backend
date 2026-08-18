import { Module } from '@nestjs/common';
import { MediaModule } from '../media/media.module';
import { EventController } from './event.controller';
import { EventService } from './event.service';

@Module({
  imports: [MediaModule],
  controllers: [EventController],
  providers: [EventService],
  exports: [EventService],
})
export class EventsModule {}
