"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueueModule = exports.QUEUES = void 0;
const bullmq_1 = require("@nestjs/bullmq");
const common_1 = require("@nestjs/common");
const config_module_1 = require("../config/config.module");
exports.QUEUES = {
    MEDIA: 'media',
    MODERATION: 'moderation',
    NOTIFICATION: 'notification',
};
let QueueModule = class QueueModule {
};
exports.QueueModule = QueueModule;
exports.QueueModule = QueueModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [
            bullmq_1.BullModule.forRootAsync({
                inject: [config_module_1.TypedConfigService],
                useFactory: (config) => {
                    const url = new URL(config.get('REDIS_URL'));
                    return {
                        connection: {
                            host: url.hostname,
                            port: Number(url.port || 6379),
                            password: url.password || undefined,
                        },
                        defaultJobOptions: {
                            attempts: 3,
                            backoff: { type: 'exponential', delay: 2_000 },
                            removeOnComplete: { count: 100 },
                            removeOnFail: { count: 1_000 },
                        },
                    };
                },
            }),
            bullmq_1.BullModule.registerQueue({ name: exports.QUEUES.MEDIA }, { name: exports.QUEUES.MODERATION }, { name: exports.QUEUES.NOTIFICATION }),
        ],
        exports: [bullmq_1.BullModule],
    })
], QueueModule);
//# sourceMappingURL=queue.module.js.map