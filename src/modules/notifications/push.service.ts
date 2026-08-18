import { Injectable, Logger } from '@nestjs/common';
import { GoogleAuth } from 'google-auth-library';
import { DevicePlatform } from '../../generated/prisma/enums';
import { TypedConfigService } from '../../core/config/config.module';

export interface PushMessage {
  token: string;
  title: string;
  body: string;
  /** Charge utile de navigation : écran cible et identifiants. */
  data?: Record<string, string>;
  platform?: DevicePlatform;
}

export interface PushResult {
  delivered: boolean;
  /** Vrai quand le jeton est définitivement invalide et doit être supprimé. */
  tokenInvalid: boolean;
  error?: string;
}

/**
 * Envoi push via Firebase Cloud Messaging, API HTTP v1.
 *
 * L'API historique (`legacy/send` avec une clé serveur) est fermée depuis
 * 2024 : seule la v1, authentifiée par compte de service, fonctionne encore.
 *
 * Sur le marché visé, le push n'est pas un confort. La messagerie fonctionne
 * en REST comme en WebSocket, mais personne ne garde une application ouverte
 * en attendant un message : sans notification, un match reçu le matin est
 * découvert le soir, et la conversation est morte entre-temps.
 */
@Injectable()
export class PushService {
  private readonly logger = new Logger(PushService.name);
  private readonly auth: GoogleAuth | null = null;
  private readonly projectId: string;

  constructor(private readonly config: TypedConfigService) {
    this.projectId = config.get('FIREBASE_PROJECT_ID');
    const serviceAccount = config.get('FIREBASE_SERVICE_ACCOUNT_B64');

    if (serviceAccount && this.projectId) {
      this.auth = new GoogleAuth({
        credentials: JSON.parse(
          Buffer.from(serviceAccount, 'base64').toString('utf8'),
        ) as Record<string, unknown>,
        scopes: ['https://www.googleapis.com/auth/firebase.messaging'],
      });
    } else {
      this.logger.warn(
        'Firebase non configuré : aucune notification ne partira',
      );
    }
  }

  get isConfigured(): boolean {
    return this.auth !== null;
  }

  async send(message: PushMessage): Promise<PushResult> {
    if (!this.auth) {
      this.logger.debug(`Push simulé → ${message.title}`);
      return { delivered: false, tokenInvalid: false };
    }

    try {
      const client = await this.auth.getClient();

      await client.request({
        url: `https://fcm.googleapis.com/v1/projects/${this.projectId}/messages:send`,
        method: 'POST',
        data: {
          message: {
            token: message.token,
            notification: { title: message.title, body: message.body },
            // Les données voyagent séparément du visuel : le client s'en sert
            // pour ouvrir le bon écran, y compris quand l'application était
            // fermée.
            data: message.data ?? {},
            android: {
              // Priorité haute : sur une 3G instable, une notification en
              // priorité normale peut être retenue plusieurs minutes par le
              // système, ce qui la rend inutile pour un message.
              priority: 'high',
              notification: {
                sound: 'default',
                channel_id: 'linka_default',
              },
            },
            apns: {
              headers: { 'apns-priority': '10' },
              payload: { aps: { sound: 'default', badge: 1 } },
            },
          },
        },
        timeout: 10_000,
      });

      return { delivered: true, tokenInvalid: false };
    } catch (error) {
      const details = this.describe(error);

      // Un jeton périmé n'est pas une panne : l'application a été
      // désinstallée ou réinstallée. Le conserver ferait échouer tous les
      // envois suivants sans raison.
      if (details.tokenInvalid) {
        this.logger.debug(
          `Jeton push invalide, à retirer : ${details.message}`,
        );
      } else {
        this.logger.warn(`Envoi push impossible : ${details.message}`);
      }

      return {
        delivered: false,
        tokenInvalid: details.tokenInvalid,
        error: details.message,
      };
    }
  }

  /**
   * Distingue un jeton mort d'une panne passagère.
   *
   * FCM répond 404 `UNREGISTERED` quand l'application a été désinstallée, et
   * 400 `INVALID_ARGUMENT` quand le jeton est malformé. Tout le reste — 500,
   * 503, réseau — est temporaire et mérite une nouvelle tentative.
   */
  private describe(error: unknown): { message: string; tokenInvalid: boolean } {
    const err = error as {
      response?: { status?: number; data?: { error?: { status?: string } } };
      message?: string;
    };

    const status = err.response?.status;
    const fcmStatus = err.response?.data?.error?.status;

    return {
      message: fcmStatus ?? err.message ?? 'erreur inconnue',
      tokenInvalid:
        status === 404 ||
        fcmStatus === 'UNREGISTERED' ||
        fcmStatus === 'INVALID_ARGUMENT',
    };
  }
}
