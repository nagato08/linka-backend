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
import {
  ModerationDecision,
  ModerationTaskType,
  PhotoRejectionReason,
} from '../../../generated/prisma/enums';

export class ModerationQueueDto {
  @ApiPropertyOptional({ enum: ModerationTaskType })
  @IsOptional()
  @IsEnum(ModerationTaskType)
  type?: ModerationTaskType;

  @ApiPropertyOptional({ minimum: 1, maximum: 50, default: 20 })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(50)
  limit = 20;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUUID()
  cursor?: string;
}

export class ModerationDecisionDto {
  @ApiProperty({ enum: ModerationDecision })
  @IsEnum(ModerationDecision)
  decision: ModerationDecision;

  @ApiPropertyOptional({ maxLength: 1000 })
  @IsOptional()
  @IsString()
  @Length(1, 1000)
  notes?: string;

  @ApiPropertyOptional({
    enum: PhotoRejectionReason,
    description: 'Motif de rejet, pour les tâches photo',
  })
  @IsOptional()
  @IsEnum(PhotoRejectionReason)
  photoReason?: PhotoRejectionReason;
}
