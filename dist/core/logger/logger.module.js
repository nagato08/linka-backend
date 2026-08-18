"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerModule = void 0;
const common_1 = require("@nestjs/common");
const nestjs_pino_1 = require("nestjs-pino");
const node_crypto_1 = require("node:crypto");
const REDACTED_PATHS = [
    'req.headers.authorization',
    'req.headers.cookie',
    'req.headers["x-api-key"]',
    'req.body.password',
    'req.body.code',
    'req.body.otp',
    'req.body.refreshToken',
    'req.body.phone',
    'req.body.orientation',
    'res.headers["set-cookie"]',
    '*.passwordHash',
    '*.refreshTokenHash',
    '*.codeHash',
    '*.phoneHash',
    '*.orientationEnc',
    '*.storeReceipt',
    '*.embedding',
];
let LoggerModule = class LoggerModule {
};
exports.LoggerModule = LoggerModule;
exports.LoggerModule = LoggerModule = __decorate([
    (0, common_1.Module)({
        imports: [
            nestjs_pino_1.LoggerModule.forRoot({
                pinoHttp: {
                    level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
                    transport: process.env.NODE_ENV === 'development'
                        ? {
                            target: 'pino-pretty',
                            options: {
                                singleLine: true,
                                translateTime: 'HH:MM:ss',
                                ignore: 'pid,hostname',
                            },
                        }
                        : undefined,
                    redact: {
                        paths: REDACTED_PATHS,
                        censor: '[censuré]',
                    },
                    genReqId: (req, res) => {
                        const existing = req.headers['x-request-id'];
                        const id = (Array.isArray(existing) ? existing[0] : existing) ?? (0, node_crypto_1.randomUUID)();
                        res.setHeader('x-request-id', id);
                        return id;
                    },
                    customLogLevel: (_req, res, err) => {
                        if (err || res.statusCode >= 500)
                            return 'error';
                        if (res.statusCode >= 400)
                            return 'warn';
                        return 'info';
                    },
                    autoLogging: {
                        ignore: (req) => req.url === '/health',
                    },
                },
            }),
        ],
    })
], LoggerModule);
//# sourceMappingURL=logger.module.js.map