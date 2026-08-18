import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from '../auth/decorators/auth.decorators';
import { NotificationService } from './notification.service';
import {
  RegisterPushTokenDto,
  RemovePushTokenDto,
  UpdateNotificationPreferencesDto,
} from './dto/notification.dto';

@ApiTags('notifications')
@ApiBearerAuth()
@Controller('notifications')
export class NotificationController {
  constructor(private readonly notifications: NotificationService) {}

  @Get()
  @ApiOperation({
    summary: 'Centre de notifications',
    description:
      'Les notifications sont enregistrées même quand le push est coupé : les désactiver ne doit pas revenir à ne plus rien voir.',
  })
  list(@CurrentUser('sub') userId: string) {
    return this.notifications.list(userId);
  }

  @Get('unread-count')
  @ApiOperation({ summary: 'Nombre de notifications non lues' })
  async unread(@CurrentUser('sub') userId: string) {
    return { count: await this.notifications.unreadCount(userId) };
  }

  @Post('read-all')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Tout marquer comme lu' })
  markAllRead(@CurrentUser('sub') userId: string) {
    return this.notifications.markAllRead(userId);
  }

  @Post('tokens')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Enregistrer un jeton push',
    description:
      'À rappeler à chaque démarrage : Firebase renouvelle les jetons sans prévenir.',
  })
  registerToken(
    @CurrentUser('sub') userId: string,
    @Body() dto: RegisterPushTokenDto,
  ): Promise<void> {
    return this.notifications.registerToken(
      userId,
      dto.token,
      dto.platform,
      dto.deviceId,
    );
  }

  @Delete('tokens')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Retirer un jeton, à la déconnexion' })
  removeToken(
    @CurrentUser('sub') userId: string,
    @Body() dto: RemovePushTokenDto,
  ): Promise<void> {
    return this.notifications.removeToken(userId, dto.token);
  }

  @Get('preferences')
  @ApiOperation({ summary: 'Préférences de notification' })
  preferences(@CurrentUser('sub') userId: string) {
    return this.notifications.getPreferences(userId);
  }

  @Patch('preferences')
  @ApiOperation({
    summary: 'Modifier ses préférences',
    description:
      'Les heures calmes s’expriment en minutes depuis minuit et peuvent enjamber minuit — 1320 à 420 pour 22 h–7 h.',
  })
  updatePreferences(
    @CurrentUser('sub') userId: string,
    @Body() dto: UpdateNotificationPreferencesDto,
  ) {
    return this.notifications.updatePreferences(userId, dto);
  }
}
