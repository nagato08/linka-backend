import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsOptional, Max, Min } from 'class-validator';

export class DeckQueryDto {
  @ApiPropertyOptional({
    description:
      'Nombre de profils à renvoyer. Volontairement bas : chaque profil embarque ses photos, et la data se paie au mégaoctet.',
    minimum: 1,
    maximum: 30,
    default: 10,
  })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(30)
  limit = 10;
}
