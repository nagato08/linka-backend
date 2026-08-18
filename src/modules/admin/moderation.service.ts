import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import {
  EventRequestStatus,
  EventStatus,
  MessageType,
  ModerationDecision,
  ModerationTaskStatus,
  ModerationTaskType,
  NotificationType,
  PhotoRejectionReason,
  PhotoStatus,
  ReportStatus,
  UserStatus,
  VerificationFailureReason,
  VerificationStatus,
} from '../../generated/prisma/enums';
import { PrismaService } from '../../core/prisma/prisma.service';
import { StorageService } from '../../core/storage/storage.service';
import {
  NotificationService,
  type NotifyInput,
} from '../notifications/notification.service';
import { TokenService } from '../auth/token.service';
import { ReferralService } from '../auth/referral.service';
import { DeckCacheService } from '../discovery/deck-cache.service';

@Injectable()
export class ModerationService {
  private readonly logger = new Logger(ModerationService.name);

  /**
   * Captures à effacer après validation de la transaction.
   *
   * La suppression d'objet ne peut pas participer à la transaction : si celle-ci
   * échouait après coup, le fichier serait déjà perdu.
   */
  private pendingCaptureDeletions: (string | null)[] = [];

  constructor(
    private readonly prisma: PrismaService,
    private readonly storage: StorageService,
    private readonly tokens: TokenService,
    private readonly referrals: ReferralService,
    private readonly deckCache: DeckCacheService,
    private readonly notifications: NotificationService,
  ) {}

  /**
   * File de modération, triée par priorité.
   *
   * L'ordre compte : une suspicion de minorité doit passer avant une photo
   * floue, et un modérateur fatigué traite ce qui remonte en premier.
   */
  async queue(options: {
    type?: ModerationTaskType;
    limit?: number;
    cursor?: string;
  }) {
    const limit = Math.min(options.limit ?? 20, 50);

    const tasks = await this.prisma.moderationTask.findMany({
      where: {
        status: {
          in: [ModerationTaskStatus.QUEUED, ModerationTaskStatus.IN_REVIEW],
        },
        ...(options.type ? { type: options.type } : {}),
      },
      orderBy: [{ priority: 'desc' }, { createdAt: 'asc' }],
      take: limit,
      ...(options.cursor ? { cursor: { id: options.cursor }, skip: 1 } : {}),
      include: {
        photo: {
          select: {
            id: true,
            storageKey: true,
            phash: true,
            moderationScores: true,
          },
        },
        report: {
          select: {
            id: true,
            reason: true,
            details: true,
            evidenceKeys: true,
            createdAt: true,
          },
        },
        subjectUser: {
          select: {
            id: true,
            createdAt: true,
            status: true,
            profile: {
              select: { firstName: true, birthdate: true, bio: true },
            },
            riskScore: { select: { score: true, level: true, signals: true } },
          },
        },
      },
    });

    // Les originaux ne sont pas publics : le modérateur reçoit des URL signées
    // et à durée limitée, pas un lien partageable.
    return Promise.all(
      tasks.map(async (task) => ({
        ...task,
        photoUrl: task.photo
          ? await this.storage.createDownloadUrl(task.photo.storageKey, 900)
          : null,
      })),
    );
  }

  async stats() {
    const [queued, byType, shadowBanned, openReports] = await Promise.all([
      this.prisma.moderationTask.count({
        where: { status: ModerationTaskStatus.QUEUED },
      }),
      this.prisma.moderationTask.groupBy({
        by: ['type'],
        where: { status: ModerationTaskStatus.QUEUED },
        _count: true,
      }),
      this.prisma.user.count({ where: { status: UserStatus.SHADOW_BANNED } }),
      this.prisma.report.count({ where: { status: ReportStatus.OPEN } }),
    ]);

    return { queued, byType, shadowBanned, openReports };
  }

  /** Réserve une tâche pour éviter que deux modérateurs traitent la même. */
  async claim(taskId: string, moderatorId: string) {
    const claimed = await this.prisma.moderationTask.updateMany({
      where: { id: taskId, status: ModerationTaskStatus.QUEUED },
      data: {
        status: ModerationTaskStatus.IN_REVIEW,
        assignedToId: moderatorId,
        claimedAt: new Date(),
      },
    });

    if (claimed.count === 0) {
      throw new BadRequestException('Tâche déjà prise en charge');
    }

    return { claimed: true };
  }

