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
var FaceMatcherService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FaceMatcherService = void 0;
const common_1 = require("@nestjs/common");
const config_module_1 = require("../../core/config/config.module");
let FaceMatcherService = FaceMatcherService_1 = class FaceMatcherService {
    config;
    logger = new common_1.Logger(FaceMatcherService_1.name);
    constructor(config) {
        this.config = config;
    }
    get isConfigured() {
        return false;
    }
    analyse(_capture, _profilePhotos, _expectedPose) {
        if (this.config.isProduction) {
            this.logger.warn('Comparaison faciale non branchée : toutes les vérifications partent en revue humaine');
        }
        return Promise.resolve({
            livenessScore: 0,
            matchScore: 0,
            embedding: null,
            challengePerformed: false,
        });
    }
    cosineSimilarity(a, b) {
        if (a.length !== b.length || a.length === 0)
            return 0;
        let dot = 0;
        let normA = 0;
        let normB = 0;
        for (let i = 0; i < a.length; i += 1) {
            dot += a[i] * b[i];
            normA += a[i] * a[i];
            normB += b[i] * b[i];
        }
        const denominator = Math.sqrt(normA) * Math.sqrt(normB);
        return denominator === 0 ? 0 : dot / denominator;
    }
};
exports.FaceMatcherService = FaceMatcherService;
exports.FaceMatcherService = FaceMatcherService = FaceMatcherService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_module_1.TypedConfigService])
], FaceMatcherService);
//# sourceMappingURL=face-matcher.service.js.map