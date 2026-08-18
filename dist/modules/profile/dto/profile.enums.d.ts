export { EducationLevel, Frequency, Gender, Intention, MatchingBucket, Religion, SeekingTarget, } from '../../../generated/prisma/enums';
export declare const Orientation: {
    readonly STRAIGHT: "STRAIGHT";
    readonly GAY: "GAY";
    readonly LESBIAN: "LESBIAN";
    readonly BISEXUAL: "BISEXUAL";
    readonly PANSEXUAL: "PANSEXUAL";
    readonly ASEXUAL: "ASEXUAL";
    readonly QUESTIONING: "QUESTIONING";
    readonly OTHER: "OTHER";
    readonly PREFER_NOT_TO_SAY: "PREFER_NOT_TO_SAY";
};
export type Orientation = (typeof Orientation)[keyof typeof Orientation];
