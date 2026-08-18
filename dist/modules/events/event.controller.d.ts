import { EventService } from './event.service';
import { CancelEventDto, CheckInDto, ConfirmCoverDto, CoverUploadDto, CreateEventDto, JoinEventDto, NearbyEventsDto, RespondRequestDto } from './dto/event.dto';
export declare class EventController {
    private readonly events;
    constructor(events: EventService);
    nearby(userId: string, query: NearbyEventsDto): Promise<{
        id: string;
        title: string;
        description: string;
        category: import("../../generated/prisma/enums").EventCategory;
        startsAt: Date;
        capacity: number;
        seatsTaken: number;
        seatsLeft: number;
        seatsWomenLeft: number | null;
        seatsMenLeft: number | null;
        seatsLeftForMe: number;
        costAmount: number | null;
        city: {
            name: string;
            region: string;
        } | null;
        distanceKm: number | null;
        isSponsored: boolean;
        sponsorName: string | null;
        isPromoted: boolean;
        coverUrl: string | null;
        organizer: {
            firstName: string | null;
            isVerified: boolean;
        };
    }[]>;
    mine(userId: string): Promise<{
        organized: {
            id: string;
            status: import("../../generated/prisma/enums").EventStatus;
            title: string;
            startsAt: Date;
            capacity: number;
            _count: {
                requests: number;
            };
        }[];
        joined: {
            id: string;
            status: import("../../generated/prisma/enums").EventStatus;
            title: string;
            locationLabel: string;
            startsAt: Date;
        }[];
    }>;
    detail(userId: string, eventId: string): Promise<{
        id: string;
        title: string;
        description: string;
        category: import("../../generated/prisma/enums").EventCategory;
        status: import("../../generated/prisma/enums").EventStatus;
        startsAt: Date;
        endsAt: Date | null;
        capacity: number;
        seatsWomen: number | null;
        seatsMen: number | null;
        seatsTaken: number;
        seatsLeft: number;
        costAmount: number | null;
        currencyCode: string | null;
        city: {
            name: string;
            region: string;
        } | null;
        locationLabel: string | null;
        isSponsored: boolean;
        sponsorName: string | null;
        isPromoted: boolean;
        coverUrl: string | null;
        organizer: {
            hostedCount: number;
            cancelledCount: number;
            showUpRate: number | null;
            userId: string;
            firstName: string | null;
            isVerified: boolean;
            photo: {
                id: string;
                position: number;
                status: import("../../generated/prisma/enums").PhotoStatus;
                rejectionReason: string | null;
                width: number | null;
                height: number | null;
                urls: {
                    [k: string]: string;
                } | null;
            } | null;
        };
        participants: {
            userId: string;
            firstName: string | null;
        }[] | null;
        conversationId: string | null;
        myRequest: {
            status: import("../../generated/prisma/enums").EventRequestStatus;
            createdAt: Date;
        } | null;
        isOrganizer: boolean;
    }>;
    create(userId: string, dto: CreateEventDto): Promise<{
        id: string;
        title: string;
        description: string;
        category: import("../../generated/prisma/enums").EventCategory;
        status: import("../../generated/prisma/enums").EventStatus;
        startsAt: Date;
        endsAt: Date | null;
        capacity: number;
        seatsWomen: number | null;
        seatsMen: number | null;
        seatsTaken: number;
        seatsLeft: number;
        costAmount: number | null;
        currencyCode: string | null;
        city: {
            name: string;
            region: string;
        } | null;
        locationLabel: string | null;
        isSponsored: boolean;
        sponsorName: string | null;
        isPromoted: boolean;
        coverUrl: string | null;
        organizer: {
            hostedCount: number;
            cancelledCount: number;
            showUpRate: number | null;
            userId: string;
            firstName: string | null;
            isVerified: boolean;
            photo: {
                id: string;
                position: number;
                status: import("../../generated/prisma/enums").PhotoStatus;
                rejectionReason: string | null;
                width: number | null;
                height: number | null;
                urls: {
                    [k: string]: string;
                } | null;
            } | null;
        };
        participants: {
            userId: string;
            firstName: string | null;
        }[] | null;
        conversationId: string | null;
        myRequest: {
            status: import("../../generated/prisma/enums").EventRequestStatus;
            createdAt: Date;
        } | null;
        isOrganizer: boolean;
    }>;
    join(userId: string, eventId: string, dto: JoinEventDto): Promise<{
        status: import("../../generated/prisma/enums").EventRequestStatus;
    }>;
    requests(userId: string, eventId: string): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").EventRequestStatus;
        message: string | null;
        createdAt: Date;
        applicant: {
            userId: string;
            firstName: string | null;
            gender: import("../profile/dto/profile.enums").Gender | null;
            isVerified: boolean;
            photo: {
                id: string;
                position: number;
                status: import("../../generated/prisma/enums").PhotoStatus;
                rejectionReason: string | null;
                width: number | null;
                height: number | null;
                urls: {
                    [k: string]: string;
                } | null;
            } | null;
        };
    }[]>;
    respond(userId: string, eventId: string, requestId: string, dto: RespondRequestDto): Promise<{
        status: "DECLINED";
    } | {
        status: "ACCEPTED";
    }>;
    checkIn(userId: string, eventId: string, dto: CheckInDto): Promise<{
        checkedIn: boolean;
        distanceM: number;
    }>;
    cancel(userId: string, eventId: string, dto: CancelEventDto): Promise<{
        cancelled: boolean;
    }>;
    coverTicket(userId: string, eventId: string, dto: CoverUploadDto): Promise<{
        uploadKey: string;
        uploadUrl: string;
        expiresIn: number;
    }>;
    confirmCover(userId: string, eventId: string, dto: ConfirmCoverDto): Promise<{
        status: "PROCESSING";
    }>;
    promote(userId: string, eventId: string): Promise<{
        promoted: boolean;
        cost: number;
        balance: number;
    }>;
}
