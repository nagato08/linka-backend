import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import {
  ConversationType,
  EntitlementKey,
  LedgerReason,
  MatchStatus,
  NotificationType,
  SwipeAction,
  SwipeSource,
  UserStatus,
} from '../../generated/prisma/enums';
import { PrismaService } from '../../core/prisma/prisma.service';
import { RedisService } from '../../core/redis/redis.service';
import { TooManyRequestsException } from '../../common/exceptions/too-many-requests.exception';
import { DeckCacheService } from '../discovery/deck-cache.service';
import { BoostService } from '../billing/boost.service';
import { NotificationService } from '../notifications/notification.service';
import { CreditLedgerService } from '../billing/credit-ledger.service';
import { EntitlementService } from '../billing/entitlement.service';

/**
 * Plafond horaire de likes.
 *
 * Les likes sont illimités — c'est la promesse produit, y compris sur l'offre
 * gratuite. Ce plafond n'est pas un quota commercial : aucun humain n'atteint
 * cent likes en une heure, mais un script les atteint en quelques secondes.
 *
 * Il protège l'expérience côté femmes, qui décide de la survie du produit :
 * avec un ratio proche de 85/15, un compte qui like tout ce qui passe noie
 * leur boîte de matchs sans intention réelle.
 */
const MAX_LIKES_PER_HOUR = 100;

/**
 * Sous ce délai entre deux swipes, on n'a plus affaire à une lecture de profil.
 * Le compteur alimente le score de risque du lot L5, sans bloquer.
 */
const SUSPICIOUS_SWIPE_MS = 300;

/** Super likes offerts par jour. Au-delà, ils se paient. */
const FREE_SUPERLIKES_PER_DAY = 1;

/** Coût en pièces d'un super like hors quota gratuit. */
const SUPERLIKE_COST = 100;

export interface SwipeResult {
  matched: boolean;
  matchId: string | null;
  /** Renseigné en cas de match, pour ouvrir directement la conversation. */
  conversationId: string | null;
}

@Injectable()
export class SwipeService {
  private readonly logger = new Logger(SwipeService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly redis: RedisService,
    private readonly deckCache: DeckCacheService,
    private readonly ledger: CreditLedgerService,
    private readonly entitlements: EntitlementService,
    private readonly boosts: BoostService,
    private readonly notifications: NotificationService,
  ) {}

  async swipe(
    actorId: string,
    targetId: string,
    action: SwipeAction,
    source: SwipeSource = SwipeSource.DECK,
  ): Promise<SwipeResult> {
    if (actorId === targetId) {
      throw new BadRequestException('Vous ne pouvez pas vous swiper vous-même');
    }

    await this.assertTargetIsSwipeable(actorId, targetId);
    await this.recordPace(actorId);

    if (action !== SwipeAction.PASS) {
      await this.enforceLikeQuota(actorId);
    }

    if (action === SwipeAction.SUPERLIKE) {
      await this.consumeSuperlike(actorId);
    }

    await this.prisma.swipe.upsert({
      where: { actorId_targetId: { actorId, targetId } },
      create: { actorId, targetId, action, source },
      // Un swipe annulé puis refait doit réécrire la ligne plutôt que
      // d'échouer sur la contrainte d'unicité.
      update: { action, source, isRewound: false, createdAt: new Date() },
    });

    await this.deckCache.markSeen(actorId, targetId);

    // Attribue le like au boost de la cible, s'il y en a un en cours : sans
    // ça, impossible de dire à l'acheteur ce que son boost lui a rapporté.
    if (action !== SwipeAction.PASS) {
      await this.boosts.recordLike(targetId);
    }

    if (action === SwipeAction.PASS) {
      return { matched: false, matchId: null, conversationId: null };
    }

    const result = await this.tryCreateMatch(actorId, targetId, action);

    if (result.matched) {
      await this.notifyMatch(actorId, targetId, result);
    } else {
      // Like sans réciprocité : la personne est prévenue sans savoir qui.
      // C'est ce qui la fait rouvrir l'application, et l'écran « qui m'a
      // liké » est gratuit — la curiosité se satisfait sans paywall.
      await this.notifications.notify({
        userId: targetId,
        type: NotificationType.NEW_LIKE,
        data: { screen: 'likes' },
      });
    }

    return result;
  }

