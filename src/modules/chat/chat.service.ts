import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import {
  ConversationStatus,
  MessageStatus,
  MessageType,
  NotificationType,
} from '../../generated/prisma/enums';
import { PrismaService } from '../../core/prisma/prisma.service';
import { StorageService } from '../../core/storage/storage.service';
import { ConversationService } from './conversation.service';
import { CreditLedgerService } from '../billing/credit-ledger.service';
import { EntitlementService } from '../billing/entitlement.service';
import { NotificationService } from '../notifications/notification.service';

const MAX_BODY_LENGTH = 2_000;
const MAX_AUDIO_SECONDS = 120;
const MAX_MEDIA_BYTES = 8 * 1024 * 1024;

const ACCEPTED_MEDIA: Record<string, MessageType> = {
  'image/jpeg': MessageType.IMAGE,
  'image/png': MessageType.IMAGE,
  'image/webp': MessageType.IMAGE,
  'audio/mp4': MessageType.AUDIO,
  'audio/aac': MessageType.AUDIO,
  'audio/mpeg': MessageType.AUDIO,
  'audio/ogg': MessageType.AUDIO,
};

export interface SendMessageInput {
  conversationId: string;
  senderId: string;
  /**
   * Identifiant généré par le client.
   *
   * Pierre angulaire du dispositif : sur une 3G qui coupe, le client renvoie
   * un message sans savoir si le premier envoi a abouti. Cette clé rend le
   * renvoi inoffensif — le serveur reconnaît le doublon et retourne le message
   * déjà écrit au lieu d'en créer un second.
   */
  clientKey: string;
  type?: MessageType;
  body?: string;
  mediaKey?: string;
  mediaMimeType?: string;
  mediaBytes?: number;
  mediaDuration?: number;
  replyToId?: string;
}

@Injectable()
export class ChatService {
  private readonly logger = new Logger(ChatService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly conversations: ConversationService,
    private readonly storage: StorageService,
    private readonly ledger: CreditLedgerService,
    private readonly entitlements: EntitlementService,
    private readonly notifications: NotificationService,
  ) {}

  /**
   * Écrit un message.
   *
   * Idempotent par `clientKey` : deux appels identiques produisent un seul
   * message. C'est la contrainte unique (conversationId, senderId, clientKey)
   * qui l'assure — pas une vérification préalable, qui laisserait passer deux
   * requêtes concurrentes.
   */
  async send(input: SendMessageInput) {
    const access = await this.conversations.assertMember(
      input.senderId,
      input.conversationId,
    );

    if (access.status !== ConversationStatus.ACTIVE) {
      throw new ForbiddenException('Cette conversation est fermée');
    }

    const existing = await this.prisma.message.findUnique({
      where: {
        conversationId_senderId_clientKey: {
          conversationId: input.conversationId,
          senderId: input.senderId,
          clientKey: input.clientKey,
        },
      },
    });

    if (existing) {
      // Renvoi après coupure : on retourne le message d'origine, sans le
      // dupliquer ni relancer les notifications.
      return { message: this.toDto(existing), duplicate: true };
    }

    const type = input.type ?? MessageType.TEXT;
    this.validate(type, input);

    const recipients = access.participantIds.filter(
      (id) => id !== input.senderId,
    );

    const message = await this.prisma.$transaction(async (tx) => {
      const created = await tx.message.create({
        data: {
          conversationId: input.conversationId,
          senderId: input.senderId,
          clientKey: input.clientKey,
          type,
          body: input.body?.trim(),
          mediaKey: input.mediaKey,
          mediaMimeType: input.mediaMimeType,
          mediaBytes: input.mediaBytes,
          mediaDuration: input.mediaDuration,
          replyToId: input.replyToId,
          status: MessageStatus.SENT,
        },
      });

      await tx.conversation.update({
        where: { id: input.conversationId },
        data: {
          lastMessageAt: created.createdAt,
          lastMessagePreview: this.preview(type, input.body),
        },
      });

      // Compteur de non-lus incrémenté à l'écriture. Le calculer à la lecture
      // imposerait une agrégation sur toute la table à chaque ouverture de la
      // liste des conversations.
      await tx.conversationParticipant.updateMany({
        where: {
          conversationId: input.conversationId,
          userId: { in: recipients },
        },
        data: { unreadCount: { increment: 1 } },
      });

      // Un match qui vit remonte en tête de liste.
      await tx.match.updateMany({
        where: { conversation: { id: input.conversationId } },
        data: { lastInteractionAt: created.createdAt },
      });

      return created;
    });

    // Le contenu du message n'est jamais repris dans la notification : elle
    // s'affiche sur un écran verrouillé, et sur ce produit ce qui s'écrit peut
    // être intime. Seul le prénom de l'expéditeur apparaît.
    const sender = await this.prisma.profile.findUnique({
      where: { userId: input.senderId },
      select: { firstName: true },
    });

    await this.notifications.notifyMany(
      recipients.map((userId) => ({
        userId,
        type: NotificationType.NEW_MESSAGE,
        vars: { firstName: sender?.firstName ?? 'Quelqu’un' },
        data: {
          screen: 'chat',
          conversationId: input.conversationId,
        },
        // Transmis pour que la mise en silence de cette conversation soit
        // respectée.
        conversationId: input.conversationId,
      })),
    );

    return { message: this.toDto(message), duplicate: false, recipients };
  }

