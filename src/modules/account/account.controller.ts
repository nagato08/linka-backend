import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from '../auth/decorators/auth.decorators';
import { AccountService } from './account.service';
import { DeleteAccountDto } from './dto/account.dto';

@ApiTags('account')
@ApiBearerAuth()
@Controller('me/account')
export class AccountController {
  constructor(private readonly account: AccountService) {}

  @Delete()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Supprimer son compte',
    description:
      'Exigence formelle des stores pour la catégorie rencontre. Effet immédiat sur la visibilité et les sessions ; effacement définitif après 30 jours.',
  })
  requestDeletion(
    @CurrentUser('sub') userId: string,
    @Body() dto: DeleteAccountDto,
  ) {
    return this.account.requestDeletion(userId, dto.reason);
  }

  @Post('restore')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Annuler la suppression',
    description: 'Possible tant que le délai de 30 jours n’est pas écoulé.',
  })
  cancelDeletion(@CurrentUser('sub') userId: string): Promise<void> {
    return this.account.cancelDeletion(userId);
  }

  @Get('export')
  @ApiOperation({
    summary: 'Exporter ses données',
    description:
      "Droit d'accès du RGPD. L'orientation sexuelle est exclue de l'export — la renvoyer en clair irait contre la raison même de son chiffrement.",
  })
  exportData(@CurrentUser('sub') userId: string) {
    return this.account.exportData(userId);
  }
}
