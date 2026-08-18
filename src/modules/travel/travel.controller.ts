import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from '../auth/decorators/auth.decorators';
import { TravelService } from './travel.service';
import { TravelToDto } from './dto/travel.dto';

/**
 * Mode voyage.
 *
 * Seule la position de découverte se déplace : le domicile reste enregistré,
 * ce qui rend le retour instantané et évite qu'un voyage n'efface la vraie
 * position de quelqu'un.
 */
@ApiTags('travel')
@ApiBearerAuth()
@Controller('travel')
export class TravelController {
  constructor(private readonly travel: TravelService) {}

  @Get()
  @ApiOperation({ summary: 'État du mode voyage et quota restant' })
  status(@CurrentUser('sub') userId: string) {
    return this.travel.status(userId);
  }

  @Get('destinations')
  @ApiOperation({ summary: 'Villes proposées, les plus peuplées d’abord' })
  destinations() {
    return this.travel.listDestinations();
  }

  @Post()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Partir en voyage',
    description:
      'Cinq usages offerts, puis illimité avec Gold. Une destination à moins de 50 km est refusée — ce n’est pas un voyage.',
  })
  travelTo(@CurrentUser('sub') userId: string, @Body() dto: TravelToDto) {
    return this.travel.travelTo(userId, dto.latitude, dto.longitude, dto.label);
  }

  @Post('return')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Revenir chez soi',
    description: 'Ne consomme aucun quota.',
  })
  returnHome(@CurrentUser('sub') userId: string) {
    return this.travel.returnHome(userId);
  }
}
