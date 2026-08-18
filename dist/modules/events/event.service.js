"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var EventService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventService = exports.EVENT_PROMOTION_COST = void 0;
const bullmq_1 = require("@nestjs/bullmq");
const common_1 = require("@nestjs/common");
const bullmq_2 = require("bullmq");
const node_crypto_1 = require("node:crypto");
const enums_1 = require("../../generated/prisma/enums");
const prisma_service_1 = require("../../core/prisma/prisma.service");
const redis_service_1 = require("../../core/redis/redis.service");
const storage_service_1 = require("../../core/storage/storage.service");
const queue_module_1 = require("../../core/queue/queue.module");
const media_service_1 = require("../media/media.service");
const credit_ledger_service_1 = require("../billing/credit-ledger.service");
const entitlement_service_1 = require("../billing/entitlement.service");
const notification_service_1 = require("../notifications/notification.service");
const MONTHLY_QUOTA = {
    FREE: 1,
    PLUS: 1,
    GOLD: 3,
};
const CHECKIN_RADIUS_M = 500;
const COVER_TYPES = new Set([
    'image/jpeg',
    'image/png',
    'image/webp',
    'image/heic',
    'image/heif',
]);
const MAX_COVER_BYTES = 8 * 1024 * 1024;
exports.EVENT_PROMOTION_COST = 800;
const PROMOTED_RADIUS_FACTOR = 3;
const REMINDER_LEAD_MS = 2 * 3_600_000;
const REMINDER_WINDOW_MS = 15 * 60_000;
let EventService = EventService_1 = class EventService {
    prisma;
    redis;
    media;
    storage;
    ledger;
    entitlements;
    notifications;
    mediaQueue;
    logger = new common_1.Logger(EventService_1.name);
    constructor(prisma, redis, media, storage, ledger, entitlements, notifications, mediaQueue) {
        this.prisma = prisma;
        this.redis = redis;
        this.media = media;
        this.storage = storage;
        this.ledger = ledger;
        this.entitlements = entitlements;
        this.notifications = notifications;
        this.mediaQueue = mediaQueue;
    }
    async create(userId, input) {
        const profile = await this.prisma.profile.findUnique({
            where: { userId },
            select: { isVerified: true },
        });
        if (!profile?.isVerified) {
            throw new common_1.ForbiddenException('Seuls les profils vérifiés peuvent créer un événement');
        }
        if (input.startsAt <= new Date()) {
            throw new common_1.BadRequestException('La date doit être dans le futur');
        }
        if (input.endsAt && input.endsAt <= input.startsAt) {
            throw new common_1.BadRequestException('La fin doit suivre le début');
        }
        const seats = (input.seatsWomen ?? 0) + (input.seatsMen ?? 0);
        if (seats > input.capacity) {
            throw new common_1.BadRequestException('La répartition par genre dépasse la capacité');
        }
        await this.enforceQuota(userId);
        const city = await this.resolveCity(input.latitude, input.longitude);
        const event = await this.prisma.$transaction(async (tx) => {
            const created = await tx.event.create({
                data: {
                    organizerId: userId,
                    title: input.title.trim(),
                    description: input.description.trim(),
                    category: input.category,
                    cityId: city?.id,
                    latitude: input.latitude,
                    longitude: input.longitude,
                    locationLabel: input.locationLabel.trim(),
                    startsAt: input.startsAt,
                    endsAt: input.endsAt,
                    capacity: input.capacity,
                    seatsWomen: input.seatsWomen,
                    seatsMen: input.seatsMen,
                    costAmount: input.costAmount,
                    currencyCode: input.costAmount ? 'XAF' : null,
                    status: enums_1.EventStatus.PENDING_REVIEW,
                },
            });
            await tx.conversation.create({
                data: {
                    type: enums_1.ConversationType.EVENT,
                    eventId: created.id,
                    participants: { create: [{ userId }] },
                },
            });
            await tx.moderationTask.create({
                data: {
                    type: enums_1.ModerationTaskType.EVENT_REVIEW,
                    eventId: created.id,
                    subjectUserId: userId,
                    priority: 30,
                },
            });
            return created;
        });
        this.logger.log(`Événement ${event.id} créé par ${userId}`);
        return this.detail(userId, event.id);
    }
    async listNearby(userId, options = {}) {
        const profile = await this.prisma.profile.findUnique({
            where: { userId },
            select: {
                discoveryLatitude: true,
                discoveryLongitude: true,
                gender: true,
            },
        });
        if (!profile?.discoveryLatitude || !profile.discoveryLongitude) {
            return [];
        }
        const limit = Math.min(options.limit ?? 20, 50);
        const category = options.category ?? null;
        for (const radiusKm of [options.radiusKm ?? 50, 100, 200, 1_500]) {
            const rows = await this.prisma.$queryRaw `
        SELECT
          e.id,
          ROUND((ST_Distance(
            ST_SetSRID(ST_MakePoint(e.longitude, e.latitude), 4326)::geography,
            ST_SetSRID(ST_MakePoint(${profile.discoveryLongitude}::float8, ${profile.discoveryLatitude}::float8), 4326)::geography
          ) / 1000)::numeric, 1)::float8 AS "distanceKm"
        FROM events e
        WHERE e.status = 'PUBLISHED'
          AND e."startsAt" > now()
          AND e."organizerId" <> ${userId}::uuid
          AND (${category}::"event_category" IS NULL OR e.category = ${category}::"event_category")
          -- Un événement mis en avant porte plus loin. C'est exactement ce
          -- qui est vendu : sans cet élargissement, la promotion ne changerait
          -- que l'ordre d'une liste où l'événement figurait déjà.
          AND ST_DWithin(
            ST_SetSRID(ST_MakePoint(e.longitude, e.latitude), 4326)::geography,
            ST_SetSRID(ST_MakePoint(${profile.discoveryLongitude}::float8, ${profile.discoveryLatitude}::float8), 4326)::geography,
            -- Les deux distances sont explicitement typées : dans une
            -- expression CASE, PostgreSQL infère « text » pour un paramètre
            -- nu, et ST_DWithin n'a pas de variante qui l'accepte.
            CASE
              WHEN e."isPromoted"
                THEN ${radiusKm * 1_000 * PROMOTED_RADIUS_FACTOR}::float8
              ELSE ${radiusKm * 1_000}::float8
            END
          )
          -- Organisateurs bloqués, dans les deux sens.
          AND NOT EXISTS (
            SELECT 1 FROM blocks b
            WHERE (b."blockerId" = ${userId}::uuid AND b."blockedId" = e."organizerId")
               OR (b."blockerId" = e."organizerId" AND b."blockedId" = ${userId}::uuid)
          )
        ORDER BY e."isPromoted" DESC, e."startsAt" ASC
        LIMIT ${limit}
      `;
            if (rows.length > 0 || radiusKm === 1_500) {
                return this.hydrate(rows.map((r) => r.id), new Map(rows.map((r) => [r.id, r.distanceKm])), profile.gender);
            }
        }
        return [];
    }
    async detail(userId, eventId) {
        const event = await this.prisma.event.findUnique({
            where: { id: eventId },
            include: {
                city: { select: { name: true, region: true } },
                organizer: {
                    select: {
                        id: true,
                        profile: {
                            select: {
                                firstName: true,
                                isVerified: true,
                                photos: {
                                    where: { deletedAt: null, status: enums_1.PhotoStatus.APPROVED },
                                    orderBy: { position: 'asc' },
                                    take: 1,
                                },
                            },
                        },
                    },
                },
                requests: {
                    where: { status: enums_1.EventRequestStatus.ACCEPTED },
                    select: {
                        userId: true,
                        user: {
                            select: {
                                profile: { select: { firstName: true, gender: true } },
                            },
                        },
                    },
                },
                conversation: { select: { id: true } },
            },
        });
        if (!event)
            throw new common_1.NotFoundException('Événement introuvable');
        const myRequest = await this.prisma.eventRequest.findUnique({
            where: { eventId_userId: { eventId, userId } },
            select: { status: true, createdAt: true },
        });
        const accepted = event.requests.length;
        const isOrganizer = event.organizerId === userId;
        const isParticipant = isOrganizer || myRequest?.status === enums_1.EventRequestStatus.ACCEPTED;
        const reputation = await this.organizerReputation(event.organizerId);
        return {
            id: event.id,
            title: event.title,
            description: event.description,
            category: event.category,
            status: event.status,
            startsAt: event.startsAt,
            endsAt: event.endsAt,
            capacity: event.capacity,
            seatsWomen: event.seatsWomen,
            seatsMen: event.seatsMen,
            seatsTaken: accepted,
            seatsLeft: Math.max(0, event.capacity - accepted),
            costAmount: event.costAmount,
            currencyCode: event.currencyCode,
            city: event.city,
            locationLabel: isParticipant ? event.locationLabel : null,
            isSponsored: event.isSponsored,
            sponsorName: event.sponsorName,
            isPromoted: event.isPromoted,
            coverUrl: event.coverKey
                ? this.storage.publicUrlFor(event.coverKey)
                : null,
            organizer: {
                userId: event.organizer.id,
                firstName: event.organizer.profile?.firstName ?? null,
                isVerified: event.organizer.profile?.isVerified ?? false,
                photo: event.organizer.profile?.photos[0]
                    ? this.media.toDto(event.organizer.profile.photos[0])
                    : null,
                ...reputation,
            },
            participants: isParticipant
                ? event.requests.map((r) => ({
                    userId: r.userId,
                    firstName: r.user.profile?.firstName ?? null,
                }))
                : null,
            conversationId: isParticipant ? (event.conversation?.id ?? null) : null,
            myRequest,
            isOrganizer,
        };
    }
    async requestToJoin(userId, eventId, message) {
        const event = await this.prisma.event.findUnique({
            where: { id: eventId },
            select: {
                id: true,
                organizerId: true,
                status: true,
                capacity: true,
                seatsWomen: true,
                seatsMen: true,
                startsAt: true,
            },
        });
        if (!event || event.status !== enums_1.EventStatus.PUBLISHED) {
            throw new common_1.NotFoundException('Événement introuvable');
        }
        if (event.organizerId === userId) {
            throw new common_1.BadRequestException('Vous organisez cet événement');
        }
        if (event.startsAt <= new Date()) {
            throw new common_1.BadRequestException('Cet événement a déjà commencé');
        }
        const existing = await this.prisma.eventRequest.findUnique({
            where: { eventId_userId: { eventId, userId } },
            select: { status: true },
        });
        if (existing && existing.status !== enums_1.EventRequestStatus.CANCELLED) {
            throw new common_1.BadRequestException('Vous avez déjà postulé');
        }
        const full = await this.isFull(event, userId);
        const request = await this.prisma.eventRequest.upsert({
            where: { eventId_userId: { eventId, userId } },
            create: {
                eventId,
                userId,
                message: message?.trim(),
                status: full
                    ? enums_1.EventRequestStatus.WAITLISTED
                    : enums_1.EventRequestStatus.PENDING,
            },
            update: {
                message: message?.trim(),
                status: full
                    ? enums_1.EventRequestStatus.WAITLISTED
                    : enums_1.EventRequestStatus.PENDING,
                respondedAt: null,
            },
        });
        const [applicant, eventDetail] = await Promise.all([
            this.prisma.profile.findUnique({
                where: { userId },
                select: { firstName: true },
            }),
            this.prisma.event.findUnique({
                where: { id: eventId },
                select: { title: true },
            }),
        ]);
        await this.notifications.notify({
            userId: event.organizerId,
            type: enums_1.NotificationType.EVENT_REQUEST,
            vars: {
                firstName: applicant?.firstName ?? 'Quelqu’un',
                eventTitle: eventDetail?.title ?? 'votre événement',
            },
            data: { screen: 'event-requests', eventId },
        });
        return { status: request.status };
    }
    async respond(organizerId, eventId, requestId, accept) {
        const event = await this.prisma.event.findFirst({
            where: { id: eventId, organizerId },
            include: { conversation: { select: { id: true } } },
        });
        if (!event)
            throw new common_1.NotFoundException('Événement introuvable');
        const request = await this.prisma.eventRequest.findFirst({
            where: { id: requestId, eventId },
            include: { user: { select: { profile: { select: { gender: true } } } } },
        });
        if (!request)
            throw new common_1.NotFoundException('Demande introuvable');
        if (!accept) {
            await this.prisma.eventRequest.update({
                where: { id: requestId },
                data: {
                    status: enums_1.EventRequestStatus.DECLINED,
                    respondedAt: new Date(),
                },
            });
            return { status: enums_1.EventRequestStatus.DECLINED };
        }
        if (await this.isFull(event, request.userId)) {
            throw new common_1.BadRequestException('Plus de place disponible pour cette répartition');
        }
        await this.prisma.$transaction(async (tx) => {
            await tx.eventRequest.update({
                where: { id: requestId },
                data: {
                    status: enums_1.EventRequestStatus.ACCEPTED,
                    respondedAt: new Date(),
                },
            });
            if (event.conversation) {
                await tx.conversationParticipant.upsert({
                    where: {
                        conversationId_userId: {
                            conversationId: event.conversation.id,
                            userId: request.userId,
                        },
                    },
                    create: {
                        conversationId: event.conversation.id,
                        userId: request.userId,
                    },
                    update: { leftAt: null },
                });
            }
            const accepted = await tx.eventRequest.count({
                where: { eventId, status: enums_1.EventRequestStatus.ACCEPTED },
            });
            if (accepted >= event.capacity) {
                await tx.event.update({
                    where: { id: eventId },
                    data: { status: enums_1.EventStatus.FULL },
                });
            }
        });
        await this.notifications.notify({
            userId: request.userId,
            type: enums_1.NotificationType.EVENT_ACCEPTED,
            vars: { eventTitle: event.title },
            data: {
                screen: 'event',
                eventId,
                conversationId: event.conversation?.id ?? '',
            },
        });
        return { status: enums_1.EventRequestStatus.ACCEPTED };
    }
    async checkIn(userId, eventId, latitude, longitude) {
        const event = await this.prisma.event.findUnique({
            where: { id: eventId },
            select: {
                id: true,
                latitude: true,
                longitude: true,
                startsAt: true,
                organizerId: true,
            },
        });
        if (!event)
            throw new common_1.NotFoundException('Événement introuvable');
        const isOrganizer = event.organizerId === userId;
        if (!isOrganizer) {
            const request = await this.prisma.eventRequest.findUnique({
                where: { eventId_userId: { eventId, userId } },
                select: { status: true },
            });
            if (request?.status !== enums_1.EventRequestStatus.ACCEPTED) {
                throw new common_1.ForbiddenException('Vous ne participez pas à cet événement');
            }
        }
        const now = Date.now();
        const start = event.startsAt.getTime();
        if (now < start - 2 * 3_600_000 || now > start + 6 * 3_600_000) {
            throw new common_1.BadRequestException('Le pointage n’est possible qu’autour de l’heure de l’événement');
        }
        const rows = await this.prisma.$queryRaw `
      SELECT ST_Distance(
        ST_SetSRID(ST_MakePoint(${event.longitude}::float8, ${event.latitude}::float8), 4326)::geography,
        ST_SetSRID(ST_MakePoint(${longitude}::float8, ${latitude}::float8), 4326)::geography
      )::float8 AS distance
    `;
        const distanceM = Math.round(rows[0]?.distance ?? Number.MAX_SAFE_INTEGER);
        if (distanceM > CHECKIN_RADIUS_M) {
            throw new common_1.BadRequestException(`Vous êtes à ${distanceM} m du lieu. Rapprochez-vous pour pointer.`);
        }
        await this.prisma.eventCheckIn.upsert({
            where: { eventId_userId: { eventId, userId } },
            create: { eventId, userId, latitude, longitude, distanceM },
            update: { latitude, longitude, distanceM, checkedInAt: new Date() },
        });
        return { checkedIn: true, distanceM };
    }
    async cancel(organizerId, eventId, reason) {
        const event = await this.prisma.event.findFirst({
            where: { id: eventId, organizerId },
            include: { conversation: { select: { id: true } } },
        });
        if (!event)
            throw new common_1.NotFoundException('Événement introuvable');
        if (event.status === enums_1.EventStatus.CANCELLED) {
            throw new common_1.BadRequestException('Événement déjà annulé');
        }
        await this.prisma.$transaction(async (tx) => {
            await tx.event.update({
                where: { id: eventId },
                data: { status: enums_1.EventStatus.CANCELLED, cancelledAt: new Date() },
            });
            await tx.eventRequest.updateMany({
                where: { eventId, status: { in: ['PENDING', 'WAITLISTED'] } },
                data: { status: enums_1.EventRequestStatus.CANCELLED },
            });
            if (event.conversation) {
                await tx.message.create({
                    data: {
                        conversationId: event.conversation.id,
                        senderId: organizerId,
                        type: 'SYSTEM',
                        clientKey: `cancel-${eventId}`,
                        body: reason
                            ? `Événement annulé : ${reason}`
                            : 'Événement annulé par l’organisateur',
                    },
                });
            }
        });
        return { cancelled: true };
    }
    async listMine(userId) {
        const [organized, joined] = await Promise.all([
            this.prisma.event.findMany({
                where: { organizerId: userId, status: { not: enums_1.EventStatus.CANCELLED } },
                orderBy: { startsAt: 'asc' },
                select: {
                    id: true,
                    title: true,
                    startsAt: true,
                    status: true,
                    capacity: true,
                    _count: { select: { requests: true } },
                },
            }),
            this.prisma.eventRequest.findMany({
                where: { userId, status: enums_1.EventRequestStatus.ACCEPTED },
                orderBy: { event: { startsAt: 'asc' } },
                select: {
                    status: true,
                    event: {
                        select: {
                            id: true,
                            title: true,
                            startsAt: true,
                            status: true,
                            locationLabel: true,
                        },
                    },
                },
            }),
        ]);
        return { organized, joined: joined.map((r) => r.event) };
    }
    async listRequests(organizerId, eventId) {
        const event = await this.prisma.event.findFirst({
            where: { id: eventId, organizerId },
            select: { id: true },
        });
        if (!event)
            throw new common_1.NotFoundException('Événement introuvable');
        const requests = await this.prisma.eventRequest.findMany({
            where: { eventId },
            orderBy: { createdAt: 'asc' },
            select: {
                id: true,
                status: true,
                message: true,
                createdAt: true,
                user: {
                    select: {
                        id: true,
                        profile: {
                            select: {
                                firstName: true,
                                birthdate: true,
                                gender: true,
                                isVerified: true,
                                photos: {
                                    where: { deletedAt: null, status: enums_1.PhotoStatus.APPROVED },
                                    orderBy: { position: 'asc' },
                                    take: 1,
                                },
                            },
                        },
                    },
                },
            },
        });
        return requests.map((request) => ({
            id: request.id,
            status: request.status,
            message: request.message,
            createdAt: request.createdAt,
            applicant: {
                userId: request.user.id,
                firstName: request.user.profile?.firstName ?? null,
                gender: request.user.profile?.gender ?? null,
                isVerified: request.user.profile?.isVerified ?? false,
                photo: request.user.profile?.photos[0]
                    ? this.media.toDto(request.user.profile.photos[0])
                    : null,
            },
        }));
    }
    async createCoverUploadTicket(userId, eventId, contentType, contentLength) {
        if (!COVER_TYPES.has(contentType)) {
            throw new common_1.BadRequestException(`Type de fichier non accepté : ${contentType}`);
        }
        if (contentLength <= 0 || contentLength > MAX_COVER_BYTES) {
            throw new common_1.BadRequestException(`Fichier trop volumineux, ${MAX_COVER_BYTES / 1024 / 1024} Mo maximum`);
        }
        const event = await this.prisma.event.findFirst({
            where: { id: eventId, organizerId: userId },
            select: { id: true, status: true },
        });
        if (!event)
            throw new common_1.NotFoundException('Événement introuvable');
        if (event.status === enums_1.EventStatus.CANCELLED ||
            event.status === enums_1.EventStatus.COMPLETED) {
            throw new common_1.BadRequestException('Cet événement est clos, son affiche ne peut plus changer');
        }
        const uploadKey = this.coverSourceKey(eventId);
        const upload = await this.storage.createUploadUrl(uploadKey, contentType, contentLength);
        return {
            uploadKey,
            uploadUrl: upload.url,
            expiresIn: upload.expiresIn,
        };
    }
    async confirmCover(userId, eventId, uploadKey) {
        const event = await this.prisma.event.findFirst({
            where: { id: eventId, organizerId: userId },
            select: { id: true },
        });
        if (!event)
            throw new common_1.NotFoundException('Événement introuvable');
        if (!uploadKey.startsWith(`events/${eventId}/cover-src-`)) {
            throw new common_1.BadRequestException('Clé de dépôt invalide');
        }
        const meta = await this.storage.head(uploadKey);
        if (!meta || meta.contentLength === 0) {
            throw new common_1.BadRequestException("Le fichier n'a pas été reçu");
        }
        await this.mediaQueue.add('process-event-cover', { eventId, uploadKey });
        return { status: 'PROCESSING' };
    }
    coverSourceKey(eventId) {
        return `events/${eventId}/cover-src-${(0, node_crypto_1.randomUUID)()}`;
    }
    async promote(userId, eventId) {
        const event = await this.prisma.event.findFirst({
            where: { id: eventId, organizerId: userId },
            select: { id: true, status: true, isPromoted: true, startsAt: true },
        });
        if (!event)
            throw new common_1.NotFoundException('Événement introuvable');
        if (event.status !== enums_1.EventStatus.PUBLISHED) {
            throw new common_1.BadRequestException('Seul un événement publié peut être mis en avant');
        }
        if (event.startsAt <= new Date()) {
            throw new common_1.BadRequestException('Cet événement a déjà commencé');
        }
        if (event.isPromoted) {
            throw new common_1.BadRequestException('Cet événement est déjà mis en avant');
        }
        const balance = await this.prisma.$transaction(async (tx) => {
            const remaining = await this.ledger.append(tx, {
                userId,
                delta: -exports.EVENT_PROMOTION_COST,
                reason: enums_1.LedgerReason.SPEND,
                refType: 'event_promotion',
                refId: eventId,
                note: 'Mise en avant d’un événement',
            });
            await tx.event.update({
                where: { id: eventId },
                data: { isPromoted: true },
            });
            return remaining;
        });
        this.logger.log(`Événement ${eventId} mis en avant par ${userId}`);
        return { promoted: true, cost: exports.EVENT_PROMOTION_COST, balance };
    }
    async setSponsor(eventId, input) {
        const event = await this.prisma.event.findUnique({
            where: { id: eventId },
            select: { id: true },
        });
        if (!event)
            throw new common_1.NotFoundException('Événement introuvable');
        if (input.isSponsored && !input.sponsorName?.trim()) {
            throw new common_1.BadRequestException('Le nom du partenaire est obligatoire');
        }
        return this.prisma.event.update({
            where: { id: eventId },
            data: {
                isSponsored: input.isSponsored,
                sponsorName: input.isSponsored ? input.sponsorName.trim() : null,
            },
            select: { id: true, isSponsored: true, sponsorName: true },
        });
    }
    async sendReminders() {
        const from = new Date(Date.now() + REMINDER_LEAD_MS);
        const to = new Date(from.getTime() + REMINDER_WINDOW_MS);
        const events = await this.prisma.event.findMany({
            where: {
                status: enums_1.EventStatus.PUBLISHED,
                startsAt: { gte: from, lt: to },
            },
            select: {
                id: true,
                title: true,
                startsAt: true,
                locationLabel: true,
                organizerId: true,
                requests: {
                    where: { status: enums_1.EventRequestStatus.ACCEPTED },
                    select: { userId: true },
                },
            },
        });
        let notified = 0;
        let processed = 0;
        for (const event of events) {
            const claimed = await this.redis.client.set(`event:reminder:${event.id}`, '1', 'EX', 86_400, 'NX');
            if (claimed !== 'OK')
                continue;
            processed += 1;
            const recipients = [
                event.organizerId,
                ...event.requests.map((r) => r.userId),
            ];
            const when = new Intl.DateTimeFormat('fr-FR', {
                timeZone: 'Africa/Douala',
                hour: '2-digit',
                minute: '2-digit',
            }).format(event.startsAt);
            await this.notifications.notifyMany(recipients.map((userId) => ({
                userId,
                type: enums_1.NotificationType.EVENT_REMINDER,
                vars: {
                    eventTitle: event.title,
                    when: `à ${when}`,
                    place: event.locationLabel,
                },
                data: { screen: 'event', eventId: event.id },
            })));
            notified += recipients.length;
        }
        return { events: processed, notified };
    }
    async enforceQuota(userId) {
        const monthStart = new Date();
        monthStart.setUTCDate(1);
        monthStart.setUTCHours(0, 0, 0, 0);
        const created = await this.prisma.event.count({
            where: {
                organizerId: userId,
                createdAt: { gte: monthStart },
                status: { not: enums_1.EventStatus.CANCELLED },
            },
        });
        const subscription = await this.prisma.subscription.findFirst({
            where: { userId, status: 'ACTIVE', expiresAt: { gt: new Date() } },
            select: { tier: true },
        });
        const quota = MONTHLY_QUOTA[subscription?.tier ?? enums_1.SubscriptionTier.FREE];
        if (created < quota)
            return;
        if (await this.entitlements.consume(userId, enums_1.EntitlementKey.EVENT_CREATION)) {
            return;
        }
        throw new common_1.ForbiddenException(`Vous avez atteint votre quota de ${quota} événement(s) ce mois-ci. Achetez un créneau pour continuer.`);
    }
    async isFull(event, applicantId) {
        const accepted = await this.prisma.eventRequest.findMany({
            where: { eventId: event.id, status: enums_1.EventRequestStatus.ACCEPTED },
            select: { user: { select: { profile: { select: { gender: true } } } } },
        });
        if (accepted.length >= event.capacity)
            return true;
        if (event.seatsWomen === null && event.seatsMen === null)
            return false;
        const applicant = await this.prisma.profile.findUnique({
            where: { userId: applicantId },
            select: { gender: true },
        });
        if (!applicant)
            return true;
        const countBy = (gender) => accepted.filter((r) => r.user.profile?.gender === gender).length;
        if (applicant.gender === enums_1.Gender.WOMAN && event.seatsWomen !== null) {
            return countBy(enums_1.Gender.WOMAN) >= event.seatsWomen;
        }
        if (applicant.gender === enums_1.Gender.MAN && event.seatsMen !== null) {
            return countBy(enums_1.Gender.MAN) >= event.seatsMen;
        }
        return false;
    }
    async hydrate(ids, distances, viewerGender) {
        if (ids.length === 0)
            return [];
        const events = await this.prisma.event.findMany({
            where: { id: { in: ids } },
            include: {
                city: { select: { name: true, region: true } },
                organizer: {
                    select: {
                        profile: { select: { firstName: true, isVerified: true } },
                    },
                },
                requests: {
                    where: { status: enums_1.EventRequestStatus.ACCEPTED },
                    select: {
                        user: { select: { profile: { select: { gender: true } } } },
                    },
                },
            },
        });
        const byId = new Map(events.map((e) => [e.id, e]));
        return ids
            .map((id) => byId.get(id))
            .filter((event) => event !== undefined)
            .map((event) => {
            const accepted = event.requests.length;
            const acceptedWomen = event.requests.filter((r) => r.user.profile?.gender === enums_1.Gender.WOMAN).length;
            const acceptedMen = event.requests.filter((r) => r.user.profile?.gender === enums_1.Gender.MAN).length;
            return {
                id: event.id,
                title: event.title,
                description: event.description.slice(0, 200),
                category: event.category,
                startsAt: event.startsAt,
                capacity: event.capacity,
                seatsTaken: accepted,
                seatsLeft: Math.max(0, event.capacity - accepted),
                seatsWomenLeft: event.seatsWomen === null
                    ? null
                    : Math.max(0, event.seatsWomen - acceptedWomen),
                seatsMenLeft: event.seatsMen === null
                    ? null
                    : Math.max(0, event.seatsMen - acceptedMen),
                seatsLeftForMe: this.seatsFor(viewerGender, {
                    capacity: event.capacity,
                    accepted,
                    acceptedWomen,
                    acceptedMen,
                    seatsWomen: event.seatsWomen,
                    seatsMen: event.seatsMen,
                }),
                costAmount: event.costAmount,
                city: event.city,
                distanceKm: distances.get(event.id) ?? null,
                isSponsored: event.isSponsored,
                sponsorName: event.sponsorName,
                isPromoted: event.isPromoted,
                coverUrl: event.coverKey
                    ? this.storage.publicUrlFor(event.coverKey)
                    : null,
                organizer: {
                    firstName: event.organizer.profile?.firstName ?? null,
                    isVerified: event.organizer.profile?.isVerified ?? false,
                },
            };
        });
    }
    seatsFor(gender, event) {
        const global = Math.max(0, event.capacity - event.accepted);
        if (gender === enums_1.Gender.WOMAN && event.seatsWomen !== null) {
            return Math.min(global, Math.max(0, event.seatsWomen - event.acceptedWomen));
        }
        if (gender === enums_1.Gender.MAN && event.seatsMen !== null) {
            return Math.min(global, Math.max(0, event.seatsMen - event.acceptedMen));
        }
        return global;
    }
    async organizerReputation(organizerId) {
        const now = new Date();
        const past = {
            organizerId,
            publishedAt: { not: null },
            startsAt: { lt: now },
        };
        const [hosted, attended, cancelled] = await Promise.all([
            this.prisma.event.count({
                where: { ...past, status: { not: enums_1.EventStatus.CANCELLED } },
            }),
            this.prisma.eventCheckIn.count({
                where: { userId: organizerId, event: past },
            }),
            this.prisma.event.count({
                where: {
                    organizerId,
                    publishedAt: { not: null },
                    status: enums_1.EventStatus.CANCELLED,
                },
            }),
        ]);
        return {
            hostedCount: hosted,
            cancelledCount: cancelled,
            showUpRate: hosted === 0
                ? null
                : Math.round((Math.min(attended, hosted) / hosted) * 100),
        };
    }
    async resolveCity(latitude, longitude) {
        const rows = await this.prisma.$queryRaw `
      SELECT id, name FROM cities
      WHERE "isActive" = true
        AND ST_DWithin(
          ST_SetSRID(ST_MakePoint(longitude, latitude), 4326)::geography,
          ST_SetSRID(ST_MakePoint(${longitude}, ${latitude}), 4326)::geography,
          "radiusKm" * 1000
        )
      ORDER BY ST_Distance(
        ST_SetSRID(ST_MakePoint(longitude, latitude), 4326)::geography,
        ST_SetSRID(ST_MakePoint(${longitude}, ${latitude}), 4326)::geography
      )
      LIMIT 1
    `;
        return rows[0] ?? null;
    }
};
exports.EventService = EventService;
exports.EventService = EventService = EventService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(7, (0, bullmq_1.InjectQueue)(queue_module_1.QUEUES.MEDIA)),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        redis_service_1.RedisService,
        media_service_1.MediaService,
        storage_service_1.StorageService,
        credit_ledger_service_1.CreditLedgerService,
        entitlement_service_1.EntitlementService,
        notification_service_1.NotificationService,
        bullmq_2.Queue])
], EventService);
//# sourceMappingURL=event.service.js.map