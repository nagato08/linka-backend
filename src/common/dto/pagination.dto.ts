import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsOptional, IsString, Max, Min } from 'class-validator';

/**
 * Pagination par curseur, et non par offset.
 *
 * Deux raisons, toutes deux structurantes ici : sur des listes qui bougent en
 * permanence (matchs, messages, likes reçus), l'offset fait sauter ou répéter
 * des éléments ; et il se dégrade linéairement, ce qui est intenable sur les
 * tables les plus écrites du schéma.
 */
export class CursorPaginationDto {
  @ApiPropertyOptional({
    description: 'Identifiant du dernier élément reçu',
    example: '0199aa00-0000-7000-8000-000000000000',
  })
  @IsOptional()
  @IsString()
  cursor?: string;

  @ApiPropertyOptional({
    description: "Nombre d'éléments par page",
    minimum: 1,
    maximum: 100,
    default: 20,
  })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(100)
  limit = 20;
}

export class PageInfo {
  @ApiProperty({
    description: 'Curseur à passer pour obtenir la page suivante',
  })
  nextCursor: string | null;

  @ApiProperty({ description: 'Vrai si une page suivante existe' })
  hasMore: boolean;
}

export class CursorPage<T> {
  data: T[];
  pageInfo: PageInfo;
}

/**
 * Construit une page à partir de `limit + 1` éléments demandés en base :
 * l'élément excédentaire sert uniquement à savoir s'il reste des données,
 * ce qui évite un second COUNT.
 */
export function buildCursorPage<T extends { id: string }>(
  rows: T[],
  limit: number,
): CursorPage<T> {
  const hasMore = rows.length > limit;
  const data = hasMore ? rows.slice(0, limit) : rows;

  return {
    data,
    pageInfo: {
      hasMore,
      nextCursor: hasMore ? (data[data.length - 1]?.id ?? null) : null,
    },
  };
}
