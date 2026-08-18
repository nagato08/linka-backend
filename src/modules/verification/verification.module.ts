import { Module } from '@nestjs/common';
import { FaceMatcherService } from './face-matcher.service';
import { VerificationController } from './verification.controller';
import { VerificationProcessor } from './verification.processor';
import { VerificationService } from './verification.service';

@Module({
  controllers: [VerificationController],
  providers: [VerificationService, FaceMatcherService, VerificationProcessor],
  exports: [VerificationService, FaceMatcherService],
})
export class VerificationModule {}
