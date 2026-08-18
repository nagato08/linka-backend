import { Global, Module } from '@nestjs/common';
import { EncryptionService } from './encryption.service';
import { HashService } from './hash.service';

@Global()
@Module({
  providers: [HashService, EncryptionService],
  exports: [HashService, EncryptionService],
})
export class CryptoModule {}
