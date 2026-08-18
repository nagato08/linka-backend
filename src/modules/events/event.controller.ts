import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Post,
  Query,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from '../auth/decorators/auth.decorators';
import { EVENT_PROMOTION_COST, EventService } from './event.service';
import {
  CancelEventDto,
  CheckInDto,
  ConfirmCoverDto,
  CoverUploadDto,
  CreateEventDto,
  JoinEventDto,
  NearbyEventsDto,
  RespondRequestDto,
} from './dto/event.dto';

/**
 * Événements créés par les utilisateurs.
 *
 * Ils répondent au vrai point de fuite du produit : les conversations qui
 * meurent avant le rendez-vous. Un groupe est moins engageant qu'un
 * tête-à-tête, donc plus souvent honoré, et nettement plus sûr — ce qui
 * compte beaucoup dans un contexte où sortir seule avec un inconnu rencontré
 * en ligne est socialement lourd.
 */
@ApiTags('events')
@ApiBearerAuth()
@Controller('events')
export class EventController {
  constructor(private readonly events: EventService) {}

  @Get()
  @ApiOperation({
    summary: 'Événements à proximité',
    description: 'Rayon élargi automatiquement quand la zone est peu dense.',
  })
  nearby(@CurrentUser('sub') userId: string, @Query() query: NearbyEventsDto) {
    return this.events.listNearby(userId, query);
  }

  @Get('mine')
  @ApiOperation({ summary: 'Mes événements, organisés et rejoints' })
  mine(@CurrentUser('sub') userId: string) {
    return this.events.listMine(userId);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Détail d’un événement',
    description:
      'L’adresse précise n’est révélée qu’aux personnes acceptées : la publier permettrait de se poster à un rendez-vous sans y être invité.',
  })
  detail(
    @CurrentUser('sub') userId: string,
    @Param('id', ParseUUIDPipe) eventId: string,
  ) {
    return this.events.detail(userId, eventId);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary: 'Créer un événement',
    description:
      'Réservé aux profils vérifiés — c’est le principal levier d’adoption du badge.',
  })
  create(@CurrentUser('sub') userId: string, @Body() dto: CreateEventDto) {
    return this.events.create(userId, {
      ...dto,
      startsAt: new Date(dto.startsAt),
      endsAt: dto.endsAt ? new Date(dto.endsAt) : undefined,
    });
  }

  @Post(':id/join')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary: 'Demander à rejoindre',
    description:
      'L’organisateur tranche. La répartition par genre est respectée.',
  })
  join(
    @CurrentUser('sub') userId: string,
    @Param('id', ParseUUIDPipe) eventId: string,
    @Body() dto: JoinEventDto,
  ) {
    return this.events.requestToJoin(userId, eventId, dto.message);
  }

  @Get(':id/requests')
  @ApiOperation({ summary: 'Demandes reçues (organisateur)' })
  requests(
    @CurrentUser('sub') userId: string,
    @Param('id', ParseUUIDPipe) eventId: string,
  ) {
    return this.events.listRequests(userId, eventId);
  }

  @Post(':id/requests/:requestId')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Accepter ou refuser une demande' })
  respond(
    @CurrentUser('sub') userId: string,
    @Param('id', ParseUUIDPipe) eventId: string,
    @Param('requestId', ParseUUIDPipe) requestId: string,
    @Body() dto: RespondRequestDto,
  ) {
    return this.events.respond(userId, eventId, requestId, dto.accept);
  }

  @Post(':id/checkin')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Pointer sur place',
    description:
      'Contrôlé par géolocalisation, dans un rayon de 500 m et autour de l’heure prévue. Alimente la réputation d’organisateur.',
  })
  checkIn(
    @CurrentUser('sub') userId: string,
    @Param('id', ParseUUIDPipe) eventId: string,
    @Body() dto: CheckInDto,
  ) {
    return this.events.checkIn(userId, eventId, dto.latitude, dto.longitude);
  }

  @Post(':id/cancel')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Annuler (organisateur)',
    description:
      'La conversation reste ouverte : les participants doivent pouvoir s’organiser autrement.',
  })
  cancel(
    @CurrentUser('sub') userId: string,
    @Param('id', ParseUUIDPipe) eventId: string,
    @Body() dto: CancelEventDto,
  ) {
    return this.events.cancel(userId, eventId, dto.reason);
  }

  @Post(':id/cover')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary: 'Demander une URL de dépôt pour l’affiche',
    description:
      'Le fichier part directement vers le stockage objet, sans transiter par l’API.',
  })
  coverTicket(
    @CurrentUser('sub') userId: string,
    @Param('id', ParseUUIDPipe) eventId: string,
    @Body() dto: CoverUploadDto,
  ) {
    return this.events.createCoverUploadTicket(
      userId,
      eventId,
      dto.contentType,
      dto.contentLength,
    );
  }

  @Post(':id/cover/confirm')
  @HttpCode(HttpStatus.ACCEPTED)
  @ApiOperation({
    summary: 'Confirmer le dépôt de l’affiche',
    description:
      'Déclenche le redimensionnement et l’analyse de contenu. L’affiche n’apparaît qu’une fois validée.',
  })
  confirmCover(
    @CurrentUser('sub') userId: string,
    @Param('id', ParseUUIDPipe) eventId: string,
    @Body() dto: ConfirmCoverDto,
  ) {
    return this.events.confirmCover(userId, eventId, dto.uploadKey);
  }

  @Post(':id/promote')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Mettre l’événement en avant',
    description: `Coûte ${EVENT_PROMOTION_COST} pièces. L’événement porte alors trois fois plus loin et passe en tête de liste.`,
  })
  promote(
    @CurrentUser('sub') userId: string,
    @Param('id', ParseUUIDPipe) eventId: string,
  ) {
    return this.events.promote(userId, eventId);
  }
}
