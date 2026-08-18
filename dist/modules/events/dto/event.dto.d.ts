import { EventCategory } from '../../../generated/prisma/enums';
export declare class CreateEventDto {
    title: string;
    description: string;
    category: EventCategory;
    latitude: number;
    longitude: number;
    locationLabel: string;
    startsAt: string;
    endsAt?: string;
    capacity: number;
    seatsWomen?: number;
    seatsMen?: number;
    costAmount?: number;
}
export declare class JoinEventDto {
    message?: string;
}
export declare class RespondRequestDto {
    accept: boolean;
}
export declare class CheckInDto {
    latitude: number;
    longitude: number;
}
export declare class CancelEventDto {
    reason?: string;
}
export declare class NearbyEventsDto {
    radiusKm?: number;
    category?: EventCategory;
    limit?: number;
}
export declare class CoverUploadDto {
    contentType: string;
    contentLength: number;
}
export declare class ConfirmCoverDto {
    uploadKey: string;
}
export declare class SponsorEventDto {
    isSponsored: boolean;
    sponsorName?: string;
}
