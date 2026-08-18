"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisIoAdapter = void 0;
const common_1 = require("@nestjs/common");
const platform_socket_io_1 = require("@nestjs/platform-socket.io");
const redis_adapter_1 = require("@socket.io/redis-adapter");
const redis_service_1 = require("./redis.service");
class RedisIoAdapter extends platform_socket_io_1.IoAdapter {
    app;
    logger = new common_1.Logger(RedisIoAdapter.name);
    adapterConstructor;
    constructor(app) {
        super(app);
        this.app = app;
    }
    connect() {
        const redis = this.app.get(redis_service_1.RedisService);
        this.adapterConstructor = (0, redis_adapter_1.createAdapter)(redis.publisher, redis.subscriber);
        this.logger.log('Adaptateur Redis actif pour les WebSockets');
    }
    createIOServer(port, options) {
        const server = super.createIOServer(port, options);
        if (this.adapterConstructor) {
            server.adapter(this.adapterConstructor);
        }
        return server;
    }
}
exports.RedisIoAdapter = RedisIoAdapter;
//# sourceMappingURL=redis-io.adapter.js.map