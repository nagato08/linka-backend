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
var ModerationService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModerationService = void 0;
const common_1 = require("@nestjs/common");
const google_auth_library_1 = require("google-auth-library");
const enums_1 = require("../../generated/prisma/enums");
const config_module_1 = require("../../core/config/config.module");
const LIKELIHOOD_SCORE = {
    UNKNOWN: 0,
    VERY_UNLIKELY: 0,
    UNLIKELY: 0.25,
    POSSIBLE: 0.5,
    LIKELY: 0.75,
    VERY_LIKELY: 1,
};
const REJECT_THRESHOLD = 0.75;
const APPROVE_THRESHOLD = 0.25;
let ModerationService = ModerationService_1 = class ModerationService {
    config;
    logger = new common_1.Logger(ModerationService_1.name);
    auth = null;
    constructor(config) {
        this.config = config;
        const serviceAccount = config.get('GOOGLE_SERVICE_ACCOUNT_B64');
        if (serviceAccount) {
            this.auth = new google_auth_library_1.GoogleAuth({
                credentials: JSON.parse(Buffer.from(serviceAccount, 'base64').toString('utf8')),
                scopes: ['https://www.googleapis.com/auth/cloud-platform'],
            });
        }
        else {
            this.logger.warn('Cloud Vision non configuré : toutes les photos partent en revue humaine');
        }
    }
    get isConfigured() {
        return this.auth !== null;
    }
    async moderateImage(buffer) {
        const neutral = {
            nsfw: 0,
            violence: 0,
            minor: 0,
            aiGenerated: 0,
        };
        if (!this.auth) {
            return { decision: 'REVIEW', scores: neutral };
        }
        let annotation;
        let faceCount = 0;
        try {
            const client = await this.auth.getClient();
            const response = await client.request({
                url: 'https://vision.googleapis.com/v1/images:annotate',
                method: 'POST',
                data: {
                    requests: [
                        {
                            image: { content: buffer.toString('base64') },
                            features: [
                                { type: 'SAFE_SEARCH_DETECTION' },
                                { type: 'FACE_DETECTION', maxResults: 5 },
                            ],
                        },
                    ],
                },
            });
            const result = response.data.responses?.[0];
            if (result?.error) {
                throw new Error(result.error.message ?? 'erreur Vision');
            }
            annotation = result?.safeSearchAnnotation ?? {};
            faceCount = result?.faceAnnotations?.length ?? 0;
        }
        catch (error) {
            this.logger.error(`Cloud Vision injoignable : ${error.message}`);
            return { decision: 'REVIEW', scores: neutral };
        }
        const scores = {
            nsfw: Math.max(LIKELIHOOD_SCORE[annotation.adult ?? 'UNKNOWN'] ?? 0, (LIKELIHOOD_SCORE[annotation.racy ?? 'UNKNOWN'] ?? 0) * 0.6),
            violence: LIKELIHOOD_SCORE[annotation.violence ?? 'UNKNOWN'] ?? 0,
            minor: 0,
            aiGenerated: 0,
            faces: faceCount,
        };
        if (scores.nsfw >= REJECT_THRESHOLD) {
            return { decision: 'REJECT', reason: enums_1.PhotoRejectionReason.NSFW, scores };
        }
        if (scores.violence >= REJECT_THRESHOLD) {
            return {
                decision: 'REJECT',
                reason: enums_1.PhotoRejectionReason.VIOLENCE,
                scores,
            };
        }
        if (faceCount === 0) {
            return { decision: 'REVIEW', scores };
        }
        if (scores.nsfw < APPROVE_THRESHOLD &&
            scores.violence < APPROVE_THRESHOLD) {
            return { decision: 'APPROVE', scores };
        }
        return { decision: 'REVIEW', scores };
    }
};
exports.ModerationService = ModerationService;
exports.ModerationService = ModerationService = ModerationService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_module_1.TypedConfigService])
], ModerationService);
//# sourceMappingURL=moderation.service.js.map