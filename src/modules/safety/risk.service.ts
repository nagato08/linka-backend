import { Injectable, Logger } from '@nestjs/common';
import {
  ModerationTaskType,
  ReportStatus,
  RiskLevel,
  SwipeAction,
  UserStatus,
} from '../../generated/prisma/enums';
import { PrismaService } from '../../core/prisma/prisma.service';
import { RedisService } from '../../core/redis/redis.service';
import { GeoIntegrityService } from './geo-integrity.service';

export interface RiskSignals {
  /** Part de likes dans les swipes. Proche de 1 = balayage sans lecture. */
  likeRatio: number;
  swipeCount: number;
  /** Swipes séparés de moins de 300 ms, comptés par le module de matching. */
  fastSwipes: number;
  reportsReceived: number;
  matchCount: number;
  /** Messages poussant vers WhatsApp, Telegram ou un numéro direct. */
  offPlatformMessages: number;
  /** Même texte envoyé à plusieurs conversations. */
  duplicateMessages: number;
  /** Comptes distincts partageant une empreinte d'appareil. */
  linkedAccounts: number;
  photosRejected: number;
  /** Déplacements physiquement impossibles, sans mode voyage déclaré. */
  impossibleJumps: number;
  [key: string]: number;
}

/**
 * Motifs de renvoi hors plateforme.
 *
 * L'arnaque sentimentale suit toujours le même chemin : sortir de
 * l'application le plus vite possible, là où rien n'est modéré ni traçable.
 * Un message qui pousse vers WhatsApp dans les premières minutes est le signal
 * le plus fiable dont on dispose.
 */
const OFF_PLATFORM_PATTERNS = [
  'whatsapp',
  'whatsap',
  'telegram',
  'wattsap',
  'snap',
  'mon numero',
  'mon numéro',
  'appelle moi',
  'appelle-moi',
  'ecris moi sur',
  'écris moi sur',
];

const SCORE_WEIGHTS = {
  likeSpray: 25,
  fastSwipes: 20,
  reports: 30,
  offPlatform: 25,
  duplicateMessages: 20,
  linkedAccounts: 15,
  rejectedPhotos: 15,
  // Position simulée : contourne le paywall du mode voyage, et sert surtout à
  // arroser plusieurs villes depuis un seul endroit.
  spoofedLocation: 20,
};

/** Au-delà, le compte est retiré des piles sans en être informé. */
const SHADOW_BAN_SCORE = 70;

/**
 * Score de risque comportemental.
 *
 * Mécanisme anti-fraude le plus rentable de toute la chaîne : il n'appelle
 * aucun service payant et attrape la grande majorité des comptes malveillants,
 * là où la vérification d'identité coûte cher et où l'OTP se contourne.
 *
 * Un vrai utilisateur et un scammeur ne se comportent pas pareil, et l'écart
 * est mesurable sans jamais lire le contenu des conversations privées — seuls
 * des motifs sont comptés, aucun message n'est stocké ni transmis.
 */
@Injectable()
export class RiskService {
  private readonly logger = new Logger(RiskService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly redis: RedisService,
    private readonly geo: GeoIntegrityService,
  ) {}

  async evaluate(userId: string): Promise<{
    score: number;
    level: RiskLevel;
    signals: RiskSignals;
  }> {
    const signals = await this.collect(userId);
    let score = 0;

    // Balayage sans lecture : liker presque tout n'est pas un comportement
    // humain. Le seuil est haut pour ne pas punir les profils peu exigeants.
    if (signals.swipeCount >= 30 && signals.likeRatio > 0.9) {
      score += SCORE_WEIGHTS.likeSpray;
    }

    if (signals.fastSwipes >= 20) {
      score += SCORE_WEIGHTS.fastSwipes;
    }

    // Rapporté au nombre de matchs : dix signalements sur mille matchs n'ont
    // pas le même sens que trois sur cinq.
    const reportRatio =
      signals.matchCount > 0
        ? signals.reportsReceived / signals.matchCount
        : signals.reportsReceived;

    if (signals.reportsReceived >= 2 && reportRatio > 0.05) {
      score += SCORE_WEIGHTS.reports;
    }

    if (signals.offPlatformMessages >= 3) {
      score += SCORE_WEIGHTS.offPlatform;
    }

    if (signals.duplicateMessages >= 3) {
      score += SCORE_WEIGHTS.duplicateMessages;
    }

    if (signals.linkedAccounts > 2) {
      score += SCORE_WEIGHTS.linkedAccounts;
    }

    if (signals.photosRejected >= 2) {
      score += SCORE_WEIGHTS.rejectedPhotos;
    }

    // Deux sauts, pas un : un relevé GPS erratique arrive, un schéma répété
    // non.
    if (signals.impossibleJumps >= 2) {
      score += SCORE_WEIGHTS.spoofedLocation;
    }

    return { score: Math.min(100, score), level: this.levelOf(score), signals };
  }

