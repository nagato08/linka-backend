import { Logger, UsePipes, ValidationPipe } from '@nestjs/common';
import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { PrismaService } from '../../core/prisma/prisma.service';
import { RedisService } from '../../core/redis/redis.service';
import { TokenService } from '../auth/token.service';
import { ChatService } from './chat.service';
import { ConversationService } from './conversation.service';
import {
  WsMarkReadDto,
  WsSendMessageDto,
  WsSyncDto,
  WsTypingDto,
} from './dto/ws.dto';

interface AuthedSocket extends Socket {
  userId?: string;
  sessionId?: string;
}

/** Durée de vie d'un indicateur de saisie. */
const TYPING_TTL_SECONDS = 8;

/**
 * Passerelle temps réel.
 *
 * Le WebSocket accélère la remise ; il ne la garantit pas. Sur le réseau visé,
 * la connexion tombe plusieurs fois par heure — toutes les opérations restent
 * donc disponibles en REST, et le client peut fonctionner entièrement sans
 * socket, avec seulement un délai.
 *
 * C'est l'inverse du réflexe habituel, où le WebSocket devient le seul canal
 * et où une coupure fige l'application.
 */
@WebSocketGateway({
  namespace: '/ws/chat',
  cors: { origin: '*' },
  // La 3G camerounaise coupe souvent : on tolère une longue absence de
  // réponse avant de considérer la connexion perdue.
  pingInterval: 25_000,
  pingTimeout: 60_000,
})
// Mêmes règles de validation qu'en REST. Sans ce pipe, la passerelle accepte
// des charges utiles que le contrôleur refuse : le client fonctionne tant que
// le socket tient, puis échoue au premier repli en HTTP. Un seul contrat pour
// les deux transports.
@UsePipes(
  new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }),
)
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  private readonly logger = new Logger(ChatGateway.name);

  @WebSocketServer()
  server: Server;

  constructor(
    private readonly tokens: TokenService,
    private readonly prisma: PrismaService,
    private readonly redis: RedisService,
    private readonly chat: ChatService,
    private readonly conversations: ConversationService,
  ) {}

  /**
   * Authentifie la connexion.
   *
   * Le jeton passe par `auth.token` plutôt que par un en-tête : les
   * implémentations WebSocket des navigateurs et de Flutter ne permettent pas
   * de poser un en-tête `Authorization` sur la poignée de main.
   *
   * La session est revérifiée en base, comme sur HTTP : sans cela, une session
   * révoquée resterait connectée jusqu'à expiration du jeton d'accès.
   */
  async handleConnection(client: AuthedSocket): Promise<void> {
    try {
      const token =
        (client.handshake.auth?.token as string | undefined) ??
        (client.handshake.query?.token as string | undefined);

      if (!token) throw new Error('jeton absent');

      const payload = await this.tokens.verifyAccessToken(token);

      const session = await this.prisma.session.findUnique({
        where: { id: payload.sid },
        select: { revokedAt: true, expiresAt: true },
      });

      if (!session || session.revokedAt || session.expiresAt < new Date()) {
        throw new Error('session révoquée');
      }

      client.userId = payload.sub;
      client.sessionId = payload.sid;

      // Une salle par utilisateur : les messages sont diffusés aux
      // destinataires, quel que soit le nombre d'appareils connectés.
      await client.join(`user:${payload.sub}`);
      await this.setPresence(payload.sub, true);

      client.emit('connected', { userId: payload.sub });
    } catch (error) {
      this.logger.debug(`Connexion refusée : ${(error as Error).message}`);
      client.emit('unauthorized', { message: 'Authentification requise' });
      client.disconnect(true);
    }
  }

  async handleDisconnect(client: AuthedSocket): Promise<void> {
    if (!client.userId) return;

    // Un utilisateur peut avoir plusieurs appareils : il n'est hors ligne que
    // lorsque la dernière connexion se ferme.
    const sockets = await this.server
      .in(`user:${client.userId}`)
      .fetchSockets();

    if (sockets.length === 0) {
      await this.setPresence(client.userId, false);
    }
  }

  /**
   * Envoi d'un message.
   *
   * Le chemin est strictement le même qu'en REST : même service, même clé
   * d'idempotence. Un message envoyé par socket puis rejoué en REST après une
   * coupure ne crée qu'une seule ligne.
   */
  @SubscribeMessage('message:send')
  async onSend(
    @ConnectedSocket() client: AuthedSocket,
    @MessageBody() payload: WsSendMessageDto,
  ) {
    if (!client.userId) return { error: 'unauthorized' };

    try {
      const result = await this.chat.send({
        ...payload,
        senderId: client.userId,
      });

      if (!result.duplicate) {
        this.broadcast(result.recipients ?? [], 'message:new', result.message);
      }

      // Accusé de réception au client émetteur : il peut retirer le message de
      // sa file locale et cesser de le rejouer.
      return { ok: true, message: result.message, duplicate: result.duplicate };
    } catch (error) {
      return { ok: false, error: (error as Error).message };
    }
  }

  @SubscribeMessage('message:read')
  async onRead(
    @ConnectedSocket() client: AuthedSocket,
    @MessageBody() payload: WsMarkReadDto,
  ) {
    if (!client.userId) return { error: 'unauthorized' };

    const { readAt } = await this.chat.markRead(
      client.userId,
      payload.conversationId,
      payload.upToMessageId,
    );

    const access = await this.conversations.assertMember(
      client.userId,
      payload.conversationId,
    );

    this.broadcast(
      access.participantIds.filter((id) => id !== client.userId),
      'message:read',
      {
        conversationId: payload.conversationId,
        userId: client.userId,
        readAt,
      },
    );

    return { ok: true };
  }

  /**
   * Indicateur de saisie.
   *
   * Volontairement non persisté : cet état ne vaut que quelques secondes, et
   * l'écrire en base produirait un flux d'écritures sans aucune valeur
   * durable.
   */
  @SubscribeMessage('typing')
  async onTyping(
    @ConnectedSocket() client: AuthedSocket,
    @MessageBody() payload: WsTypingDto,
  ) {
    if (!client.userId) return { error: 'unauthorized' };

    const access = await this.conversations.assertMember(
      client.userId,
      payload.conversationId,
    );

    const key = `typing:${payload.conversationId}:${client.userId}`;

    if (payload.isTyping) {
      await this.redis.client.set(key, '1', 'EX', TYPING_TTL_SECONDS);
    } else {
      await this.redis.client.del(key);
    }

    this.broadcast(
      access.participantIds.filter((id) => id !== client.userId),
      'typing',
      {
        conversationId: payload.conversationId,
        userId: client.userId,
        isTyping: payload.isTyping,
      },
    );

    return { ok: true };
  }

  /** Reprise après coupure : rejoue ce qui a été manqué. */
  @SubscribeMessage('message:sync')
  async onSync(
    @ConnectedSocket() client: AuthedSocket,
    @MessageBody() payload: WsSyncDto,
  ) {
    if (!client.userId) return { error: 'unauthorized' };

    return this.chat.history(client.userId, payload.conversationId, {
      after: payload.afterMessageId,
    });
  }

  /**
   * Diffuse un événement aux destinataires.
   *
   * Public : le contrôleur REST l'utilise pour qu'un message envoyé en HTTP
   * arrive tout de même en temps réel chez le destinataire connecté.
   */
  broadcast(userIds: string[], event: string, payload: unknown): void {
    for (const userId of userIds) {
      this.server.to(`user:${userId}`).emit(event, payload);
    }
  }

  private async setPresence(userId: string, online: boolean): Promise<void> {
    const key = `presence:${userId}`;

    if (online) {
      await this.redis.client.set(key, '1', 'EX', 120);
    } else {
      await this.redis.client.del(key);
      await this.prisma.user.update({
        where: { id: userId },
        data: { lastActiveAt: new Date() },
      });
    }
  }
}
