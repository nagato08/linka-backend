import { TypedConfigService } from '../config/config.module';
export interface PresignedUpload {
    url: string;
    key: string;
    expiresIn: number;
    maxBytes: number;
}
export interface ObjectMetadata {
    contentType?: string;
    contentLength: number;
}
export declare class StorageService {
    private readonly logger;
    private readonly client;
    private readonly bucket;
    private readonly publicUrl;
    constructor(config: TypedConfigService);
    createUploadUrl(key: string, contentType: string, contentLength: number, expiresIn?: number): Promise<PresignedUpload>;
    createDownloadUrl(key: string, expiresIn?: number): Promise<string>;
    publicUrlFor(key: string): string;
    putObject(key: string, body: Buffer, contentType: string, cacheControl?: string): Promise<void>;
    getObject(key: string): Promise<Buffer>;
    head(key: string): Promise<ObjectMetadata | null>;
    deleteObject(key: string): Promise<void>;
    deleteObjects(keys: string[]): Promise<void>;
}
