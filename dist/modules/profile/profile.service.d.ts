import { Gender, PhotoStatus } from '../../generated/prisma/enums';
import { PrismaService } from '../../core/prisma/prisma.service';
import { EncryptionService } from '../../core/crypto/encryption.service';
import { MediaService } from '../media/media.service';
import { ReferralService } from '../auth/referral.service';
import { GeoIntegrityService } from '../safety/geo-integrity.service';
import { CompletionService } from './completion.service';
import type { CreateProfileDto, UpdatePreferencesDto, UpdatePrivacyDto, UpdateProfileDto } from './dto/profile.dto';
export declare class ProfileService {
    private readonly prisma;
    private readonly encryption;
    private readonly completion;
    private readonly media;
    private readonly referrals;
    private readonly geoIntegrity;
    private readonly logger;
    constructor(prisma: PrismaService, encryption: EncryptionService, completion: CompletionService, media: MediaService, referrals: ReferralService, geoIntegrity: GeoIntegrityService);
    create(userId: string, dto: CreateProfileDto): Promise<{
        completion: import("./completion.service").CompletionReport;
        age: number;
        orientation: string | null;
        interests: {
            slug: string;
            labelFr: string;
            labelEn: string;
            emoji: string | null;
        }[];
        prompts: {
            promptId: string;
            textFr: string;
            textEn: string;
            answer: string;
        }[];
        photos: {
            id: string;
            position: number;
            status: PhotoStatus;
            rejectionReason: string | null;
            width: number | null;
            height: number | null;
            urls: {
                [k: string]: string;
            } | null;
        }[];
        userId: string;
        firstName: string;
        birthdate: Date;
    }>;
    update(userId: string, dto: UpdateProfileDto): Promise<{
        completion: import("./completion.service").CompletionReport;
        age: number;
        orientation: string | null;
        interests: {
            slug: string;
            labelFr: string;
            labelEn: string;
            emoji: string | null;
        }[];
        prompts: {
            promptId: string;
            textFr: string;
            textEn: string;
            answer: string;
        }[];
        photos: {
            id: string;
            position: number;
            status: PhotoStatus;
            rejectionReason: string | null;
            width: number | null;
            height: number | null;
            urls: {
                [k: string]: string;
            } | null;
        }[];
        userId: string;
        firstName: string;
        birthdate: Date;
    }>;
    updateLocation(userId: string, latitude: number, longitude: number): Promise<{
        completion: import("./completion.service").CompletionReport;
        age: number;
        orientation: string | null;
        interests: {
            slug: string;
            labelFr: string;
            labelEn: string;
            emoji: string | null;
        }[];
        prompts: {
            promptId: string;
            textFr: string;
            textEn: string;
            answer: string;
        }[];
        photos: {
            id: string;
            position: number;
            status: PhotoStatus;
            rejectionReason: string | null;
            width: number | null;
            height: number | null;
            urls: {
                [k: string]: string;
            } | null;
        }[];
        userId: string;
        firstName: string;
        birthdate: Date;
    }>;
    updatePreferences(userId: string, dto: UpdatePreferencesDto): Promise<{
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        hasChildren: boolean | null;
        minAge: number;
        maxAge: number;
        maxDistanceKm: number;
        intentionFilter: import("../../generated/prisma/enums").Intention[];
        religionFilter: import("../../generated/prisma/enums").Religion[];
        minHeightCm: number | null;
        maxHeightCm: number | null;
        smokingFilter: import("../../generated/prisma/enums").Frequency[];
        drinkingFilter: import("../../generated/prisma/enums").Frequency[];
        languagesFilter: string[];
        verifiedOnly: boolean;
        allowRadiusExpansion: boolean;
    }>;
    updatePrivacy(userId: string, dto: UpdatePrivacyDto): import("../../generated/prisma/models").Prisma__ProfileClient<{
        incognito: boolean;
        hideAge: boolean;
        hideDistance: boolean;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    getOwn(userId: string): Promise<{
        completion: import("./completion.service").CompletionReport;
        age: number;
        orientation: string | null;
        interests: {
            slug: string;
            labelFr: string;
            labelEn: string;
            emoji: string | null;
        }[];
        prompts: {
            promptId: string;
            textFr: string;
            textEn: string;
            answer: string;
        }[];
        photos: {
            id: string;
            position: number;
            status: PhotoStatus;
            rejectionReason: string | null;
            width: number | null;
            height: number | null;
            urls: {
                [k: string]: string;
            } | null;
        }[];
        userId: string;
        firstName: string;
        birthdate: Date;
    }>;
    getPublic(viewerId: string, targetUserId: string): Promise<{
        userId: string;
        firstName: string;
        age: number | null;
        gender: Gender;
        genderLabel: string | null;
        intention: import("../../generated/prisma/enums").Intention;
        bio: string | null;
        heightCm: number | null;
        profession: string | null;
        religion: import("../../generated/prisma/enums").Religion | null;
        education: import("../../generated/prisma/enums").EducationLevel | null;
        smoking: import("../../generated/prisma/enums").Frequency | null;
        drinking: import("../../generated/prisma/enums").Frequency | null;
        languages: string[];
        hasChildren: boolean | null;
        city: {
            name: string;
            region: string;
        } | null;
        isVerified: boolean;
        interests: {
            slug: string;
            labelFr: string;
            labelEn: string;
            emoji: string | null;
        }[];
        prompts: {
            textFr: string;
            textEn: string;
            answer: string;
        }[];
        photos: {
            id: string;
            position: number;
            status: PhotoStatus;
            rejectionReason: string | null;
            width: number | null;
            height: number | null;
            urls: {
                [k: string]: string;
            } | null;
        }[];
    }>;
    listInterests(): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: string;
        category: string | null;
        slug: string;
        labelFr: string;
        labelEn: string;
        emoji: string | null;
    }[]>;
    listPrompts(): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: string;
        category: string | null;
        slug: string;
        textFr: string;
        textEn: string;
    }[]>;
    private finalize;
    private assertAdult;
    private ageFrom;
    private defaultBucket;
    private resolveCity;
    private replaceInterests;
    private replacePrompts;
    private toOwnDto;
}