  /**
   * Applique une décision.
   *
   * Chaque décision est journalisée avec son auteur : une sanction sur un
   * compte doit pouvoir être expliquée, et contestée.
   */
  async decide(
    taskId: string,
    moderatorId: string,
    decision: ModerationDecision,
    options: { notes?: string; photoReason?: PhotoRejectionReason } = {},
  ) {
    const task = await this.prisma.moderationTask.findUnique({
      where: { id: taskId },
      include: { photo: true, report: true },
    });

    if (!task) throw new NotFoundException('Tâche introuvable');

    if (task.status === ModerationTaskStatus.RESOLVED) {
      throw new BadRequestException('Tâche déjà traitée');
    }

    // Les notifications sont accumulées puis envoyées après validation : une
    // annonce de badge accordé suivie d'un rollback serait pire que pas
    // d'annonce du tout.
    const pending: NotifyInput[] = [];

    await this.prisma.$transaction(async (tx) => {
      await tx.moderationTask.update({
        where: { id: taskId },
        data: {
          status: ModerationTaskStatus.RESOLVED,
          decision,
          notes: options.notes,
          assignedToId: moderatorId,
          resolvedAt: new Date(),
        },
      });

      if (task.reportId) {
        await tx.report.update({
          where: { id: task.reportId },
          data: {
            status:
              decision === ModerationDecision.NO_ACTION
                ? ReportStatus.DISMISSED
                : ReportStatus.ACTIONED,
            decision,
            resolvedById: moderatorId,
            resolvedAt: new Date(),
            resolutionNote: options.notes,
          },
        });
      }

      if (task.photoId) {
        await this.applyPhotoDecision(
          tx,
          task.photoId,
          decision,
          options.photoReason,
        );
      }

      if (task.verificationId) {
        await this.applyVerificationDecision(
          tx,
          task.verificationId,
          decision,
          pending,
          options.notes,
        );
      }

      if (task.eventId) {
        await this.applyEventDecision(
          tx,
          task.eventId,
          decision,
          moderatorId,
          pending,
          options.notes,
        );
      }

      await tx.auditLog.create({
        data: {
          actorId: moderatorId,
          actorType: 'ADMIN',
          action: `moderation.${decision.toLowerCase()}`,
          entityType: task.subjectUserId ? 'user' : 'moderation_task',
          entityId: task.subjectUserId ?? task.id,
          after: { decision, notes: options.notes ?? null },
        },
      });
    });

    await this.flushCaptureDeletions();

    for (const notification of pending) {
      await this.notifications.notify(notification);
    }

    if (task.subjectUserId) {
      await this.applyUserSanction(task.subjectUserId, decision, options.notes);
    }

    this.logger.log(`Décision ${decision} sur la tâche ${taskId}`);

    return { decided: true };
  }

  private async applyPhotoDecision(
    tx: Parameters<Parameters<PrismaService['$transaction']>[0]>[0],
    photoId: string,
    decision: ModerationDecision,
    reason?: PhotoRejectionReason,
  ): Promise<void> {
    const approved = decision === ModerationDecision.APPROVE;

    await tx.photo.update({
      where: { id: photoId },
      data: {
        status: approved ? PhotoStatus.APPROVED : PhotoStatus.REJECTED,
        rejectionReason: approved
          ? null
          : (reason ?? PhotoRejectionReason.OTHER),
        moderatedAt: new Date(),
      },
    });
  }

