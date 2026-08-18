import { Controller, Get, Post, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from '../auth/decorators/auth.decorators';
import { DiscoveryService } from './discovery.service';
import { DeckQueryDto } from './dto/deck.dto';

@ApiTags('discovery')
@ApiBearerAuth()
@Controller('discovery')
export class DiscoveryController {
  constructor(private readonly discovery: DiscoveryService) {}

  @Get('deck')
  @ApiOperation({
    summary: 'Obtenir les prochains profils',
    description:
      "La pile est pré-calculée dans Redis. Le rayon s'élargit automatiquement quand la zone est peu dense — un deck vide fait perdre un utilisateur définitivement.",
  })
  getDeck(@CurrentUser('sub') userId: string, @Query() query: DeckQueryDto) {
    return this.discovery.getDeck(userId, query.limit);
  }

  @Post('deck/refresh')
  @ApiOperation({
    summary: 'Reconstruire la pile',
    description: 'À appeler après un changement de filtres ou de position.',
  })
  refresh(@CurrentUser('sub') userId: string, @Query() query: DeckQueryDto) {
    return this.discovery.refresh(userId, query.limit);
  }
}
