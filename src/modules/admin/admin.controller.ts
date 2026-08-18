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
import { UserRole } from '../../generated/prisma/enums';
import { CurrentUser, Roles } from '../auth/decorators/auth.decorators';
import { AccountService } from '../account/account.service';
import { RiskService } from '../safety/risk.service';
import { EventService } from '../events/event.service';
import { SponsorEventDto } from '../events/dto/event.dto';
import { ModerationService } from './moderation.service';
import { ModerationDecisionDto, ModerationQueueDto } from './dto/admin.dto';

/**
 * Back-office de modération.
 *
 * Réservé aux rôles MODERATOR et ADMIN. Sans modération automatique branchée,
 * c'est ici que passe l'essentiel du travail : compter environ une minute par
 * photo, soit cinq heures par jour pour cent inscriptions.
 */
@ApiTags('admin')
@ApiBearerAuth()
@Roles(UserRole.MODERATOR, UserRole.ADMIN)
@Controller('admin')
export class AdminController {
  constructor(
    private readonly moderation: ModerationService,
    private readonly risk: RiskService,
    private readonly account: AccountService,
    private readonly events: EventService,
  ) {}

  @Get('moderation/queue')
  @ApiOperation({ summary: 'File de modération, triée par priorité' })
  queue(@Query() query: ModerationQueueDto) {
    return this.moderation.queue(query);
  }

  @Get('moderation/stats')
  @ApiOperation({ summary: 'Charge de modération en cours' })
  stats() {
    return this.moderation.stats();
  }

  @Post('moderation/:id/claim')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Prendre une tâche en charge',
    description: 'Évite que deux modérateurs traitent la même.',
  })
  claim(
    @CurrentUser('sub') moderatorId: string,
    @Param('id', ParseUUIDPipe) taskId: string,
  ) {
    return this.moderation.claim(taskId, moderatorId);
  }

  @Post('moderation/:id/decide')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Trancher une tâche',
    description:
      'Un bannissement révoque les sessions et remonte les filleuls pour réaudit. Une approbation lève un retrait silencieux.',
  })
  decide(
    @CurrentUser('sub') moderatorId: string,
    @Param('id', ParseUUIDPipe) taskId: string,
    @Body() dto: ModerationDecisionDto,
  ) {
    return this.moderation.decide(taskId, moderatorId, dto.decision, {
      notes: dto.notes,
      photoReason: dto.photoReason,
    });
  }

  @Get('users/:id')
  @ApiOperation({ summary: 'Fiche complète d’un compte' })
  inspect(@Param('id', ParseUUIDPipe) userId: string) {
    return this.moderation.inspectUser(userId);
  }

  @Post('users/:id/risk/refresh')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Recalculer le score de risque' })
  refreshRisk(@Param('id', ParseUUIDPipe) userId: string) {
    return this.risk.refresh(userId);
  }

  @Post('users/:id/purge')
  @HttpCode(HttpStatus.NO_CONTENT)
  @Roles(UserRole.ADMIN)
  @ApiOperation({
    summary: 'Purger immédiatement un compte',
    description:
      'Réservé aux administrateurs. Irréversible : médias supprimés, profil effacé, identifiants anonymisés.',
  })
  purge(@Param('id', ParseUUIDPipe) userId: string): Promise<void> {
    return this.account.purge(userId);
  }

  @Post('events/:id/sponsor')
  @HttpCode(HttpStatus.OK)
  @Roles(UserRole.ADMIN)
  @ApiOperation({
    summary: 'Rattacher un événement à un partenaire',
    description:
      'Le nom du partenaire s’affiche à côté du titre : laisser un organisateur l’écrire lui-même reviendrait à donner l’espace publicitaire au premier faussaire venu.',
  })
  sponsor(
    @Param('id', ParseUUIDPipe) eventId: string,
    @Body() dto: SponsorEventDto,
  ) {
    return this.events.setSponsor(eventId, dto);
  }
}
