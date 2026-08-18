import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  IsUUID,
  Length,
  Max,
  Min,
} from 'class-validator';
import { DevicePlatform } from '../../../generated/prisma/enums';

export class RegisterPushTokenDto {
  @ApiProperty({ description: 'Jeton FCM fourni par le client' })
  @IsString()
  @Length(10, 255)
  token: string;

  @ApiProperty({ enum: DevicePlatform })
  @IsEnum(DevicePlatform)
  platform: DevicePlatform;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUUID()
  deviceId?: string;
}

export class RemovePushTokenDto {
  @ApiProperty()
  @IsString()
  @Length(10, 255)
  token: string;
}

export class UpdateNotificationPreferencesDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  newMatch?: boolean;

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  newMessage?: boolean;

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  newLike?: boolean;

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  events?: boolean;

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  marketing?: boolean;

  @ApiPropertyOptional({
    description:
      'Début des heures calmes, en minutes depuis minuit. 1320 = 22 h.',
    minimum: 0,
    maximum: 1439,
  })
  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(1439)
  quietHoursStart?: number;

  @ApiPropertyOptional({
    description:
      'Fin des heures calmes. 420 = 7 h. La plage peut enjamber minuit.',
    minimum: 0,
    maximum: 1439,
  })
  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(1439)
  quietHoursEnd?: number;

  @ApiPropertyOptional({ example: 'Africa/Douala' })
  @IsOptional()
  @IsString()
  @Length(3, 50)
  timezone?: string;
}
