import { DiscoveryService } from './discovery.service';
import { DeckQueryDto } from './dto/deck.dto';
export declare class DiscoveryController {
    private readonly discovery;
    constructor(discovery: DiscoveryService);
    getDeck(userId: string, query: DeckQueryDto): Promise<{
        userId: string;
        firstName: string;
        age: number | null;
        gender: import("../profile/dto/profile.enums").Gender;
        genderLabel: string | null;
        intention: import("../profile/dto/profile.enums").Intention;
        bio: string | null;
        heightCm: number | null;
        profession: string | null;
        religion: import("../profile/dto/profile.enums").Religion | null;
        education: import("../profile/dto/profile.enums").EducationLevel | null;
        smoking: import("../profile/dto/profile.enums").Frequency | null;
        drinking: import("../profile/dto/profile.enums").Frequency | null;
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
            status: import("../../generated/prisma/enums").PhotoStatus;
            rejectionReason: string | null;
            width: number | null;
            height: number | null;
            urls: {
                [k: string]: string;
            } | null;
        }[];
    }[]>;
    refresh(userId: string, query: DeckQueryDto): Promise<{
        userId: string;
        firstName: string;
        age: number | null;
        gender: import("../profile/dto/profile.enums").Gender;
        genderLabel: string | null;
        intention: import("../profile/dto/profile.enums").Intention;
        bio: string | null;
        heightCm: number | null;
        profession: string | null;
        religion: import("../profile/dto/profile.enums").Religion | null;
        education: import("../profile/dto/profile.enums").EducationLevel | null;
        smoking: import("../profile/dto/profile.enums").Frequency | null;
        drinking: import("../profile/dto/profile.enums").Frequency | null;
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
            status: import("../../generated/prisma/enums").PhotoStatus;
            rejectionReason: string | null;
            width: number | null;
            height: number | null;
            urls: {
                [k: string]: string;
            } | null;
        }[];
    }[]>;
}
