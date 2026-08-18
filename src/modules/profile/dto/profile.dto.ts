import { ApiProperty, ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsBoolean,
  IsDateString,
  IsEnum,
  IsInt,
  IsLatitude,
  IsLongitude,
  IsOptional,
  IsString,
  IsUUID,
  Length,
  Max,
  Min,
  ValidateNested,
} from 'class-validator';
import {
  EducationLevel,
  Frequency,
  Gender,
  Intention,
  MatchingBucket,
  Orientation,
  Religion,
  SeekingTarget,
} from './profile.enums';

export class PromptAnswerDto {
  @ApiProperty()
  @IsUUID()
  promptId: string;

  @ApiProperty({ maxLength: 300 })
  @IsString()
  @Length(1, 300)
  answer: string;
}

export class CreateProfileDto {
  @ApiProperty({ example: 'Aïcha' })
  @IsString()
  @Length(2, 50)
  firstName: string;

  @ApiProperty({
    example: '1998-04-12',
    description: 'Date de naissance. La majorité est contrôlée côté serveur.',
  })
  @IsDateString()
  birthdate: string;

  @ApiProperty({ enum: Gender })
  @IsEnum(Gender)
  gender: Gender;

  @ApiPropertyOptional({
    description: 'Libellé libre, uniquement lorsque gender vaut OTHER',
  })
  @IsOptional()
  @IsString()
  @Length(1, 40)
  genderLabel?: string;

  @ApiPropertyOptional({
    enum: MatchingBucket,
    description:
      "Catégorie sous laquelle le profil est proposé. Déduite du genre si elle n'est pas fournie.",
  })
  @IsOptional()
  @IsEnum(MatchingBucket)
  matchingBucket?: MatchingBucket;

  @ApiProperty({ enum: SeekingTarget, isArray: true })
  @IsArray()
  @ArrayMinSize(1)
  @IsEnum(SeekingTarget, { each: true })
  seeking: SeekingTarget[];

  @ApiPropertyOptional({
    enum: Orientation,
    description:
      'Donnée sensible : chiffrée au repos, jamais renvoyée par les endpoints publics.',
  })
  @IsOptional()
  @IsEnum(Orientation)
  orientation?: Orientation;

  @ApiProperty({ enum: Intention })
  @IsEnum(Intention)
  intention: Intention;

  @ApiPropertyOptional({ maxLength: 500 })
  @IsOptional()
  @IsString()
  @Length(0, 500)
  bio?: string;

  @ApiPropertyOptional({ minimum: 120, maximum: 250 })
  @IsOptional()
  @IsInt()
  @Min(120)
  @Max(250)
  heightCm?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @Length(1, 100)
  profession?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  hasChildren?: boolean;

  @ApiPropertyOptional({ minimum: 0, maximum: 20 })
  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(20)
  childrenCount?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  wantsChildren?: boolean;

  @ApiPropertyOptional({ enum: Religion })
  @IsOptional()
  @IsEnum(Religion)
  religion?: Religion;

  @ApiPropertyOptional({ enum: EducationLevel })
  @IsOptional()
  @IsEnum(EducationLevel)
  education?: EducationLevel;

  @ApiPropertyOptional({ enum: Frequency })
  @IsOptional()
  @IsEnum(Frequency)
  smoking?: Frequency;

  @ApiPropertyOptional({ enum: Frequency })
  @IsOptional()
  @IsEnum(Frequency)
  drinking?: Frequency;

  @ApiPropertyOptional({ example: ['fr', 'en'] })
  @IsOptional()
  @IsArray()
  @ArrayMaxSize(6)
  @IsString({ each: true })
  languages?: string[];

  @ApiPropertyOptional({ example: 4.0511 })
  @IsOptional()
  @IsLatitude()
  latitude?: number;

  @ApiPropertyOptional({ example: 9.7679 })
  @IsOptional()
  @IsLongitude()
  longitude?: number;

  @ApiPropertyOptional({
    description: 'Au moins cinq centres d’intérêt sont attendus',
    type: [String],
  })
  @IsOptional()
  @IsArray()
  @ArrayMaxSize(15)
  @IsUUID('all', { each: true })
  interestIds?: string[];

  @ApiPropertyOptional({ type: [PromptAnswerDto] })
  @IsOptional()
  @IsArray()
  @ArrayMaxSize(3)
  @ValidateNested({ each: true })
  @Type(() => PromptAnswerDto)
  prompts?: PromptAnswerDto[];
}

export class UpdateProfileDto extends PartialType(CreateProfileDto) {}

export class UpdateLocationDto {
  @ApiProperty({ example: 4.0511 })
  @IsLatitude()
  latitude: number;

  @ApiProperty({ example: 9.7679 })
  @IsLongitude()
  longitude: number;
}

export class UpdatePreferencesDto {
  @ApiPropertyOptional({ minimum: 18, maximum: 120 })
  @IsOptional()
  @IsInt()
  @Min(18)
  @Max(120)
  minAge?: number;

  @ApiPropertyOptional({ minimum: 18, maximum: 120 })
  @IsOptional()
  @IsInt()
  @Min(18)
  @Max(120)
  maxAge?: number;

  @ApiPropertyOptional({ minimum: 1, maximum: 20_000 })
  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(20_000)
  maxDistanceKm?: number;

  @ApiPropertyOptional({
    description:
      'Gratuit, et volontairement mis en avant : c’est ce qui pousse à se faire vérifier.',
  })
  @IsOptional()
  @IsBoolean()
  verifiedOnly?: boolean;

  @ApiPropertyOptional({
    description:
      'Élargit le rayon automatiquement quand la zone est peu dense. Désactiver expose à un deck vide.',
  })
  @IsOptional()
  @IsBoolean()
  allowRadiusExpansion?: boolean;

  @ApiPropertyOptional({ enum: Intention, isArray: true })
  @IsOptional()
  @IsArray()
  @IsEnum(Intention, { each: true })
  intentionFilter?: Intention[];

  @ApiPropertyOptional({ enum: Religion, isArray: true })
  @IsOptional()
  @IsArray()
  @IsEnum(Religion, { each: true })
  religionFilter?: Religion[];
}

export class UpdatePrivacyDto {
  @ApiPropertyOptional({
    description:
      'Invisible dans les decks, sauf pour les personnes déjà likées. Réservé aux abonnés.',
  })
  @IsOptional()
  @IsBoolean()
  incognito?: boolean;

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  hideAge?: boolean;

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  hideDistance?: boolean;
}
