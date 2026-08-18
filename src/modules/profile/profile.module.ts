import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { MediaModule } from '../media/media.module';
import { SafetyModule } from '../safety/safety.module';
import { CompletionService } from './completion.service';
import { ProfileController } from './profile.controller';
import { ProfileService } from './profile.service';

@Module({
  imports: [AuthModule, MediaModule, SafetyModule],
  controllers: [ProfileController],
  providers: [ProfileService, CompletionService],
  exports: [ProfileService, CompletionService],
})
export class ProfileModule {}
