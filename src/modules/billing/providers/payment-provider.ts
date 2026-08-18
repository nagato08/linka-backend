import {
  MobileMoneyOperator,
  PaymentStatus,
} from '../../../generated/prisma/enums';

export interface InitiatePaymentInput {
  /** Référence interne, reprise dans le webhook pour retrouver l'intention. */
  reference: string;
  /** Montant en unité mineure. Le XAF n'a pas de sous-unité. */
  amount: number;
  currencyCode: string;
  description: string;
  payerPhone?: string;
  payerEmail?: string;
  operator?: MobileMoneyOperator | null;
}

export interface InitiatePaymentResult {
  /** Identifiant chez le prestataire, à conserver pour la réconciliation. */
  providerRef: string;
  status: PaymentStatus;
  /**
   * Page de paiement, quand le prestataire en impose une.
   *
   * En mobile money direct, elle est souvent absente : l'utilisateur reçoit
   * une invite sur son téléphone et saisit son code PIN hors de
   * l'application.
   */
  authorizationUrl?: string;
}

export interface PaymentStatusResult {
  status: PaymentStatus;
  providerRef: string;
  failureCode?: string;
  failureMessage?: string;
  raw: unknown;
}

export interface WebhookEvent {
  /** Notre référence interne. */
  reference: string;
  status: PaymentStatus;
  providerRef?: string;
  failureCode?: string;
  failureMessage?: string;
  raw: unknown;
}

/**
 * Contrat commun aux moyens de paiement.
 *
 * Trois implémentations sont prévues : NotchPay pour le mobile money
 * camerounais, les achats intégrés des stores, et Stripe pour l'Europe. Aucun
 * code métier ne doit connaître le prestataire — c'est ce qui permettra
 * d'ouvrir un nouveau marché sans toucher au registre de pièces.
 */
export interface PaymentProvider {
  readonly name: string;

  initiate(input: InitiatePaymentInput): Promise<InitiatePaymentResult>;

  /**
   * Interroge le prestataire sur l'état réel d'un paiement.
   *
   * Indispensable, et pas seulement en secours : en mobile money, un paiement
   * abouti dont le webhook s'est perdu reste invisible sans cet appel.
   */
  fetchStatus(providerRef: string): Promise<PaymentStatusResult>;

  /**
   * Vérifie la signature d'un webhook et en extrait l'événement.
   *
   * Renvoie null si la signature est invalide. Un webhook non signé est une
   * invitation ouverte à se créditer gratuitement.
   */
  parseWebhook(
    rawBody: string,
    signature: string | undefined,
  ): WebhookEvent | null;
}