  /**
   * Tranche une vérification de profil.
   *
   * C'est ici que le badge est accordé ou refusé tant que la comparaison
   * faciale automatique n'est pas branchée : le modérateur compare lui-même le
   * selfie aux photos du profil et vérifie que la pose demandée a bien été
   * exécutée.
   *
   * La capture est effacée dans tous les cas — approbation comme refus. C'est
   * la donnée la plus sensible manipulée par l'application, et elle n'a plus
   * aucune utilité une fois la décision prise.
   */
  /**
   * Tranche un événement.
   *
   * Sans cette étape, un événement resterait indéfiniment en PENDING_REVIEW et
   * ne serait jamais visible : c'est le seul chemin vers la publication.
   *
   * Le contrôle humain n'est pas négociable ici. Un rassemblement physique
   * organisé par un inconnu, à une adresse précise, est le seul endroit du
   * produit où l'on peut encore intervenir avant que des gens ne se
   * retrouvent réellement.
   */
  private async applyEventDecision(
    tx: Parameters<Parameters<PrismaService['$transaction']>[0]>[0],
    eventId: string,
    decision: ModerationDecision,
    moderatorId: string,
    pending: NotifyInput[],
    notes?: string,
  ): Promise<void> {
    const event = await tx.event.findUnique({
      where: { id: eventId },
      select: {
        status: true,
        organizerId: true,
        conversation: { select: { id: true } },
      },
    });

    if (!event) return;

    const approved = decision === ModerationDecision.APPROVE;

    // Un événement déjà annulé ou terminé ne se republie pas : la décision
    // arrive trop tard, et le rouvrir sèmerait la confusion chez les
    // participants.
    if (
      event.status === EventStatus.CANCELLED ||
      event.status === EventStatus.COMPLETED
    ) {
      return;
    }

    await tx.event.update({
      where: { id: eventId },
      data: approved
        ? { status: EventStatus.PUBLISHED, publishedAt: new Date() }
        : { status: EventStatus.CANCELLED, cancelledAt: new Date() },
    });

    // Le message système posté dans la conversation de groupe ne suffit pas :
    // personne n'ouvre le fil d'un événement qu'il attend de voir paraître.
    pending.push({
      userId: event.organizerId,
      type: NotificationType.MODERATION,
      vars: {
        message: approved
          ? 'Votre événement est publié. Il apparaît désormais à proximité.'
          : notes
            ? `Événement refusé : ${notes}`
            : 'Votre événement a été refusé par la modération.',
      },
      data: { screen: 'event', eventId },
    });

    if (!approved) {
      // Les candidatures en attente n'ont plus d'objet.
      await tx.eventRequest.updateMany({
        where: { eventId, status: { in: ['PENDING', 'WAITLISTED'] } },
        data: { status: EventRequestStatus.CANCELLED },
      });

      // L'organisateur doit savoir pourquoi son événement ne paraît pas.
      // Le laisser sans explication le pousserait à le recréer à l'identique.
      if (event.conversation) {
        await tx.message.create({
          data: {
            conversationId: event.conversation.id,
            senderId: moderatorId,
            type: MessageType.SYSTEM,
            clientKey: `event-rejected-${eventId}`,
            body: notes
              ? `Événement refusé par la modération : ${notes}`
              : 'Événement refusé par la modération.',
          },
        });
      }
    }
  }

  private async applyVerificationDecision(
    tx: Parameters<Parameters<PrismaService['$transaction']>[0]>[0],
    verificationId: string,
    decision: ModerationDecision,
    pending: NotifyInput[],
    notes?: string,
  ): Promise<void> {
    const verification = await tx.verification.findUnique({
      where: { id: verificationId },
      select: { userId: true, captureKey: true },
    });

    if (!verification) return;

    const approved = decision === ModerationDecision.APPROVE;

    await tx.verification.update({
      where: { id: verificationId },
      data: {
        status: approved
          ? VerificationStatus.APPROVED
          : VerificationStatus.REJECTED,
        failureReason: approved
          ? null
          : VerificationFailureReason.MANUAL_REJECT,
        reviewNote: notes?.slice(0, 500),
        processedAt: new Date(),
        captureKey: null,
        captureWiped: true,
      },
    });

    if (approved) {
      await tx.profile.updateMany({
        where: { userId: verification.userId },
        data: { isVerified: true },
      });
    }

    // La vérification demande un selfie posé sur commande : sans réponse, la
    // personne recommence, et chaque tentative repasse par la file.
    pending.push({
      userId: verification.userId,
      type: NotificationType.VERIFICATION_RESULT,
      vars: { approved: String(approved) },
      data: { screen: 'verification' },
    });

    this.pendingCaptureDeletions.push(verification.captureKey);
  }

