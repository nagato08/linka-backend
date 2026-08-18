import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsEnum,
  IsOptional,
  IsString,
  IsUUID,
  Length,
} from 'class-validator';
import { ReportReason } from '../../../generated/prisma/enums';

export class ReportUserDto {
  @ApiProperty()
  @IsUUID()
  reportedUserId: string;

  @ApiProperty({ enum: ReportReason })
  @IsEnum(ReportReason)
  reason: ReportReason;

  @ApiPropertyOptional({ maxLength: 1000 })
  @IsOptional()
  @IsString()
  @Length(1, 1000)
  details?: string;

  @ApiPropertyOptional({ description: 'Message incriminé' })
  @IsOptional()
  @IsUUID()
  messageId?: string;

  @ApiPropertyOptional({
    description: 'Clés des captures fournies par le signalant',
    type: [String],
  })
  @IsOptional()
  @IsArray()
  @ArrayMaxSize(5)
  @IsString({ each: true })
  evidenceKeys?: string[];
}

export class BlockUserDto {
  @ApiProperty()
  @IsUUID()
  userId: string;

  @ApiPropertyOptional({ maxLength: 200 })
  @IsOptional()
  @IsString()
  @Length(1, 200)
  reason?: string;
}

export class BlockContactsDto {
  @ApiProperty({
    description:
      'Numéros du carnet d’adresses. Seuls des condensats sont conservés — aucun numéro n’est stocké.',
    type: [String],
  })
  @IsArray()
  @ArrayMinSize(1)
  @ArrayMaxSize(500)
  @IsString({ each: true })
  phoneNumbers: string[];
}
