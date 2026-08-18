import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsDateString,
  IsEnum,
  IsInt,
  IsLatitude,
  IsLongitude,
  IsOptional,
  IsString,
  Length,
  Max,
  Min,
} from 'class-validator';
import { EventCategory } from '../../../generated/prisma/enums';

export class CreateEventDto {
  @ApiProperty({ example: 'Randonnée au mont Fébé' })
  @IsString()
  @Length(5, 120)
  title: string;

  @ApiProperty({ maxLength: 1500 })
  @IsString()
  @Length(20, 1500)
  description: string;

  @ApiProperty({ enum: EventCategory })
  @IsEnum(EventCategory)
  category: EventCategory;

  @ApiProperty({ example: 4.0511 })
  @IsLatitude()
  latitude: number;

  @ApiProperty({ example: 9.7679 })
  @IsLongitude()
  longitude: number;

  @ApiProperty({ example: 'Bonapriso, devant la pharmacie' })
  @IsString()
  @Length(3, 200)
  locationLabel: string;

  @ApiProperty({ example: '2026-09-15T15:00:00Z' })
  @IsDateString()
  startsAt: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  endsAt?: string;

  @ApiProperty({ minimum: 2, maximum: 100 })
  @IsInt()
  @Min(2)
  @Max(100)
  capacity: number;

  @ApiPropertyOptional({
    description:
      'Places réservées aux femmes. Sans répartition, un événement se remplit d’hommes en quelques minutes.',
  })
  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(100)
  seatsWomen?: number;

  @ApiPropertyOptional({ description: 'Places réservées aux hommes' })
  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(100)
  seatsMen?: number;

  @ApiPropertyOptional({
    description: 'Coût indicatif en XAF, réglé sur place',
  })
  @IsOptional()
  @IsInt()
  @Min(0)
  costAmount?: number;
}

export class JoinEventDto {
  @ApiPropertyOptional({ maxLength: 300 })
  @IsOptional()
  @IsString()
  @Length(1, 300)
  message?: string;
}

export class RespondRequestDto {
  /**
   * `@IsBoolean` est indispensable, pas décoratif : le ValidationPipe tourne
   * en mode `whitelist`, et une propriété sans décorateur de validation est
   * purement et simplement retirée du corps de la requête. `@Type` seul est un
   * décorateur de transformation — il ne suffit pas à la conserver.
   */
  @ApiProperty({ description: 'true pour accepter, false pour refuser' })
  @IsBoolean()
  accept: boolean;
}

export class CheckInDto {
  @ApiProperty()
  @IsLatitude()
  latitude: number;

  @ApiProperty()
  @IsLongitude()
  longitude: number;
}

export class CancelEventDto {
  @ApiPropertyOptional({ maxLength: 300 })
  @IsOptional()
  @IsString()
  @Length(1, 300)
  reason?: string;
}

export class NearbyEventsDto {
  @ApiPropertyOptional({ minimum: 1, maximum: 500, default: 50 })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(500)
  radiusKm?: number;

  @ApiPropertyOptional({ enum: EventCategory })
  @IsOptional()
  @IsEnum(EventCategory)
  category?: EventCategory;

  @ApiPropertyOptional({ minimum: 1, maximum: 50, default: 20 })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(50)
  limit?: number;
}

export class CoverUploadDto {
  @ApiProperty({ example: 'image/jpeg' })
  @IsString()
  @Length(3, 64)
  contentType: string;

  @ApiProperty({ description: 'Taille du fichier en octets' })
  @IsInt()
  @Min(1)
  contentLength: number;
}

export class ConfirmCoverDto {
  @ApiProperty({ description: 'Clé renvoyée par la demande de dépôt' })
  @IsString()
  @Length(10, 255)
  uploadKey: string;
}

export class SponsorEventDto {
  /** Voir `RespondRequestDto` : `@IsBoolean` est requis en mode whitelist. */
  @ApiProperty()
  @IsBoolean()
  isSponsored: boolean;

  @ApiPropertyOptional({ maxLength: 100 })
  @IsOptional()
  @IsString()
  @Length(2, 100)
  sponsorName?: string;
}
