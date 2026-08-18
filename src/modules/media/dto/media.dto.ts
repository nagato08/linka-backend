import { ApiProperty } from '@nestjs/swagger';
import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsInt,
  IsString,
  IsUUID,
  Max,
  Min,
} from 'class-validator';
import { MAX_PHOTOS } from '../media.service';

export class CreateUploadDto {
  @ApiProperty({ example: 'image/jpeg' })
  @IsString()
  contentType: string;

  @ApiProperty({
    description: 'Taille du fichier en octets, intégrée à la signature',
    example: 2_400_000,
  })
  @IsInt()
  @Min(1)
  @Max(10 * 1024 * 1024)
  contentLength: number;
}

export class ReorderPhotosDto {
  @ApiProperty({
    description:
      'Identifiants dans le nouvel ordre ; le premier est la photo principale',
    type: [String],
  })
  @IsArray()
  @ArrayMinSize(1)
  @ArrayMaxSize(MAX_PHOTOS)
  @IsUUID('all', { each: true })
  photoIds: string[];
}

export class UploadTicketResponse {
  @ApiProperty()
  photoId: string;

  @ApiProperty({ description: 'URL de dépôt direct vers le stockage objet' })
  uploadUrl: string;

  @ApiProperty({ description: 'Validité de l’URL, en secondes' })
  expiresIn: number;
}
