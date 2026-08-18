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
exports.HealthController = void 0;
const common_1 = require("@nestjs/common");
const terminus_1 = require("@nestjs/terminus");
const swagger_1 = require("@nestjs/swagger");
const prisma_service_1 = require("../../core/prisma/prisma.service");
const redis_service_1 = require("../../core/redis/redis.service");
const auth_decorators_1 = require("../auth/decorators/auth.decorators");
let HealthController = class HealthController {
    health;
    indicator;
    prisma;
    redis;
    constructor(health, indicator, prisma, redis) {
        this.health = health;
        this.indicator = indicator;
        this.prisma = prisma;
        this.redis = redis;
    }
    check() {
        return this.health.check([
            () => this.checkPostgres(),
            () => this.checkPostgis(),
            () => this.checkRedis(),
        ]);
    }
    async checkPostgres() {
        const check = this.indicator.check('postgres');
        try {
            await this.prisma.$queryRaw `SELECT 1`;
            return check.up();
        }
        catch (error) {
            return check.down({ message: error.message });
        }
    }
    async checkPostgis() {
        const check = this.indicator.check('extensions');
        try {
            const rows = await this.prisma.$queryRaw `
        SELECT extname FROM pg_extension
        WHERE extname IN ('postgis', 'vector', 'pg_trgm', 'pgcrypto')
      `;
            const found = rows.map((r) => r.extname);
            const missing = ['postgis', 'vector', 'pg_trgm', 'pgcrypto'].filter((e) => !found.includes(e));
            return missing.length === 0
                ? check.up({ extensions: found })
                : check.down({ missing });
        }
        catch (error) {
            return check.down({ message: error.message });
        }
    }
    async checkRedis() {
        const check = this.indicator.check('redis');
        try {
            return (await this.redis.ping())
                ? check.up()
                : check.down({ message: 'PING sans réponse' });
        }
        catch (error) {
            return check.down({ message: error.message });
        }
    }
};
exports.HealthController = HealthController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: "État de l'API et de ses dépendances" }),
    (0, terminus_1.HealthCheck)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HealthController.prototype, "check", null);
exports.HealthController = HealthController = __decorate([
    (0, swagger_1.ApiTags)('health'),
    (0, auth_decorators_1.Public)(),
    (0, common_1.Controller)({ path: 'health', version: common_1.VERSION_NEUTRAL }),
    __metadata("design:paramtypes", [terminus_1.HealthCheckService,
        terminus_1.HealthIndicatorService,
        prisma_service_1.PrismaService,
        redis_service_1.RedisService])
], HealthController);
//# sourceMappingURL=health.controller.js.map