  /**
   * Applique la sanction au compte.
   *
   * Un bannissement révoque les sessions et annule la branche de parrainage :
   * un compte qui en amène d'autres et se fait bannir a probablement amené des
   * comptes du même acabit. Les filleuls ne sont pas bannis automatiquement —
   * la décision reste humaine — mais ils remontent pour réaudit.
   */
  private async applyUserSanction(
    userId: string,
    decision: ModerationDecision,
    notes?: string,
  ): Promise<void> {
    switch (decision) {
      case ModerationDecision.BAN: {
        await this.prisma.user.update({
          where: { id: userId },
          data: {
            status: UserStatus.BANNED,
            bannedAt: new Date(),
            banReason: notes?.slice(0, 500),
          },
        });

        await this.tokens.revokeAllForUser(userId, 'banned');
        const referees = await this.referrals.revokeBranch(
          userId,
          'parrain banni',
        );

        if (referees.length > 0) {
          await this.prisma.moderationTask.createMany({
            data: referees.map((refereeId) => ({
              type: ModerationTaskType.RISK_REVIEW,
              subjectUserId: refereeId,
              priority: 50,
              notes: `Filleul d'un compte banni (${userId})`,
            })),
          });
        }
        break;
      }

      case ModerationDecision.SHADOW_BAN:
        await this.prisma.user.update({
          where: { id: userId },
          data: {
            status: UserStatus.SHADOW_BANNED,
            shadowBannedAt: new Date(),
          },
        });
        break;

      case ModerationDecision.SUSPEND:
        await this.prisma.user.update({
          where: { id: userId },
          data: {
            status: UserStatus.SUSPENDED,
            suspendedUntil: new Date(Date.now() + 7 * 86_400_000),
          },
        });
        await this.tokens.revokeAllForUser(userId, 'suspended');
        break;

      // Réhabilitation : le score de risque se trompe, et un retrait
      // silencieux non corrigé condamne un compte légitime au silence.
      case ModerationDecision.APPROVE:
      case ModerationDecision.NO_ACTION: {
        const user = await this.prisma.user.findUnique({
          where: { id: userId },
          select: { status: true },
        });

        if (user?.status === UserStatus.SHADOW_BANNED) {
          await this.prisma.user.update({
            where: { id: userId },
            data: {
              status: UserStatus.ACTIVE,
              shadowBannedAt: null,
            },
          });

          await this.prisma.riskScore.updateMany({
            where: { userId },
            data: { shadowBannedAt: null, reviewedAt: new Date() },
          });
        }
        break;
      }

      default:
        break;
    }

    await this.deckCache.invalidate(userId);
  }

  private async flushCaptureDeletions(): Promise<void> {
    const keys = this.pendingCaptureDeletions.filter(
      (key): key is string => key !== null,
    );
    this.pendingCaptureDeletions = [];

    if (keys.length === 0) return;

    try {
      await this.storage.deleteObjects(keys);
    } catch (error) {
      this.logger.error(
        `Captures de vérification non supprimées : ${(error as Error).message}`,
      );
    }
  }

  /** Fiche complète d'un compte, pour instruire un signalement. */
  async inspectUser(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        status: true,
        createdAt: true,
        lastActiveAt: true,
        bannedAt: true,
        banReason: true,
        shadowBannedAt: true,
        referredById: true,
        profile: {
          select: {
            firstName: true,
            birthdate: true,
            bio: true,
            gender: true,
            completionScore: true,
            isVerified: true,
            photos: {
              where: { deletedAt: null },
              select: {
                id: true,
                status: true,
                position: true,
                storageKey: true,
              },
              orderBy: { position: 'asc' },
            },
          },
        },
        riskScore: true,
        devices: {
          select: { fingerprint: true, platform: true, integrityVerdict: true },
        },
        _count: {
          select: {
            reportsReceived: true,
            reportsMade: true,
            swipesGiven: true,
            messagesSent: true,
          },
        },
      },
    });

    if (!user) throw new NotFoundException('Compte introuvable');

    const photos = await Promise.all(
      (user.profile?.photos ?? []).map(async (photo) => ({
        ...photo,
        url: await this.storage.createDownloadUrl(photo.storageKey, 900),
      })),
    );

    const reports = await this.prisma.report.findMany({
      where: { reportedUserId: userId },
      orderBy: { createdAt: 'desc' },
      take: 20,
      select: {
        id: true,
        reason: true,
        details: true,
        status: true,
        createdAt: true,
      },
    });

    return {
      ...user,
      profile: user.profile ? { ...user.profile, photos } : null,
      reports,
    };
  }
}
