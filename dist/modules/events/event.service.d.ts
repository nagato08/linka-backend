import { Queue } from 'bullmq';
import { EventCategory, EventRequestStatus, EventStatus, Gender, PhotoStatus } from '../../generated/prisma/enums';
import { PrismaService } from '../../core/prisma/prisma.service';
import { RedisService } from '../../core/redis/redis.service';
import { StorageService } from '../../core/storage/storage.service';
import { MediaService } from '../media/media.service';
import { CreditLedgerService } from '../billing/credit-ledger.service';
import { EntitlementService } from '../billing/entitlement.service';
import { NotificationService } from '../notifications/notification.service';
export declare const EVENT_PROMOTION_COST = 800;
export declare class EventService {
    private readonly prisma;
    private readonly redis;
    private readonly media;
    private readonly storage;
    private readonly ledger;
    private readonly entitlements;
    private readonly notifications;
    private readonly mediaQueue;
    private readonly logger;
    constructor(prisma: PrismaService, redis: RedisService, media: MediaService, storage: StorageService, ledger: CreditLedgerService, entitlements: EntitlementService, notifications: NotificationService, mediaQueue: Queue);
    create(userId: string, input: {
        title: string;
        description: string;
        category: EventCategory;
        latitude: number;
        longitude: number;
        locationLabel: string;
        startsAt: Date;
        endsAt?: Date;
        capacity: number;
        seatsWomen?: number;
        seatsMen?: number;
        costAmount?: number;
    }): Promise<{
        id: string;
        title: string;
        description: string;
        category: EventCategory;
        status: EventStatus;
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
                status: PhotoStatus;
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
            status: EventRequestStatus;
            createdAt: Date;
        } | null;
        isOrganizer: boolean;
    }>;
    listNearby(userId: string, options?: {
        radiusKm?: number;
        category?: EventCategory;
        limit?: number;
    }): Promise<{
        id: string;
        title: string;
        description: string;
        category: EventCategory;
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
    detail(userId: string, eventId: string): Promise<{
        id: string;
        title: string;
        description: string;
        category: EventCategory;
        status: EventStatus;
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
                status: PhotoStatus;
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
            status: EventRequestStatus;
            createdAt: Date;
        } | null;
        isOrganizer: boolean;
    }>;
    requestToJoin(userId: string, eventId: string, message?: string): Promise<{
        status: EventRequestStatus;
    }>;
    respond(organizerId: string, eventId: string, requestId: string, accept: boolean): Promise<{
        status: "DECLINED";
    } | {
        status: "ACCEPTED";
    }>;
    checkIn(userId: string, eventId: string, latitude: number, longitude: number): Promise<{
        checkedIn: boolean;
        distanceM: number;
    }>;
    cancel(organizerId: string, eventId: string, reason?: string): Promise<{
        cancelled: boolean;
    }>;
    listMine(userId: string): Promise<{
        organized: {
            id: string;
            status: EventStatus;
            title: string;
            startsAt: Date;
            capacity: number;
            _count: {
                requests: number;
            };
        }[];
        joined: {
            id: string;
            status: EventStatus;
            title: string;
            locationLabel: string;
            startsAt: Date;
        }[];
    }>;
    listRequests(organizerId: string, eventId: string): Promise<{
        id: string;
        status: EventRequestStatus;
        message: string | null;
        createdAt: Date;
        applicant: {
            userId: string;
            firstName: string | null;
            gender: Gender | null;
            isVerified: boolean;
            photo: {
                id: string;
                position: number;
                status: PhotoStatus;
                rejectionReason: string | null;
                width: number | null;
                height: number | null;
                urls: {
                    [k: string]: string;
                } | null;
            } | null;
        };
    }[]>;
    createCoverUploadTicket(userId: string, eventId: string, contentType: string, contentLength: number): Promise<{
        uploadKey: string;
        uploadUrl: string;
        expiresIn: number;
    }>;
    confirmCover(userId: string, eventId: string, uploadKey: string): Promise<{
        status: 'PROCESSING';
    }>;
    private coverSourceKey;
    promote(userId: string, eventId: string): Promise<{
        promoted: boolean;
        cost: number;
        balance: number;
    }>;
    setSponsor(eventId: string, input: {
        isSponsored: boolean;
        sponsorName?: string;
    }): Promise<{
        id: string;
        isSponsored: boolean;
        sponsorName: string | null;
    }>;
    sendReminders(): Promise<{
        events: number;
        notified: number;
    }>;
    private enforceQuota;
    private isFull;
    private hydrate;
    private seatsFor;
    private organizerReputation;
    private resolveCity;
}
