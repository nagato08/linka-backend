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
var MediaProcessor_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaProcessor = void 0;
const bullmq_1 = require("@nestjs/bullmq");
const common_1 = require("@nestjs/common");
const node_crypto_1 = require("node:crypto");
const enums_1 = require("../../generated/prisma/enums");
const prisma_service_1 = require("../../core/prisma/prisma.service");
const storage_service_1 = require("../../core/storage/storage.service");
const queue_module_1 = require("../../core/queue/queue.module");
const notification_service_1 = require("../notifications/notification.service");
const image_service_1 = require("./image.service");
const media_service_1 = require("./media.service");
const moderation_service_1 = require("./moderation.service");
const DUPLICATE_THRESHOLD = 10;
let MediaProcessor = MediaProcessor_1 = class MediaProcessor extends bullmq_1.WorkerHost {
    prisma;
    storage;
    images;
    media;
    moderation;
    notifications;
    logger = new common_1.Logger(MediaProcessor_1.name);
    constructor(prisma, storage, images, media, moderation, notifications) {
        super();
        this.prisma = prisma;
        this.storage = storage;
        this.images = images;
        this.media = media;
        this.moderation = moderation;
        this.notifications = notifications;
    }
    async process(job) {
        if (job.name === 'process-event-cover') {
            await this.processEventCover(job.data);
            return;
        }
        await this.processPhoto(job.data);
    }
    async processPhoto(data) {
        const { photoId, userId } = data;
        const photo = await this.prisma.photo.findUnique({
            where: { id: photoId },
        });
        if (!photo || photo.deletedAt) {
            this.logger.warn(`Photo ${photoId} absente ou supprimée, traitement ignoré`);
            return;
        }
        const original = await this.storage.getObject(photo.storageKey);
        let processed;
        try {
            processed = await this.images.process(original);
        }
        catch (error) {
            await this.reject(photoId, enums_1.PhotoRejectionReason.LOW_QUALITY);
            await this.storage.deleteObject(photo.storageKey);
            this.logger.warn(`Photo ${photoId} rejetée : ${error.message}`);
            return;
        }
        const duplicate = await this.findDuplicate(processed.phash, userId);
        if (duplicate) {
            await this.reject(photoId, enums_1.PhotoRejectionReason.DUPLICATE, {
                duplicateOf: duplicate.profileId,
            });
            await this.storage.deleteObject(photo.storageKey);
            this.logger.warn(`Photo ${photoId} rejetée : déjà présente sur le compte ${duplicate.profileId}`);
            return;
        }
        await Promise.all(processed.variants.map((variant) => this.storage.putObject(this.media.variantKey(userId, photoId, variant.name), variant.buffer, 'image/webp')));
        const outcome = await this.moderation.moderateImage(original);
        await this.prisma.photo.update({
            where: { id: photoId },
            data: {
                phash: processed.phash,
                width: processed.width,
                height: processed.height,
                moderationScores: outcome.scores,
                moderatedAt: new Date(),
                status: outcome.decision === 'APPROVE'
                    ? enums_1.PhotoStatus.APPROVED
                    : outcome.decision === 'REJECT'
                        ? enums_1.PhotoStatus.REJECTED
                        : enums_1.PhotoStatus.PENDING,
                rejectionReason: outcome.decision === 'REJECT' ? outcome.reason : undefined,
            },
        });
        if (outcome.decision === 'REVIEW') {
            await this.prisma.moderationTask.create({
                data: {
                    type: enums_1.ModerationTaskType.PHOTO_REVIEW,
                    photoId,
                    subjectUserId: userId,
                    priority: 10,
                },
            });
        }
        if (outcome.decision !== 'REVIEW') {
            await this.storage.deleteObject(photo.storageKey);
        }
        this.logger.log(`Photo ${photoId} traitée : ${outcome.decision}`);
    }
    async processEventCover(data) {
        const { eventId, uploadKey } = data;
        const event = await this.prisma.event.findUnique({
            where: { id: eventId },
            select: { id: true, organizerId: true, coverKey: true, status: true },
        });
        if (!event || event.status === enums_1.EventStatus.CANCELLED) {
            await this.storage.deleteObject(uploadKey);
            this.logger.warn(`Événement ${eventId} absent ou annulé, affiche ignorée`);
            return;
        }
        const original = await this.storage.getObject(uploadKey);
        let processed;
        try {
            processed = await this.images.process(original);
        }
        catch (error) {
            await this.storage.deleteObject(uploadKey);
            await this.warnOrganizer(event.organizerId, eventId, 'Votre affiche n’a pas pu être traitée. Essayez une autre image.');
            this.logger.warn(`Affiche de ${eventId} refusée : ${error.message}`);
            return;
        }
        const outcome = await this.moderation.moderateImage(original);
        await this.storage.deleteObject(uploadKey);
        if (outcome.decision !== 'APPROVE') {
            await this.warnOrganizer(event.organizerId, eventId, 'Votre affiche a été refusée. Choisissez une image sans contenu sensible.');
            this.logger.log(`Affiche de ${eventId} refusée : ${outcome.decision}`);
            return;
        }
        const variant = processed.variants.find((v) => v.name === 'card') ??
            processed.variants[0];
        const coverKey = `events/${eventId}/cover-${(0, node_crypto_1.randomUUID)()}.webp`;
        await this.storage.putObject(coverKey, variant.buffer, 'image/webp');
        await this.prisma.event.update({
            where: { id: eventId },
            data: { coverKey },
        });
        if (event.coverKey) {
            await this.storage.deleteObject(event.coverKey);
        }
        this.logger.log(`Affiche de l'événement ${eventId} publiée`);
    }
    async warnOrganizer(userId, eventId, message) {
        await this.notifications.notify({
            userId,
            type: enums_1.NotificationType.MODERATION,
            vars: { message },
            data: { screen: 'event', eventId },
        });
    }
    async findDuplicate(phash, userId) {
        const candidates = await this.prisma.photo.findMany({
            where: { phash: { not: null }, profileId: { not: userId } },
            select: { id: true, profileId: true, phash: true },
            take: 5_000,
            orderBy: { createdAt: 'desc' },
        });
        return candidates.find((candidate) => this.images.hammingDistance(phash, candidate.phash) <=
            DUPLICATE_THRESHOLD);
    }
    async reject(photoId, reason, details) {
        await this.prisma.photo.update({
            where: { id: photoId },
            data: {
                status: enums_1.PhotoStatus.REJECTED,
                rejectionReason: reason,
                moderatedAt: new Date(),
                moderationScores: details,
            },
        });
    }
};
exports.MediaProcessor = MediaProcessor;
exports.MediaProcessor = MediaProcessor = MediaProcessor_1 = __decorate([
    (0, bullmq_1.Processor)(queue_module_1.QUEUES.MEDIA),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        storage_service_1.StorageService,
        image_service_1.ImageService,
        media_service_1.MediaService,
        moderation_service_1.ModerationService,
        notification_service_1.NotificationService])
], MediaProcessor);
//# sourceMappingURL=media.processor.js.map