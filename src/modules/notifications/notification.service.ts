import { InjectQueue } from '@nestjs/bullmq';
import { Injectable, Logger } from '@nestjs/common';
import { Queue } from 'bullmq';
import {
  AppLocale,
  DevicePlatform,
  NotificationChannel,
  NotificationType,
} from '../../generated/prisma/enums';
import { PrismaService } from '../../core/prisma/prisma.service';
import { QUEUES } from '../../core/queue/queue.module';
import { renderTemplate } from './templates';
import { PushService } from './push.service';

export interface NotifyInput {
  userId: string;
  type: NotificationType;
  /** Variables d'interpolation du libellé. */
  vars?: Record<string, string>;
  /** Charge utile de navigation transmise au client. */
  data?: Record<string, string>;
  /** Conversation concernée : sert à respecter une mise en silence. */
  conversationId?: string;
}

/**
 * Types que les préférences permettent de couper.
 *
 * Ceux qui n'y figurent pas — résultat de paiement, décision de modération,
 * vérification — partent toujours : ce sont des informations que la personne
 * doit recevoir, pas des sollicitations.
 */
const PREFERENCE_KEY: Partial<
  Record<
    NotificationType,
    'newMatch' | 'newMessage' | 'newLike' | 'events' | 'marketing'
  >
> = {
  NEW_MATCH: 'newMatch',
  NEW_MESSAGE: 'newMessage',
  NEW_LIKE: 'newLike',
  EVENT_REQUEST: 'events',
  EVENT_ACCEPTED: 'events',
  EVENT_REMINDER: 'events',
  MARKETING: 'marketing',
};

@Injectable()
export class NotificationService {
  private readonly logger = new Logger(NotificationService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly push: PushService,
    @InjectQueue(QUEUES.NOTIFICATION) private readonly queue: Queue,
  ) {}

  /**
   * Programme une notification.
   *
   * Mise en file plutôt qu'envoyée sur place : l'appel part d'un swipe ou d'un
   * envoi de message, et faire attendre l'utilisateur pendant un aller-retour
   * vers Firebase ajouterait plusieurs centaines de millisecondes à une action
   * qui doit paraître instantanée.
   */
  async notify(input: NotifyInput): Promise<void> {
    await this.queue.add('send-notification', input, {
      // Une notification arrivée en retard ne sert à rien : mieux vaut
      // abandonner que réveiller quelqu'un une heure plus tard.
      attempts: 2,
      backoff: { type: 'fixed', delay: 5_000 },
    });
  }

  /** Envoi groupé, pour les rappels d'événement. */
  async notifyMany(inputs: NotifyInput[]): Promise<void> {
    if (inputs.length === 0) return;

    await this.queue.addBulk(
      inputs.map((input) => ({
        name: 'send-notification',
        data: input,
        opts: {
          attempts: 2,
          backoff: { type: 'fixed' as const, delay: 5_000 },
        },
      })),
    );
  }

  /**
   * Traite réellement une notification. Appelé par le worker.
   *
   * Écrit toujours la ligne en base, même quand le push est coupé : le centre
   * de notifications de l'application doit rester complet, sans quoi couper
   * les push reviendrait à ne plus rien voir du tout.
   */
  async dispatch(input: NotifyInput): Promise<void> {
    const user = await this.prisma.user.findUnique({
      where: { id: input.userId },
      select: {
        locale: true,
        status: true,
        notificationPreference: true,
      },
    });

    if (!user) return;

    // Un compte banni, suspendu ou en cours de suppression ne doit plus être
    // sollicité.
    if (!['ACTIVE', 'SHADOW_BANNED', 'PENDING_PROFILE'].includes(user.status)) {
      return;
    }

    const template = renderTemplate(input.type, user.locale, input.vars);

    const notification = await this.prisma.notification.create({
      data: {
        userId: input.userId,
        type: input.type,
        channel: NotificationChannel.PUSH,
        titleKey: template.title,
        bodyKey: template.body,
        data: input.data ?? {},
      },
    });

    const allowed = await this.shouldPush(input, user);

    if (!allowed) {
      // Pas d'envoi, mais la notification reste consultable dans l'application.
      return;
    }

    const tokens = await this.prisma.pushToken.findMany({
      where: { userId: input.userId, isActive: true },
      select: { id: true, token: true, platform: true },
    });

    if (tokens.length === 0) return;

    let delivered = 0;

    for (const pushToken of tokens) {
      const result = await this.push.send({
        token: pushToken.token,
        title: template.title,
        body: template.body,
        data: { type: input.type, ...(input.data ?? {}) },
        platform: pushToken.platform,
      });

      if (result.delivered) {
        delivered += 1;
        await this.prisma.pushToken.update({
          where: { id: pushToken.id },
          data: { lastUsedAt: new Date() },
        });
      } else if (result.tokenInvalid) {
        // Désactivé plutôt que supprimé : garder la trace évite de réenregistrer
        // aussitôt le même jeton mort au prochain démarrage de l'application.
        await this.prisma.pushToken.update({
          where: { id: pushToken.id },
          data: { isActive: false },
        });
      }
    }

    await this.prisma.notification.update({
      where: { id: notification.id },
      data: delivered > 0 ? { sentAt: new Date() } : { failedAt: new Date() },
    });
  }

