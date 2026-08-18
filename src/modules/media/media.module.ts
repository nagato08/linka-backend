import { Module } from '@nestjs/common';
import { ImageService } from './image.service';
import { MediaController } from './media.controller';
import { MediaProcessor } from './media.processor';
import { MediaService } from './media.service';
import { ModerationService } from './moderation.service';

@Module({
  controllers: [MediaController],
  providers: [MediaService, ImageService, ModerationService, MediaProcessor],
  exports: [MediaService, ImageService],
})
export class MediaModule {}
