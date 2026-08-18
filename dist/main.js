"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const nestjs_pino_1 = require("nestjs-pino");
const helmet_1 = __importDefault(require("helmet"));
const app_module_1 = require("./app.module");
const config_module_1 = require("./core/config/config.module");
const redis_io_adapter_1 = require("./core/redis/redis-io.adapter");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        bufferLogs: true,
        rawBody: true,
    });
    const logger = app.get(nestjs_pino_1.Logger);
    app.useLogger(logger);
    const config = app.get(config_module_1.TypedConfigService);
    app.use((0, helmet_1.default)());
    app.enableCors({
        origin: config.isProduction ? [] : true,
        credentials: true,
    });
    app.enableVersioning({ type: common_1.VersioningType.URI, defaultVersion: '1' });
    app.setGlobalPrefix('api', { exclude: ['health'] });
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
        transformOptions: { enableImplicitConversion: false },
    }));
    const wsAdapter = new redis_io_adapter_1.RedisIoAdapter(app);
    wsAdapter.connect();
    app.useWebSocketAdapter(wsAdapter);
    app.enableShutdownHooks();
    if (!config.isProduction) {
        const doc = new swagger_1.DocumentBuilder()
            .setTitle('API')
            .setDescription("API de l'application de rencontre")
            .setVersion('1.0')
            .addBearerAuth()
            .build();
        swagger_1.SwaggerModule.setup('docs', app, swagger_1.SwaggerModule.createDocument(app, doc));
    }
    const port = config.get('PORT');
    await app.listen(port, '0.0.0.0');
    logger.log(`API démarrée sur le port ${port}`);
}
void bootstrap();
//# sourceMappingURL=main.js.map