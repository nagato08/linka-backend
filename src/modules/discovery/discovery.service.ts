import { Injectable, Logger } from '@nestjs/common';
import { PhotoStatus } from '../../generated/prisma/enums';
import { PrismaService } from '../../core/prisma/prisma.service';
import { MediaService } from '../media/media.service';
import { DeckCacheService } from './deck-cache.service';
import { DeckService } from './deck.service';

/**
 * Nombre de profils renvoyés par appel.
 *
 * Volontairement modeste : chaque profil embarque ses photos, et le forfait
 * data se paie au mégaoctet sur ce marché. Renvoyer trente profils d'un coup
 * ferait payer à l'utilisateur des images qu'il ne verra jamais.
 */
const DEFAULT_PAGE = 10;

/** En dessous, on reconstruit la pile en tâche de fond. */
const REFILL_THRESHOLD = 5;

@Injectable()
export class DiscoveryService {
  private readonly logger = new Logger(DiscoveryService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly deck: DeckService,
    private readonly cache: DeckCacheService,
    private readonly media: MediaService,
  ) {}

  /**
   * Renvoie les prochains profils à présenter.
   *
   * La pile vient du cache. Si elle est vide ou trop courte, elle est
   * reconstruite avant de servir — un deck vide fait perdre un utilisateur
   * définitivement, mieux vaut une réponse plus lente qu'une pile vide.
   */
  async getDeck(userId: string, limit = DEFAULT_PAGE) {
    let ids = await this.cache.take(userId, limit);

    if (ids.length < limit) {
      const candidates = await this.deck.build(userId);
      const alreadyServed = new Set(ids);

      await this.cache.store(
        userId,
        candidates.map((c) => c.userId).filter((id) => !alreadyServed.has(id)),
      );

      ids = [...ids, ...(await this.cache.take(userId, limit - ids.length))];
    } else if ((await this.cache.remaining(userId)) < REFILL_THRESHOLD) {
      // Reconstruction opportuniste : l'utilisateur n'attend pas, la pile
      // suivante sera prête avant qu'il n'arrive au bout.
      void this.refill(userId);
    }

    return this.hydrate(userId, ids);
  }

  /** Force une reconstruction — après un changement de filtres ou de position. */
  async refresh(userId: string, limit = DEFAULT_PAGE) {
    await this.cache.invalidate(userId);
    const candidates = await this.deck.build(userId);
    await this.cache.store(
      userId,
      candidates.map((c) => c.userId),
    );

    return this.hydrate(userId, await this.cache.take(userId, limit));
  }

  private async refill(userId: string): Promise<void> {
    try {
      const candidates = await this.deck.build(userId);
      await this.cache.store(
        userId,
        candidates.map((c) => c.userId),
      );
    } catch (error) {
      this.logger.warn(
        `Reconstruction du deck impossible pour ${userId} : ${(error as Error).message}`,
      );
    }
  }

  /**
   * Charge les profils complets, dans l'ordre de la pile.
   *
   * La distance est arrondie au kilomètre. Ne jamais renvoyer de coordonnées :
   * trois relevés pris depuis trois positions différentes suffisent à
   * trianguler l'adresse exacte de quelqu'un, et plusieurs applications de
   * rencontre s'y sont fait prendre.
   */
  private async hydrate(userId: string, ids: string[]) {
    if (ids.length === 0) return [];

    const viewer = await this.prisma.profile.findUnique({
      where: { userId },
      select: { discoveryLatitude: true, discoveryLongitude: true },
    });

    const profiles = await this.prisma.profile.findMany({
      where: { userId: { in: ids } },
      include: {
        city: { select: { name: true, region: true } },
        interests: { include: { interest: true } },
        prompts: { include: { prompt: true } },
        photos: {
          where: { deletedAt: null, status: PhotoStatus.APPROVED },
          orderBy: { position: 'asc' },
        },
      },
    });

    const distances = await this.distancesFrom(viewer, ids);
    const byId = new Map(profiles.map((p) => [p.userId, p]));

    return ids
      .map((id) => byId.get(id))
      .filter((profile) => profile !== undefined)
      .map((profile) => ({
        userId: profile.userId,
        firstName: profile.firstName,
        age: profile.hideAge ? null : this.ageFrom(profile.birthdate),
        gender: profile.gender,
        genderLabel: profile.genderLabel,
        intention: profile.intention,
        bio: profile.bio,
        heightCm: profile.heightCm,
        profession: profile.profession,
        religion: profile.religion,
        education: profile.education,
        smoking: profile.smoking,
        drinking: profile.drinking,
        languages: profile.languages,
        hasChildren: profile.hasChildren,
        city: profile.hideDistance ? null : profile.city,
        distanceKm: profile.hideDistance
          ? null
          : (distances.get(profile.userId) ?? null),
        isVerified: profile.isVerified,
        interests: profile.interests.map((link) => ({
          slug: link.interest.slug,
          labelFr: link.interest.labelFr,
          labelEn: link.interest.labelEn,
          emoji: link.interest.emoji,
        })),
        prompts: profile.prompts.map((answer) => ({
          textFr: answer.prompt.textFr,
          textEn: answer.prompt.textEn,
          answer: answer.answer,
        })),
        photos: profile.photos.map((photo) => this.media.toDto(photo)),
      }));
  }

  private async distancesFrom(
    viewer: {
      discoveryLatitude: number | null;
      discoveryLongitude: number | null;
    } | null,
    ids: string[],
  ): Promise<Map<string, number>> {
    if (!viewer?.discoveryLatitude || !viewer.discoveryLongitude) {
      return new Map();
    }

    const rows = await this.prisma.$queryRaw<{ userId: string; km: number }[]>`
      SELECT
        p."userId",
        ROUND(
          (ST_Distance(
            p."discoveryLocation",
            ST_SetSRID(ST_MakePoint(${viewer.discoveryLongitude}::float8, ${viewer.discoveryLatitude}::float8), 4326)::geography
          ) / 1000)::numeric,
          0
        )::float8 AS km
      FROM profiles p
      WHERE p."userId" = ANY(${ids}::uuid[])
    `;

    return new Map(rows.map((row) => [row.userId, row.km]));
  }

  private ageFrom(birthdate: Date): number {
    const now = new Date();
    let age = now.getUTCFullYear() - birthdate.getUTCFullYear();
    const monthDiff = now.getUTCMonth() - birthdate.getUTCMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && now.getUTCDate() < birthdate.getUTCDate())
    ) {
      age -= 1;
    }
    return age;
  }
}
