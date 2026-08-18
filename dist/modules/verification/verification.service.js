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
var VerificationService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerificationService = exports.POSE_CHALLENGES = void 0;
const bullmq_1 = require("@nestjs/bullmq");
const common_1 = require("@nestjs/common");
const bullmq_2 = require("bullmq");
const node_crypto_1 = require("node:crypto");
const enums_1 = require("../../generated/prisma/enums");
const prisma_service_1 = require("../../core/prisma/prisma.service");
const storage_service_1 = require("../../core/storage/storage.service");
const queue_module_1 = require("../../core/queue/queue.module");
exports.POSE_CHALLENGES = [
    'TURN_HEAD_LEFT',
    'TURN_HEAD_RIGHT',
    'SMILE',
    'RAISE_RIGHT_HAND',
    'BLINK_TWICE',
    'LOOK_UP',
];
const CHALLENGE_TTL_MINUTES = 10;
const MAX_ATTEMPTS_PER_DAY = 5;
const MAX_CAPTURE_BYTES = 15 * 1024 * 1024;
const ACCEPTED_CAPTURE_TYPES = new Set([
    'video/mp4',
    'video/webm',
    'image/jpeg',
]);
let VerificationService = VerificationService_1 = class VerificationService {
    prisma;
    storage;
    queue;
    logger = new common_1.Logger(VerificationService_1.name);
    constructor(prisma, storage, queue) {
        this.prisma = prisma;
        this.storage = storage;
        this.queue = queue;
    }
    async start(userId) {
        const photos = await this.prisma.photo.count({
            where: {
                profileId: userId,
                status: enums_1.PhotoStatus.APPROVED,
                deletedAt: null,
            },
        });
        if (photos === 0) {
            throw new common_1.BadRequestException('Ajoutez au moins une photo approuvée avant de vous faire vérifier');
        }
        const alreadyVerified = await this.prisma.profile.findUnique({
            where: { userId },
            select: { isVerified: true },
        });
        if (alreadyVerified?.isVerified) {
            throw new common_1.BadRequestException('Votre profil est déjà vérifié');
        }
        await this.enforceAttemptLimit(userId);
        await this.prisma.verification.updateMany({
            where: {
                userId,
                status: {
                    in: [enums_1.VerificationStatus.PENDING, enums_1.VerificationStatus.PROCESSING],
                },
            },
            data: { status: enums_1.VerificationStatus.EXPIRED },
        });
        const pose = exports.POSE_CHALLENGES[(0, node_crypto_1.randomInt)(0, exports.POSE_CHALLENGES.length)];
        const expiresAt = new Date(Date.now() + CHALLENGE_TTL_MINUTES * 60_000);
        const verification = await this.prisma.verification.create({
            data: {
                userId,
                type: enums_1.VerificationType.LIVENESS_FACE_MATCH,
                status: enums_1.VerificationStatus.PENDING,
                poseChallenge: pose,
                expiresAt,
            },
        });
        return { verificationId: verification.id, pose, expiresAt };
    }
    async createUploadUrl(userId, verificationId, contentType, contentLength) {
        const verification = await this.load(userId, verificationId);
        if (verification.status !== enums_1.VerificationStatus.PENDING) {
            throw new common_1.BadRequestException('Cette session est terminée');
        }
        if (verification.expiresAt < new Date()) {
            throw new common_1.BadRequestException('Session expirée, recommencez');
        }
        if (!ACCEPTED_CAPTURE_TYPES.has(contentType)) {
            throw new common_1.BadRequestException(`Format non accepté : ${contentType}`);
        }
        if (contentLength <= 0 || contentLength > MAX_CAPTURE_BYTES) {
            throw new common_1.BadRequestException(`Capture trop volumineuse, ${MAX_CAPTURE_BYTES / 1024 / 1024} Mo maximum`);
        }
        const captureKey = `verifications/${userId}/${(0, node_crypto_1.randomUUID)()}`;
        const upload = await this.storage.createUploadUrl(captureKey, contentType, contentLength, 600);
        await this.prisma.verification.update({
            where: { id: verificationId },
            data: { captureKey },
        });
        return { uploadUrl: upload.url, expiresIn: upload.expiresIn };
    }
    async submit(userId, verificationId) {
        const verification = await this.load(userId, verificationId);
        if (verification.status !== enums_1.VerificationStatus.PENDING) {
            return { status: verification.status };
        }
        if (verification.expiresAt < new Date()) {
            await this.prisma.verification.update({
                where: { id: verificationId },
                data: { status: enums_1.VerificationStatus.EXPIRED },
            });
            throw new common_1.BadRequestException('Session expirée, recommencez');
        }
        if (!verification.captureKey) {
            throw new common_1.BadRequestException('Aucune capture reçue');
        }
        const meta = await this.storage.head(verification.captureKey);
        if (!meta || meta.contentLength === 0) {
            throw new common_1.BadRequestException("La capture n'a pas été reçue");
        }
        await this.prisma.verification.update({
            where: { id: verificationId },
            data: {
                status: enums_1.VerificationStatus.PROCESSING,
                submittedAt: new Date(),
                attempts: { increment: 1 },
            },
        });
        await this.queue.add('process-verification', { verificationId, userId });
        return { status: enums_1.VerificationStatus.PROCESSING };
    }
    async status(userId) {
        const verification = await this.prisma.verification.findFirst({
            where: { userId },
            orderBy: { createdAt: 'desc' },
            select: {
                id: true,
                status: true,
                failureReason: true,
                poseChallenge: true,
                createdAt: true,
                processedAt: true,
                expiresAt: true,
            },
        });
        const profile = await this.prisma.profile.findUnique({
            where: { userId },
            select: { isVerified: true },
        });
        return {
            isVerified: profile?.isVerified ?? false,
            lastAttempt: verification,
        };
    }
    async enforceAttemptLimit(userId) {
        const since = new Date(Date.now() - 86_400_000);
        const attempts = await this.prisma.verification.count({
            where: { userId, createdAt: { gte: since } },
        });
        if (attempts >= MAX_ATTEMPTS_PER_DAY) {
            throw new common_1.BadRequestException('Trop de tentatives aujourd’hui. Réessayez demain.');
        }
    }
    async load(userId, verificationId) {
        const verification = await this.prisma.verification.findFirst({
            where: { id: verificationId, userId },
        });
        if (!verification) {
            throw new common_1.NotFoundException('Session de vérification introuvable');
        }
        return verification;
    }
};
exports.VerificationService = VerificationService;
exports.VerificationService = VerificationService = VerificationService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, bullmq_1.InjectQueue)(queue_module_1.QUEUES.MODERATION)),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        storage_service_1.StorageService,
        bullmq_2.Queue])
], VerificationService);
//# sourceMappingURL=verification.service.js.map