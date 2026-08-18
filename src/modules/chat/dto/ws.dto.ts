import { IsBoolean, IsOptional, IsUUID } from 'class-validator';
import { SendMessageDto } from './chat.dto';

/**
 * Charges utiles des événements WebSocket.
 *
 * Elles héritent des DTO REST plutôt que de les redéfinir : deux jeux de
 * règles finiraient par diverger, et le client verrait un message accepté par
 * le socket puis refusé en HTTP au premier repli.
 */
export class WsSendMessageDto extends SendMessageDto {
  @IsUUID()
  conversationId: string;
}

export class WsMarkReadDto {
  @IsUUID()
  conversationId: string;

  @IsOptional()
  @IsUUID()
  upToMessageId?: string;
}

export class WsTypingDto {
  @IsUUID()
  conversationId: string;

  @IsBoolean()
  isTyping: boolean;
}

export class WsSyncDto {
  @IsUUID()
  conversationId: string;

  @IsOptional()
  @IsUUID()
  afterMessageId?: string;
}
