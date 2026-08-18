import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  Matches,
  ValidateNested,
} from 'class-validator';
import { AppLocale, DevicePlatform } from '../../../generated/prisma/enums';

export class DeviceInfoDto {
  @ApiProperty({ enum: DevicePlatform })
  @IsEnum(DevicePlatform)
  platform: DevicePlatform;

  @ApiProperty({
    description: "Empreinte stable de l'appareil, hachée côté client",
    minLength: 16,
    maxLength: 64,
  })
  @IsString()
  @Length(16, 64)
  fingerprint: string;

  @ApiPropertyOptional({ example: 'Tecno Spark 10' })
  @IsOptional()
  @IsString()
  @Length(1, 100)
  model?: string;

  @ApiPropertyOptional({ example: 'Android 13' })
  @IsOptional()
  @IsString()
  @Length(1, 50)
  osVersion?: string;

  @ApiPropertyOptional({ example: '1.0.0' })
  @IsOptional()
  @IsString()
  @Length(1, 20)
  appVersion?: string;

  @ApiPropertyOptional({
    description: 'Jeton Play Integrity (Android) ou DeviceCheck (iOS)',
  })
  @IsOptional()
  @IsString()
  integrityToken?: string;
}

export class RequestOtpDto {
  @ApiProperty({
    description: 'Adresse e-mail. Les domaines jetables sont refusés.',
    example: 'aicha@example.com',
  })
  @IsEmail({}, { message: 'Adresse e-mail invalide' })
  @Length(5, 255)
  email: string;

  @ApiPropertyOptional({ enum: AppLocale, default: AppLocale.FR })
  @IsOptional()
  @IsEnum(AppLocale)
  locale?: AppLocale;
}

export class VerifyOtpDto {
  @ApiProperty({ example: 'aicha@example.com' })
  @IsEmail({}, { message: 'Adresse e-mail invalide' })
  email: string;

  @ApiProperty({ example: '123456', minLength: 6, maxLength: 6 })
  @IsString()
  @Matches(/^\d{6}$/, { message: 'Le code doit comporter six chiffres' })
  code: string;

  @ApiProperty({ type: DeviceInfoDto })
  @ValidateNested()
  @Type(() => DeviceInfoDto)
  device: DeviceInfoDto;

  @ApiPropertyOptional({
    description: 'Code de parrainage, six caractères',
    example: 'K7M2PQ',
  })
  @IsOptional()
  @IsString()
  @Matches(/^[A-Za-z0-9]{6}$/, { message: 'Code de parrainage invalide' })
  referralCode?: string;

  @ApiPropertyOptional({ enum: AppLocale })
  @IsOptional()
  @IsEnum(AppLocale)
  locale?: AppLocale;
}

export class RefreshTokenDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  refreshToken: string;
}

export class ValidateReferralDto {
  @ApiProperty({ example: 'K7M2PQ' })
  @IsString()
  @Matches(/^[A-Za-z0-9]{6}$/, { message: 'Code de parrainage invalide' })
  code: string;
}

// --- Réponses ---------------------------------------------------------------

export class OtpRequestedResponse {
  @ApiProperty({ description: 'Adresse masquée, à réafficher au client' })
  email: string;

  @ApiProperty()
  expiresAt: Date;
}

export class AuthTokensResponse {
  @ApiProperty()
  accessToken: string;

  @ApiProperty()
  refreshToken: string;

  @ApiProperty({
    description: "Durée de validité du jeton d'accès, en secondes",
  })
  expiresIn: number;

  @ApiProperty({
    description:
      "PENDING_PROFILE tant que le profil n'est pas complété, ACTIVE ensuite",
  })
  status: string;

  @ApiProperty({ description: 'Vrai si le compte vient d’être créé' })
  isNewAccount: boolean;
}
