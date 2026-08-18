import { MobileMoneyOperator, PaymentStatus } from '../../../generated/prisma/enums';
export interface InitiatePaymentInput {
    reference: string;
    amount: number;
    currencyCode: string;
    description: string;
    payerPhone?: string;
    payerEmail?: string;
    operator?: MobileMoneyOperator | null;
}
export interface InitiatePaymentResult {
    providerRef: string;
    status: PaymentStatus;
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
    reference: string;
    status: PaymentStatus;
    providerRef?: string;
    failureCode?: string;
    failureMessage?: string;
    raw: unknown;
}
export interface PaymentProvider {
    readonly name: string;
    initiate(input: InitiatePaymentInput): Promise<InitiatePaymentResult>;
    fetchStatus(providerRef: string): Promise<PaymentStatusResult>;
    parseWebhook(rawBody: string, signature: string | undefined): WebhookEvent | null;
}