  /**
   * Recalcule, enregistre, et met en retrait si le seuil est franchi.
   *
   * Le retrait est réversible par un modérateur : le score se trompe parfois,
   * et un faux positif silencieux vaut mieux qu'un bannissement erroné — mais
   * il doit rester visible dans la file de modération.
   */
  async refresh(userId: string): Promise<{ score: number; level: RiskLevel }> {
    const { score, level, signals } = await this.evaluate(userId);

    await this.prisma.riskScore.upsert({
      where: { userId },
      create: { userId, score, level, signals },
      update: { score, level, signals },
    });

    if (score >= SHADOW_BAN_SCORE) {
      await this.applyShadowBan(userId, score, signals);
    }

    return { score, level };
  }

  private async applyShadowBan(
    userId: string,
    score: number,
    signals: RiskSignals,
  ): Promise<void> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { status: true, shadowBannedAt: true },
    });

    if (!user || user.shadowBannedAt || user.status === UserStatus.BANNED) {
      return;
    }

    await this.prisma.$transaction(async (tx) => {
      await tx.user.update({
        where: { id: userId },
        data: {
          status: UserStatus.SHADOW_BANNED,
          shadowBannedAt: new Date(),
        },
      });

      await tx.riskScore.update({
        where: { userId },
        data: { shadowBannedAt: new Date() },
      });

      await tx.moderationTask.create({
        data: {
          type: ModerationTaskType.RISK_REVIEW,
          subjectUserId: userId,
          priority: 80,
          notes: `Score de risque ${score} — ${JSON.stringify(signals)}`.slice(
            0,
            1_000,
          ),
        },
      });
    });

    this.logger.warn(
      `Mise en retrait automatique de ${userId} : score ${score}`,
    );
  }

  private async collect(userId: string): Promise<RiskSignals> {
    const [
      swipeCount,
      likeCount,
      reportsReceived,
      matchCount,
      photosRejected,
      fingerprints,
    ] = await Promise.all([
      this.prisma.swipe.count({ where: { actorId: userId } }),
      this.prisma.swipe.count({
        where: {
          actorId: userId,
          action: { in: [SwipeAction.LIKE, SwipeAction.SUPERLIKE] },
        },
      }),
      this.prisma.report.count({
        where: {
          reportedUserId: userId,
          status: {
            in: [
              ReportStatus.OPEN,
              ReportStatus.REVIEWING,
              ReportStatus.ACTIONED,
            ],
          },
        },
      }),
      this.prisma.match.count({
        where: { OR: [{ userAId: userId }, { userBId: userId }] },
      }),
      this.prisma.photo.count({
        where: { profileId: userId, status: 'REJECTED' },
      }),
      this.prisma.device.findMany({
        where: { userId },
        select: { fingerprint: true },
      }),
    ]);

    const fastSwipes = Number(
      (await this.redis.client.get(`swipe:fast:${userId}`)) ?? 0,
    );

    const linkedAccounts = await this.countLinkedAccounts(
      fingerprints.map((d) => d.fingerprint),
    );

    const { offPlatform, duplicates } = await this.analyseMessages(userId);
    const impossibleJumps = await this.geo.countRecentJumps(userId);

    return {
      likeRatio: swipeCount > 0 ? likeCount / swipeCount : 0,
      swipeCount,
      fastSwipes,
      reportsReceived,
      matchCount,
      offPlatformMessages: offPlatform,
      duplicateMessages: duplicates,
      linkedAccounts,
      photosRejected,
      impossibleJumps,
    };
  }

  private async countLinkedAccounts(fingerprints: string[]): Promise<number> {
    if (fingerprints.length === 0) return 0;

    const devices = await this.prisma.device.findMany({
      where: { fingerprint: { in: fingerprints } },
      select: { userId: true },
      distinct: ['userId'],
    });

    return devices.length;
  }

  /**
   * Compte deux motifs dans les messages envoyés.
   *
   * L'analyse porte sur les cent derniers messages et ne conserve rien : seuls
   * deux compteurs en sortent. Le contenu des conversations n'est ni stocké
   * ailleurs, ni transmis à un tiers.
   */
  private async analyseMessages(
    userId: string,
  ): Promise<{ offPlatform: number; duplicates: number }> {
    const messages = await this.prisma.message.findMany({
      where: { senderId: userId, body: { not: null }, deletedAt: null },
      orderBy: { createdAt: 'desc' },
      take: 100,
      select: { body: true, conversationId: true },
    });

    let offPlatform = 0;
    const bodyToConversations = new Map<string, Set<string>>();

    for (const message of messages) {
      const text = (message.body ?? '').toLowerCase();

      if (OFF_PLATFORM_PATTERNS.some((pattern) => text.includes(pattern))) {
        offPlatform += 1;
      }

      const normalized = text.replace(/\s+/g, ' ').trim();
      if (normalized.length >= 15) {
        const set = bodyToConversations.get(normalized) ?? new Set();
        set.add(message.conversationId);
        bodyToConversations.set(normalized, set);
      }
    }

    // Un même texte envoyé à trois conversations différentes n'est pas une
    // coïncidence : c'est un envoi en série.
    const duplicates = [...bodyToConversations.values()].filter(
      (conversations) => conversations.size >= 3,
    ).length;

    return { offPlatform, duplicates };
  }

  private levelOf(score: number): RiskLevel {
    if (score >= 70) return RiskLevel.CRITICAL;
    if (score >= 45) return RiskLevel.HIGH;
    if (score >= 20) return RiskLevel.MEDIUM;
    return RiskLevel.LOW;
  }
}
