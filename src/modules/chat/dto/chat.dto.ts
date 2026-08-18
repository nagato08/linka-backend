import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  IsUUID,
  Length,
  Max,
  Min,
} from 'class-validator';
import { MessageType } from '../../../generated/prisma/enums';

export class SendMessageDto {
  @ApiProperty({
    description:
      'Identifiant généré par le client. Rend le renvoi après coupure inoffensif : le serveur reconnaît le doublon au lieu de créer un second message.',
    example: '9f2c1e7a-4b8d-4c2e-9a1f-2b3c4d5e6f70',
  })
  @IsString()
  @Length(8, 64)
  clientKey: string;

  @ApiPropertyOptional({ enum: MessageType, default: MessageType.TEXT })
  @IsOptional()
  @IsEnum(MessageType)
  type?: MessageType;

  @ApiPropertyOptional({ maxLength: 2000 })
  @IsOptional()
  @IsString()
  @Length(1, 2000)
  body?: string;

  @ApiPropertyOptional({ description: 'Clé renvoyée par /media/upload-url' })
  @IsOptional()
  @IsString()
  @Length(1, 255)
  mediaKey?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @Length(1, 100)
  mediaMimeType?: string;

  @ApiPropertyOptional({ description: 'Taille en octets' })
  @IsOptional()
  @IsInt()
  @Min(1)
  mediaBytes?: number;

  @ApiPropertyOptional({
    description: 'Durée en secondes, pour les notes vocales',
  })
  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(120)
  mediaDuration?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUUID()
  replyToId?: string;
}

export class HistoryQueryDto {
  @ApiPropertyOptional({
    description: 'Remonter le fil : messages antérieurs à cet identifiant',
  })
  @IsOptional()
  @IsUUID()
  before?: string;

  @ApiPropertyOptional({
    description:
      'Reprise après coupure : messages postérieurs à cet identifiant, dans l’ordre chronologique',
  })
  @IsOptional()
  @IsUUID()
  after?: string;

  @ApiPropertyOptional({ minimum: 1, maximum: 100, default: 30 })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(100)
  limit = 30;
}

export class MarkReadDto {
  @ApiPropertyOptional({
    description: 'Marquer comme lu jusqu’à ce message inclus',
  })
  @IsOptional()
  @IsUUID()
  upToMessageId?: string;
}

export class ChatMediaUploadDto {
  @ApiProperty({ example: 'audio/mp4' })
  @IsString()
  contentType: string;

  @ApiProperty({ example: 240000 })
  @IsInt()
  @Min(1)
  @Max(8388608)
  contentLength: number;
}

export class MuteDto {
  @ApiPropertyOptional({
    description: 'Date de fin du silence. Absente pour réactiver.',
  })
  @IsOptional()
  @IsString()
  until?: string;
}
