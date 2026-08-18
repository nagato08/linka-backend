import { EducationLevel, Frequency, Gender, Intention, MatchingBucket, Orientation, Religion, SeekingTarget } from './profile.enums';
export declare class PromptAnswerDto {
    promptId: string;
    answer: string;
}
export declare class CreateProfileDto {
    firstName: string;
    birthdate: string;
    gender: Gender;
    genderLabel?: string;
    matchingBucket?: MatchingBucket;
    seeking: SeekingTarget[];
    orientation?: Orientation;
    intention: Intention;
    bio?: string;
    heightCm?: number;
    profession?: string;
    hasChildren?: boolean;
    childrenCount?: number;
    wantsChildren?: boolean;
    religion?: Religion;
    education?: EducationLevel;
    smoking?: Frequency;
    drinking?: Frequency;
    languages?: string[];
    latitude?: number;
    longitude?: number;
    interestIds?: string[];
    prompts?: PromptAnswerDto[];
}
declare const UpdateProfileDto_base: import("@nestjs/common").Type<Partial<CreateProfileDto>>;
export declare class UpdateProfileDto extends UpdateProfileDto_base {
}
export declare class UpdateLocationDto {
    latitude: number;
    longitude: number;
}
export declare class UpdatePreferencesDto {
    minAge?: number;
    maxAge?: number;
    maxDistanceKm?: number;
    verifiedOnly?: boolean;
    allowRadiusExpansion?: boolean;
    intentionFilter?: Intention[];
    religionFilter?: Religion[];
}
export declare class UpdatePrivacyDto {
    incognito?: boolean;
    hideAge?: boolean;
    hideDistance?: boolean;
}
export {};
