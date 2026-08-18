import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../core/prisma/prisma.service';
import { RedisService } from '../../core/redis/redis.service';

/**
 * Vitesse au-delà de laquelle un déplacement n'est plus physiquement crédible.
 *
 * Mille kilomètres/heure : un vol long-courrier réel plafonne autour de 900,
 * et le seuil laisse donc passer un Douala–Paris authentique. Un client qui
 * simule sa position, lui, produit des sauts instantanés — vitesse
 * effectivement infinie.
 */
const MAX_PLAUSIBLE_KMH = 1_000;

/** En deçà, le déplacement est ordinaire et ne mérite aucun examen. */
const MIN_SUSPICIOUS_DISTANCE_KM = 50;

const JUMP_COUNTER_TTL_SECONDS = 7 * 86_400;

/**
 * Contrôle de cohérence des positions déclarées.
 *
 * Le mode voyage est payant, mais `PATCH /me/location` est gratuit et
 * illimité — c'est nécessaire, on déménage. Sans contrôle, il suffit donc d'y
 * déclarer Yaoundé, de swiper, puis de revenir : le paywall ne vaut plus rien.
 *
 * Aucune API ne peut empêcher un client de mentir sur son GPS — les
 * applications de position simulée existent et fonctionnent. Ce qu'on peut
 * faire, c'est rendre l'abus visible : personne ne va de Douala à Yaoundé en
 * dix minutes, et l'accumulation de ces sauts alimente le score de risque.
 *
 * Le contrôle ne bloque rien. Un utilisateur légitime qui prend l'avion ne
 * doit pas être coincé, et un fraudeur à qui l'on annonce le seuil apprend
 * exactement comment le contourner.
 */
@Injectable()
export class GeoIntegrityService {
  private readonly logger = new Logger(GeoIntegrityService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly redis: RedisService,
  ) {}

  /**
   * Examine un changement de position déclaré.
   *
   * Appelé avant l'écriture, avec l'ancienne position encore en base.
   */
  async recordLocationChange(
    userId: string,
    previous: { latitude: number | null; longitude: number | null },
    next: { latitude: number; longitude: number },
  ): Promise<void> {
    if (previous.latitude === null || previous.longitude === null) return;

    const distanceKm = this.distanceKm(
      previous.latitude,
      previous.longitude,
      next.latitude,
      next.longitude,
    );

    if (distanceKm < MIN_SUSPICIOUS_DISTANCE_KM) return;

    const lastKey = `geo:last:${userId}`;
    const previousTimestamp = await this.redis.client.get(lastKey);

    await this.redis.client.set(
      lastKey,
      String(Date.now()),
      'EX',
      JUMP_COUNTER_TTL_SECONDS,
    );

    if (!previousTimestamp) return;

    const elapsedHours = (Date.now() - Number(previousTimestamp)) / 3_600_000;

    // Deux relevés à la même seconde donneraient une division par zéro : on
    // plancher à une seconde, ce qui rend la vitesse énorme — le résultat
    // recherché.
    const speedKmh = distanceKm / Math.max(elapsedHours, 1 / 3_600);

    if (speedKmh <= MAX_PLAUSIBLE_KMH) return;

    // Un voyage déclaré explique le déplacement : c'est précisément l'usage
    // pour lequel la fonctionnalité existe.
    const traveling = await this.prisma.travelSession.findFirst({
      where: { userId, endedAt: null },
      select: { id: true },
    });

    if (traveling) return;

    const counterKey = `geo:jump:${userId}`;
    const jumps = await this.redis.client.incr(counterKey);
    await this.redis.client.expire(counterKey, JUMP_COUNTER_TTL_SECONDS);

    this.logger.warn(
      `Saut de position invraisemblable pour ${userId} : ${Math.round(distanceKm)} km ` +
        `en ${Math.round(elapsedHours * 60)} min (${Math.round(speedKmh)} km/h), ${jumps}e occurrence`,
    );
  }

  /** Nombre de sauts invraisemblables sur les sept derniers jours. */
  async countRecentJumps(userId: string): Promise<number> {
    const value = await this.redis.client.get(`geo:jump:${userId}`);
    return Number(value ?? 0);
  }

  /** Distance à vol d'oiseau, formule de Haversine. */
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
