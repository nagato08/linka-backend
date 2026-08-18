import { DevicePlatform } from '../../generated/prisma/enums';
import { PrismaService } from '../../core/prisma/prisma.service';
import { IntegrityService } from './integrity.service';
export interface DeviceContext {
    platform: DevicePlatform;
    fingerprint: string;
    model?: string;
    osVersion?: string;
    appVersion?: string;
    integrityToken?: string;
}
export declare class DeviceService {
    private readonly prisma;
    private readonly integrity;
    private readonly logger;
    constructor(prisma: PrismaService, integrity: IntegrityService);
    register(userId: string, context: DeviceContext): Promise<{
        id: string;
        userId: string;
        platform: DevicePlatform;
        fingerprint: string;
        model: string | null;
        osVersion: string | null;
        appVersion: string | null;
        integrityVerdict: import("../../generated/prisma/enums").IntegrityVerdict;
        integrityCheckedAt: Date | null;
        integrityPayload: import("@prisma/client/runtime/client").JsonValue | null;
        isTrusted: boolean;
        firstSeenAt: Date;
        lastSeenAt: Date;
    }>;
    enforceAccountCap(fingerprint: string, userId?: string): Promise<void>;
    listForUser(userId: string): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: string;
        platform: DevicePlatform;
        model: string | null;
        osVersion: string | null;
        appVersion: string | null;
        integrityVerdict: import("../../generated/prisma/enums").IntegrityVerdict;
        firstSeenAt: Date;
        lastSeenAt: Date;
    }[]>;
    countLinkedAccounts(fingerprint: string): Promise<number>;
}
