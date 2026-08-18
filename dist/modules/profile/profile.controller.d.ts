import { ProfileService } from './profile.service';
import { CreateProfileDto, UpdateLocationDto, UpdatePreferencesDto, UpdatePrivacyDto, UpdateProfileDto } from './dto/profile.dto';
export declare class ProfileController {
    private readonly profiles;
    constructor(profiles: ProfileService);
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
            status: import("../../generated/prisma/enums").PhotoStatus;
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
            status: import("../../generated/prisma/enums").PhotoStatus;
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
            status: import("../../generated/prisma/enums").PhotoStatus;
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
    updateLocation(userId: string, dto: UpdateLocationDto): Promise<{
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
            status: import("../../generated/prisma/enums").PhotoStatus;
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
        intentionFilter: import("./dto/profile.enums").Intention[];
        religionFilter: import("./dto/profile.enums").Religion[];
        minHeightCm: number | null;
        maxHeightCm: number | null;
        smokingFilter: import("./dto/profile.enums").Frequency[];
        drinkingFilter: import("./dto/profile.enums").Frequency[];
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
    getPublic(viewerId: string, targetUserId: string): Promise<{
        userId: string;
        firstName: string;
        age: number | null;
        gender: import("./dto/profile.enums").Gender;
        genderLabel: string | null;
        intention: import("./dto/profile.enums").Intention;
        bio: string | null;
        heightCm: number | null;
        profession: string | null;
        religion: import("./dto/profile.enums").Religion | null;
        education: import("./dto/profile.enums").EducationLevel | null;
        smoking: import("./dto/profile.enums").Frequency | null;
        drinking: import("./dto/profile.enums").Frequency | null;
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
            status: import("../../generated/prisma/enums").PhotoStatus;
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
}
