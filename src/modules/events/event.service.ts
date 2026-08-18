import { InjectQueue } from '@nestjs/bullmq';
import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { Queue } from 'bullmq';
import { randomUUID } from 'node:crypto';
import {
  ConversationType,
  EntitlementKey,
  EventCategory,
  EventRequestStatus,
  EventStatus,
  Gender,
  LedgerReason,
  ModerationTaskType,
  NotificationType,
  PhotoStatus,
  SubscriptionTier,
} from '../../generated/prisma/enums';
import { PrismaService } from '../../core/prisma/prisma.service';
import { RedisService } from '../../core/redis/redis.service';
import { StorageService } from '../../core/storage/storage.service';
import { QUEUES } from '../../core/queue/queue.module';
import { MediaService } from '../media/media.service';
import { CreditLedgerService } from '../billing/credit-ledger.service';
import { EntitlementService } from '../billing/entitlement.service';
import { NotificationService } from '../notifications/notification.service';

/** Événements créés par mois, selon la formule. */
const MONTHLY_QUOTA: Record<SubscriptionTier, number> = {
  FREE: 1,
  PLUS: 1,
  GOLD: 3,
};

/** Distance maximale acceptée pour un pointage sur place, en mètres. */
const CHECKIN_RADIUS_M = 500;

/** Formats acceptés pour l'affiche d'un événement. */
const COVER_TYPES = new Set([
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/heic',
  'image/heif',
]);

/** Taille maximale de l'affiche déposée, avant traitement. */
const MAX_COVER_BYTES = 8 * 1024 * 1024;

/**
 * Coût d'une mise en avant, en pièces.
 *
 * Facturée une fois pour toute la vie de l'événement, et non à la durée comme
 * un boost de profil : un événement a une date, sa fenêtre d'intérêt est déjà
 * bornée par elle.
 */
export const EVENT_PROMOTION_COST = 800;

/** Multiplicateur de rayon accordé à un événement mis en avant. */
const PROMOTED_RADIUS_FACTOR = 3;

/** Délai entre le rappel et le début de l'événement. */
const REMINDER_LEAD_MS = 2 * 3_600_000;

/** Largeur de la fenêtre balayée à chaque passage du planificateur. */
const REMINDER_WINDOW_MS = 15 * 60_000;

@Injectable()
export class EventService {
  private readonly logger = new Logger(EventService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly redis: RedisService,
    private readonly media: MediaService,
    private readonly storage: StorageService,
    private readonly ledger: CreditLedgerService,
    private readonly entitlements: EntitlementService,
    private readonly notifications: NotificationService,
    @InjectQueue(QUEUES.MEDIA) private readonly mediaQueue: Queue,
  ) {}

