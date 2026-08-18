import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { EmailService } from './email.service';
import { IntegrityService } from './integrity.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { DeviceService } from './device.service';
import { OtpService } from './otp.service';
import { PhoneService } from './phone.service';
import { ReferralService } from './referral.service';
import { TokenService } from './token.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { RolesGuard } from './guards/roles.guard';

@Module({
  imports: [JwtModule.register({})],
  controllers: [AuthController],
  providers: [
    AuthService,
    OtpService,
    EmailService,
    IntegrityService,
    PhoneService,
    TokenService,
    DeviceService,
    ReferralService,
    JwtAuthGuard,
    RolesGuard,
  ],
  // Exportés pour que les gardes globaux déclarés dans AppModule puissent
  // être instanciés avec leurs dépendances.
  exports: [
    TokenService,
    ReferralService,
    PhoneService,
    JwtAuthGuard,
    RolesGuard,
  ],
})
export class AuthModule {}
