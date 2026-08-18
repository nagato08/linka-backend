import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsLatitude,
  IsLongitude,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export class TravelToDto {
  @ApiProperty({ example: 3.848, description: 'Latitude de la destination' })
  @IsLatitude()
  latitude: number;

  @ApiProperty({ example: 11.5021 })
  @IsLongitude()
  longitude: number;

  @ApiPropertyOptional({ example: 'Yaoundé' })
  @IsOptional()
  @IsString()
  @Length(1, 150)
  label?: string;
}
