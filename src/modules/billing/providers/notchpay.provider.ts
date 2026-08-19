import { Injectable, Logger } from '@nestjs/common';
import { createHmac, timingSafeEqual } from 'node:crypto';
import { PaymentStatus } from '../../../generated/prisma/enums';
import { TypedConfigService } from '../../../core/config/config.module';
import type {
  InitiatePaymentInput,
  InitiatePaymentResult,
  PaymentProvider,
  PaymentStatusResult,
  WebhookEvent,
} from './payment-provider';

const API_BASE = 'https://api.notchpay.co';

/**
 * Correspondance des états NotchPay.
 *
 * `pending` mérite une attention particulière : en mobile money, il signifie
 * que l'invite a été envoyée sur le téléphone et que l'utilisateur n'a pas
 * encore saisi son code PIN. Cet état peut durer plusieurs minutes et se
 * terminer sans qu'aucun webhook n'arrive — d'où le job de réconciliation.
 */
const STATUS_MAP: Record<string, PaymentStatus> = {
  pending: PaymentStatus.PENDING,
  processing: PaymentStatus.PROCESSING,
  incomplete: PaymentStatus.PENDING,
  complete: PaymentStatus.SUCCEEDED,
  successful: PaymentStatus.SUCCEEDED,
  failed: PaymentStatus.FAILED,
  canceled: PaymentStatus.CANCELLED,
  cancelled: PaymentStatus.CANCELLED,
  expired: PaymentStatus.EXPIRED,
  refunded: PaymentStatus.REFUNDED,
};

interface NotchPayTransaction {
  status?: string;
  reference?: string;
  trxref?: string;
  amount?: number;
  message?: string;
  code?: string;
}

interface NotchPayResponse {
  status?: string;
  message?: string;
  transaction?: NotchPayTransaction;
  authorization_url?: string;
  code?: string;
}

/**
 * NotchPay — MTN MoMo et Orange Money au Cameroun.
 *
 * Retenu pour son implantation locale et son ouverture de compte marchand
 * accessible. Attention : elle exige un RCCM, donc une société enregistrée.
 * Tant que ce n'est pas fait, la monétisation reste inaccessible et le
 * déploiement doit le déclarer via PAYMENTS_ENABLED=false — ce qui est
 * préférable à des paiements qui échouent silencieusement.
 *
 * Commission de l'ordre de 2,5 à 3,5 % par transaction : c'est ce qui rend les
 * gros packs de pièces intéressants pour les deux parties.
 */
@Injectable()
export class NotchPayProvider implements PaymentProvider {
  readonly name = 'notchpay';

  private readonly logger = new Logger(NotchPayProvider.name);
  private readonly publicKey: string;
  private readonly privateKey: string;
  private readonly webhookSecret: string;
  private readonly callbackUrl: string;

  constructor(private readonly config: TypedConfigService) {
    this.publicKey = config.get('NOTCHPAY_PUBLIC_KEY');
    this.privateKey = config.get('NOTCHPAY_PRIVATE_KEY');
    this.webhookSecret = config.get('NOTCHPAY_WEBHOOK_SECRET');
    this.callbackUrl = `${config.get('APP_PUBLIC_URL')}/api/v1/billing/webhooks/notchpay`;

    // L'échec au démarrage ne protège pas contre l'absence de clés — chaque
    // appel la rattrape déjà dans `request()`. Il protège contre le fait de
    // croire que la monétisation fonctionne alors qu'elle est muette. Couper
    // PAYMENTS_ENABLED est donc la seule façon de lever le garde-fou : une
    // décision consciente, jamais un oubli.
    if (
      !this.isConfigured &&
      config.isProduction &&
      config.get('PAYMENTS_ENABLED')
    ) {
      throw new Error(
        'NotchPay non configuré. Les clés sont requises en production : sans elles, ' +
          'aucun paiement ne peut aboutir. Passer PAYMENTS_ENABLED à false pour ' +
          'déployer sciemment sans monétisation.',
      );
    }

    if (!this.isConfigured) {
      this.logger.warn(
        'NotchPay non configuré : les paiements sont indisponibles',
      );
    }
  }

  get isConfigured(): boolean {
    return Boolean(this.publicKey && this.privateKey && this.webhookSecret);
  }

