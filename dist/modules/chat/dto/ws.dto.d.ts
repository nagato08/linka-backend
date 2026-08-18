import { SendMessageDto } from './chat.dto';
export declare class WsSendMessageDto extends SendMessageDto {
    conversationId: string;
}
export declare class WsMarkReadDto {
    conversationId: string;
    upToMessageId?: string;
}
export declare class WsTypingDto {
    conversationId: string;
    isTyping: boolean;
}
export declare class WsSyncDto {
    conversationId: string;
    afterMessageId?: string;
}
