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
var DiscoveryService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscoveryService = void 0;
const common_1 = require("@nestjs/common");
const enums_1 = require("../../generated/prisma/enums");
const prisma_service_1 = require("../../core/prisma/prisma.service");
const media_service_1 = require("../media/media.service");
const deck_cache_service_1 = require("./deck-cache.service");
const deck_service_1 = require("./deck.service");
const DEFAULT_PAGE = 10;
const REFILL_THRESHOLD = 5;
let DiscoveryService = DiscoveryService_1 = class DiscoveryService {
    prisma;
    deck;
    cache;
    media;
    logger = new common_1.Logger(DiscoveryService_1.name);
    constructor(prisma, deck, cache, media) {
        this.prisma = prisma;
        this.deck = deck;
        this.cache = cache;
        this.media = media;
    }
    async getDeck(userId, limit = DEFAULT_PAGE) {
        let ids = await this.cache.take(userId, limit);
        if (ids.length < limit) {
            const candidates = await this.deck.build(userId);
            const alreadyServed = new Set(ids);
            await this.cache.store(userId, candidates.map((c) => c.userId).filter((id) => !alreadyServed.has(id)));
            ids = [...ids, ...(await this.cache.take(userId, limit - ids.length))];
        }
        else if ((await this.cache.remaining(userId)) < REFILL_THRESHOLD) {
            void this.refill(userId);
        }
        return this.hydrate(userId, ids);
    }
    async refresh(userId, limit = DEFAULT_PAGE) {
        await this.cache.invalidate(userId);
        const candidates = await this.deck.build(userId);
        await this.cache.store(userId, candidates.map((c) => c.userId));
        return this.hydrate(userId, await this.cache.take(userId, limit));
    }
    async refill(userId) {
        try {
            const candidates = await this.deck.build(userId);
            await this.cache.store(userId, candidates.map((c) => c.userId));
        }
        catch (error) {
            this.logger.warn(`Reconstruction du deck impossible pour ${userId} : ${error.message}`);
        }
    }
    async hydrate(userId, ids) {
        if (ids.length === 0)
            return [];
        const viewer = await this.prisma.profile.findUnique({
            where: { userId },
            select: { discoveryLatitude: true, discoveryLongitude: true },
        });
        const profiles = await this.prisma.profile.findMany({
            where: { userId: { in: ids } },
            include: {
                city: { select: { name: true, region: true } },
                interests: { include: { interest: true } },
                prompts: { include: { prompt: true } },
                photos: {
                    where: { deletedAt: null, status: enums_1.PhotoStatus.APPROVED },
                    orderBy: { position: 'asc' },
                },
            },
        });
        const distances = await this.distancesFrom(viewer, ids);
        const byId = new Map(profiles.map((p) => [p.userId, p]));
        return ids
            .map((id) => byId.get(id))
            .filter((profile) => profile !== undefined)
            .map((profile) => ({
            userId: profile.userId,
            firstName: profile.firstName,
            age: profile.hideAge ? null : this.ageFrom(profile.birthdate),
            gender: profile.gender,
            genderLabel: profile.genderLabel,
            intention: profile.intention,
            bio: profile.bio,
            heightCm: profile.heightCm,
            profession: profile.profession,
            religion: profile.religion,
            education: profile.education,
            smoking: profile.smoking,
            drinking: profile.drinking,
            languages: profile.languages,
            hasChildren: profile.hasChildren,
            city: profile.hideDistance ? null : profile.city,
            distanceKm: profile.hideDistance
                ? null
                : (distances.get(profile.userId) ?? null),
            isVerified: profile.isVerified,
            interests: profile.interests.map((link) => ({
                slug: link.interest.slug,
                labelFr: link.interest.labelFr,
                labelEn: link.interest.labelEn,
                emoji: link.interest.emoji,
            })),
            prompts: profile.prompts.map((answer) => ({
                textFr: answer.prompt.textFr,
                textEn: answer.prompt.textEn,
                answer: answer.answer,
            })),
            photos: profile.photos.map((photo) => this.media.toDto(photo)),
        }));
    }
    async distancesFrom(viewer, ids) {
        if (!viewer?.discoveryLatitude || !viewer.discoveryLongitude) {
            return new Map();
        }
        const rows = await this.prisma.$queryRaw `
      SELECT
        p."userId",
        ROUND(
          (ST_Distance(
            p."discoveryLocation",
            ST_SetSRID(ST_MakePoint(${viewer.discoveryLongitude}::float8, ${viewer.discoveryLatitude}::float8), 4326)::geography
          ) / 1000)::numeric,
          0
        )::float8 AS km
      FROM profiles p
      WHERE p."userId" = ANY(${ids}::uuid[])
    `;
        return new Map(rows.map((row) => [row.userId, row.km]));
    }
    ageFrom(birthdate) {
        const now = new Date();
        let age = now.getUTCFullYear() - birthdate.getUTCFullYear();
        const monthDiff = now.getUTCMonth() - birthdate.getUTCMonth();
        if (monthDiff < 0 ||
            (monthDiff === 0 && now.getUTCDate() < birthdate.getUTCDate())) {
            age -= 1;
        }
        return age;
    }
};
exports.DiscoveryService = DiscoveryService;
exports.DiscoveryService = DiscoveryService = DiscoveryService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        deck_service_1.DeckService,
        deck_cache_service_1.DeckCacheService,
        media_service_1.MediaService])
], DiscoveryService);
//# sourceMappingURL=discovery.service.js.map