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
var DeckService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeckService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../core/prisma/prisma.service");
const RADIUS_STEPS_KM = [25, 50, 100, 200, 1_500];
const MIN_CANDIDATES = 30;
let DeckService = DeckService_1 = class DeckService {
    prisma;
    logger = new common_1.Logger(DeckService_1.name);
    constructor(prisma) {
        this.prisma = prisma;
    }
    async build(userId, limit = 50) {
        const viewer = await this.loadViewer(userId);
        if (viewer.latitude === null || viewer.longitude === null) {
            return [];
        }
        for (const radiusKm of this.radiusPlan(viewer.maxDistanceKm)) {
            const candidates = await this.query(viewer, radiusKm, limit);
            if (candidates.length >= MIN_CANDIDATES ||
                radiusKm === RADIUS_STEPS_KM.at(-1)) {
                if (radiusKm > viewer.maxDistanceKm) {
                    this.logger.debug(`Deck de ${userId} élargi à ${radiusKm} km (${candidates.length} candidats)`);
                }
                return candidates;
            }
        }
        return [];
    }
    radiusPlan(maxDistanceKm) {
        return [maxDistanceKm, ...RADIUS_STEPS_KM.filter((r) => r > maxDistanceKm)];
    }
    async query(viewer, radiusKm, limit) {
        const radiusMeters = radiusKm * 1_000;
        return this.prisma.$queryRaw `
      WITH viewer AS (
        SELECT ST_SetSRID(
                 ST_MakePoint(${viewer.longitude}::float8, ${viewer.latitude}::float8),
                 4326
               )::geography AS location
      )
      SELECT
        p."userId",
        p."firstName",
        EXTRACT(YEAR FROM AGE(p.birthdate))::int AS "age",
        ROUND((ST_Distance(p."discoveryLocation", v.location) / 1000)::numeric, 1)::float8
          AS "distanceKm",
        p."isVerified",
        (
          -- Activité récente : le facteur le plus lourd. Un profil inactif
          -- depuis trois semaines produit des matchs sans réponse, ce qui use
          -- la confiance dans le produit plus sûrement qu'un deck court.
          GREATEST(
            0,
            1 - EXTRACT(EPOCH FROM (now() - COALESCE(u."lastActiveAt", u."createdAt")))
                / (14 * 86400)
          ) * 40

          -- Complétude : un profil vide dessert celui qui le publie comme
          -- celui à qui on l'impose.
          + p."completionScore" / 100.0 * 20

          -- Vérification : c'est ce qui rend le badge désirable sans jamais
          -- le rendre obligatoire.
          + CASE WHEN p."isVerified" THEN 25 ELSE 0 END

          -- Affinité : trois points par centre d'intérêt commun, plafonnés.
          + LEAST(15, (
              SELECT COUNT(*) * 3
              FROM profile_interests pi
              WHERE pi."profileId" = p."userId"
                AND pi."interestId" = ANY(${viewer.interestIds}::uuid[])
            ))

          -- Boost actif : multiplicateur acheté, appliqué au score.
          + COALESCE((
              SELECT b.multiplier * 10
              FROM boosts b
              WHERE b."userId" = p."userId"
                AND b.status = 'ACTIVE'
                AND b."endAt" > now()
              LIMIT 1
            ), 0)

          -- Pénalité de distance, plafonnée : au-delà, tout se vaut.
          - LEAST(20, ST_Distance(p."discoveryLocation", v.location) / 1000 / 5)
        )::float8 AS "score"

      FROM profiles p
      JOIN users u ON u.id = p."userId"
      CROSS JOIN viewer v

      WHERE
        p."userId" <> ${viewer.userId}::uuid

        -- Seuls les comptes actifs paraissent. Les comptes en shadow ban sont
        -- exclus ici : c'est précisément l'effet recherché, sans que leur
        -- propriétaire puisse s'en apercevoir.
        AND u.status = 'ACTIVE'

        -- Le mode incognito retire le profil des piles, sauf pour les
        -- personnes qu'il a déjà likées — traitées plus bas.
        AND (
          p.incognito = false
          OR EXISTS (
            SELECT 1 FROM swipes s
            WHERE s."actorId" = p."userId"
              AND s."targetId" = ${viewer.userId}::uuid
              AND s.action IN ('LIKE', 'SUPERLIKE')
              AND s."isRewound" = false
          )
        )

        AND p."discoveryLocation" IS NOT NULL
        AND ST_DWithin(p."discoveryLocation", v.location, ${radiusMeters})

        -- Compatibilité de genre, dans les deux sens. Une seule direction
        -- suffirait à imposer un profil à quelqu'un qui ne le cherche pas.
        AND (
          'EVERYONE' = ANY(${viewer.seeking}::"seeking_target"[])
          OR p."matchingBucket"::text = 'EVERYONE'
          OR p."matchingBucket"::text = ANY(
               SELECT unnest(${viewer.seeking}::"seeking_target"[])::text
             )
        )
        AND (
          'EVERYONE' = ANY(p.seeking)
          OR ${viewer.matchingBucket}::text = 'EVERYONE'
          OR ${viewer.matchingBucket}::text = ANY(
               SELECT unnest(p.seeking)::text
             )
        )

        AND EXTRACT(YEAR FROM AGE(p.birthdate)) BETWEEN ${viewer.minAge} AND ${viewer.maxAge}

        AND (${viewer.verifiedOnly}::boolean = false OR p."isVerified" = true)

        -- Un profil sans photo approuvée ne peut pas être jugé : le montrer
        -- gaspille l'attention de tout le monde.
        AND EXISTS (
          SELECT 1 FROM photos ph
          WHERE ph."profileId" = p."userId"
            AND ph.status = 'APPROVED'
            AND ph."deletedAt" IS NULL
        )

        -- Déjà vu. Un swipe annulé ne compte pas : la cible doit revenir.
        AND NOT EXISTS (
          SELECT 1 FROM swipes s
          WHERE s."actorId" = ${viewer.userId}::uuid
            AND s."targetId" = p."userId"
            AND s."isRewound" = false
        )

        -- Blocage, dans les deux sens.
        AND NOT EXISTS (
          SELECT 1 FROM blocks b
          WHERE (b."blockerId" = ${viewer.userId}::uuid AND b."blockedId" = p."userId")
             OR (b."blockerId" = p."userId" AND b."blockedId" = ${viewer.userId}::uuid)
        )

        -- Contacts bloqués : comparaison de condensats, jamais de numéros.
        -- Gratuit et volontairement : croiser son cousin ou son collègue est
        -- un scénario courant ici, et il fait désinstaller.
        AND NOT EXISTS (
          SELECT 1 FROM contact_blocks cb
          WHERE (cb."userId" = ${viewer.userId}::uuid AND cb."phoneHash" = u."phoneHash")
             OR (cb."userId" = p."userId" AND cb."phoneHash" = ${viewer.phoneHash})
        )

      ORDER BY "score" DESC
      LIMIT ${limit}
    `;
    }
    async loadViewer(userId) {
        const profile = await this.prisma.profile.findUnique({
            where: { userId },
            select: {
                matchingBucket: true,
                seeking: true,
                discoveryLatitude: true,
                discoveryLongitude: true,
                interests: { select: { interestId: true } },
                user: { select: { phoneHash: true } },
            },
        });
        if (!profile) {
            throw new common_1.NotFoundException('Complétez votre profil pour découvrir des profils');
        }
        const preference = await this.prisma.preference.findUnique({
            where: { userId },
        });
        return {
            userId,
            matchingBucket: profile.matchingBucket,
            seeking: profile.seeking,
            latitude: profile.discoveryLatitude,
            longitude: profile.discoveryLongitude,
            interestIds: profile.interests.map((i) => i.interestId),
            phoneHash: profile.user.phoneHash ?? '',
            minAge: preference?.minAge ?? 18,
            maxAge: preference?.maxAge ?? 60,
            maxDistanceKm: preference?.maxDistanceKm ?? 50,
            verifiedOnly: preference?.verifiedOnly ?? false,
        };
    }
};
exports.DeckService = DeckService;
exports.DeckService = DeckService = DeckService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DeckService);
//# sourceMappingURL=deck.service.js.map