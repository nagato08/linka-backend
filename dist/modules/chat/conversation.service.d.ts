import { ConversationStatus } from '../../generated/prisma/enums';
import { PrismaService } from '../../core/prisma/prisma.service';
import { MediaService } from '../media/media.service';
export interface ConversationAccess {
    conversationId: string;
    participantIds: string[];
    status: ConversationStatus;
}
export declare class ConversationService {
    private readonly prisma;
    private readonly media;
    constructor(prisma: PrismaService, media: MediaService);
    assertMember(userId: string, conversationId: string): Promise<ConversationAccess>;
    list(userId: string, cursor?: string, limit?: number): Promise<{
        data: {
            conversationId: string;
            type: import("../../generated/prisma/enums").ConversationType;
            lastMessageAt: Date | null;
            lastMessagePreview: string | null;
            unreadCount: number;
            mutedUntil: Date | null;
            participants: ParticipantCard[];
        }[];
        pageInfo: import("../../common/dto/pagination.dto").PageInfo;
    }>;
    mute(userId: string, conversationId: string, until: Date | null): Promise<void>;
    private loadCards;
}
export interface ParticipantCard {
    userId: string;
    firstName: string;
    isVerified: boolean;
    photo: ReturnType<MediaService['toDto']> | null;
}
