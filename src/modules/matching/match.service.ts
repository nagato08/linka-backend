import {
  ForbiddenException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import {
  ConversationStatus,
  EntitlementKey,
  LedgerReason,
  MatchStatus,
  PhotoStatus,
  SwipeAction,
} from '../../generated/prisma/enums';
import { PrismaService } from '../../core/prisma/prisma.service';
import { MediaService } from '../media/media.service';
import { DeckCacheService } from '../discovery/deck-cache.service';
import { CreditLedgerService } from '../billing/credit-ledger.service';
import { EntitlementService } from '../billing/entitlement.service';
import {
  buildCursorPage,
  type CursorPage,
} from '../../common/dto/pagination.dto';

/** Rewinds offerts, au total et non par jour. */
const FREE_REWINDS = 10;

/** Coût en pièces au-delà du quota gratuit, hors abonnement. */
const REWIND_COST = 50;

/**
 * Version allégée d'un profil, pour les listes de matchs et de likes.
 *
 * Exporté : le type remonte jusqu'aux signatures publiques du contrôleur, que
 * TypeScript ne peut pas nommer sans lui.
 */
export interface ProfileCard {
  userId: string;
  firstName: string;
  age: number | null;
  isVerified: boolean;
  photo: ReturnType<MediaService['toDto']> | null;
}

@Injectable()
export class MatchService {
  private readonly logger = new Logger(MatchService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly media: MediaService,
    private readonly deckCache: DeckCacheService,
    private readonly ledger: CreditLedgerService,
    private readonly entitlements: EntitlementService,
  ) {}

  /** Matchs actifs, du plus récemment animé au plus ancien. */
  async list(userId: string, cursor?: string, limit = 20) {
    const matches = await this.prisma.match.findMany({
      where: {
        status: MatchStatus.ACTIVE,
        OR: [{ userAId: userId }, { userBId: userId }],
      },
      orderBy: [{ lastInteractionAt: 'desc' }, { matchedAt: 'desc' }],
      take: limit + 1,
      ...(cursor ? { cursor: { id: cursor }, skip: 1 } : {}),
      include: {
        conversation: {
          select: {
            id: true,
            lastMessageAt: true,
            lastMessagePreview: true,
            participants: {
              where: { userId },
              select: { unreadCount: true },
            },
          },
        },
      },
    });

    const page = buildCursorPage(matches, limit);
    const otherIds = page.data.map((m) =>
      m.userAId === userId ? m.userBId : m.userAId,
    );

    const profiles = await this.loadCards(otherIds);

    return {
      data: page.data.map((match) => {
        const otherId =
          match.userAId === userId ? match.userBId : match.userAId;
        return {
          matchId: match.id,
          matchedAt: match.matchedAt,
          fromSuperlike: match.fromSuperlike,
          conversationId: match.conversation?.id ?? null,
          lastMessageAt: match.conversation?.lastMessageAt ?? null,
          lastMessagePreview: match.conversation?.lastMessagePreview ?? null,
          unreadCount: match.conversation?.participants[0]?.unreadCount ?? 0,
          profile: profiles.get(otherId) ?? null,
        };
      }),
      pageInfo: page.pageInfo,
    };
  }

  /**
   * Personnes qui vous ont liké sans réciproque.
   *
   * Gratuit, et c'est un choix produit assumé : la concurrence en fait son
   * principal argument payant. C'est pourtant ce qui fait revenir les gens, et
   * la rétention vaut davantage qu'une conversion arrachée sur cette
   * fonctionnalité.
   */
  async likesReceived(userId: string, cursor?: string, limit = 20) {
    const likes = await this.prisma.swipe.findMany({
      where: {
        targetId: userId,
        action: { in: [SwipeAction.LIKE, SwipeAction.SUPERLIKE] },
        isRewound: false,
        // Ne garder que les likes auxquels on n'a pas encore répondu.
        //
        // La condition porte sur MES swipes vers l'auteur du like
        // (`actor.swipesReceived` = les swipes reçus par l'auteur), et non sur
        // les siens : filtrer sur ses propres swipes éliminerait le like
        // lui-même, puisqu'il en fait partie.
        actor: {
          swipesReceived: { none: { actorId: userId, isRewound: false } },
        },
      },
      orderBy: { createdAt: 'desc' },
      take: limit + 1,
      ...(cursor ? { cursor: { id: cursor }, skip: 1 } : {}),
      select: { id: true, actorId: true, action: true, createdAt: true },
    });

    const page = buildCursorPage(likes, limit);
    const profiles = await this.loadCards(page.data.map((l) => l.actorId));

    return {
      data: page.data.map((like) => ({
        id: like.id,
        likedAt: like.createdAt,
        isSuperlike: like.action === SwipeAction.SUPERLIKE,
        profile: profiles.get(like.actorId) ?? null,
      })),
      pageInfo: page.pageInfo,
    };
  }

  /**
   * Défait un match.
   *
   * La conversation est fermée et le swipe conservé : sans cela, la personne
   * réapparaîtrait dans la pile dès le lendemain. Sur un produit où l'on
   * défait un match précisément pour ne plus croiser quelqu'un, ce serait un
   * défaut de sûreté, pas une gêne.
   */
  async unmatch(userId: string, matchId: string): Promise<void> {
    const match = await this.prisma.match.findUnique({
      where: { id: matchId },
      include: { conversation: { select: { id: true } } },
    });

    if (!match || (match.userAId !== userId && match.userBId !== userId)) {
      throw new NotFoundException('Match introuvable');
    }

    if (match.status !== MatchStatus.ACTIVE) {
      throw new ForbiddenException('Ce match est déjà défait');
    }

    await this.prisma.$transaction(async (tx) => {
      await tx.match.update({
        where: { id: matchId },
        data: {
          status: MatchStatus.UNMATCHED,
          unmatchedAt: new Date(),
          unmatchedById: userId,
        },
      });

      if (match.conversation) {
        await tx.conversation.update({
          where: { id: match.conversation.id },
          data: { status: ConversationStatus.CLOSED, closedAt: new Date() },
        });
      }
    });

    this.logger.log(`Match défait : ${matchId}`);
  }

  /**
   * Annule le dernier swipe.
   *
   * Dix gratuits au total, puis abonnement. Le swipe est marqué comme annulé
   * plutôt que supprimé : l'historique sert à détecter l'abus — annuler en
   * boucle sur la même cible pour rester en tête de sa pile.
   */
  async rewind(
    userId: string,
  ): Promise<{ targetId: string; remainingFree: number }> {
    const last = await this.prisma.swipe.findFirst({
      where: { actorId: userId, isRewound: false },
      orderBy: { createdAt: 'desc' },
    });

    if (!last) {
      throw new NotFoundException('Aucun swipe à annuler');
    }

    const usedFree = await this.prisma.rewind.count({
      where: { userId, wasFree: true },
    });

    const hasUnlimited = await this.hasUnlimitedRewind(userId);

    const isFree = !hasUnlimited && usedFree < FREE_REWINDS;

    // Un pack déjà payé se consomme avant de débiter à nouveau le solde.
    const fromPack =
      !isFree &&
      !hasUnlimited &&
      (await this.entitlements.consume(userId, EntitlementKey.EXTRA_REWIND));

    await this.prisma.$transaction(async (tx) => {
      // Au-delà du quota, sans abonnement et sans pack, le rewind se paie. Le
      // débit est dans la même transaction que l'annulation : payer sans que
      // le swipe soit annulé serait un vol.
      if (!isFree && !hasUnlimited && !fromPack) {
        await this.ledger.append(tx, {
          userId,
          delta: -REWIND_COST,
          reason: LedgerReason.SPEND,
          refType: 'rewind',
          note: 'Rewind au-delà du quota gratuit',
        });
      }

      await tx.swipe.update({
        where: { id: last.id },
        data: { isRewound: true },
      });

      await tx.rewind.create({
        data: { userId, swipeId: last.id, wasFree: isFree },
      });

      // Un match né de ce swipe doit disparaître : le like qui l'a produit
      // n'existe plus.
      const [userAId, userBId] = [userId, last.targetId].sort();
      await tx.match.updateMany({
        where: { userAId, userBId, status: MatchStatus.ACTIVE },
        data: { status: MatchStatus.UNMATCHED, unmatchedAt: new Date() },
      });
    });

    // La cible doit pouvoir réapparaître dans la pile.
    await this.deckCache.unmarkSeen(userId, last.targetId);
    await this.deckCache.invalidate(userId);

    return {
      targetId: last.targetId,
      remainingFree: hasUnlimited
        ? FREE_REWINDS
        : Math.max(0, FREE_REWINDS - usedFree - 1),
    };
  }

  private async hasUnlimitedRewind(userId: string): Promise<boolean> {
    const entitlement = await this.prisma.entitlement.findFirst({
      where: {
        userId,
        key: 'UNLIMITED_REWIND',
        revokedAt: null,
        OR: [{ expiresAt: null }, { expiresAt: { gt: new Date() } }],
      },
      select: { id: true },
    });

    return entitlement !== null;
  }

  /**
   * Carte réduite : ce qu'il faut pour une liste, rien de plus.
   *
   * Le type de retour est explicite. Sans lui, le `new Map()` du cas vide est
   * inféré en `Map<any, any>` et efface le typage chez tous les appelants.
   */
  private async loadCards(
    userIds: string[],
  ): Promise<Map<string, ProfileCard>> {
    if (userIds.length === 0) return new Map<string, ProfileCard>();

    const profiles = await this.prisma.profile.findMany({
      where: { userId: { in: userIds } },
      select: {
        userId: true,
        firstName: true,
        birthdate: true,
        hideAge: true,
        isVerified: true,
        photos: {
          where: { deletedAt: null, status: PhotoStatus.APPROVED },
          orderBy: { position: 'asc' },
          take: 1,
        },
      },
    });

    return new Map(
      profiles.map((profile) => [
        profile.userId,
        {
          userId: profile.userId,
          firstName: profile.firstName,
          age: profile.hideAge ? null : this.ageFrom(profile.birthdate),
          isVerified: profile.isVerified,
          photo: profile.photos[0] ? this.media.toDto(profile.photos[0]) : null,
        },
      ]),
    );
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

export type { CursorPage };
