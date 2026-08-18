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
var DeckCacheService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeckCacheService = void 0;
const common_1 = require("@nestjs/common");
const redis_service_1 = require("../../core/redis/redis.service");
const DECK_TTL_SECONDS = 1_800;
const SEEN_TTL_SECONDS = 30 * 86_400;
let DeckCacheService = DeckCacheService_1 = class DeckCacheService {
    redis;
    logger = new common_1.Logger(DeckCacheService_1.name);
    constructor(redis) {
        this.redis = redis;
    }
    deckKey(userId) {
        return `deck:${userId}`;
    }
    seenKey(userId) {
        return `seen:${userId}`;
    }
    async store(userId, candidateIds) {
        const key = this.deckKey(userId);
        if (candidateIds.length === 0) {
            await this.redis.client.del(key);
            return;
        }
        await this.redis.client
            .multi()
            .del(key)
            .rpush(key, ...candidateIds)
            .expire(key, DECK_TTL_SECONDS)
            .exec();
    }
    async take(userId, count) {
        const key = this.deckKey(userId);
        const taken = [];
        while (taken.length < count) {
            const candidateId = await this.redis.client.lpop(key);
            if (!candidateId)
                break;
            if (!(await this.hasSeen(userId, candidateId))) {
                taken.push(candidateId);
            }
        }
        return taken;
    }
    async remaining(userId) {
        return this.redis.client.llen(this.deckKey(userId));
    }
    async invalidate(userId) {
        await this.redis.client.del(this.deckKey(userId));
    }
    async markSeen(userId, targetId) {
        const key = this.seenKey(userId);
        await this.redis.client.sadd(key, targetId);
        await this.redis.client.expire(key, SEEN_TTL_SECONDS);
    }
    async unmarkSeen(userId, targetId) {
        await this.redis.client.srem(this.seenKey(userId), targetId);
    }
    async hasSeen(userId, targetId) {
        return ((await this.redis.client.sismember(this.seenKey(userId), targetId)) === 1);
    }
};
exports.DeckCacheService = DeckCacheService;
exports.DeckCacheService = DeckCacheService = DeckCacheService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [redis_service_1.RedisService])
], DeckCacheService);
//# sourceMappingURL=deck-cache.service.js.map