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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var MediaService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaService = exports.MAX_PHOTOS = void 0;
const bullmq_1 = require("@nestjs/bullmq");
const common_1 = require("@nestjs/common");
const bullmq_2 = require("bullmq");
const node_crypto_1 = require("node:crypto");
const enums_1 = require("../../generated/prisma/enums");
const prisma_service_1 = require("../../core/prisma/prisma.service");
const storage_service_1 = require("../../core/storage/storage.service");
const queue_module_1 = require("../../core/queue/queue.module");
const image_service_1 = require("./image.service");
exports.MAX_PHOTOS = 6;
const MAX_UPLOAD_BYTES = 10 * 1024 * 1024;
const ACCEPTED_TYPES = new Set([
    'image/jpeg',
    'image/png',
    'image/webp',
    'image/heic',
    'image/heif',
]);
let MediaService = MediaService_1 = class MediaService {
    prisma;
    storage;
    mediaQueue;
    logger = new common_1.Logger(MediaService_1.name);
    constructor(prisma, storage, mediaQueue) {
        this.prisma = prisma;
        this.storage = storage;
        this.mediaQueue = mediaQueue;
    }
    async createUploadTicket(userId, contentType, contentLength) {
        if (!ACCEPTED_TYPES.has(contentType)) {
            throw new common_1.BadRequestException(`Type de fichier non accepté : ${contentType}`);
        }
        if (contentLength <= 0 || contentLength > MAX_UPLOAD_BYTES) {
            throw new common_1.BadRequestException(`Fichier trop volumineux, ${MAX_UPLOAD_BYTES / 1024 / 1024} Mo maximum`);
        }
        const profile = await this.prisma.profile.findUnique({
            where: { userId },
            select: { userId: true },
        });
        if (!profile) {
            throw new common_1.BadRequestException("Créez votre profil avant d'ajouter des photos");
        }
        const count = await this.prisma.photo.count({
            where: { profileId: userId, deletedAt: null },
        });
        if (count >= exports.MAX_PHOTOS) {
            throw new common_1.BadRequestException(`${exports.MAX_PHOTOS} photos au maximum`);
        }
        const photoId = (0, node_crypto_1.randomUUID)();
        const storageKey = this.originalKey(userId, photoId);
        await this.prisma.photo.create({
            data: {
                id: photoId,
                profileId: userId,
                storageKey,
                position: await this.nextPosition(userId),
                status: enums_1.PhotoStatus.PENDING,
            },
        });
        const upload = await this.storage.createUploadUrl(storageKey, contentType, contentLength);
        return {
            photoId,
            uploadUrl: upload.url,
            expiresIn: upload.expiresIn,
        };
    }
    async confirmUpload(userId, photoId) {
        const photo = await this.prisma.photo.findFirst({
            where: { id: photoId, profileId: userId, deletedAt: null },
        });
        if (!photo) {
            throw new common_1.NotFoundException('Photo introuvable');
        }
        if (photo.status !== enums_1.PhotoStatus.PENDING) {
            return { status: photo.status };
        }
        const meta = await this.storage.head(photo.storageKey);
        if (!meta || meta.contentLength === 0) {
            throw new common_1.BadRequestException("Le fichier n'a pas été reçu");
        }
        await this.prisma.photo.update({
            where: { id: photoId },
            data: { bytes: meta.contentLength },
        });
        await this.mediaQueue.add('process-photo', { photoId, userId });
        return { status: enums_1.PhotoStatus.PENDING };
    }
    async listForUser(userId) {
        const photos = await this.prisma.photo.findMany({
            where: { profileId: userId, deletedAt: null },
            orderBy: { position: 'asc' },
        });
        return photos.map((photo) => this.toDto(photo));
    }
    async remove(userId, photoId) {
        const photo = await this.prisma.photo.findFirst({
            where: { id: photoId, profileId: userId, deletedAt: null },
        });
        if (!photo) {
            throw new common_1.NotFoundException('Photo introuvable');
        }
        await this.storage.deleteObjects(this.allKeysFor(userId, photoId));
        await this.prisma.$transaction(async (tx) => {
            await tx.photo.update({
                where: { id: photoId },
                data: { deletedAt: new Date(), position: -1 },
            });
            const remaining = await tx.photo.findMany({
                where: { profileId: userId, deletedAt: null },
                orderBy: { position: 'asc' },
                select: { id: true },
            });
            await this.applyOrder(tx, remaining.map((p) => p.id));
        });
    }
    async reorder(userId, orderedIds) {
        const photos = await this.prisma.photo.findMany({
            where: { profileId: userId, deletedAt: null },
            select: { id: true },
        });
        const known = new Set(photos.map((p) => p.id));
        if (orderedIds.length !== photos.length ||
            !orderedIds.every((id) => known.has(id))) {
            throw new common_1.BadRequestException('La liste doit contenir exactement les photos du profil');
        }
        await this.prisma.$transaction((tx) => this.applyOrder(tx, orderedIds));
    }
    async applyOrder(tx, orderedIds) {
        for (const [index, id] of orderedIds.entries()) {
            await tx.photo.update({
                where: { id },
                data: { position: -(index + 10) },
            });
        }
        for (const [index, id] of orderedIds.entries()) {
            await tx.photo.update({ where: { id }, data: { position: index } });
        }
    }
    async nextPosition(userId) {
        const last = await this.prisma.photo.findFirst({
            where: { profileId: userId, deletedAt: null },
            orderBy: { position: 'desc' },
            select: { position: true },
        });
        return (last?.position ?? -1) + 1;
    }
    originalKey(userId, photoId) {
        return `photos/${userId}/${photoId}/original`;
    }
    variantKey(userId, photoId, variant) {
        return `photos/${userId}/${photoId}/${variant}.webp`;
    }
    allKeysFor(userId, photoId) {
        return [
            this.originalKey(userId, photoId),
            ...image_service_1.ImageService.variantNames.map((v) => this.variantKey(userId, photoId, v)),
        ];
    }
    toDto(photo) {
        const approved = photo.status === enums_1.PhotoStatus.APPROVED;
        return {
            id: photo.id,
            position: photo.position,
            status: photo.status,
            rejectionReason: photo.rejectionReason,
            width: photo.width,
            height: photo.height,
            urls: approved
                ? Object.fromEntries(image_service_1.ImageService.variantNames.map((v) => [
                    v,
                    this.storage.publicUrlFor(this.variantKey(photo.profileId, photo.id, v)),
                ]))
                : null,
        };
    }
};
exports.MediaService = MediaService;
exports.MediaService = MediaService = MediaService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, bullmq_1.InjectQueue)(queue_module_1.QUEUES.MEDIA)),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        storage_service_1.StorageService,
        bullmq_2.Queue])
], MediaService);
//# sourceMappingURL=media.service.js.map