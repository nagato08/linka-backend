import { CursorPaginationDto } from '../../common/dto/pagination.dto';
import { ChatGateway } from './chat.gateway';
import { ChatService } from './chat.service';
import { ConversationService } from './conversation.service';
import { ChatMediaUploadDto, HistoryQueryDto, MarkReadDto, MuteDto, SendMessageDto } from './dto/chat.dto';
export declare class ChatController {
    private readonly chat;
    private readonly conversations;
    private readonly gateway;
    constructor(chat: ChatService, conversations: ConversationService, gateway: ChatGateway);
    list(userId: string, query: CursorPaginationDto): Promise<{
        data: {
            conversationId: string;
            type: import("../../generated/prisma/enums").ConversationType;
            lastMessageAt: Date | null;
            lastMessagePreview: string | null;
            unreadCount: number;
            mutedUntil: Date | null;
            participants: import("./conversation.service").ParticipantCard[];
        }[];
        pageInfo: import("../../common/dto/pagination.dto").PageInfo;
    }>;
    history(userId: string, conversationId: string, query: HistoryQueryDto): Promise<{
        data: {
            id: string;
            conversationId: string;
            senderId: string;
            clientKey: string;
            type: import("../../generated/prisma/enums").MessageType;
            status: import("../../generated/prisma/enums").MessageStatus;
            body: string | null;
            mediaUrl: string | null;
            mediaMimeType: string | null;
            mediaDuration: number | null;
            replyToId: string | null;
            createdAt: Date;
            deletedAt: Date | null;
        }[];
        hasMore: boolean;
    }>;
    send(userId: string, conversationId: string, dto: SendMessageDto): Promise<{
        id: string;
        conversationId: string;
        senderId: string;
        clientKey: string;
        type: import("../../generated/prisma/enums").MessageType;
        status: import("../../generated/prisma/enums").MessageStatus;
        body: string | null;
        mediaUrl: string | null;
        mediaMimeType: string | null;
        mediaDuration: number | null;
        replyToId: string | null;
        createdAt: Date;
        deletedAt: Date | null;
    }>;
    markRead(userId: string, conversationId: string, dto: MarkReadDto): Promise<{
        readAt: Date;
    }>;
    createMediaUpload(userId: string, conversationId: string, dto: ChatMediaUploadDto): Promise<{
        mediaKey: string;
        uploadUrl: string;
        expiresIn: number;
        type: import("../../generated/prisma/enums").MessageType;
    }>;
    mute(userId: string, conversationId: string, dto: MuteDto): Promise<void>;
    remove(userId: string, messageId: string): Promise<void>;
}