  /**
   * Historique d'une conversation.
   *
   * Deux modes. `before` remonte le fil, pour le défilement classique.
   * `after` rejoue ce qui a été manqué : c'est ce qui permet de reprendre
   * après une coupure sans tout recharger — décisif quand la connexion tombe
   * plusieurs fois par heure et que la data se paie.
   */
  async history(
    userId: string,
    conversationId: string,
    options: { before?: string; after?: string; limit?: number } = {},
  ) {
    await this.conversations.assertMember(userId, conversationId);

    const limit = Math.min(options.limit ?? 30, 100);

    if (options.after) {
      const anchor = await this.prisma.message.findUnique({
        where: { id: options.after },
        select: { createdAt: true },
      });

      if (!anchor)
        throw new NotFoundException('Message de reprise introuvable');

      const messages = await this.prisma.message.findMany({
        where: {
          conversationId,
          createdAt: { gt: anchor.createdAt },
          deletedAt: null,
        },
        orderBy: { createdAt: 'asc' },
        take: limit,
      });

      return {
        data: messages.map((m) => this.toDto(m)),
        hasMore: messages.length === limit,
      };
    }

    const messages = await this.prisma.message.findMany({
      where: { conversationId, deletedAt: null },
      orderBy: { createdAt: 'desc' },
      take: limit + 1,
      ...(options.before ? { cursor: { id: options.before }, skip: 1 } : {}),
    });

    const hasMore = messages.length > limit;

    return {
      data: (hasMore ? messages.slice(0, limit) : messages)
        .reverse()
        .map((m) => this.toDto(m)),
      hasMore,
    };
  }

  /**
   * Marque la conversation comme lue jusqu'à un message donné.
   *
   * Le compteur est remis à zéro plutôt que décrémenté : un décrément peut
   * dériver après une coupure ou un envoi concurrent, et un compteur de
   * non-lus faux est immédiatement visible par l'utilisateur.
   */
  async markRead(
    userId: string,
    conversationId: string,
    upToMessageId?: string,
  ): Promise<{ readAt: Date }> {
    await this.conversations.assertMember(userId, conversationId);

    const readAt = new Date();

    await this.prisma.$transaction(async (tx) => {
      await tx.conversationParticipant.update({
        where: { conversationId_userId: { conversationId, userId } },
        data: { lastReadAt: readAt, unreadCount: 0 },
      });

      const messages = await tx.message.findMany({
        where: {
          conversationId,
          senderId: { not: userId },
          ...(upToMessageId ? { id: { lte: upToMessageId } } : {}),
        },
        select: { id: true },
        orderBy: { createdAt: 'desc' },
        take: 200,
      });

      for (const message of messages) {
        await tx.messageReceipt.upsert({
          where: { messageId_userId: { messageId: message.id, userId } },
          create: {
            messageId: message.id,
            userId,
            readAt,
            deliveredAt: readAt,
          },
          update: { readAt },
        });
      }
    });

    return { readAt };
  }

