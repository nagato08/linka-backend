import { OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { PrismaService } from '../../core/prisma/prisma.service';
import { RedisService } from '../../core/redis/redis.service';
import { TokenService } from '../auth/token.service';
import { ChatService } from './chat.service';
import { ConversationService } from './conversation.service';
import { WsMarkReadDto, WsSendMessageDto, WsSyncDto, WsTypingDto } from './dto/ws.dto';
interface AuthedSocket extends Socket {
    userId?: string;
    sessionId?: string;
}
export declare class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
    private readonly tokens;
    private readonly prisma;
    private readonly redis;
    private readonly chat;
    private readonly conversations;
    private readonly logger;
    server: Server;
    constructor(tokens: TokenService, prisma: PrismaService, redis: RedisService, chat: ChatService, conversations: ConversationService);
    handleConnection(client: AuthedSocket): Promise<void>;
    handleDisconnect(client: AuthedSocket): Promise<void>;
    onSend(client: AuthedSocket, payload: WsSendMessageDto): Promise<{
        error: string;
        ok?: undefined;
        message?: undefined;
        duplicate?: undefined;
    } | {
        ok: boolean;
        message: {
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
        };
        duplicate: boolean;
        error?: undefined;
    } | {
        ok: boolean;
        error: string;
        message?: undefined;
        duplicate?: undefined;
    }>;
    onRead(client: AuthedSocket, payload: WsMarkReadDto): Promise<{
        error: string;
        ok?: undefined;
    } | {
        ok: boolean;
        error?: undefined;
    }>;
    onTyping(client: AuthedSocket, payload: WsTypingDto): Promise<{
        error: string;
        ok?: undefined;
    } | {
        ok: boolean;
        error?: undefined;
    }>;
    onSync(client: AuthedSocket, payload: WsSyncDto): Promise<{
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
    } | {
        error: string;
    }>;
    broadcast(userIds: string[], event: string, payload: unknown): void;
    private setPresence;
}
export {};