  /**
   * Crée le match si le like est réciproque.
   *
   * La paire est stockée ordonnée, et une contrainte CHECK impose userAId <
   * userBId en base. Sans cet ordre, deux likes réciproques simultanés
   * produisent deux lignes — donc deux conversations pour un seul match.
   *
   * La transaction est sérialisable : c'est le seul niveau qui empêche les
   * deux requêtes de lire chacune l'absence de match avant que l'autre
   * n'écrive.
   */
  private async tryCreateMatch(
    actorId: string,
    targetId: string,
    action: SwipeAction,
  ): Promise<SwipeResult> {
    const reciprocal = await this.prisma.swipe.findUnique({
      where: { actorId_targetId: { actorId: targetId, targetId: actorId } },
      select: { action: true, isRewound: true },
    });

    const isMutual =
      reciprocal !== null &&
      !reciprocal.isRewound &&
      reciprocal.action !== SwipeAction.PASS;

    if (!isMutual) {
      return { matched: false, matchId: null, conversationId: null };
    }

    const [userAId, userBId] = [actorId, targetId].sort();

    try {
      const match = await this.prisma.$transaction(
        async (tx) => {
          const existing = await tx.match.findUnique({
            where: { userAId_userBId: { userAId, userBId } },
            include: { conversation: { select: { id: true } } },
          });

          if (existing) return existing;

          return tx.match.create({
            data: {
              userAId,
              userBId,
              fromSuperlike:
                action === SwipeAction.SUPERLIKE ||
                reciprocal.action === SwipeAction.SUPERLIKE,
              status: MatchStatus.ACTIVE,
              lastInteractionAt: new Date(),
              // La conversation naît avec le match : sans elle, le premier
              // message devrait la créer, et deux messages simultanés en
              // créeraient deux.
              conversation: {
                create: {
                  type: ConversationType.MATCH,
                  participants: {
                    create: [{ userId: userAId }, { userId: userBId }],
                  },
                },
              },
            },
            include: { conversation: { select: { id: true } } },
          });
        },
        { isolationLevel: 'Serializable' },
      );

      this.logger.log(`Match créé : ${match.id}`);
      await this.boosts.recordMatch([actorId, targetId]);

      return {
        matched: true,
        matchId: match.id,
        conversationId: match.conversation?.id ?? null,
      };
    } catch (error) {
      // Deux transactions concurrentes : l'une échoue, le match existe déjà.
      const existing = await this.prisma.match.findUnique({
        where: { userAId_userBId: { userAId, userBId } },
        include: { conversation: { select: { id: true } } },
      });

      if (existing) {
        return {
          matched: true,
          matchId: existing.id,
          conversationId: existing.conversation?.id ?? null,
        };
      }

      throw error;
    }
  }

  /**
   * Prévient les deux personnes d'un nouveau match.
   *
   * Chacune reçoit le prénom de l'autre : une notification anonyme n'est
   * jamais ouverte, et le match perd alors tout son effet — c'est justement le
   * moment où l'engagement est le plus fort.
   */
  private async notifyMatch(
    actorId: string,
    targetId: string,
    result: SwipeResult,
  ): Promise<void> {
    const profiles = await this.prisma.profile.findMany({
      where: { userId: { in: [actorId, targetId] } },
      select: { userId: true, firstName: true },
    });

    const nameOf = (userId: string) =>
      profiles.find((p) => p.userId === userId)?.firstName ?? 'Quelqu’un';

    await this.notifications.notifyMany([
      {
        userId: actorId,
        type: NotificationType.NEW_MATCH,
        vars: { firstName: nameOf(targetId) },
        data: {
          screen: 'chat',
          conversationId: result.conversationId ?? '',
          matchId: result.matchId ?? '',
        },
      },
      {
        userId: targetId,
        type: NotificationType.NEW_MATCH,
        vars: { firstName: nameOf(actorId) },
        data: {
          screen: 'chat',
          conversationId: result.conversationId ?? '',
          matchId: result.matchId ?? '',
        },
      },
    ]);
  }

