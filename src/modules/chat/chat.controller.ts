import {
  Body,
  Controller,
  Delete,
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
import { CursorPaginationDto } from '../../common/dto/pagination.dto';
import { ChatGateway } from './chat.gateway';
import { ChatService } from './chat.service';
import { ConversationService } from './conversation.service';
import {
  ChatMediaUploadDto,
  HistoryQueryDto,
  MarkReadDto,
  MuteDto,
  SendMessageDto,
} from './dto/chat.dto';

/**
 * Messagerie en REST.
 *
 * Doublon volontaire de la passerelle WebSocket. Sur le réseau visé, le socket
 * tombe plusieurs fois par heure : le client doit pouvoir tout faire en HTTP,
 * avec un simple délai de remise. Le socket accélère, il ne conditionne rien.
 */
@ApiTags('chat')
@ApiBearerAuth()
@Controller('conversations')
export class ChatController {
  constructor(
    private readonly chat: ChatService,
    private readonly conversations: ConversationService,
    private readonly gateway: ChatGateway,
  ) {}

  @Get()
  @ApiOperation({ summary: 'Lister ses conversations' })
  list(
    @CurrentUser('sub') userId: string,
    @Query() query: CursorPaginationDto,
  ) {
    return this.conversations.list(userId, query.cursor, query.limit);
  }

  @Get(':id/messages')
  @ApiOperation({
    summary: 'Historique d’une conversation',
    description:
      "`before` remonte le fil. `after` rejoue ce qui a été manqué — c'est ce qui permet de reprendre après une coupure sans tout recharger.",
  })
  history(
    @CurrentUser('sub') userId: string,
    @Param('id', ParseUUIDPipe) conversationId: string,
    @Query() query: HistoryQueryDto,
  ) {
    return this.chat.history(userId, conversationId, query);
  }

  @Post(':id/messages')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary: 'Envoyer un message',
    description:
      'Idempotent par `clientKey` : renvoyer le même message après une coupure ne le duplique pas.',
  })
  async send(
    @CurrentUser('sub') userId: string,
    @Param('id', ParseUUIDPipe) conversationId: string,
    @Body() dto: SendMessageDto,
  ) {
    const result = await this.chat.send({
      ...dto,
      conversationId,
      senderId: userId,
    });

    // Le destinataire reçoit le message en temps réel même si l'émetteur est
    // passé par HTTP faute de socket disponible.
    if (!result.duplicate) {
      this.gateway.broadcast(
        result.recipients ?? [],
        'message:new',
        result.message,
      );
    }

    return result.message;
  }

  @Post(':id/read')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Marquer comme lu' })
  async markRead(
    @CurrentUser('sub') userId: string,
    @Param('id', ParseUUIDPipe) conversationId: string,
    @Body() dto: MarkReadDto,
  ) {
    const result = await this.chat.markRead(
      userId,
      conversationId,
      dto.upToMessageId,
    );

    const access = await this.conversations.assertMember(
      userId,
      conversationId,
    );

    this.gateway.broadcast(
      access.participantIds.filter((id) => id !== userId),
      'message:read',
      { conversationId, userId, readAt: result.readAt },
    );

    return result;
  }

  @Post(':id/media/upload-url')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary: 'Obtenir une URL de dépôt pour une image ou une note vocale',
  })
  createMediaUpload(
    @CurrentUser('sub') userId: string,
    @Param('id', ParseUUIDPipe) conversationId: string,
    @Body() dto: ChatMediaUploadDto,
  ) {
    return this.chat.createMediaUpload(
      userId,
      conversationId,
      dto.contentType,
      dto.contentLength,
    );
  }

  @Post(':id/mute')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Mettre la conversation en silence' })
  mute(
    @CurrentUser('sub') userId: string,
    @Param('id', ParseUUIDPipe) conversationId: string,
    @Body() dto: MuteDto,
  ): Promise<void> {
    return this.conversations.mute(
      userId,
      conversationId,
      dto.until ? new Date(dto.until) : null,
    );
  }

  @Delete('messages/:messageId')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Supprimer un message',
    description:
      'Le contenu est réellement effacé, média compris — la suppression sert souvent à retirer une photo intime.',
  })
  remove(
    @CurrentUser('sub') userId: string,
    @Param('messageId', ParseUUIDPipe) messageId: string,
  ): Promise<void> {
    return this.chat.remove(userId, messageId);
  }
}