  /**
   * URL de dépôt pour une image ou une note vocale.
   *
   * Même principe que les photos de profil : le client téléverse directement
   * vers le stockage. Faire transiter une note vocale par l'API bloquerait un
   * worker pendant tout l'envoi.
   */
  async createMediaUpload(
    userId: string,
    conversationId: string,
    contentType: string,
    contentLength: number,
  ) {
    await this.conversations.assertMember(userId, conversationId);

    const type = ACCEPTED_MEDIA[contentType];

    if (!type) {
      throw new BadRequestException(
        `Type de fichier non accepté : ${contentType}`,
      );
    }

    if (contentLength <= 0 || contentLength > MAX_MEDIA_BYTES) {
      throw new BadRequestException(
        `Fichier trop volumineux, ${MAX_MEDIA_BYTES / 1024 / 1024} Mo maximum`,
      );
    }

    const key = `chat/${conversationId}/${randomUUID()}`;
    const upload = await this.storage.createUploadUrl(
      key,
      contentType,
      contentLength,
    );

    return {
      mediaKey: key,
      uploadUrl: upload.url,
      expiresIn: upload.expiresIn,
      type,
    };
  }

  /**
   * Supprime un message pour tout le monde.
   *
   * Le contenu part vraiment — texte effacé, objet retiré du stockage. Sur ce
   * produit, la suppression sert souvent à retirer une photo intime envoyée
   * dans un moment de confiance : la conserver « au cas où » serait un abus.
   */
  async remove(userId: string, messageId: string): Promise<void> {
    const message = await this.prisma.message.findUnique({
      where: { id: messageId },
      select: { id: true, senderId: true, mediaKey: true, deletedAt: true },
    });

    if (!message || message.deletedAt) {
      throw new NotFoundException('Message introuvable');
    }

    if (message.senderId !== userId) {
      throw new ForbiddenException('Vous ne pouvez supprimer que vos messages');
    }

    if (message.mediaKey) {
      await this.storage.deleteObject(message.mediaKey);
    }

    await this.prisma.message.update({
      where: { id: messageId },
      data: {
        deletedAt: new Date(),
        status: MessageStatus.DELETED,
        body: null,
        mediaKey: null,
      },
    });
  }

  private validate(type: MessageType, input: SendMessageInput): void {
    if (type === MessageType.TEXT) {
      const body = input.body?.trim();

      if (!body) {
        throw new BadRequestException('Le message est vide');
      }

      if (body.length > MAX_BODY_LENGTH) {
        throw new BadRequestException(
          `Message trop long, ${MAX_BODY_LENGTH} caractères maximum`,
        );
      }
      return;
    }

    if (!input.mediaKey) {
      throw new BadRequestException('Média manquant');
    }

    if (
      type === MessageType.AUDIO &&
      (input.mediaDuration ?? 0) > MAX_AUDIO_SECONDS
    ) {
      throw new BadRequestException(
        `Note vocale trop longue, ${MAX_AUDIO_SECONDS} secondes maximum`,
      );
    }
  }

  /** Aperçu affiché dans la liste des conversations. */
  private preview(type: MessageType, body?: string): string {
    if (type === MessageType.IMAGE) return '📷 Photo';
    if (type === MessageType.AUDIO) return '🎤 Message vocal';
    return (body ?? '').trim().slice(0, 120);
  }

  private toDto(message: {
    id: string;
    conversationId: string;
    senderId: string;
    clientKey: string;
    type: MessageType;
    status: MessageStatus;
    body: string | null;
    mediaKey: string | null;
    mediaMimeType: string | null;
    mediaDuration: number | null;
    replyToId: string | null;
    createdAt: Date;
    deletedAt: Date | null;
  }) {
    return {
      id: message.id,
      conversationId: message.conversationId,
      senderId: message.senderId,
      clientKey: message.clientKey,
      type: message.type,
      status: message.status,
      body: message.body,
      mediaUrl: message.mediaKey
        ? this.storage.publicUrlFor(message.mediaKey)
        : null,
      mediaMimeType: message.mediaMimeType,
      mediaDuration: message.mediaDuration,
      replyToId: message.replyToId,
      createdAt: message.createdAt,
      deletedAt: message.deletedAt,
    };
  }
}
