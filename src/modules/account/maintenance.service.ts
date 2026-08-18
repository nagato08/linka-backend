import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { PrismaService } from '../../core/prisma/prisma.service';
import { RiskService } from '../safety/risk.service';
import { BoostService } from '../billing/boost.service';
import { PurchaseService } from '../billing/purchase.service';
import { EventService } from '../events/event.service';
import { AccountService } from './account.service';

/**
 * Tâches planifiées.
 *
 * Des travaux que personne ne déclenche mais dont l'absence se voit
 * tardivement : la file des boosts, la réconciliation des paiements, les
 * rappels d'événement, la purge RGPD, le recalcul des scores de risque et le
 * nettoyage des codes expirés.
 */
@Injectable()
export class MaintenanceService {
  private readonly logger = new Logger(MaintenanceService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly account: AccountService,
    private readonly risk: RiskService,
    private readonly boosts: BoostService,
    private readonly purchases: PurchaseService,
    private readonly events: EventService,
  ) {}

  /**
   * Termine les boosts échus et démarre ceux qui attendent leur créneau.
   *
   * Toutes les minutes : un boost de trente minutes ne supporte pas une
   * imprécision plus grande, et quelqu'un qui a payé ne doit pas attendre.
   */
  @Cron(CronExpression.EVERY_MINUTE, { name: 'file-des-boosts' })
  async processBoostQueue(): Promise<void> {
    try {
      await this.boosts.processQueue();
    } catch (error) {
      this.logger.error(
        `Traitement de la file de boosts impossible : ${(error as Error).message}`,
      );
    }
  }

  /**
   * Rattrape les paiements dont le webhook s'est perdu.
   *
   * Indispensable en mobile money, et pas seulement en secours : l'utilisateur
   * saisit son code PIN hors de l'application, le paiement peut aboutir
   * plusieurs minutes plus tard, et le rappel n'arrive pas toujours. Sans ce
   * job, des paiements réussis ne seraient jamais crédités — le pire cas
   * possible pour la confiance.
   */
  @Cron(CronExpression.EVERY_5_MINUTES, { name: 'reconciliation-paiements' })
  async reconcilePayments(): Promise<void> {
    try {
      const { settled } = await this.purchases.reconcilePending();
      if (settled > 0) {
        this.logger.log(`Réconciliation : ${settled} paiement(s) rattrapé(s)`);
      }
    } catch (error) {
      this.logger.error(
        `Réconciliation impossible : ${(error as Error).message}`,
      );
    }
  }

  /**
   * Prévient les participants des événements imminents.
   *
   * Toutes les dix minutes, pour une fenêtre de quinze : le recouvrement est
   * volontaire, il absorbe un redémarrage sans laisser passer d'événement, et
   * un verrou Redis empêche le double envoi.
   */
  @Cron(CronExpression.EVERY_10_MINUTES, { name: 'rappels-evenements' })
  async sendEventReminders(): Promise<void> {
    try {
      const { events, notified } = await this.events.sendReminders();
      if (events > 0) {
        this.logger.log(
          `Rappels : ${events} événement(s), ${notified} personne(s)`,
        );
      }
    } catch (error) {
      this.logger.error(
        `Envoi des rappels impossible : ${(error as Error).message}`,
      );
    }
  }

  /**
   * Purge les comptes dont le délai de trente jours est écoulé.
   *
   * À trois heures du matin : la purge supprime des objets du stockage et
   * réécrit des lignes, autant le faire quand personne n'utilise
   * l'application.
   */
  @Cron(CronExpression.EVERY_DAY_AT_3AM, { name: 'purge-comptes' })
  async purgeDeletedAccounts(): Promise<void> {
    try {
      const { purged } = await this.account.purgeExpired();
      if (purged > 0) {
        this.logger.log(`Purge quotidienne : ${purged} compte(s)`);
      }
    } catch (error) {
      this.logger.error(`Échec de la purge : ${(error as Error).message}`);
    }
  }

  /**
   * Recalcule les scores de risque des comptes récemment actifs.
   *
   * Toutes les heures, et uniquement sur les comptes qui ont bougé : recalculer
   * l'ensemble de la base n'apporterait rien, un compte inactif ne produit
   * aucun nouveau signal.
   */
  @Cron(CronExpression.EVERY_HOUR, { name: 'scores-de-risque' })
  async refreshRiskScores(): Promise<void> {
    const since = new Date(Date.now() - 3_600_000);

    const users = await this.prisma.user.findMany({
      where: {
        lastActiveAt: { gte: since },
        status: { in: ['ACTIVE', 'SHADOW_BANNED'] },
      },
      select: { id: true },
      take: 500,
    });

    let flagged = 0;

    for (const user of users) {
      try {
        const { level } = await this.risk.refresh(user.id);
        if (level === 'HIGH' || level === 'CRITICAL') flagged += 1;
      } catch (error) {
        this.logger.warn(
          `Score de risque impossible pour ${user.id} : ${(error as Error).message}`,
        );
      }
    }

    if (users.length > 0) {
      this.logger.log(
        `Scores recalculés : ${users.length} compte(s), ${flagged} à risque élevé`,
      );
    }
  }

  /**
   * Efface les codes de vérification périmés.
   *
   * Ils ne servent plus à rien et contiennent des adresses e-mail : les garder
   * élargit la surface exposée en cas de fuite, sans aucune contrepartie.
   */
  @Cron(CronExpression.EVERY_DAY_AT_4AM, { name: 'nettoyage-codes' })
  async cleanupExpiredCodes(): Promise<void> {
    const cutoff = new Date(Date.now() - 7 * 86_400_000);

    const [codes, sessions] = await Promise.all([
      this.prisma.otpCode.deleteMany({ where: { expiresAt: { lt: cutoff } } }),
      this.prisma.session.deleteMany({ where: { expiresAt: { lt: cutoff } } }),
    ]);

    if (codes.count + sessions.count > 0) {
      this.logger.log(
        `Nettoyage : ${codes.count} code(s), ${sessions.count} session(s)`,
      );
    }
  }
}
