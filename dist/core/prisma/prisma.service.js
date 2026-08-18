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
var PrismaService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaService = void 0;
const common_1 = require("@nestjs/common");
const adapter_pg_1 = require("@prisma/adapter-pg");
const client_1 = require("../../generated/prisma/client");
const config_module_1 = require("../config/config.module");
let PrismaService = PrismaService_1 = class PrismaService extends client_1.PrismaClient {
    logger = new common_1.Logger(PrismaService_1.name);
    constructor(config) {
        const adapter = new adapter_pg_1.PrismaPg({
            connectionString: config.get('DATABASE_URL'),
            max: 20,
            idleTimeoutMillis: 30_000,
            connectionTimeoutMillis: 5_000,
        });
        super({
            adapter,
            log: config.isDevelopment
                ? [
                    { emit: 'event', level: 'warn' },
                    { emit: 'event', level: 'error' },
                ]
                : [{ emit: 'event', level: 'error' }],
        });
    }
    async onModuleInit() {
        await this.$connect();
        this.logger.log('Connexion PostgreSQL établie');
    }
    async onModuleDestroy() {
        await this.$disconnect();
    }
    async truncateAll() {
        if (process.env.NODE_ENV === 'production') {
            throw new Error('truncateAll est interdit en production');
        }
        const tables = await this.$queryRaw `
      SELECT tablename FROM pg_tables
      WHERE schemaname = 'public'
        AND tablename NOT IN ('_prisma_migrations', 'spatial_ref_sys')
    `;
        const list = tables.map((t) => `"public"."${t.tablename}"`).join(', ');
        await this.$executeRawUnsafe(`TRUNCATE TABLE ${list} CASCADE`);
    }
};
exports.PrismaService = PrismaService;
exports.PrismaService = PrismaService = PrismaService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_module_1.TypedConfigService])
], PrismaService);
//# sourceMappingURL=prisma.service.js.map