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
var VerificationProcessor_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerificationProcessor = void 0;
const bullmq_1 = require("@nestjs/bullmq");
const common_1 = require("@nestjs/common");
const enums_1 = require("../../generated/prisma/enums");
const prisma_service_1 = require("../../core/prisma/prisma.service");
const storage_service_1 = require("../../core/storage/storage.service");
const queue_module_1 = require("../../core/queue/queue.module");
const face_matcher_service_1 = require("./face-matcher.service");
const LIVENESS_APPROVE = 0.9;
const LIVENESS_REJECT = 0.5;
const MATCH_APPROVE = 0.6;
const MATCH_REJECT = 0.3;
const DUPLICATE_THRESHOLD = 0.75;
let VerificationProcessor = VerificationProcessor_1 = class VerificationProcessor extends bullmq_1.WorkerHost {
    prisma;
    storage;
    matcher;
    logger = new common_1.Logger(VerificationProcessor_1.name);
    constructor(prisma, storage, matcher) {
        super();
        this.prisma = prisma;
        this.storage = storage;
        this.matcher = matcher;
    }
    async process(job) {
        const { verificationId, userId } = job.data;
        const verification = await this.prisma.verification.findUnique({
            where: { id: verificationId },
        });
        if (!verification ||
            verification.status !== enums_1.VerificationStatus.PROCESSING) {
            return;
        }
        if (!verification.captureKey) {
            await this.fail(verificationId, enums_1.VerificationFailureReason.POOR_QUALITY);
            return;
        }
        const capture = await this.storage.getObject(verification.captureKey);
        const referencePhotos = await this.loadReferencePhotos(userId);
        const analysis = await this.matcher.analyse(capture, referencePhotos, verification.poseChallenge);
        const outcome = this.decide(analysis);
        if (outcome === 'APPROVE' && analysis.embedding) {
            const duplicate = await this.findDuplicateFace(analysis.embedding, userId);
            if (duplicate) {
                await this.fail(verificationId, enums_1.VerificationFailureReason.DUPLICATE_FACE, {
                    duplicateOfUserId: duplicate.userId,
                    distance: duplicate.similarity,
                });
                await this.prisma.moderationTask.create({
                    data: {
                        type: enums_1.ModerationTaskType.RISK_REVIEW,
                        subjectUserId: userId,
                        priority: 85,
                        notes: `Même visage que le compte ${duplicate.userId} (similarité ${duplicate.similarity.toFixed(3)})`,
                    },
                });
                await this.wipeCapture(verificationId, verification.captureKey);
                this.logger.warn(`Vérification ${verificationId} refusée : visage déjà rattaché à ${duplicate.userId}`);
                return;
            }
            await this.approve(verificationId, userId, analysis);
            await this.wipeCapture(verificationId, verification.captureKey);
            return;
        }
        if (outcome === 'REJECT') {
            await this.fail(verificationId, this.failureReasonFor(analysis));
            await this.wipeCapture(verificationId, verification.captureKey);
            return;
        }
        await this.prisma.verification.update({
            where: { id: verificationId },
            data: {
                status: enums_1.VerificationStatus.MANUAL_REVIEW,
                livenessScore: analysis.livenessScore,
                matchScore: analysis.matchScore,
                processedAt: new Date(),
            },
        });
        await this.prisma.moderationTask.create({
            data: {
                type: enums_1.ModerationTaskType.VERIFICATION_REVIEW,
                verificationId,
                subjectUserId: userId,
                priority: 40,
                notes: this.matcher.isConfigured
                    ? `Vivacité ${analysis.livenessScore.toFixed(2)}, similarité ${analysis.matchScore.toFixed(2)}`
                    : 'Comparaison faciale non branchée — vérification entièrement manuelle',
            },
        });
        this.logger.log(`Vérification ${verificationId} envoyée en revue humaine`);
    }
    async findDuplicateFace(embedding, userId) {
        const vector = `[${embedding.join(',')}]`;
        const rows = await this.prisma.$queryRaw `
      SELECT
        fe."userId",
        (1 - (fe.embedding <=> ${vector}::vector))::float8 AS "similarity"
      FROM face_embeddings fe
      JOIN users u ON u.id = fe."userId"
      WHERE fe."userId" <> ${userId}::uuid
        AND fe.embedding IS NOT NULL
        AND u."deletedAt" IS NULL
      ORDER BY fe.embedding <=> ${vector}::vector
      LIMIT 1
    `;
        const nearest = rows[0];
        return nearest && nearest.similarity >= DUPLICATE_THRESHOLD
            ? nearest
            : null;
    }
    async approve(verificationId, userId, analysis) {
        await this.prisma.$transaction(async (tx) => {
            await tx.verification.update({
                where: { id: verificationId },
                data: {
                    status: enums_1.VerificationStatus.APPROVED,
                    livenessScore: analysis.livenessScore,
                    matchScore: analysis.matchScore,
                    processedAt: new Date(),
                },
            });
            await tx.profile.update({
                where: { userId },
                data: { isVerified: true },
            });
        });
        if (analysis.embedding) {
            await this.storeEmbedding(verificationId, userId, analysis.embedding);
        }
        this.logger.log(`Profil ${userId} vérifié`);
    }
    async storeEmbedding(verificationId, userId, embedding) {
        const record = await this.prisma.faceEmbedding.upsert({
            where: { verificationId },
            create: {
                userId,
                verificationId,
                model: 'arcface-buffalo_l',
                dimension: embedding.length,
            },
            update: {},
            select: { id: true },
        });
        const vector = `[${embedding.join(',')}]`;
        await this.prisma.$executeRaw `
      UPDATE face_embeddings
      SET embedding = ${vector}::vector
      WHERE id = ${record.id}::uuid
    `;
    }
    decide(analysis) {
        if (analysis.livenessScore >= LIVENESS_APPROVE &&
            analysis.matchScore >= MATCH_APPROVE &&
            analysis.challengePerformed) {
            return 'APPROVE';
        }
        if (analysis.livenessScore < LIVENESS_REJECT ||
            analysis.matchScore < MATCH_REJECT) {
            return analysis.livenessScore === 0 && analysis.matchScore === 0
                ? 'REVIEW'
                : 'REJECT';
        }
        return 'REVIEW';
    }
    failureReasonFor(analysis) {
        if (!analysis.challengePerformed) {
            return enums_1.VerificationFailureReason.CHALLENGE_NOT_PERFORMED;
        }
        if (analysis.livenessScore < LIVENESS_REJECT) {
            return enums_1.VerificationFailureReason.LIVENESS_FAILED;
        }
        return enums_1.VerificationFailureReason.FACE_MISMATCH;
    }
    async loadReferencePhotos(userId) {
        const photos = await this.prisma.photo.findMany({
            where: {
                profileId: userId,
                status: enums_1.PhotoStatus.APPROVED,
                deletedAt: null,
            },
            orderBy: { position: 'asc' },
            take: 3,
            select: { id: true },
        });
        const buffers = [];
        for (const photo of photos) {
            try {
                buffers.push(await this.storage.getObject(`photos/${userId}/${photo.id}/full.webp`));
            }
            catch {
                this.logger.warn(`Photo de référence illisible : ${photo.id}`);
            }
        }
        return buffers;
    }
    async fail(verificationId, reason, details) {
        await this.prisma.verification.update({
            where: { id: verificationId },
            data: {
                status: enums_1.VerificationStatus.REJECTED,
                failureReason: reason,
                processedAt: new Date(),
                reviewNote: details ? JSON.stringify(details).slice(0, 500) : undefined,
            },
        });
    }
    async wipeCapture(verificationId, captureKey) {
        try {
            await this.storage.deleteObject(captureKey);
        }
        catch (error) {
            this.logger.error(`Capture non supprimée pour ${verificationId} : ${error.message}`);
            return;
        }
        await this.prisma.verification.update({
            where: { id: verificationId },
            data: { captureWiped: true, captureKey: null },
        });
    }
};
exports.VerificationProcessor = VerificationProcessor;
exports.VerificationProcessor = VerificationProcessor = VerificationProcessor_1 = __decorate([
    (0, bullmq_1.Processor)(queue_module_1.QUEUES.MODERATION),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        storage_service_1.StorageService,
        face_matcher_service_1.FaceMatcherService])
], VerificationProcessor);
//# sourceMappingURL=verification.processor.js.map