import { PhotoStatus } from '../../generated/prisma/enums';
import { PrismaService } from '../../core/prisma/prisma.service';
import { MediaService } from '../media/media.service';
import { DeckCacheService } from './deck-cache.service';
import { DeckService } from './deck.service';
export declare class DiscoveryService {
    private readonly prisma;
    private readonly deck;
    private readonly cache;
    private readonly media;
    private readonly logger;
    constructor(prisma: PrismaService, deck: DeckService, cache: DeckCacheService, media: MediaService);
    getDeck(userId: string, limit?: number): Promise<{
        userId: string;
        firstName: string;
        age: number | null;
        gender: import("../../generated/prisma/enums").Gender;
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
        distanceKm: number | null;
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
    }[]>;
    refresh(userId: string, limit?: number): Promise<{
        userId: string;
        firstName: string;
        age: number | null;
        gender: import("../../generated/prisma/enums").Gender;
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
        distanceKm: number | null;
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
    }[]>;
    private refill;
    private hydrate;
    private distancesFrom;
    private ageFrom;
}