  async initiate(input: InitiatePaymentInput): Promise<InitiatePaymentResult> {
    const response = await this.request<NotchPayResponse>('/payments', {
      method: 'POST',
      body: {
        amount: input.amount,
        currency: input.currencyCode,
        description: input.description,
        reference: input.reference,
        callback: this.callbackUrl,
        customer: {
          email: input.payerEmail,
          phone: input.payerPhone,
        },
      },
    });

    const transaction = response.transaction;
    const providerRef = transaction?.reference ?? transaction?.trxref;

    if (!providerRef) {
      throw new Error(
        `NotchPay n'a pas renvoyé de référence : ${response.message ?? 'réponse inattendue'}`,
      );
    }

    return {
      providerRef,
      status: this.mapStatus(transaction?.status),
      authorizationUrl: response.authorization_url,
    };
  }

  async fetchStatus(providerRef: string): Promise<PaymentStatusResult> {
    const response = await this.request<NotchPayResponse>(
      `/payments/${encodeURIComponent(providerRef)}`,
      { method: 'GET' },
    );

    const transaction = response.transaction;

    return {
      status: this.mapStatus(transaction?.status),
      providerRef,
      failureCode: transaction?.code,
      failureMessage: transaction?.message,
      raw: response,
    };
  }

  /**
   * Vérifie la signature du webhook.
   *
   * La comparaison est à temps constant : un `===` sur une signature fuit sa
   * position de divergence et permet, à force d'essais, de la reconstituer.
   * Sans cette vérification, n'importe qui pourrait poster un « paiement
   * réussi » et se créditer gratuitement.
   */
  parseWebhook(
    rawBody: string,
    signature: string | undefined,
  ): WebhookEvent | null {
    if (!signature || !this.webhookSecret) {
      this.logger.warn('Webhook NotchPay sans signature : rejeté');
      return null;
    }

    const expected = createHmac('sha256', this.webhookSecret)
      .update(rawBody)
      .digest('hex');

    const received = Buffer.from(signature, 'utf8');
    const computed = Buffer.from(expected, 'utf8');

    if (
      received.length !== computed.length ||
      !timingSafeEqual(received, computed)
    ) {
      this.logger.warn('Signature de webhook NotchPay invalide : rejeté');
      return null;
    }

    let payload: NotchPayResponse;

    try {
      payload = JSON.parse(rawBody) as NotchPayResponse;
    } catch {
      this.logger.warn('Corps de webhook NotchPay illisible');
      return null;
    }

    const transaction = payload.transaction;
    // `merchant_reference` porte notre référence interne ; `reference` est
    // celle de NotchPay. Les confondre relierait le paiement à la mauvaise
    // intention.
    const reference =
      (payload as { merchant_reference?: string }).merchant_reference ??
      transaction?.trxref;

    if (!reference) {
      this.logger.warn('Webhook NotchPay sans référence exploitable');
      return null;
    }

    return {
      reference,
      status: this.mapStatus(transaction?.status ?? payload.status),
      providerRef: transaction?.reference,
      failureCode: transaction?.code,
      failureMessage: transaction?.message,
      raw: payload,
    };
  }

  private mapStatus(status?: string): PaymentStatus {
    if (!status) return PaymentStatus.PENDING;
    return STATUS_MAP[status.toLowerCase()] ?? PaymentStatus.PENDING;
  }

  private async request<T>(
    path: string,
    options: { method: string; body?: unknown },
  ): Promise<T> {
    if (!this.isConfigured) {
      throw new Error('NotchPay non configuré');
    }

    const response = await fetch(`${API_BASE}${path}`, {
      method: options.method,
      headers: {
        Authorization: this.publicKey,
        'X-Grant': this.privateKey,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: options.body ? JSON.stringify(options.body) : undefined,
      // Sans délai maximal, une requête bloquée immobilise un worker Node
      // jusqu'à expiration du socket.
      signal: AbortSignal.timeout(20_000),
    });

    const text = await response.text();

    if (!response.ok) {
      throw new Error(`NotchPay ${response.status} : ${text.slice(0, 200)}`);
    }

    return JSON.parse(text) as T;
  }
}
