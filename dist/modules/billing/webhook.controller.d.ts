import type { Request } from 'express';
import { NotchPayProvider } from './providers/notchpay.provider';
import { PurchaseService } from './purchase.service';
interface RawBodyRequest extends Request {
    rawBody?: Buffer;
}
export declare class WebhookController {
    private readonly notchpay;
    private readonly purchases;
    private readonly logger;
    constructor(notchpay: NotchPayProvider, purchases: PurchaseService);
    notchpayWebhook(request: RawBodyRequest, signature?: string): Promise<{
        received: boolean;
    }>;
}
export {};
