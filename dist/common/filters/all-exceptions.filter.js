"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AllExceptionsFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllExceptionsFilter = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("../../generated/prisma/client");
let AllExceptionsFilter = AllExceptionsFilter_1 = class AllExceptionsFilter {
    logger = new common_1.Logger(AllExceptionsFilter_1.name);
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        const body = this.buildBody(exception, request);
        if (body.statusCode >= 500) {
            this.logger.error(`${request.method} ${request.url} → ${body.statusCode}`, exception instanceof Error ? exception.stack : String(exception));
        }
        response.status(body.statusCode).json(body);
    }
    buildBody(exception, request) {
        const base = {
            requestId: request.headers['x-request-id'],
            timestamp: new Date().toISOString(),
            path: request.url,
        };
        if (exception instanceof common_1.HttpException) {
            const status = exception.getStatus();
            const payload = exception.getResponse();
            if (typeof payload === 'object' && payload !== null) {
                const record = payload;
                return {
                    ...base,
                    statusCode: status,
                    code: record.error ?? common_1.HttpStatus[status] ?? 'ERROR',
                    message: Array.isArray(record.message)
                        ? 'Requête invalide'
                        : (record.message ?? exception.message),
                    details: Array.isArray(record.message) ? record.message : undefined,
                };
            }
            return {
                ...base,
                statusCode: status,
                code: common_1.HttpStatus[status] ?? 'ERROR',
                message: String(payload),
            };
        }
        if (exception instanceof client_1.Prisma.PrismaClientKnownRequestError) {
            return { ...base, ...this.mapPrismaError(exception) };
        }
        return {
            ...base,
            statusCode: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
            code: 'INTERNAL_ERROR',
            message: 'Une erreur interne est survenue',
        };
    }
    mapPrismaError(error) {
        switch (error.code) {
            case 'P2002':
                return {
                    statusCode: common_1.HttpStatus.CONFLICT,
                    code: 'ALREADY_EXISTS',
                    message: 'Cette ressource existe déjà',
                };
            case 'P2003':
                return {
                    statusCode: common_1.HttpStatus.BAD_REQUEST,
                    code: 'INVALID_REFERENCE',
                    message: 'Référence invalide',
                };
            case 'P2025':
                return {
                    statusCode: common_1.HttpStatus.NOT_FOUND,
                    code: 'NOT_FOUND',
                    message: 'Ressource introuvable',
                };
            case 'P2010':
                return {
                    statusCode: common_1.HttpStatus.UNPROCESSABLE_ENTITY,
                    code: 'CONSTRAINT_VIOLATION',
                    message: 'Opération refusée par une contrainte de cohérence',
                };
            default:
                return {
                    statusCode: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                    code: 'DATABASE_ERROR',
                    message: 'Une erreur interne est survenue',
                };
        }
    }
};
exports.AllExceptionsFilter = AllExceptionsFilter;
exports.AllExceptionsFilter = AllExceptionsFilter = AllExceptionsFilter_1 = __decorate([
    (0, common_1.Catch)()
], AllExceptionsFilter);
//# sourceMappingURL=all-exceptions.filter.js.map