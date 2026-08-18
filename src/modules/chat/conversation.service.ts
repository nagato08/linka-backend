import { ForbiddenException, Injectable } from '@nestjs/common';
import { ConversationStatus, PhotoStatus } from '../../generated/prisma/enums';
import { PrismaService } from '../../core/prisma/prisma.service';
import { MediaService } from '../media/media.service';
import { buildCursorPage } from '../../common/dto/pagination.dto';

export interface ConversationAccess {
  conversationId: string;
  participantIds: string[];
  status: ConversationStatus;
}

@Injectable()
export class ConversationService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly media: MediaService,
  ) {}

  /**
   * Vérifie l'appartenance à la conversation.
   *
   * Appelé à chaque envoi et à chaque lecture, y compris sur WebSocket : le
   * client fournit l'identifiant de conversation, il ne fait jamais autorité.
   * Sans ce contrôle, connaître un identifiant suffirait à lire les messages
   * de deux inconnus.
   */
  async assertMember(
    userId: string,
    conversationId: string,
  ): Promise<ConversationAccess> {
    const conversation = await this.prisma.conversation.findUnique({
      where: { id: conversationId },
      select: {
        id: true,
        status: true,
        participants: {
          where: { leftAt: null },
          select: { userId: true },
        },
      },
    });

    const participantIds =
      conversation?.participants.map((p) => p.userId) ?? [];

    if (!conversation || !participantIds.includes(userId)) {
      // Message identique au cas « conversation inexistante » : confirmer son
      // existence renseignerait sur les relations d'autrui.
      throw new ForbiddenException('Conversation introuvable');
    }

    return {
      conversationId: conversation.id,
      participantIds,
      status: conversation.status,
    };
  }

  /**
   * Liste des conversations.
   *
   * Les compteurs de non-lus et le dernier message sont dénormalisés sur la
   * conversation : les recalculer à la lecture imposerait une agrégation sur
   * toute la table des messages à chaque ouverture de l'application.
   */
  async list(userId: string, cursor?: string, limit = 20) {
    const memberships = await this.prisma.conversationParticipant.findMany({
      where: {
        userId,
        leftAt: null,
        conversation: { status: ConversationStatus.ACTIVE },
      },
      orderBy: { conversation: { lastMessageAt: 'desc' } },
      take: limit + 1,
      ...(cursor
        ? {
            cursor: {
              conversationId_userId: { conversationId: cursor, userId },
            },
            skip: 1,
          }
        : {}),
      include: {
        conversation: {
          include: {
            participants: {
              where: { userId: { not: userId } },
              select: { userId: true },
            },
          },
        },
      },
    });

    const rows = memberships.map((m) => ({ ...m, id: m.conversationId }));
    const page = buildCursorPage(rows, limit);

    const otherIds = page.data.flatMap((m) =>
      m.conversation.participants.map((p) => p.userId),
    );
    const profiles = await this.loadCards(otherIds);

    return {
      data: page.data.map((membership) => ({
        conversationId: membership.conversationId,
        type: membership.conversation.type,
        lastMessageAt: membership.conversation.lastMessageAt,
        lastMessagePreview: membership.conversation.lastMessagePreview,
        unreadCount: membership.unreadCount,
        mutedUntil: membership.mutedUntil,
        participants: membership.conversation.participants
          .map((p) => profiles.get(p.userId))
          .filter((p) => p !== undefined),
      })),
      pageInfo: page.pageInfo,
    };
  }

  async mute(
    userId: string,
    conversationId: string,
    until: Date | null,
  ): Promise<void> {
    await this.assertMember(userId, conversationId);

    await this.prisma.conversationParticipant.update({
      where: { conversationId_userId: { conversationId, userId } },
      data: { mutedUntil: until },
    });
  }

  private async loadCards(userIds: string[]) {
    if (userIds.length === 0) return new Map<string, ParticipantCard>();

    const profiles = await this.prisma.profile.findMany({
      where: { userId: { in: [...new Set(userIds)] } },
      select: {
        userId: true,
        firstName: true,
        isVerified: true,
        photos: {
          where: { deletedAt: null, status: PhotoStatus.APPROVED },
          orderBy: { position: 'asc' },
          take: 1,
        },
      },
    });

    return new Map<string, ParticipantCard>(
      profiles.map((profile) => [
        profile.userId,
        {
          userId: profile.userId,
          firstName: profile.firstName,
          isVerified: profile.isVerified,
          photo: profile.photos[0] ? this.media.toDto(profile.photos[0]) : null,
        },
      ]),
    );
  }
}

export interface ParticipantCard {
  userId: string;
  firstName: string;
  isVerified: boolean;
  photo: ReturnType<MediaService['toDto']> | null;
}
