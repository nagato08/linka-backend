import { MobileMoneyOperator } from '../../generated/prisma/enums';
export interface NormalizedPhone {
    e164: string;
    country: string;
    operator: MobileMoneyOperator | null;
}
export declare class PhoneService {
    private static readonly CM_RANGES;
    private static readonly ALLOWED_COUNTRIES;
    normalize(raw: string): NormalizedPhone;
    mask(e164: string): string;
}
