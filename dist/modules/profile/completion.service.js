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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompletionService = exports.MIN_APPROVED_PHOTOS = void 0;
const common_1 = require("@nestjs/common");
const enums_1 = require("../../generated/prisma/enums");
const prisma_service_1 = require("../../core/prisma/prisma.service");
exports.MIN_APPROVED_PHOTOS = 2;
const MIN_INTERESTS = 5;
let CompletionService = class CompletionService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async evaluate(userId) {
        const profile = await this.prisma.profile.findUnique({
            where: { userId },
            include: {
                photos: {
                    where: { deletedAt: null, status: enums_1.PhotoStatus.APPROVED },
                    select: { id: true },
                },
                interests: { select: { interestId: true } },
                prompts: { select: { id: true } },
            },
        });
        if (!profile) {
            return { score: 0, isComplete: false, missing: ['profile'] };
        }
        const missing = [];
        let score = 0;
        score += 30;
        const approved = profile.photos.length;
        if (approved >= exports.MIN_APPROVED_PHOTOS) {
            score += Math.min(30, 15 * approved);
        }
        else {
            missing.push(`photos (${approved}/${exports.MIN_APPROVED_PHOTOS})`);
            score += 15 * approved;
        }
        if (profile.discoveryLatitude !== null &&
            profile.discoveryLongitude !== null) {
            score += 15;
        }
        else {
            missing.push('localisation');
        }
        if (profile.interests.length >= MIN_INTERESTS) {
            score += 15;
        }
        else {
            missing.push(`centres d'intérêt (${profile.interests.length}/${MIN_INTERESTS})`);
            score += Math.floor((profile.interests.length / MIN_INTERESTS) * 15);
        }
        if (profile.bio && profile.bio.trim().length >= 30) {
            score += 5;
        }
        else {
            missing.push('biographie');
        }
        if (profile.prompts.length >= 1) {
            score += 5;
        }
        else {
            missing.push('au moins une question renseignée');
        }
        const optional = [
            profile.heightCm,
            profile.profession,
            profile.religion,
            profile.education,
            profile.smoking,
            profile.drinking,
            profile.languages.length > 0 ? profile.languages : null,
        ].filter((value) => value !== null && value !== undefined).length;
        score += Math.min(5, optional);
        const isComplete = approved >= exports.MIN_APPROVED_PHOTOS &&
            profile.discoveryLatitude !== null &&
            profile.interests.length >= MIN_INTERESTS;
        return { score: Math.min(100, score), isComplete, missing };
    }
    async refresh(userId) {
        const report = await this.evaluate(userId);
        await this.prisma.profile.updateMany({
            where: { userId },
            data: { completionScore: report.score },
        });
        return report;
    }
};
exports.CompletionService = CompletionService;
exports.CompletionService = CompletionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CompletionService);
//# sourceMappingURL=completion.service.js.map