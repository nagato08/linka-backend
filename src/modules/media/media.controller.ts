import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from '../auth/decorators/auth.decorators';
import { MediaService } from './media.service';
import {
  CreateUploadDto,
  ReorderPhotosDto,
  UploadTicketResponse,
} from './dto/media.dto';

@ApiTags('media')
@ApiBearerAuth()
@Controller('media/photos')
export class MediaController {
  constructor(private readonly media: MediaService) {}

  @Get()
  @ApiOperation({ summary: 'Lister ses photos' })
  list(@CurrentUser('sub') userId: string) {
    return this.media.listForUser(userId);
  }

  @Post('upload-url')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary: 'Obtenir une URL de dépôt',
    description:
      "Le client téléverse directement vers le stockage. Les octets ne transitent jamais par l'API : sur une connexion lente, un envoi mobiliserait le serveur pendant toute sa durée.",
  })
  createUploadUrl(
    @CurrentUser('sub') userId: string,
    @Body() dto: CreateUploadDto,
  ): Promise<UploadTicketResponse> {
    return this.media.createUploadTicket(
      userId,
      dto.contentType,
      dto.contentLength,
    );
  }

  @Post(':id/confirm')
  @HttpCode(HttpStatus.ACCEPTED)
  @ApiOperation({
    summary: 'Confirmer le dépôt et lancer le traitement',
    description:
      'Traitement asynchrone : variantes WebP, empreinte perceptuelle, contrôle des doublons, modération.',
  })
  confirm(
    @CurrentUser('sub') userId: string,
    @Param('id', ParseUUIDPipe) photoId: string,
  ) {
    return this.media.confirmUpload(userId, photoId);
  }

  @Patch('order')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Réordonner le carrousel' })
  reorder(
    @CurrentUser('sub') userId: string,
    @Body() dto: ReorderPhotosDto,
  ): Promise<void> {
    return this.media.reorder(userId, dto.photoIds);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Supprimer une photo' })
  remove(
    @CurrentUser('sub') userId: string,
    @Param('id', ParseUUIDPipe) photoId: string,
  ): Promise<void> {
    return this.media.remove(userId, photoId);
  }
}
