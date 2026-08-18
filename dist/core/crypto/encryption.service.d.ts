import { TypedConfigService } from '../config/config.module';
export declare class EncryptionService {
    private readonly logger;
    private readonly key;
    constructor(config: TypedConfigService);
    encrypt(plaintext: string): string;
    decrypt(payload: string): string | null;
    encryptNullable(plaintext: string | null | undefined): string | null;
    decryptNullable(payload: string | null | undefined): string | null;
}