  /**
   * Vérifie que la cible peut être swipée.
   *
   * Un client peut envoyer n'importe quel identifiant : la pile n'est qu'une
   * suggestion, elle ne fait pas autorité. Sans ce contrôle, on pourrait liker
   * une personne qui vous a bloqué, ou un compte supprimé.
   */
  private async assertTargetIsSwipeable(
    actorId: string,
    targetId: string,
  ): Promise<void> {
    const target = await this.prisma.user.findUnique({
      where: { id: targetId },
      select: { status: true },
    });

    // Les comptes en shadow ban restent swipables : ils sont retirés des piles
    // des autres, mais rien ne doit signaler leur état à qui les croise
    // autrement — par un lien partagé, par exemple.
    const swipeable: UserStatus[] = [
      UserStatus.ACTIVE,
      UserStatus.SHADOW_BANNED,
    ];

    if (!target || !swipeable.includes(target.status)) {
      throw new NotFoundException('Profil introuvable');
    }

    const blocked = await this.prisma.block.findFirst({
      where: {
        OR: [
          { blockerId: actorId, blockedId: targetId },
          { blockerId: targetId, blockedId: actorId },
        ],
      },
      select: { blockerId: true },
    });

    if (blocked) {
      // Message identique au cas « profil inexistant » : confirmer un blocage
      // renseignerait sur le comportement de l'autre personne.
      throw new NotFoundException('Profil introuvable');
    }
  }

  private async enforceLikeQuota(actorId: string): Promise<void> {
    const key = `likes:h:${actorId}`;
    const count = await this.redis.client.incr(key);

    if (count === 1) {
      await this.redis.client.expire(key, 3_600);
    }

    if (count > MAX_LIKES_PER_HOUR) {
      this.logger.warn(`Plafond horaire de likes atteint : ${actorId}`);
      const ttl = await this.redis.client.ttl(key);
      throw new TooManyRequestsException(
        'Vous allez un peu vite. Reprenez dans quelques minutes.',
        ttl,
      );
    }
  }

  /**
   * Mesure la cadence de swipe.
   *
   * N'interrompt rien : le signal est accumulé pour le score de risque. Un
   * blocage immédiat apprendrait au fraudeur exactement quel seuil contourner.
   */
  private async recordPace(actorId: string): Promise<void> {
    const key = `swipe:last:${actorId}`;
    const now = Date.now();

    const previous = await this.redis.client.getset(key, String(now));
    await this.redis.client.expire(key, 3_600);

    if (previous && now - Number(previous) < SUSPICIOUS_SWIPE_MS) {
      const fastKey = `swipe:fast:${actorId}`;
      await this.redis.client.incr(fastKey);
      await this.redis.client.expire(fastKey, 86_400);
    }
  }

  /**
   * Consomme un super like.
   *
   * Un par jour offert en attendant le lot L7 ; ensuite, les droits achetés
   * prendront le relais via la table `Entitlement`.
   */
  private async consumeSuperlike(actorId: string): Promise<void> {
    const key = `superlike:d:${actorId}`;
    const used = await this.redis.client.incr(key);

    if (used === 1) {
      await this.redis.client.expire(key, 86_400);
    }

    if (used <= FREE_SUPERLIKES_PER_DAY) return;

    // Quota gratuit épuisé : on puise d'abord dans les packs achetés, puis
    // dans le solde de pièces. L'ordre compte — un pack déjà payé doit être
    // consommé avant de débiter à nouveau.
    if (await this.entitlements.consume(actorId, EntitlementKey.SUPERLIKE)) {
      return;
    }

    try {
      await this.ledger.spend(actorId, SUPERLIKE_COST, LedgerReason.SPEND, {
        refType: 'superlike',
        note: 'Super like hors quota',
      });
    } catch {
      throw new ForbiddenException(
        `Super likes épuisés. ${SUPERLIKE_COST} pièces sont nécessaires, ou attendez demain.`,
      );
    }
  }
}
