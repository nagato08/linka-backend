import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import {
  ModerationTaskType,
  ReportReason,
  ReportStatus,
} from '../../generated/prisma/enums';
import { PrismaService } from '../../core/prisma/prisma.service';
import { BlockService } from './block.service';

/**
 * Priorité de traitement selon le motif.
 *
 * La minorité passe avant tout le reste : une erreur là-dessus engage la
 * responsabilité pénale de la plateforme, pas seulement sa réputation.
 */
const PRIORITY_BY_REASON: Record<ReportReason, number> = {
  UNDERAGE: 100,
  VIOLENCE: 90,
  NUDITY: 70,
  SCAM_MONEY: 60,
  HARASSMENT: 60,
  FAKE_PROFILE: 40,
  OFF_PLATFORM: 30,
  SPAM: 20,
  OTHER: 10,
};

/**
 * Nombre de signalements distincts déclenchant une mise en retrait immédiate,
 * avant toute revue humaine.
 *
 * Trois personnes différentes qui signalent le même compte en quelques heures
 * se trompent rarement toutes les trois. Attendre un modérateur, c'est laisser
 * le compte nuire pendant la nuit.
 */
const AUTO_SHADOW_BAN_THRESHOLD = 3;

@Injectable()
export class ReportService {
  private readonly logger = new Logger(ReportService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly blocks: BlockService,
  ) {}

  /**
   * Enregistre un signalement.
   *
   * Le blocage est automatique : personne ne signale quelqu'un dont il
   * souhaite continuer à recevoir des messages. Le demander en deux gestes
   * distincts revient à laisser la victime exposée entre les deux.
   */
  async report(
    reporterId: string,
    input: {
      reportedUserId: string;
      reason: ReportReason;
      details?: string;
      messageId?: string;
      evidenceKeys?: string[];
    },
  ): Promise<{ reportId: string }> {
    if (reporterId === input.reportedUserId) {
      throw new BadRequestException(
        'Vous ne pouvez pas vous signaler vous-même',
      );
    }

    const target = await this.prisma.user.findUnique({
      where: { id: input.reportedUserId },
      select: { id: true },
    });

    if (!target) {
      throw new NotFoundException('Profil introuvable');
    }

    const report = await this.prisma.report.create({
      data: {
        reporterId,
        reportedUserId: input.reportedUserId,
        reason: input.reason,
        details: input.details,
        messageId: input.messageId,
        evidenceKeys: input.evidenceKeys ?? [],
        status: ReportStatus.OPEN,
      },
    });

    await this.prisma.moderationTask.create({
      data: {
        type: ModerationTaskType.REPORT_REVIEW,
        reportId: report.id,
        subjectUserId: input.reportedUserId,
        priority: PRIORITY_BY_REASON[input.reason],
      },
    });

    await this.blocks.block(reporterId, input.reportedUserId, 'signalement');

    await this.escalateIfNeeded(input.reportedUserId);

    this.logger.log(
      `Signalement ${report.id} : ${input.reason} contre ${input.reportedUserId}`,
    );

    return { reportId: report.id };
  }

  /**
   * Met le compte en retrait si plusieurs personnes distinctes l'ont signalé.
   *
   * Le retrait est silencieux : l'utilisateur continue d'utiliser
   * l'application normalement, mais n'apparaît plus dans les piles. Lui
   * annoncer la sanction le pousserait à recréer un compte dans la minute,
   * alors que le laisser dans l'ignorance lui fait perdre son temps.
   */
  private async escalateIfNeeded(reportedUserId: string): Promise<void> {
    const distinctReporters = await this.prisma.report.groupBy({
      by: ['reporterId'],
      where: {
        reportedUserId,
        status: { in: [ReportStatus.OPEN, ReportStatus.REVIEWING] },
      },
    });

    if (distinctReporters.length < AUTO_SHADOW_BAN_THRESHOLD) return;

    const user = await this.prisma.user.findUnique({
      where: { id: reportedUserId },
      select: { status: true, shadowBannedAt: true },
    });

    if (!user || user.shadowBannedAt) return;

    await this.prisma.user.update({
      where: { id: reportedUserId },
      data: { status: 'SHADOW_BANNED', shadowBannedAt: new Date() },
    });

    await this.prisma.moderationTask.updateMany({
      where: {
        subjectUserId: reportedUserId,
        status: { in: ['QUEUED', 'IN_REVIEW'] },
      },
      data: { priority: 95 },
    });

    this.logger.warn(
      `Mise en retrait automatique de ${reportedUserId} : ${distinctReporters.length} signalements distincts`,
    );
  }

  /** Signalements émis par l'utilisateur, pour son propre suivi. */
  listMine(reporterId: string) {
    return this.prisma.report.findMany({
      where: { reporterId },
      orderBy: { createdAt: 'desc' },
      take: 50,
      select: {
        id: true,
        reason: true,
        status: true,
        createdAt: true,
        resolvedAt: true,
      },
    });
  }
}
