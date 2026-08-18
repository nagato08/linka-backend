import { ProductType } from '../../../generated/prisma/enums';
export declare class InitiatePaymentDto {
    sku: string;
    payerPhone: string;
    idempotencyKey: string;
}
export declare class PurchaseWithCreditsDto {
    sku: string;
}
export declare class ProductQueryDto {
    type?: ProductType;
}
export declare class ActivateBoostDto {
    sku: string;
}
