import { MessageStatus, MessageType } from '../../generated/prisma/enums';
import { PrismaService } from '../../core/prisma/prisma.service';
import { StorageService } from '../../core/storage/storage.service';
import { ConversationService } from './conversation.service';
import { CreditLedgerService } from '../billing/credit-ledger.service';
import { EntitlementService } from '../billing/entitlement.service';
import { NotificationService } from '../notifications/notification.service';
export interface SendMessageInput {
    conversationId: string;
    senderId: string;
    clientKey: string;
    type?: MessageType;
    body?: string;
    mediaKey?: string;
    mediaMimeType?: string;
    mediaBytes?: number;
    mediaDuration?: number;
    replyToId?: string;
}
export declare class ChatService {
    private readonly prisma;
    private readonly conversations;
    private readonly storage;
    private readonly ledger;
    private readonly entitlements;
    private readonly notifications;
    private readonly logger;
    constructor(prisma: PrismaService, conversations: ConversationService, storage: StorageService, ledger: CreditLedgerService, entitlements: EntitlementService, notifications: NotificationService);
    send(input: SendMessageInput): Promise<{
        message: {
            id: string;
            conversationId: string;
            senderId: string;
            clientKey: string;
            type: MessageType;
            status: MessageStatus;
            body: string | null;
            mediaUrl: string | null;
            mediaMimeType: string | null;
            mediaDuration: number | null;
            replyToId: string | null;
            createdAt: Date;
            deletedAt: Date | null;
        };
        duplicate: boolean;
        recipients?: undefined;
    } | {
        message: {
            id: string;
            conversationId: string;
            senderId: string;
            clientKey: string;
            type: MessageType;
            status: MessageStatus;
            body: string | null;
            mediaUrl: string | null;
            mediaMimeType: string | null;
            mediaDuration: number | null;
            replyToId: string | null;
            createdAt: Date;
            deletedAt: Date | null;
        };
        duplicate: boolean;
        recipients: string[];
    }>;
    history(userId: string, conversationId: string, options?: {
        before?: string;
        after?: string;
        limit?: number;
    }): Promise<{
        data: {
            id: string;
            conversationId: string;
            senderId: string;
            clientKey: string;
            type: MessageType;
            status: MessageStatus;
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
    markRead(userId: string, conversationId: string, upToMessageId?: string): Promise<{
        readAt: Date;
    }>;
    createMediaUpload(userId: string, conversationId: string, contentType: string, contentLength: number): Promise<{
        mediaKey: string;
        uploadUrl: string;
        expiresIn: number;
        type: MessageType;
    }>;
    remove(userId: string, messageId: string): Promise<void>;
    private validate;
    private preview;
    private toDto;
}
