import { TypedConfigService } from '../../../core/config/config.module';
import type { InitiatePaymentInput, InitiatePaymentResult, PaymentProvider, PaymentStatusResult, WebhookEvent } from './payment-provider';
export declare class NotchPayProvider implements PaymentProvider {
    private readonly config;
    readonly name = "notchpay";
    private readonly logger;
    private readonly publicKey;
    private readonly privateKey;
    private readonly webhookSecret;
    private readonly callbackUrl;
    constructor(config: TypedConfigService);
    get isConfigured(): boolean;
    initiate(input: InitiatePaymentInput): Promise<InitiatePaymentResult>;
    fetchStatus(providerRef: string): Promise<PaymentStatusResult>;
    parseWebhook(rawBody: string, signature: string | undefined): WebhookEvent | null;
    private mapStatus;
    private request;
}