  /**
   * Décide si le push doit partir.
   *
   * Trois filtres : la préférence de l'utilisateur, la mise en silence de la
   * conversation, et les heures calmes.
   */
  private async shouldPush(
    input: NotifyInput,
    user: {
      notificationPreference: {
        newMatch: boolean;
        newMessage: boolean;
        newLike: boolean;
        events: boolean;
        marketing: boolean;
        quietHoursStart: number | null;
        quietHoursEnd: number | null;
        timezone: string;
      } | null;
    },
  ): Promise<boolean> {
    const preference = user.notificationPreference;
    if (!preference) return true;

    const key = PREFERENCE_KEY[input.type];
    if (key && !preference[key]) return false;

    if (input.conversationId) {
      const membership = await this.prisma.conversationParticipant.findUnique({
        where: {
          conversationId_userId: {
            conversationId: input.conversationId,
            userId: input.userId,
          },
        },
        select: { mutedUntil: true },
      });

      if (membership?.mutedUntil && membership.mutedUntil > new Date()) {
        return false;
      }
    }

    return !this.isQuietHour(preference);
  }

  /**
   * Vérifie les heures calmes dans le fuseau de l'utilisateur.
   *
   * La plage peut enjamber minuit — 22 h à 7 h est le réglage courant — et un
   * simple `start <= now <= end` ne le gère pas.
   */
  private isQuietHour(preference: {
    quietHoursStart: number | null;
    quietHoursEnd: number | null;
    timezone: string;
  }): boolean {
    const { quietHoursStart: start, quietHoursEnd: end, timezone } = preference;

    if (start === null || end === null) return false;

    const formatter = new Intl.DateTimeFormat('fr-FR', {
      timeZone: timezone || 'Africa/Douala',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });

    const [hours, minutes] = formatter
      .format(new Date())
      .split(':')
      .map((part) => Number(part));

    const nowMinutes = (hours ?? 0) * 60 + (minutes ?? 0);

    return start <= end
      ? nowMinutes >= start && nowMinutes < end
      : nowMinutes >= start || nowMinutes < end;
  }

  // --- Gestion des jetons ---------------------------------------------------

  /**
   * Enregistre un jeton push.
   *
   * Le jeton est unique en base : s'il change de propriétaire — téléphone
   * revendu, compte partagé — il est réaffecté plutôt que dupliqué, sans quoi
   * l'ancien propriétaire continuerait de recevoir les notifications du
   * nouveau.
   */
  async registerToken(
    userId: string,
    token: string,
    platform: DevicePlatform,
    deviceId?: string,
  ): Promise<void> {
    await this.prisma.pushToken.upsert({
      where: { token },
      create: { userId, token, platform, deviceId },
      update: { userId, platform, deviceId, isActive: true },
    });
  }

  async removeToken(userId: string, token: string): Promise<void> {
    await this.prisma.pushToken.deleteMany({ where: { userId, token } });
  }

  // --- Centre de notifications ---------------------------------------------

  list(userId: string, limit = 50) {
    return this.prisma.notification.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      take: limit,
      select: {
        id: true,
        type: true,
        titleKey: true,
        bodyKey: true,
        data: true,
        readAt: true,
        createdAt: true,
      },
    });
  }

  async unreadCount(userId: string): Promise<number> {
    return this.prisma.notification.count({
      where: { userId, readAt: null },
    });
  }

  async markAllRead(userId: string): Promise<{ updated: number }> {
    const result = await this.prisma.notification.updateMany({
      where: { userId, readAt: null },
      data: { readAt: new Date() },
    });

    return { updated: result.count };
  }

  updatePreferences(
    userId: string,
    preferences: {
      newMatch?: boolean;
      newMessage?: boolean;
      newLike?: boolean;
      events?: boolean;
      marketing?: boolean;
      quietHoursStart?: number | null;
      quietHoursEnd?: number | null;
      timezone?: string;
    },
  ) {
    return this.prisma.notificationPreference.upsert({
      where: { userId },
      create: { userId, ...preferences },
      update: preferences,
    });
  }

  getPreferences(userId: string) {
    return this.prisma.notificationPreference.findUnique({ where: { userId } });
  }

  /** Locale de l'utilisateur, utile aux appelants qui composent un libellé. */
  async localeOf(userId: string): Promise<AppLocale> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { locale: true },
    });

    return user?.locale ?? AppLocale.FR;
  }
}
