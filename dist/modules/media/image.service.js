"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var ImageService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageService = void 0;
const common_1 = require("@nestjs/common");
const sharp_1 = __importDefault(require("sharp"));
const VARIANTS = [
    { name: 'thumb', width: 200, quality: 70 },
    { name: 'card', width: 720, quality: 78 },
    { name: 'full', width: 1080, quality: 82 },
];
const MIN_DIMENSION = 320;
const MAX_PIXELS = 50_000_000;
let ImageService = ImageService_1 = class ImageService {
    logger = new common_1.Logger(ImageService_1.name);
    async process(original) {
        const metadata = await this.readMetadata(original);
        const variants = await Promise.all(VARIANTS.map(async (variant) => {
            const pipeline = (0, sharp_1.default)(original)
                .rotate()
                .resize({
                width: variant.width,
                withoutEnlargement: true,
                fit: 'inside',
            })
                .webp({ quality: variant.quality, effort: 4 });
            const { data, info } = await pipeline.toBuffer({
                resolveWithObject: true,
            });
            return {
                name: variant.name,
                buffer: data,
                width: info.width,
                height: info.height,
            };
        }));
        return {
            variants,
            phash: await this.perceptualHash(original),
            width: metadata.width,
            height: metadata.height,
        };
    }
    async readMetadata(buffer) {
        let metadata;
        try {
            metadata = await (0, sharp_1.default)(buffer).metadata();
        }
        catch {
            throw new common_1.BadRequestException("Le fichier n'est pas une image valide");
        }
        const { width, height, format } = metadata;
        if (!width || !height || !format) {
            throw new common_1.BadRequestException('Image illisible');
        }
        if (!['jpeg', 'png', 'webp', 'heif', 'avif'].includes(format)) {
            throw new common_1.BadRequestException(`Format non pris en charge : ${format}`);
        }
        if (width < MIN_DIMENSION || height < MIN_DIMENSION) {
            throw new common_1.BadRequestException(`Image trop petite, ${MIN_DIMENSION}px minimum`);
        }
        if (width * height > MAX_PIXELS) {
            throw new common_1.BadRequestException('Image trop grande');
        }
        return { width, height, format };
    }
    async perceptualHash(buffer) {
        const pixels = await (0, sharp_1.default)(buffer)
            .greyscale()
            .resize(9, 8, { fit: 'fill' })
            .raw()
            .toBuffer();
        let bits = '';
        for (let row = 0; row < 8; row += 1) {
            for (let col = 0; col < 8; col += 1) {
                const left = pixels[row * 9 + col] ?? 0;
                const right = pixels[row * 9 + col + 1] ?? 0;
                bits += left > right ? '1' : '0';
            }
        }
        const high = parseInt(bits.slice(0, 32), 2);
        const low = parseInt(bits.slice(32), 2);
        return (high.toString(16).padStart(8, '0') + low.toString(16).padStart(8, '0'));
    }
    hammingDistance(a, b) {
        if (a.length !== b.length)
            return 64;
        let distance = 0;
        for (let i = 0; i < a.length; i += 1) {
            const diff = parseInt(a[i], 16) ^ parseInt(b[i], 16);
            distance += diff.toString(2).replace(/0/g, '').length;
        }
        return distance;
    }
    static get variantNames() {
        return VARIANTS.map((v) => v.name);
    }
};
exports.ImageService = ImageService;
exports.ImageService = ImageService = ImageService_1 = __decorate([
    (0, common_1.Injectable)()
], ImageService);
//# sourceMappingURL=image.service.js.map