import { Injectable, Logger } from '@nestjs/common';
import { RedisService } from '../../core/redis/redis.service';

/**
 * Durée de vie d'une pile pré-calculée.
 *
 * Trente minutes : assez pour éviter de reconstruire la requête à chaque
 * swipe, assez court pour qu'un nouvel inscrit apparaisse rapidement — ce qui
 * compte énormément dans une zone peu dense, où chaque arrivée change le deck.
 */
const DECK_TTL_SECONDS = 1_800;

/**
 * Le set « déjà vu » vit trente jours.
 *
 * C'est un cache, pas la vérité : la table des swipes fait foi. Il évite
 * simplement de servir un profil déjà balayé depuis une pile en mémoire.
 */
const SEEN_TTL_SECONDS = 30 * 86_400;

/**
 * Cache du deck.
 *
 * Interroger PostgreSQL à chaque swipe ne tient pas : la requête croise
 * PostGIS, un tri pondéré et six exclusions. Elle est donc exécutée une fois,
 * son résultat empilé dans Redis, puis consommé profil par profil.
 */
@Injectable()
export class DeckCacheService {
  private readonly logger = new Logger(DeckCacheService.name);

  constructor(private readonly redis: RedisService) {}

  private deckKey(userId: string): string {
    return `deck:${userId}`;
  }

  private seenKey(userId: string): string {
    return `seen:${userId}`;
  }

  /** Remplace la pile en une seule opération atomique. */
  async store(userId: string, candidateIds: string[]): Promise<void> {
    const key = this.deckKey(userId);

    if (candidateIds.length === 0) {
      await this.redis.client.del(key);
      return;
    }

    await this.redis.client
      .multi()
      .del(key)
      .rpush(key, ...candidateIds)
      .expire(key, DECK_TTL_SECONDS)
      .exec();
  }

  /**
   * Retire les prochains candidats de la pile.
   *
   * Les profils entre-temps balayés sont écartés au passage : la pile a pu
   * être calculée avant que l'utilisateur ne swipe depuis un autre appareil.
   */
  async take(userId: string, count: number): Promise<string[]> {
    const key = this.deckKey(userId);
    const taken: string[] = [];

    while (taken.length < count) {
      const candidateId = await this.redis.client.lpop(key);
      if (!candidateId) break;

      if (!(await this.hasSeen(userId, candidateId))) {
        taken.push(candidateId);
      }
    }

    return taken;
  }

  async remaining(userId: string): Promise<number> {
    return this.redis.client.llen(this.deckKey(userId));
  }

  async invalidate(userId: string): Promise<void> {
    await this.redis.client.del(this.deckKey(userId));
  }

  async markSeen(userId: string, targetId: string): Promise<void> {
    const key = this.seenKey(userId);
    await this.redis.client.sadd(key, targetId);
    await this.redis.client.expire(key, SEEN_TTL_SECONDS);
  }

  /** Utilisé par le rewind : le profil doit pouvoir réapparaître. */
  async unmarkSeen(userId: string, targetId: string): Promise<void> {
    await this.redis.client.srem(this.seenKey(userId), targetId);
  }

  private async hasSeen(userId: string, targetId: string): Promise<boolean> {
    return (
      (await this.redis.client.sismember(this.seenKey(userId), targetId)) === 1
    );
  }
}
