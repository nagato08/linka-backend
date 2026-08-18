import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { MediaModule } from '../media/media.module';
import { ChatController } from './chat.controller';
import { ChatGateway } from './chat.gateway';
import { ChatService } from './chat.service';
import { ConversationService } from './conversation.service';

@Module({
  imports: [AuthModule, MediaModule],
  controllers: [ChatController],
  providers: [ChatService, ConversationService, ChatGateway],
  exports: [ChatService, ConversationService, ChatGateway],
})
export class ChatModule {}
