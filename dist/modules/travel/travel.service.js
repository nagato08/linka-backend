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
var TravelService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TravelService = void 0;
const common_1 = require("@nestjs/common");
const enums_1 = require("../../generated/prisma/enums");
const prisma_service_1 = require("../../core/prisma/prisma.service");
const entitlement_service_1 = require("../billing/entitlement.service");
const deck_cache_service_1 = require("../discovery/deck-cache.service");
const FREE_TRAVELS = 5;
const MIN_TRAVEL_DISTANCE_KM = 50;
let TravelService = TravelService_1 = class TravelService {
    prisma;
    entitlements;
    deckCache;
    logger = new common_1.Logger(TravelService_1.name);
    constructor(prisma, entitlements, deckCache) {
        this.prisma = prisma;
        this.entitlements = entitlements;
        this.deckCache = deckCache;
    }
    async travelTo(userId, latitude, longitude, label) {
        const profile = await this.prisma.profile.findUnique({
            where: { userId },
            select: {
                homeLatitude: true,
                homeLongitude: true,
                discoveryLatitude: true,
                discoveryLongitude: true,
            },
        });
        if (!profile)
            throw new common_1.NotFoundException('Profil introuvable');
        if (profile.homeLatitude === null || profile.homeLongitude === null) {
            throw new common_1.BadRequestException('Renseignez votre position avant d’utiliser le mode voyage');
        }
        const distanceKm = this.distanceKm(profile.homeLatitude, profile.homeLongitude, latitude, longitude);
        if (distanceKm < MIN_TRAVEL_DISTANCE_KM) {
            throw new common_1.BadRequestException(`Le mode voyage sert à explorer une autre ville. Cette destination est à ${Math.round(distanceKm)} km.`);
        }
        const unlimited = await this.entitlements.has(userId, enums_1.EntitlementKey.TRAVEL_MODE);
        const usedFree = await this.prisma.travelSession.count({
            where: { userId, wasFree: true },
        });
        if (!unlimited && usedFree >= FREE_TRAVELS) {
            throw new common_1.ForbiddenException('Vos voyages gratuits sont épuisés. Passez à Gold pour un usage illimité.');
        }
        const city = await this.resolveCity(latitude, longitude);
        const session = await this.prisma.$transaction(async (tx) => {
            await tx.travelSession.updateMany({
                where: { userId, endedAt: null },
                data: { endedAt: new Date() },
            });
            const created = await tx.travelSession.create({
                data: {
                    userId,
                    latitude,
                    longitude,
                    cityId: city?.id,
                    locationLabel: label ?? city?.name ?? 'Destination',
                    wasFree: !unlimited,
                },
            });
            await tx.profile.update({
                where: { userId },
                data: {
                    discoveryLatitude: latitude,
                    discoveryLongitude: longitude,
                    cityId: city?.id,
                },
            });
            return created;
        });
        await this.deckCache.invalidate(userId);
        this.logger.log(`Voyage de ${userId} vers ${session.locationLabel} (${Math.round(distanceKm)} km)`);
        return {
            sessionId: session.id,
            destination: session.locationLabel,
            city: city?.name ?? null,
            distanceKm: Math.round(distanceKm),
            remainingFree: unlimited
                ? null
                : Math.max(0, FREE_TRAVELS - usedFree - 1),
        };
    }
    async returnHome(userId) {
        const profile = await this.prisma.profile.findUnique({
            where: { userId },
            select: { homeLatitude: true, homeLongitude: true },
        });
        if (!profile?.homeLatitude || !profile.homeLongitude) {
            throw new common_1.BadRequestException('Aucune position de domicile enregistrée');
        }
        const city = await this.resolveCity(profile.homeLatitude, profile.homeLongitude);
        await this.prisma.$transaction(async (tx) => {
            await tx.travelSession.updateMany({
                where: { userId, endedAt: null },
                data: { endedAt: new Date() },
            });
            await tx.profile.update({
                where: { userId },
                data: {
                    discoveryLatitude: profile.homeLatitude,
                    discoveryLongitude: profile.homeLongitude,
                    cityId: city?.id,
                },
            });
        });
        await this.deckCache.invalidate(userId);
        return { returned: true, city: city?.name ?? null };
    }
    async status(userId) {
        const [active, usedFree, unlimited] = await Promise.all([
            this.prisma.travelSession.findFirst({
                where: { userId, endedAt: null },
                orderBy: { startedAt: 'desc' },
                select: {
                    id: true,
                    locationLabel: true,
                    startedAt: true,
                    city: { select: { name: true, region: true } },
                },
            }),
            this.prisma.travelSession.count({ where: { userId, wasFree: true } }),
            this.entitlements.has(userId, enums_1.EntitlementKey.TRAVEL_MODE),
        ]);
        return {
            traveling: active !== null,
            current: active,
            unlimited,
            remainingFree: unlimited ? null : Math.max(0, FREE_TRAVELS - usedFree),
        };
    }
    listDestinations() {
        return this.prisma.city.findMany({
            where: { isActive: true },
            orderBy: [{ activeUserCount: 'desc' }, { name: 'asc' }],
            select: {
                id: true,
                name: true,
                region: true,
                latitude: true,
                longitude: true,
                activeUserCount: true,
            },
        });
    }
    async resolveCity(latitude, longitude) {
        const rows = await this.prisma.$queryRaw `
      SELECT id, name
      FROM cities
      WHERE "isActive" = true
        AND ST_DWithin(
          ST_SetSRID(ST_MakePoint(longitude, latitude), 4326)::geography,
          ST_SetSRID(ST_MakePoint(${longitude}, ${latitude}), 4326)::geography,
          "radiusKm" * 1000
        )
      ORDER BY ST_Distance(
        ST_SetSRID(ST_MakePoint(longitude, latitude), 4326)::geography,
        ST_SetSRID(ST_MakePoint(${longitude}, ${latitude}), 4326)::geography
      )
      LIMIT 1
    `;
        return rows[0] ?? null;
    }
    distanceKm(lat1, lon1, lat2, lon2) {
        const EARTH_RADIUS_KM = 6_371;
        const toRad = (deg) => (deg * Math.PI) / 180;
        const dLat = toRad(lat2 - lat1);
        const dLon = toRad(lon2 - lon1);
        const a = Math.sin(dLat / 2) ** 2 +
            Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
        return EARTH_RADIUS_KM * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    }
};
exports.TravelService = TravelService;
exports.TravelService = TravelService = TravelService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        entitlement_service_1.EntitlementService,
        deck_cache_service_1.DeckCacheService])
], TravelService);
//# sourceMappingURL=travel.service.js.map