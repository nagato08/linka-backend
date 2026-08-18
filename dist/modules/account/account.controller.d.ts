import { AccountService } from './account.service';
import { DeleteAccountDto } from './dto/account.dto';
export declare class AccountController {
    private readonly account;
    constructor(account: AccountService);
    requestDeletion(userId: string, dto: DeleteAccountDto): Promise<{
        purgeAt: Date;
    }>;
    cancelDeletion(userId: string): Promise<void>;
    exportData(userId: string): Promise<{
        exportedAt: Date;
        account: {
            id: string;
            email: string;
            phone: string | null;
            locale: import("../../generated/prisma/enums").AppLocale;
            referralCode: string;
            lastActiveAt: Date | null;
            createdAt: Date;
            profile: {
                createdAt: Date;
                locationLabel: string | null;
                firstName: string;
                birthdate: Date;
                gender: import("../profile/dto/profile.enums").Gender;
                bio: string | null;
                heightCm: number | null;
                profession: string | null;
                religion: import("../profile/dto/profile.enums").Religion | null;
                education: import("../profile/dto/profile.enums").EducationLevel | null;
                languages: string[];
                photos: {
                    status: import("../../generated/prisma/enums").PhotoStatus;
                    createdAt: Date;
                    position: number;
                }[];
                interests: {
                    interest: {
                        slug: string;
                    };
                }[];
                prompts: {
                    answer: string;
                    prompt: {
                        slug: string;
                    };
                }[];
            } | null;
            preference: {
                createdAt: Date;
                updatedAt: Date;
                userId: string;
                hasChildren: boolean | null;
                minAge: number;
                maxAge: number;
                maxDistanceKm: number;
                intentionFilter: import("../profile/dto/profile.enums").Intention[];
                religionFilter: import("../profile/dto/profile.enums").Religion[];
                minHeightCm: number | null;
                maxHeightCm: number | null;
                smokingFilter: import("../profile/dto/profile.enums").Frequency[];
                drinkingFilter: import("../profile/dto/profile.enums").Frequency[];
                languagesFilter: string[];
                verifiedOnly: boolean;
                allowRadiusExpansion: boolean;
            } | null;
            notificationPreference: {
                updatedAt: Date;
                userId: string;
                newMatch: boolean;
                newMessage: boolean;
                newLike: boolean;
                events: boolean;
                marketing: boolean;
                quietHoursStart: number | null;
                quietHoursEnd: number | null;
                timezone: string;
            } | null;
        };
        stats: {
            matches: number;
            messagesSent: number;
        };
        messages: {
            type: import("../../generated/prisma/enums").MessageType;
            createdAt: Date;
            body: string | null;
        }[];
        credits: {
            createdAt: Date;
            delta: number;
            balanceAfter: number;
            reason: import("../../generated/prisma/enums").LedgerReason;
        }[];
    }>;
}
