export interface ImageVariant {
    name: string;
    width: number;
    quality: number;
}
export interface ProcessedImage {
    variants: {
        name: string;
        buffer: Buffer;
        width: number;
        height: number;
    }[];
    phash: string;
    width: number;
    height: number;
}
export declare class ImageService {
    private readonly logger;
    process(original: Buffer): Promise<ProcessedImage>;
    private readMetadata;
    perceptualHash(buffer: Buffer): Promise<string>;
    hammingDistance(a: string, b: string): number;
    static get variantNames(): string[];
}
