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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var RedisService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisService = void 0;
const common_1 = require("@nestjs/common");
const ioredis_1 = __importDefault(require("ioredis"));
const config_module_1 = require("../config/config.module");
let RedisService = RedisService_1 = class RedisService {
    logger = new common_1.Logger(RedisService_1.name);
    client;
    subscriber;
    publisher;
    constructor(config) {
        const url = config.get('REDIS_URL');
        const options = {
            maxRetriesPerRequest: 3,
            retryStrategy: (times) => Math.min(times * 200, 3_000),
            lazyConnect: true,
        };
        this.client = new ioredis_1.default(url, options);
        this.subscriber = new ioredis_1.default(url, options);
        this.publisher = new ioredis_1.default(url, options);
    }
    async onModuleInit() {
        await Promise.all([
            this.ensureConnected(this.client),
            this.ensureConnected(this.subscriber),
            this.ensureConnected(this.publisher),
        ]);
        this.logger.log('Connexions Redis établies');
    }
    async ensureConnected(client) {
        if (client.status === 'wait') {
            await client.connect();
        }
    }
    async onModuleDestroy() {
        await Promise.all([
            this.client.quit(),
            this.subscriber.quit(),
            this.publisher.quit(),
        ]);
    }
    async ping() {
        return (await this.client.ping()) === 'PONG';
    }
};
exports.RedisService = RedisService;
exports.RedisService = RedisService = RedisService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_module_1.TypedConfigService])
], RedisService);
//# sourceMappingURL=redis.service.js.map