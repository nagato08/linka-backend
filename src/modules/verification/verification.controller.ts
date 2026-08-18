import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from '../auth/decorators/auth.decorators';
import { VerificationService } from './verification.service';
import {
  StartVerificationResponse,
  VerificationUploadDto,
} from './dto/verification.dto';

/**
 * Vérification de profil et badge.
 *
 * Jamais obligatoire — l'imposer casserait le tunnel d'inscription. Elle est
 * rendue incontournable autrement : le deck privilégie fortement les profils
 * vérifiés, le filtre « vérifiés uniquement » est gratuit, et seuls les
 * vérifiés pourront créer un événement.
 */
@ApiTags('verification')
@ApiBearerAuth()
@Controller('verification')
export class VerificationController {
  constructor(private readonly verification: VerificationService) {}

  @Get()
  @ApiOperation({ summary: 'État de vérification du profil' })
  status(@CurrentUser('sub') userId: string) {
    return this.verification.status(userId);
  }

  @Post('start')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary: 'Démarrer une vérification',
    description:
      'Renvoie une pose tirée au sort. Le selfie sera comparé aux photos du profil : c’est cette comparaison qui attrape le catfishing.',
  })
  start(
    @CurrentUser('sub') userId: string,
  ): Promise<StartVerificationResponse> {
    return this.verification.start(userId);
  }

  @Post(':id/upload-url')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Obtenir une URL de dépôt pour la capture' })
  createUploadUrl(
    @CurrentUser('sub') userId: string,
    @Param('id', ParseUUIDPipe) verificationId: string,
    @Body() dto: VerificationUploadDto,
  ) {
    return this.verification.createUploadUrl(
      userId,
      verificationId,
      dto.contentType,
      dto.contentLength,
    );
  }

  @Post(':id/submit')
  @HttpCode(HttpStatus.ACCEPTED)
  @ApiOperation({
    summary: 'Soumettre la capture',
    description:
      'La vidéo est supprimée dès le traitement terminé. Seul un vecteur non réversible est conservé.',
  })
  submit(
    @CurrentUser('sub') userId: string,
    @Param('id', ParseUUIDPipe) verificationId: string,
  ) {
    return this.verification.submit(userId, verificationId);
  }
}