  /**
   * Crée un événement.
   *
   * Réservé aux profils vérifiés, et c'est le levier principal d'adoption de
   * la vérification : rendre le badge nécessaire pour organiser vaut mieux que
   * de l'imposer à l'inscription, où il ferait fuir.
   *
   * L'événement de groupe répond au vrai point de fuite du produit — les
   * conversations qui meurent avant le rendez-vous. Un groupe est bien moins
   * engageant qu'un tête-à-tête, donc bien plus souvent honoré, et nettement
   * plus sûr, ce qui protège la rétention féminine.
   */
  async create(
    userId: string,
    input: {
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
    },
  ) {
    const profile = await this.prisma.profile.findUnique({
      where: { userId },
      select: { isVerified: true },
    });

    if (!profile?.isVerified) {
      throw new ForbiddenException(
        'Seuls les profils vérifiés peuvent créer un événement',
      );
    }

    if (input.startsAt <= new Date()) {
      throw new BadRequestException('La date doit être dans le futur');
    }

    if (input.endsAt && input.endsAt <= input.startsAt) {
      throw new BadRequestException('La fin doit suivre le début');
    }

    const seats = (input.seatsWomen ?? 0) + (input.seatsMen ?? 0);

    if (seats > input.capacity) {
      throw new BadRequestException(
        'La répartition par genre dépasse la capacité',
      );
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
          status: EventStatus.PENDING_REVIEW,
        },
      });

      // Conversation de groupe créée avec l'événement, l'organisateur seul
      // dedans pour l'instant. La créer à la première acceptation ouvrirait la
      // porte à deux conversations concurrentes.
      await tx.conversation.create({
        data: {
          type: ConversationType.EVENT,
          eventId: created.id,
          participants: { create: [{ userId }] },
        },
      });

      // Un rassemblement physique organisé par un inconnu passe par la
      // modération : c'est le seul moment où l'on peut encore intervenir.
      await tx.moderationTask.create({
        data: {
          type: ModerationTaskType.EVENT_REVIEW,
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

  /**
   * Événements à proximité.
   *
   * Même logique de rayon adaptatif que le deck : hors des grandes villes, un
   * rayon serré ne renvoie rien, et une liste vide décourage définitivement.
   */
  async listNearby(
    userId: string,
    options: {
      radiusKm?: number;
      category?: EventCategory;
      limit?: number;
    } = {},
  ) {
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
    // La catégorie est filtrée dans la requête, pas après. Filtrer le résultat
    // reviendrait à prendre les vingt événements les plus proches puis à n'en
    // garder que les sportifs : une liste vide alors que des randonnées
    // existent trois kilomètres plus loin.
    const category = options.category ?? null;

    for (const radiusKm of [options.radiusKm ?? 50, 100, 200, 1_500]) {
      const rows = await this.prisma.$queryRaw<
        { id: string; distanceKm: number }[]
      >`
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
        return this.hydrate(
          rows.map((r) => r.id),
          new Map(rows.map((r) => [r.id, r.distanceKm])),
          profile.gender,
        );
      }
    }

    return [];
  }

  async detail(userId: string, eventId: string) {
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
                  where: { deletedAt: null, status: PhotoStatus.APPROVED },
                  orderBy: { position: 'asc' },
                  take: 1,
                },
              },
            },
          },
        },
        requests: {
          where: { status: EventRequestStatus.ACCEPTED },
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

    if (!event) throw new NotFoundException('Événement introuvable');

    const myRequest = await this.prisma.eventRequest.findUnique({
      where: { eventId_userId: { eventId, userId } },
      select: { status: true, createdAt: true },
    });

    const accepted = event.requests.length;
    const isOrganizer = event.organizerId === userId;
    const isParticipant =
      isOrganizer || myRequest?.status === EventRequestStatus.ACCEPTED;

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
      // L'adresse précise n'est révélée qu'aux personnes acceptées. La
      // divulguer publiquement permettrait de se poster à un rendez-vous sans
      // y avoir été invité.
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

  /**
   * Demande à rejoindre.
   *
   * L'organisateur tranche : c'est ce qui rend le dispositif acceptable pour
   * les femmes, qui autrement se retrouveraient dans un groupe constitué sans
   * elles et rempli en quelques minutes.
   */
  async requestToJoin(userId: string, eventId: string, message?: string) {
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

    if (!event || event.status !== EventStatus.PUBLISHED) {
      throw new NotFoundException('Événement introuvable');
    }

    if (event.organizerId === userId) {
      throw new BadRequestException('Vous organisez cet événement');
    }

    if (event.startsAt <= new Date()) {
      throw new BadRequestException('Cet événement a déjà commencé');
    }

    const existing = await this.prisma.eventRequest.findUnique({
      where: { eventId_userId: { eventId, userId } },
      select: { status: true },
    });

    if (existing && existing.status !== EventRequestStatus.CANCELLED) {
      throw new BadRequestException('Vous avez déjà postulé');
    }

    const full = await this.isFull(event, userId);

    const request = await this.prisma.eventRequest.upsert({
      where: { eventId_userId: { eventId, userId } },
      create: {
        eventId,
        userId,
        message: message?.trim(),
        status: full
          ? EventRequestStatus.WAITLISTED
          : EventRequestStatus.PENDING,
      },
      update: {
        message: message?.trim(),
        status: full
          ? EventRequestStatus.WAITLISTED
          : EventRequestStatus.PENDING,
        respondedAt: null,
      },
    });

    // Sans cette notification, l'organisateur découvrirait la demande en
    // ouvrant l'application par hasard — et une candidature qui reste sans
    // réponse trois jours ne se transforme jamais en participation.
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
      type: NotificationType.EVENT_REQUEST,
      vars: {
        firstName: applicant?.firstName ?? 'Quelqu’un',
        eventTitle: eventDetail?.title ?? 'votre événement',
      },
      data: { screen: 'event-requests', eventId },
    });

    return { status: request.status };
  }

  /** L'organisateur répond à une demande. */
  async respond(
    organizerId: string,
    eventId: string,
    requestId: string,
    accept: boolean,
  ) {
    const event = await this.prisma.event.findFirst({
      where: { id: eventId, organizerId },
      include: { conversation: { select: { id: true } } },
    });

    if (!event) throw new NotFoundException('Événement introuvable');

    const request = await this.prisma.eventRequest.findFirst({
      where: { id: requestId, eventId },
      include: { user: { select: { profile: { select: { gender: true } } } } },
    });

    if (!request) throw new NotFoundException('Demande introuvable');

    if (!accept) {
      await this.prisma.eventRequest.update({
        where: { id: requestId },
        data: {
          status: EventRequestStatus.DECLINED,
          respondedAt: new Date(),
        },
      });
      return { status: EventRequestStatus.DECLINED };
    }

    if (await this.isFull(event, request.userId)) {
      throw new BadRequestException(
        'Plus de place disponible pour cette répartition',
      );
    }

    await this.prisma.$transaction(async (tx) => {
      await tx.eventRequest.update({
        where: { id: requestId },
        data: {
          status: EventRequestStatus.ACCEPTED,
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
        where: { eventId, status: EventRequestStatus.ACCEPTED },
      });

      if (accepted >= event.capacity) {
        await tx.event.update({
          where: { id: eventId },
          data: { status: EventStatus.FULL },
        });
      }
    });

    await this.notifications.notify({
      userId: request.userId,
      type: NotificationType.EVENT_ACCEPTED,
      vars: { eventTitle: event.title },
      data: {
        screen: 'event',
        eventId,
        conversationId: event.conversation?.id ?? '',
      },
    });

    return { status: EventRequestStatus.ACCEPTED };
  }

  /**
   * Pointage sur place.
   *
   * Contrôlé par géolocalisation : il alimente la réputation d'organisateur et
   * pénalise les absences. Sans lui, rien ne distingue un événement réel d'une
   * annonce jamais honorée.
   */
  async checkIn(
    userId: string,
    eventId: string,
    latitude: number,
    longitude: number,
  ) {
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

    if (!event) throw new NotFoundException('Événement introuvable');

    const isOrganizer = event.organizerId === userId;

    if (!isOrganizer) {
      const request = await this.prisma.eventRequest.findUnique({
        where: { eventId_userId: { eventId, userId } },
        select: { status: true },
      });

      if (request?.status !== EventRequestStatus.ACCEPTED) {
        throw new ForbiddenException('Vous ne participez pas à cet événement');
      }
    }

    // Fenêtre de deux heures avant et six heures après : pointer la veille ne
    // prouve rien.
    const now = Date.now();
    const start = event.startsAt.getTime();

    if (now < start - 2 * 3_600_000 || now > start + 6 * 3_600_000) {
      throw new BadRequestException(
        'Le pointage n’est possible qu’autour de l’heure de l’événement',
      );
    }

    const rows = await this.prisma.$queryRaw<{ distance: number }[]>`
      SELECT ST_Distance(
        ST_SetSRID(ST_MakePoint(${event.longitude}::float8, ${event.latitude}::float8), 4326)::geography,
        ST_SetSRID(ST_MakePoint(${longitude}::float8, ${latitude}::float8), 4326)::geography
      )::float8 AS distance
    `;

    const distanceM = Math.round(rows[0]?.distance ?? Number.MAX_SAFE_INTEGER);

    if (distanceM > CHECKIN_RADIUS_M) {
      throw new BadRequestException(
        `Vous êtes à ${distanceM} m du lieu. Rapprochez-vous pour pointer.`,
      );
    }

    await this.prisma.eventCheckIn.upsert({
      where: { eventId_userId: { eventId, userId } },
      create: { eventId, userId, latitude, longitude, distanceM },
      update: { latitude, longitude, distanceM, checkedInAt: new Date() },
    });

    return { checkedIn: true, distanceM };
  }

  /** Annule l'événement et prévient le groupe. */
  async cancel(organizerId: string, eventId: string, reason?: string) {
    const event = await this.prisma.event.findFirst({
      where: { id: eventId, organizerId },
      include: { conversation: { select: { id: true } } },
    });

    if (!event) throw new NotFoundException('Événement introuvable');

    if (event.status === EventStatus.CANCELLED) {
      throw new BadRequestException('Événement déjà annulé');
    }

    await this.prisma.$transaction(async (tx) => {
      await tx.event.update({
        where: { id: eventId },
        data: { status: EventStatus.CANCELLED, cancelledAt: new Date() },
      });

      await tx.eventRequest.updateMany({
        where: { eventId, status: { in: ['PENDING', 'WAITLISTED'] } },
        data: { status: EventRequestStatus.CANCELLED },
      });

      // La conversation reste ouverte : les participants doivent pouvoir
      // s'organiser autrement, et la fermer les laisserait sans recours.
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

  /** Événements créés et rejoints. */
  async listMine(userId: string) {
    const [organized, joined] = await Promise.all([
      this.prisma.event.findMany({
        where: { organizerId: userId, status: { not: EventStatus.CANCELLED } },
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
        where: { userId, status: EventRequestStatus.ACCEPTED },
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

  /** Demandes reçues, pour l'écran de l'organisateur. */
  async listRequests(organizerId: string, eventId: string) {
    const event = await this.prisma.event.findFirst({
      where: { id: eventId, organizerId },
      select: { id: true },
    });

    if (!event) throw new NotFoundException('Événement introuvable');

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
                  where: { deletedAt: null, status: PhotoStatus.APPROVED },
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

  // --- Affiche de l'événement ------------------------------------------------

  /**
   * Délivre une URL de dépôt pour l'affiche.
   *
   * Aucune ligne n'est réservée en base, contrairement aux photos de profil :
   * un événement n'a qu'une affiche, la clé de l'ancienne suffit à la
   * remplacer, et un dépôt jamais confirmé ne laisse qu'un objet orphelin que
   * le cycle de vie du bucket balaiera.
   */
  async createCoverUploadTicket(
    userId: string,
    eventId: string,
    contentType: string,
    contentLength: number,
  ): Promise<{ uploadKey: string; uploadUrl: string; expiresIn: number }> {
    if (!COVER_TYPES.has(contentType)) {
      throw new BadRequestException(
        `Type de fichier non accepté : ${contentType}`,
      );
    }

    if (contentLength <= 0 || contentLength > MAX_COVER_BYTES) {
      throw new BadRequestException(
        `Fichier trop volumineux, ${MAX_COVER_BYTES / 1024 / 1024} Mo maximum`,
      );
    }

    const event = await this.prisma.event.findFirst({
      where: { id: eventId, organizerId: userId },
      select: { id: true, status: true },
    });

    if (!event) throw new NotFoundException('Événement introuvable');

    if (
      event.status === EventStatus.CANCELLED ||
      event.status === EventStatus.COMPLETED
    ) {
      throw new BadRequestException(
        'Cet événement est clos, son affiche ne peut plus changer',
      );
    }

    const uploadKey = this.coverSourceKey(eventId);
    const upload = await this.storage.createUploadUrl(
      uploadKey,
      contentType,
      contentLength,
    );

    return {
      uploadKey,
      uploadUrl: upload.url,
      expiresIn: upload.expiresIn,
    };
  }

  /**
   * Confirme le dépôt de l'affiche et lance son traitement.
   *
   * Le traitement part en file : redimensionner puis soumettre l'image à
   * l'analyse de contenu prend plusieurs secondes, et une affiche n'a pas
   * besoin d'apparaître dans la réponse à la requête qui la dépose.
   */
  async confirmCover(
    userId: string,
    eventId: string,
    uploadKey: string,
  ): Promise<{ status: 'PROCESSING' }> {
    const event = await this.prisma.event.findFirst({
      where: { id: eventId, organizerId: userId },
      select: { id: true },
    });

    if (!event) throw new NotFoundException('Événement introuvable');

    // La clé vient du client : sans ce contrôle de préfixe, un organisateur
    // pourrait faire traiter — et publier sous son propre événement —
    // n'importe quel objet du bucket.
    if (!uploadKey.startsWith(`events/${eventId}/cover-src-`)) {
      throw new BadRequestException('Clé de dépôt invalide');
    }

    const meta = await this.storage.head(uploadKey);

    if (!meta || meta.contentLength === 0) {
      throw new BadRequestException("Le fichier n'a pas été reçu");
    }

    await this.mediaQueue.add('process-event-cover', { eventId, uploadKey });

    return { status: 'PROCESSING' };
  }

  private coverSourceKey(eventId: string): string {
    return `events/${eventId}/cover-src-${randomUUID()}`;
  }

  // --- Mise en avant ---------------------------------------------------------

  /**
   * Met l'événement en avant, aux frais de l'organisateur.
   *
   * Payé en pièces plutôt qu'en argent : le montant est trop faible pour
   * supporter la commission du prestataire de paiement, et l'achat de pièces a
   * déjà lieu en amont.
   */
  async promote(userId: string, eventId: string) {
    const event = await this.prisma.event.findFirst({
      where: { id: eventId, organizerId: userId },
      select: { id: true, status: true, isPromoted: true, startsAt: true },
    });

    if (!event) throw new NotFoundException('Événement introuvable');

    if (event.status !== EventStatus.PUBLISHED) {
      throw new BadRequestException(
        'Seul un événement publié peut être mis en avant',
      );
    }

    if (event.startsAt <= new Date()) {
      throw new BadRequestException('Cet événement a déjà commencé');
    }

    if (event.isPromoted) {
      throw new BadRequestException('Cet événement est déjà mis en avant');
    }

    const balance = await this.prisma.$transaction(async (tx) => {
      const remaining = await this.ledger.append(tx, {
        userId,
        delta: -EVENT_PROMOTION_COST,
        reason: LedgerReason.SPEND,
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

    return { promoted: true, cost: EVENT_PROMOTION_COST, balance };
  }

  /**
   * Rattache un événement à un établissement partenaire.
   *
   * Réservé à l'administration : le nom du sponsor s'affiche à côté du titre,
   * et laisser un organisateur y écrire ce qu'il veut reviendrait à vendre un
   * espace publicitaire gratuitement — au premier faussaire venu.
   */
  async setSponsor(
    eventId: string,
    input: { isSponsored: boolean; sponsorName?: string },
  ) {
    const event = await this.prisma.event.findUnique({
      where: { id: eventId },
      select: { id: true },
    });

    if (!event) throw new NotFoundException('Événement introuvable');

    if (input.isSponsored && !input.sponsorName?.trim()) {
      throw new BadRequestException('Le nom du partenaire est obligatoire');
    }

    return this.prisma.event.update({
      where: { id: eventId },
      data: {
        isSponsored: input.isSponsored,
        sponsorName: input.isSponsored ? input.sponsorName!.trim() : null,
      },
      select: { id: true, isSponsored: true, sponsorName: true },
    });
  }

  // --- Rappels ---------------------------------------------------------------

  /**
   * Prévient les participants des événements imminents.
   *
   * Deux heures avant : assez tôt pour partir, assez tard pour que
   * l'information soit encore utile. C'est le rappel qui transforme une
   * inscription en présence — sans lui, une partie des places acceptées reste
   * vide, et un organisateur qui se retrouve seul ne recommence pas.
   */
  async sendReminders(): Promise<{ events: number; notified: number }> {
    const from = new Date(Date.now() + REMINDER_LEAD_MS);
    const to = new Date(from.getTime() + REMINDER_WINDOW_MS);

    const events = await this.prisma.event.findMany({
      where: {
        status: EventStatus.PUBLISHED,
        startsAt: { gte: from, lt: to },
      },
      select: {
        id: true,
        title: true,
        startsAt: true,
        locationLabel: true,
        organizerId: true,
        requests: {
          where: { status: EventRequestStatus.ACCEPTED },
          select: { userId: true },
        },
      },
    });

    let notified = 0;
    let processed = 0;

    for (const event of events) {
      // Verrou d'idempotence : les fenêtres se recouvrent après un
      // redémarrage, et recevoir deux fois le même rappel donne l'impression
      // que l'application est cassée.
      const claimed = await this.redis.client.set(
        `event:reminder:${event.id}`,
        '1',
        'EX',
        86_400,
        'NX',
      );

      if (claimed !== 'OK') continue;

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

      await this.notifications.notifyMany(
        recipients.map((userId) => ({
          userId,
          type: NotificationType.EVENT_REMINDER,
          vars: {
            eventTitle: event.title,
            when: `à ${when}`,
            place: event.locationLabel,
          },
          data: { screen: 'event', eventId: event.id },
        })),
      );

      notified += recipients.length;
    }

    return { events: processed, notified };
  }

  /**
   * Vérifie le quota mensuel, puis consomme un droit acheté.
   *
   * L'ordre compte : un créneau déjà payé doit être utilisé avant de refuser.
   */
  private async enforceQuota(userId: string): Promise<void> {
    const monthStart = new Date();
    monthStart.setUTCDate(1);
    monthStart.setUTCHours(0, 0, 0, 0);

    const created = await this.prisma.event.count({
      where: {
        organizerId: userId,
        createdAt: { gte: monthStart },
        status: { not: EventStatus.CANCELLED },
      },
    });

    const subscription = await this.prisma.subscription.findFirst({
      where: { userId, status: 'ACTIVE', expiresAt: { gt: new Date() } },
      select: { tier: true },
    });

    const quota = MONTHLY_QUOTA[subscription?.tier ?? SubscriptionTier.FREE];

    if (created < quota) return;

    if (
      await this.entitlements.consume(userId, EntitlementKey.EVENT_CREATION)
    ) {
      return;
    }

    throw new ForbiddenException(
      `Vous avez atteint votre quota de ${quota} événement(s) ce mois-ci. Achetez un créneau pour continuer.`,
    );
  }

  /**
   * Vérifie qu'il reste une place pour cette personne.
   *
   * La répartition par genre est imposée à dessein : sans elle, un événement se
   * remplit d'hommes en quelques minutes et n'a plus de raison d'être.
   */
  private async isFull(
    event: {
      id: string;
      capacity: number;
      seatsWomen: number | null;
      seatsMen: number | null;
    },
    applicantId: string,
  ): Promise<boolean> {
    const accepted = await this.prisma.eventRequest.findMany({
      where: { eventId: event.id, status: EventRequestStatus.ACCEPTED },
      select: { user: { select: { profile: { select: { gender: true } } } } },
    });

    if (accepted.length >= event.capacity) return true;

    if (event.seatsWomen === null && event.seatsMen === null) return false;

    const applicant = await this.prisma.profile.findUnique({
      where: { userId: applicantId },
      select: { gender: true },
    });

    if (!applicant) return true;

    const countBy = (gender: Gender) =>
      accepted.filter((r) => r.user.profile?.gender === gender).length;

    if (applicant.gender === Gender.WOMAN && event.seatsWomen !== null) {
      return countBy(Gender.WOMAN) >= event.seatsWomen;
    }

    if (applicant.gender === Gender.MAN && event.seatsMen !== null) {
      return countBy(Gender.MAN) >= event.seatsMen;
    }

    return false;
  }

  private async hydrate(
    ids: string[],
    distances: Map<string, number>,
    viewerGender: Gender | null,
  ) {
    if (ids.length === 0) return [];

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
          where: { status: EventRequestStatus.ACCEPTED },
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
        const acceptedWomen = event.requests.filter(
          (r) => r.user.profile?.gender === Gender.WOMAN,
        ).length;
        const acceptedMen = event.requests.filter(
          (r) => r.user.profile?.gender === Gender.MAN,
        ).length;

        return {
          id: event.id,
          title: event.title,
          description: event.description.slice(0, 200),
          category: event.category,
          startsAt: event.startsAt,
          capacity: event.capacity,
          seatsTaken: accepted,
          seatsLeft: Math.max(0, event.capacity - accepted),
          seatsWomenLeft:
            event.seatsWomen === null
              ? null
              : Math.max(0, event.seatsWomen - acceptedWomen),
          seatsMenLeft:
            event.seatsMen === null
              ? null
              : Math.max(0, event.seatsMen - acceptedMen),
          // Places réellement accessibles à la personne qui regarde.
          // Sans ce champ, un événement dont les places femmes sont prises
          // est proposé à une femme, qui postule pour rien — la déception
          // arrive après l'effort, ce qui est le pire enchaînement possible.
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

  /**
   * Places restantes pour un genre donné.
   *
   * Les profils non binaires et « autre » retombent sur la capacité globale :
   * leur réserver un quota les enfermerait dans une case, et les exclure des
   * deux quotas les exclurait tout court.
   */
  private seatsFor(
    gender: Gender | null,
    event: {
      capacity: number;
      accepted: number;
      acceptedWomen: number;
      acceptedMen: number;
      seatsWomen: number | null;
      seatsMen: number | null;
    },
  ): number {
    const global = Math.max(0, event.capacity - event.accepted);

    if (gender === Gender.WOMAN && event.seatsWomen !== null) {
      return Math.min(
        global,
        Math.max(0, event.seatsWomen - event.acceptedWomen),
      );
    }

    if (gender === Gender.MAN && event.seatsMen !== null) {
      return Math.min(global, Math.max(0, event.seatsMen - event.acceptedMen));
    }

    return global;
  }

  /**
   * Historique d'organisateur, tel qu'il s'affiche avant de candidater.
   *
   * Le pointage sur place est la seule preuve qu'un événement a réellement eu
   * lieu : l'annonce ne coûte rien à publier, et sans ce compteur rien ne
   * distingue quelqu'un qui organise vraiment de quelqu'un qui collectionne
   * les candidatures.
   */
  private async organizerReputation(organizerId: string): Promise<{
    hostedCount: number;
    cancelledCount: number;
    showUpRate: number | null;
  }> {
    const now = new Date();

    const past = {
      organizerId,
      publishedAt: { not: null },
      startsAt: { lt: now },
    };

    const [hosted, attended, cancelled] = await Promise.all([
      this.prisma.event.count({
        where: { ...past, status: { not: EventStatus.CANCELLED } },
      }),
      this.prisma.eventCheckIn.count({
        where: { userId: organizerId, event: past },
      }),
      this.prisma.event.count({
        where: {
          organizerId,
          publishedAt: { not: null },
          status: EventStatus.CANCELLED,
        },
      }),
    ]);

    return {
      hostedCount: hosted,
      cancelledCount: cancelled,
      // Nul tant que rien n'a eu lieu : afficher « 0 % de présence » à
      // quelqu'un qui organise son premier événement le condamnerait avant
      // même qu'il ait pu faire ses preuves.
      showUpRate:
        hosted === 0
          ? null
          : Math.round((Math.min(attended, hosted) / hosted) * 100),
    };
  }

  private async resolveCity(latitude: number, longitude: number) {
    const rows = await this.prisma.$queryRaw<{ id: string; name: string }[]>`
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
}
