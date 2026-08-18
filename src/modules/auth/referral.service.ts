import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { LedgerReason, ReferralStatus } from '../../generated/prisma/enums';
import { PrismaService } from '../../core/prisma/prisma.service';
import { HashService } from '../../core/crypto/hash.service';
import { CreditLedgerService } from '../billing/credit-ledger.service';

/**
 * Pièces versées au parrain, une fois le filleul réellement actif.
 *
 * Le parrainage mobilise 1 000 pièces au total par filleul : 500 de bonus
 * d'inscription — que tout le monde reçoit — puis 200 pour le filleul et 300
 * pour le parrain.
 *
 * La part du parrain est la plus élevée des deux : c'est lui qui fait le
 * travail de conviction, le filleul se contente de saisir un code. Deux
 * filleuls actifs paient un boost de 30 minutes, ce qui donne un objectif
 * atteignable plutôt qu'une récompense symbolique.
 */
const REFERRER_REWARD = 300;

/** Pièces versées au filleul, en plus du bonus d'inscription. */
const REFEREE_BONUS = 200;

/**
 * Parrainage.
 *
 * Deux rôles, et le second est le plus important.
 *
 * Acquisition : dans un pays où la publicité en ligne coûte cher et convertit
 * mal, le bouche-à-oreille est le canal principal. Il règle aussi le problème
 * de densité — un utilisateur d'Ebolowa amène des gens d'Ebolowa, exactement
 * là où le deck est vide.
 *
 * Confiance : le parrainage forme un graphe. Un compte parrainé par un compte
 * vérifié démarre avec un risque plus faible. À l'inverse, une branche qui
 * produit des comptes bannis fait tomber son parrain et déclenche le réaudit
 * de toute sa descendance. C'est une responsabilité sociale, et elle vaut plus
 * que bien des heuristiques.
 */
@Injectable()
export class ReferralService {
  private readonly logger = new Logger(ReferralService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly hash: HashService,
    private readonly ledger: CreditLedgerService,
  ) {}

  /**
   * Génère un code libre. Les collisions sont possibles — 32^6 valeurs, mais
   * l'espace se remplit — d'où les tentatives successives plutôt qu'un tirage
   * unique optimiste.
   */
  async generateUniqueCode(): Promise<string> {
    for (let attempt = 0; attempt < 10; attempt += 1) {
      const code = this.hash.generateReferralCode();
      const taken = await this.prisma.user.findUnique({
        where: { referralCode: code },
        select: { id: true },
      });
      if (!taken) return code;
    }

    throw new Error('Impossible de générer un code de parrainage unique');
  }

  /** Vérifie un code avant l'inscription, pour un retour immédiat au client. */
  async validateCode(
    code: string,
  ): Promise<{ valid: boolean; firstName?: string }> {
    const referrer = await this.prisma.user.findUnique({
      where: { referralCode: code.trim().toUpperCase() },
      select: {
        id: true,
        status: true,
        bannedAt: true,
        profile: { select: { firstName: true } },
      },
    });

    if (!referrer || referrer.bannedAt) {
      return { valid: false };
    }

    return { valid: true, firstName: referrer.profile?.firstName };
  }

  /**
   * Rattache un filleul à son parrain et verse le bonus d'inscription.
   *
   * À appeler dans la transaction de création du compte : un parrainage
   * enregistré alors que le compte a échoué à se créer laisserait un lien
   * orphelin dans le graphe de confiance.
   */
  async attach(
    tx: Parameters<Parameters<PrismaService['$transaction']>[0]>[0],
    refereeId: string,
    code: string,
  ): Promise<void> {
    const normalized = code.trim().toUpperCase();

    const referrer = await tx.user.findUnique({
      where: { referralCode: normalized },
      select: { id: true, bannedAt: true },
    });

    if (!referrer) {
      throw new BadRequestException('Code de parrainage invalide');
    }

    if (referrer.id === refereeId) {
      throw new BadRequestException(
        'Vous ne pouvez pas utiliser votre propre code',
      );
    }

    if (referrer.bannedAt) {
      // Message volontairement identique au cas « code inexistant » : indiquer
      // qu'un code correspond à un compte banni renseignerait sur l'état des
      // sanctions.
      throw new BadRequestException('Code de parrainage invalide');
    }

    await tx.user.update({
      where: { id: refereeId },
      data: { referredById: referrer.id },
    });

    await tx.referral.create({
      data: {
        referrerId: referrer.id,
        refereeId,
        code: normalized,
        rewardCredits: REFERRER_REWARD,
        status: ReferralStatus.PENDING,
      },
    });

    // Le solde n'est pas nul à cet instant : le bonus d'inscription vient
    // d'être versé dans la même transaction. Écrire `balanceAfter` en dur
    // écraserait ce montant.
    await this.ledger.append(tx, {
      userId: refereeId,
      delta: REFEREE_BONUS,
      reason: LedgerReason.BONUS_REFERRAL,
      refType: 'referral',
      note: `Bonus de parrainage (code ${normalized})`,
    });
  }

  /**
   * Verse la récompense au parrain, une fois le filleul réellement actif.
   *
   * Le décalage est volontaire : récompenser à l'inscription reviendrait à
   * payer pour des comptes créés en masse et jamais utilisés.
   */
  async qualify(refereeId: string): Promise<void> {
    const referral = await this.prisma.referral.findUnique({
      where: { refereeId },
    });

    if (!referral || referral.status !== ReferralStatus.PENDING) return;

    await this.prisma.$transaction(async (tx) => {
      await this.ledger.append(tx, {
        userId: referral.referrerId,
        delta: referral.rewardCredits,
        reason: LedgerReason.BONUS_REFERRAL,
        refType: 'referral',
        refId: referral.id,
        idempotencyKey: `referral:${referral.id}`,
        note: 'Filleul devenu actif',
      });

      await tx.referral.update({
        where: { id: referral.id },
        data: {
          status: ReferralStatus.REWARDED,
          qualifiedAt: new Date(),
          rewardedAt: new Date(),
        },
      });
    });

    this.logger.log(`Parrainage récompensé : ${referral.id}`);
  }

  /**
   * Annule les parrainages d'un compte banni et remonte ses filleuls pour
   * réaudit. Ne bannit personne automatiquement : la décision reste humaine,
   * mais la liste est produite sans avoir à la reconstituer à la main.
   */
  async revokeBranch(referrerId: string, reason: string): Promise<string[]> {
    const referrals = await this.prisma.referral.findMany({
      where: { referrerId, revokedAt: null },
      select: { id: true, refereeId: true },
    });

    if (referrals.length === 0) return [];

    await this.prisma.referral.updateMany({
      where: { id: { in: referrals.map((r) => r.id) } },
      data: {
        status: ReferralStatus.REVOKED,
        revokedAt: new Date(),
        revokedReason: reason,
      },
    });

    this.logger.warn(
      `Branche de parrainage révoquée : ${referrals.length} filleul(s) à réauditer`,
    );

    return referrals.map((r) => r.refereeId);
  }
}
