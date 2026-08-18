"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var StorageService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorageService = void 0;
const client_s3_1 = require("@aws-sdk/client-s3");
const s3_request_presigner_1 = require("@aws-sdk/s3-request-presigner");
const common_1 = require("@nestjs/common");
const config_module_1 = require("../config/config.module");
let StorageService = StorageService_1 = class StorageService {
    logger = new common_1.Logger(StorageService_1.name);
    client;
    bucket;
    publicUrl;
    constructor(config) {
        this.bucket = config.get('S3_BUCKET');
        this.publicUrl = config.get('S3_PUBLIC_URL').replace(/\/$/, '');
        this.client = new client_s3_1.S3Client({
            endpoint: config.get('S3_ENDPOINT'),
            region: config.get('S3_REGION'),
            forcePathStyle: config.get('S3_FORCE_PATH_STYLE'),
            credentials: {
                accessKeyId: config.get('S3_ACCESS_KEY'),
                secretAccessKey: config.get('S3_SECRET_KEY'),
            },
        });
    }
    async createUploadUrl(key, contentType, contentLength, expiresIn = 900) {
        const command = new client_s3_1.PutObjectCommand({
            Bucket: this.bucket,
            Key: key,
            ContentType: contentType,
            ContentLength: contentLength,
        });
        const url = await (0, s3_request_presigner_1.getSignedUrl)(this.client, command, { expiresIn });
        return { url, key, expiresIn, maxBytes: contentLength };
    }
    createDownloadUrl(key, expiresIn = 3_600) {
        return (0, s3_request_presigner_1.getSignedUrl)(this.client, new client_s3_1.GetObjectCommand({ Bucket: this.bucket, Key: key }), { expiresIn });
    }
    publicUrlFor(key) {
        return `${this.publicUrl}/${key}`;
    }
    async putObject(key, body, contentType, cacheControl = 'public, max-age=31536000, immutable') {
        await this.client.send(new client_s3_1.PutObjectCommand({
            Bucket: this.bucket,
            Key: key,
            Body: body,
            ContentType: contentType,
            CacheControl: cacheControl,
        }));
    }
    async getObject(key) {
        const response = await this.client.send(new client_s3_1.GetObjectCommand({ Bucket: this.bucket, Key: key }));
        const bytes = await response.Body?.transformToByteArray();
        if (!bytes) {
            throw new Error(`Objet vide ou illisible : ${key}`);
        }
        return Buffer.from(bytes);
    }
    async head(key) {
        try {
            const response = await this.client.send(new client_s3_1.HeadObjectCommand({ Bucket: this.bucket, Key: key }));
            return {
                contentType: response.ContentType,
                contentLength: response.ContentLength ?? 0,
            };
        }
        catch {
            return null;
        }
    }
    async deleteObject(key) {
        await this.client.send(new client_s3_1.DeleteObjectCommand({ Bucket: this.bucket, Key: key }));
    }
    async deleteObjects(keys) {
        if (keys.length === 0)
            return;
        for (let i = 0; i < keys.length; i += 1_000) {
            await this.client.send(new client_s3_1.DeleteObjectsCommand({
                Bucket: this.bucket,
                Delete: { Objects: keys.slice(i, i + 1_000).map((Key) => ({ Key })) },
            }));
        }
        this.logger.log(`${keys.length} objet(s) supprimé(s)`);
    }
};
exports.StorageService = StorageService;
exports.StorageService = StorageService = StorageService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_module_1.TypedConfigService])
], StorageService);
//# sourceMappingURL=storage.service.js.map