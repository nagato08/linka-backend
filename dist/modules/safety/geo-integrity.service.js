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
var GeoIntegrityService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeoIntegrityService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../core/prisma/prisma.service");
const redis_service_1 = require("../../core/redis/redis.service");
const MAX_PLAUSIBLE_KMH = 1_000;
const MIN_SUSPICIOUS_DISTANCE_KM = 50;
const JUMP_COUNTER_TTL_SECONDS = 7 * 86_400;
let GeoIntegrityService = GeoIntegrityService_1 = class GeoIntegrityService {
    prisma;
    redis;
    logger = new common_1.Logger(GeoIntegrityService_1.name);
    constructor(prisma, redis) {
        this.prisma = prisma;
        this.redis = redis;
    }
    async recordLocationChange(userId, previous, next) {
        if (previous.latitude === null || previous.longitude === null)
            return;
        const distanceKm = this.distanceKm(previous.latitude, previous.longitude, next.latitude, next.longitude);
        if (distanceKm < MIN_SUSPICIOUS_DISTANCE_KM)
            return;
        const lastKey = `geo:last:${userId}`;
        const previousTimestamp = await this.redis.client.get(lastKey);
        await this.redis.client.set(lastKey, String(Date.now()), 'EX', JUMP_COUNTER_TTL_SECONDS);
        if (!previousTimestamp)
            return;
        const elapsedHours = (Date.now() - Number(previousTimestamp)) / 3_600_000;
        const speedKmh = distanceKm / Math.max(elapsedHours, 1 / 3_600);
        if (speedKmh <= MAX_PLAUSIBLE_KMH)
            return;
        const traveling = await this.prisma.travelSession.findFirst({
            where: { userId, endedAt: null },
            select: { id: true },
        });
        if (traveling)
            return;
        const counterKey = `geo:jump:${userId}`;
        const jumps = await this.redis.client.incr(counterKey);
        await this.redis.client.expire(counterKey, JUMP_COUNTER_TTL_SECONDS);
        this.logger.warn(`Saut de position invraisemblable pour ${userId} : ${Math.round(distanceKm)} km ` +
            `en ${Math.round(elapsedHours * 60)} min (${Math.round(speedKmh)} km/h), ${jumps}e occurrence`);
    }
    async countRecentJumps(userId) {
        const value = await this.redis.client.get(`geo:jump:${userId}`);
        return Number(value ?? 0);
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
exports.GeoIntegrityService = GeoIntegrityService;
exports.GeoIntegrityService = GeoIntegrityService = GeoIntegrityService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        redis_service_1.RedisService])
], GeoIntegrityService);
//# sourceMappingURL=geo-integrity.service.js.map