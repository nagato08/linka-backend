"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppConfigModule = exports.TypedConfigService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const env_schema_1 = require("./env.schema");
class TypedConfigService {
    config;
    constructor(config) {
        this.config = config;
    }
    get(key) {
        return this.config.get(key);
    }
    get isProduction() {
        return this.get('NODE_ENV') === 'production';
    }
    get isDevelopment() {
        return this.get('NODE_ENV') === 'development';
    }
}
exports.TypedConfigService = TypedConfigService;
let AppConfigModule = class AppConfigModule {
};
exports.AppConfigModule = AppConfigModule;
exports.AppConfigModule = AppConfigModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                cache: true,
                envFilePath: ['.env'],
                validate: env_schema_1.validateEnv,
            }),
        ],
        providers: [
            {
                provide: TypedConfigService,
                useFactory: (config) => new TypedConfigService(config),
                inject: [config_1.ConfigService],
            },
        ],
        exports: [TypedConfigService],
    })
], AppConfigModule);
//# sourceMappingURL=config.module.js.map