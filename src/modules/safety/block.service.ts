import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { ConversationStatus, MatchStatus } from '../../generated/prisma/enums';
import { PrismaService } from '../../core/prisma/prisma.service';
import { HashService } from '../../core/crypto/hash.service';
import { PhoneService } from '../auth/phone.service';
import { DeckCacheService } from '../discovery/deck-cache.service';

/** Plafond par envoi. Un carnet d'adresses complet arrive par tranches. */
const MAX_CONTACTS_PER_BATCH = 500;

@Injectable()
export class BlockService {
  private readonly logger = new Logger(BlockService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly hash: HashService,
    private readonly phone: PhoneService,
    private readonly deckCache: DeckCacheService,
  ) {}

  /**
   * Bloque quelqu'un.
   *
   * L'effet est mutuel et immédiat : les deux profils disparaissent l'un de la
   * pile de l'autre, le match est défait, la conversation fermée. Un blocage
   * qui laisse subsister la conversation ne protège de rien — c'est
   * précisément la fenêtre par laquelle le harcèlement continue.
   */
  async block(
    blockerId: string,
    blockedId: string,
    reason?: string,
  ): Promise<void> {
    if (blockerId === blockedId) {
      throw new BadRequestException(
        'Vous ne pouvez pas vous bloquer vous-même',
      );
    }

    const [userAId, userBId] = [blockerId, blockedId].sort();

    await this.prisma.$transaction(async (tx) => {
      await tx.block.upsert({
        where: { blockerId_blockedId: { blockerId, blockedId } },
        create: { blockerId, blockedId, reason },
        update: {},
      });

      const match = await tx.match.findUnique({
        where: { userAId_userBId: { userAId, userBId } },
        select: { id: true, conversation: { select: { id: true } } },
      });

      if (match) {
        await tx.match.update({
          where: { id: match.id },
          data: {
            status: MatchStatus.BLOCKED,
            unmatchedAt: new Date(),
            unmatchedById: blockerId,
          },
        });

        if (match.conversation) {
          await tx.conversation.update({
            where: { id: match.conversation.id },
            data: {
              status: ConversationStatus.CLOSED,
              closedAt: new Date(),
            },
          });
        }
      }
    });

    // Les piles pré-calculées peuvent encore contenir l'autre profil.
    await Promise.all([
      this.deckCache.invalidate(blockerId),
      this.deckCache.invalidate(blockedId),
      this.deckCache.markSeen(blockerId, blockedId),
      this.deckCache.markSeen(blockedId, blockerId),
    ]);

    this.logger.log(`Blocage : ${blockerId} → ${blockedId}`);
  }

  /**
   * Débloque.
   *
   * Le match n'est pas rétabli : il a été défait, et le rétablir ferait
   * réapparaître une conversation que la personne pensait close.
   */
  async unblock(blockerId: string, blockedId: string): Promise<void> {
    await this.prisma.block.deleteMany({
      where: { blockerId, blockedId },
    });

    await this.deckCache.invalidate(blockerId);
  }

  list(blockerId: string) {
    return this.prisma.block.findMany({
      where: { blockerId },
      orderBy: { createdAt: 'desc' },
      select: {
        blockedId: true,
        createdAt: true,
        blocked: {
          select: { profile: { select: { firstName: true } } },
        },
      },
    });
  }

  /**
   * Bloque des numéros du carnet d'adresses.
   *
   * Gratuit, et c'est un choix délibéré : dans un pays où les cercles sociaux
   * sont serrés, croiser son cousin, sa sœur ou son collègue sur une
   * application de rencontre est un scénario courant — et c'est un motif de
   * désinstallation immédiate. La concurrence en fait un argument payant.
   *
   * Seuls des condensats sont conservés. Le carnet d'adresses lui-même
   * n'est jamais stocké, et aucun numéro ne transite en clair vers la base.
   */
  async blockContacts(
    userId: string,
    phoneNumbers: string[],
  ): Promise<{ blocked: number; skipped: number }> {
    if (phoneNumbers.length > MAX_CONTACTS_PER_BATCH) {
      throw new BadRequestException(
        `${MAX_CONTACTS_PER_BATCH} numéros au maximum par envoi`,
      );
    }

    const hashes = new Set<string>();
    let skipped = 0;

    for (const raw of phoneNumbers) {
      try {
        const normalized = this.phone.normalize(raw);
        hashes.add(this.hash.hashPhone(normalized.e164));
      } catch {
        // Numéro étranger, fixe ou mal saisi : ignoré sans faire échouer le
        // lot entier. Un carnet d'adresses contient toujours des entrées
        // inexploitables.
        skipped += 1;
      }
    }

    if (hashes.size > 0) {
      await this.prisma.contactBlock.createMany({
        data: [...hashes].map((phoneHash) => ({ userId, phoneHash })),
        skipDuplicates: true,
      });

      await this.deckCache.invalidate(userId);
    }

    return { blocked: hashes.size, skipped };
  }

  async clearContactBlocks(userId: string): Promise<void> {
    await this.prisma.contactBlock.deleteMany({ where: { userId } });
    await this.deckCache.invalidate(userId);
  }

  async countContactBlocks(userId: string): Promise<number> {
    return this.prisma.contactBlock.count({ where: { userId } });
  }
}
