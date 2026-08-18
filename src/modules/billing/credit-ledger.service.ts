import { ForbiddenException, Injectable, Logger } from '@nestjs/common';
import { LedgerReason } from '../../generated/prisma/enums';
import { PrismaService } from '../../core/prisma/prisma.service';

type Tx = Parameters<Parameters<PrismaService['$transaction']>[0]>[0];

export interface LedgerEntryInput {
  userId: string;
  /** Positif au crédit, négatif au débit. Jamais nul. */
  delta: number;
  reason: LedgerReason;
  refType?: string;
  refId?: string;
  purchaseId?: string;
  /** Empêche qu'un webhook rejoué crédite deux fois. */
  idempotencyKey?: string;
  note?: string;
}

/**
 * Registre de pièces, en ajout seul.
 *
 * Le solde n'est jamais une colonne modifiable : il se recalcule et se prouve.
 * Sur un marché où les paiements échouent souvent et où les litiges remontent
 * par WhatsApp, pouvoir reconstituer l'historique exact d'un compte n'est pas
 * du confort.
 */
@Injectable()
export class CreditLedgerService {
  private readonly logger = new Logger(CreditLedgerService.name);

  constructor(private readonly prisma: PrismaService) {}

  /**
   * Ajoute un mouvement et calcule le nouveau solde.
   *
   * Un verrou consultatif est posé sur l'utilisateur pour toute la durée de la
   * transaction. Sans lui, deux mouvements concurrents lisent le même solde de
   * départ et écrivent le même `balanceAfter` : le registre devient faux et la
   * comptabilité irréconciliable.
   */
  async append(tx: Tx, entry: LedgerEntryInput): Promise<number> {
    if (entry.delta === 0) {
      throw new Error('Un mouvement de pièces nul est un bug');
    }

    // hashtext renvoie un int4 : suffisant pour un verrou, les collisions ne
    // font que sérialiser deux utilisateurs sans rien casser.
    await tx.$executeRaw`SELECT pg_advisory_xact_lock(hashtext(${entry.userId}))`;

    const last = await tx.creditLedger.findFirst({
      where: { userId: entry.userId },
      orderBy: { createdAt: 'desc' },
      select: { balanceAfter: true },
    });

    const balanceAfter = (last?.balanceAfter ?? 0) + entry.delta;

    if (balanceAfter < 0) {
      throw new ForbiddenException('Solde de pièces insuffisant');
    }

    await tx.creditLedger.create({
      data: {
        userId: entry.userId,
        delta: entry.delta,
        balanceAfter,
        reason: entry.reason,
        refType: entry.refType,
        refId: entry.refId,
        purchaseId: entry.purchaseId,
        idempotencyKey: entry.idempotencyKey,
        note: entry.note,
      },
    });

    return balanceAfter;
  }

  /** Version autonome, pour les appels hors transaction existante. */
  credit(entry: LedgerEntryInput): Promise<number> {
    return this.prisma.$transaction((tx) => this.append(tx, entry));
  }

  /**
   * Débite le solde.
   *
   * `delta` est fourni positif et inversé ici : les appelants raisonnent en
   * coût, pas en signe, et une erreur de signe créditerait au lieu de débiter.
   */
  spend(
    userId: string,
    cost: number,
    reason: LedgerReason,
    context: Omit<LedgerEntryInput, 'userId' | 'delta' | 'reason'> = {},
  ): Promise<number> {
    return this.prisma.$transaction((tx) =>
      this.append(tx, { ...context, userId, delta: -Math.abs(cost), reason }),
    );
  }

  /** Solde courant, lu sur la dernière écriture. */
  async balanceOf(userId: string): Promise<number> {
    const last = await this.prisma.creditLedger.findFirst({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      select: { balanceAfter: true },
    });

    return last?.balanceAfter ?? 0;
  }

  /** Historique, pour l'écran « mes pièces ». */
  history(userId: string, limit = 50) {
    return this.prisma.creditLedger.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      take: limit,
      select: {
        id: true,
        delta: true,
        balanceAfter: true,
        reason: true,
        note: true,
        createdAt: true,
      },
    });
  }
}
