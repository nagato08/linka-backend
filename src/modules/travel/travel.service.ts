import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { EntitlementKey } from '../../generated/prisma/enums';
import { PrismaService } from '../../core/prisma/prisma.service';
import { EntitlementService } from '../billing/entitlement.service';
import { DeckCacheService } from '../discovery/deck-cache.service';

/** Usages offerts, au total et non par mois. */
const FREE_TRAVELS = 5;

/**
 * Écart minimal pour qu'un déplacement compte comme un voyage.
 *
 * Cinquante kilomètres : en dessous, il s'agit d'un déplacement ordinaire, et
 * facturer un quota pour aller de Douala à Édéa serait absurde.
 */
const MIN_TRAVEL_DISTANCE_KM = 50;

@Injectable()
export class TravelService {
  private readonly logger = new Logger(TravelService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly entitlements: EntitlementService,
    private readonly deckCache: DeckCacheService,
  ) {}

  /**
   * Déplace la position de découverte.
   *
   * Seule `discoveryLatitude` bouge : le domicile reste intact, ce qui rend le
   * retour instantané et évite qu'un voyage n'efface définitivement la vraie
   * position de quelqu'un.
   */
  async travelTo(
    userId: string,
    latitude: number,
    longitude: number,
    label?: string,
  ) {
    const profile = await this.prisma.profile.findUnique({
      where: { userId },
      select: {
        homeLatitude: true,
        homeLongitude: true,
        discoveryLatitude: true,
        discoveryLongitude: true,
      },
    });

    if (!profile) throw new NotFoundException('Profil introuvable');

    if (profile.homeLatitude === null || profile.homeLongitude === null) {
      throw new BadRequestException(
        'Renseignez votre position avant d’utiliser le mode voyage',
      );
    }

    const distanceKm = this.distanceKm(
      profile.homeLatitude,
      profile.homeLongitude,
      latitude,
      longitude,
    );

    if (distanceKm < MIN_TRAVEL_DISTANCE_KM) {
      throw new BadRequestException(
        `Le mode voyage sert à explorer une autre ville. Cette destination est à ${Math.round(distanceKm)} km.`,
      );
    }

    const unlimited = await this.entitlements.has(
      userId,
      EntitlementKey.TRAVEL_MODE,
    );

    const usedFree = await this.prisma.travelSession.count({
      where: { userId, wasFree: true },
    });

    if (!unlimited && usedFree >= FREE_TRAVELS) {
      throw new ForbiddenException(
        'Vos voyages gratuits sont épuisés. Passez à Gold pour un usage illimité.',
      );
    }

    const city = await this.resolveCity(latitude, longitude);

    const session = await this.prisma.$transaction(async (tx) => {
      // Une seule session ouverte à la fois : deux voyages simultanés
      // rendraient le quota et le retour incohérents.
      await tx.travelSession.updateMany({
        where: { userId, endedAt: null },
        data: { endedAt: new Date() },
      });

      const created = await tx.travelSession.create({
        data: {
          userId,
          latitude,
          longitude,
          cityId: city?.id,
          locationLabel: label ?? city?.name ?? 'Destination',
          wasFree: !unlimited,
        },
      });

      await tx.profile.update({
        where: { userId },
        data: {
          discoveryLatitude: latitude,
          discoveryLongitude: longitude,
          cityId: city?.id,
        },
      });

      return created;
    });

    // La pile pré-calculée décrit l'ancienne position : elle n'a plus de sens.
    await this.deckCache.invalidate(userId);

    this.logger.log(
      `Voyage de ${userId} vers ${session.locationLabel} (${Math.round(distanceKm)} km)`,
    );

    return {
      sessionId: session.id,
      destination: session.locationLabel,
      city: city?.name ?? null,
      distanceKm: Math.round(distanceKm),
      remainingFree: unlimited
        ? null
        : Math.max(0, FREE_TRAVELS - usedFree - 1),
    };
  }

  /** Revient au domicile. Ne consomme aucun quota. */
  async returnHome(userId: string) {
    const profile = await this.prisma.profile.findUnique({
      where: { userId },
      select: { homeLatitude: true, homeLongitude: true },
    });

    if (!profile?.homeLatitude || !profile.homeLongitude) {
      throw new BadRequestException('Aucune position de domicile enregistrée');
    }

    const city = await this.resolveCity(
      profile.homeLatitude,
      profile.homeLongitude,
    );

    await this.prisma.$transaction(async (tx) => {
      await tx.travelSession.updateMany({
        where: { userId, endedAt: null },
        data: { endedAt: new Date() },
      });

      await tx.profile.update({
        where: { userId },
        data: {
          discoveryLatitude: profile.homeLatitude,
          discoveryLongitude: profile.homeLongitude,
          cityId: city?.id,
        },
      });
    });

    await this.deckCache.invalidate(userId);

    return { returned: true, city: city?.name ?? null };
  }

  /** État courant, pour afficher le bandeau « vous explorez X ». */
  async status(userId: string) {
    const [active, usedFree, unlimited] = await Promise.all([
      this.prisma.travelSession.findFirst({
        where: { userId, endedAt: null },
        orderBy: { startedAt: 'desc' },
        select: {
          id: true,
          locationLabel: true,
          startedAt: true,
          city: { select: { name: true, region: true } },
        },
      }),
      this.prisma.travelSession.count({ where: { userId, wasFree: true } }),
      this.entitlements.has(userId, EntitlementKey.TRAVEL_MODE),
    ]);

    return {
      traveling: active !== null,
      current: active,
      unlimited,
      remainingFree: unlimited ? null : Math.max(0, FREE_TRAVELS - usedFree),
    };
  }

  /** Villes proposées comme destinations, les plus peuplées d'abord. */
  listDestinations() {
    return this.prisma.city.findMany({
      where: { isActive: true },
      orderBy: [{ activeUserCount: 'desc' }, { name: 'asc' }],
      select: {
        id: true,
        name: true,
        region: true,
        latitude: true,
        longitude: true,
        activeUserCount: true,
      },
    });
  }

  private async resolveCity(latitude: number, longitude: number) {
    const rows = await this.prisma.$queryRaw<{ id: string; name: string }[]>`
      SELECT id, name
      FROM cities
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

  /**
   * Distance à vol d'oiseau, formule de Haversine.
   *
   * Calculée en mémoire plutôt qu'en base : la comparaison au seuil précède la
   * décision d'écrire, et un aller-retour SQL pour deux coordonnées déjà
   * connues n'apporterait rien.
   */
  private distanceKm(
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number,
  ): number {
    const EARTH_RADIUS_KM = 6_371;
    const toRad = (deg: number) => (deg * Math.PI) / 180;

    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);

    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;

    return EARTH_RADIUS_KM * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  }
}
