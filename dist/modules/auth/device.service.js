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
var DeviceService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceService = void 0;
const common_1 = require("@nestjs/common");
const enums_1 = require("../../generated/prisma/enums");
const prisma_service_1 = require("../../core/prisma/prisma.service");
const integrity_service_1 = require("./integrity.service");
const MAX_ACCOUNTS_PER_DEVICE = 2;
let DeviceService = DeviceService_1 = class DeviceService {
    prisma;
    integrity;
    logger = new common_1.Logger(DeviceService_1.name);
    constructor(prisma, integrity) {
        this.prisma = prisma;
        this.integrity = integrity;
    }
    async register(userId, context) {
        await this.enforceAccountCap(context.fingerprint, userId);
        const verdict = await this.integrity.verify(context.integrityToken);
        return this.prisma.device.upsert({
            where: {
                userId_fingerprint: {
                    userId,
                    fingerprint: context.fingerprint,
                },
            },
            create: {
                userId,
                platform: context.platform,
                fingerprint: context.fingerprint,
                model: context.model,
                osVersion: context.osVersion,
                appVersion: context.appVersion,
                integrityVerdict: verdict,
                integrityCheckedAt: context.integrityToken ? new Date() : null,
            },
            update: {
                lastSeenAt: new Date(),
                appVersion: context.appVersion,
                osVersion: context.osVersion,
                integrityVerdict: verdict,
                integrityCheckedAt: context.integrityToken ? new Date() : undefined,
            },
        });
    }
    async enforceAccountCap(fingerprint, userId) {
        const existing = await this.prisma.device.findMany({
            where: { fingerprint },
            select: { userId: true },
            distinct: ['userId'],
        });
        const otherAccounts = existing.filter((d) => d.userId !== userId);
        if (otherAccounts.length >= MAX_ACCOUNTS_PER_DEVICE) {
            this.logger.warn(`Plafond de comptes atteint pour l'empreinte ${fingerprint.slice(0, 8)}…`);
            throw new common_1.ForbiddenException('Trop de comptes ont été créés depuis cet appareil');
        }
    }
    listForUser(userId) {
        return this.prisma.device.findMany({
            where: { userId },
            orderBy: { lastSeenAt: 'desc' },
            select: {
                id: true,
                platform: true,
                model: true,
                osVersion: true,
                appVersion: true,
                integrityVerdict: true,
                firstSeenAt: true,
                lastSeenAt: true,
            },
        });
    }
    async countLinkedAccounts(fingerprint) {
        const devices = await this.prisma.device.findMany({
            where: {
                fingerprint,
                user: { status: { notIn: [enums_1.UserStatus.DELETED] } },
            },
            select: { userId: true },
            distinct: ['userId'],
        });
        return devices.length;
    }
};
exports.DeviceService = DeviceService;
exports.DeviceService = DeviceService = DeviceService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        integrity_service_1.IntegrityService])
], DeviceService);
//# sourceMappingURL=device.service.js.map