import { ForbiddenException, Injectable, Logger } from '@nestjs/common';
import { DevicePlatform, UserStatus } from '../../generated/prisma/enums';
import { PrismaService } from '../../core/prisma/prisma.service';
import { IntegrityService } from './integrity.service';

export interface DeviceContext {
  platform: DevicePlatform;
  fingerprint: string;
  model?: string;
  osVersion?: string;
  appVersion?: string;
  /** Jeton Play Integrity (Android) ou DeviceCheck (iOS). */
  integrityToken?: string;
}

/**
 * Nombre de comptes tolérés depuis un même appareil.
 *
 * Deux, et pas un : le partage de téléphone est courant sur ce marché, et un
 * plafond à un exclurait des utilisateurs légitimes. Au-delà, en revanche, on
 * n'est plus dans le partage familial mais dans la ferme à comptes.
 */
const MAX_ACCOUNTS_PER_DEVICE = 2;

@Injectable()
export class DeviceService {
  private readonly logger = new Logger(DeviceService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly integrity: IntegrityService,
  ) {}

  /**
   * Enregistre l'appareil et rattache la session.
   *
   * L'attestation d'intégrité est le mécanisme anti-faux-comptes le plus
   * rentable de toute la chaîne : elle coupe la création automatisée à la
   * source, là où l'OTP se contourne encore avec des services de SMS
   * virtuels.
   */
  async register(userId: string, context: DeviceContext) {
    // Second contrôle, après celui effectué avant la création du compte :
    // deux inscriptions concurrentes depuis le même appareil pourraient sinon
    // passer ensemble le premier.
    await this.enforceAccountCap(context.fingerprint, userId);

    // Lève une exception si le contrôle est exigé et que l'appareil échoue :
    // dans ce cas le compte ne doit pas exister du tout.
    const verdict = await this.integrity.verify(context.integrityToken);

    return this.prisma.device.upsert({
      where: {
        userId_fingerprint: {
          userId,
          fingerprint: context.fingerprint,
        },
      },
      create: {
        userId,
        platform: context.platform,
        fingerprint: context.fingerprint,
        model: context.model,
        osVersion: context.osVersion,
        appVersion: context.appVersion,
        integrityVerdict: verdict,
        integrityCheckedAt: context.integrityToken ? new Date() : null,
      },
      update: {
        lastSeenAt: new Date(),
        appVersion: context.appVersion,
        osVersion: context.osVersion,
        integrityVerdict: verdict,
        integrityCheckedAt: context.integrityToken ? new Date() : undefined,
      },
    });
  }

  /**
   * Refuse un nouveau compte au-delà du plafond.
   *
   * À appeler AVANT toute création de compte. Vérifier après reviendrait à
   * créer un compte puis à refuser la requête : le numéro serait consommé, le
   * code OTP brûlé, et l'utilisateur se retrouverait avec un compte fantôme
   * dont on vient de lui dire qu'il n'existe pas.
   *
   * `userId` est renseigné pour un compte déjà existant, afin qu'une simple
   * reconnexion ne se compte pas elle-même.
   *
   * Les comptes bannis restent comptabilisés — c'est même l'intérêt : sans
   * cela, il suffirait de se faire bannir pour libérer un emplacement et
   * recommencer indéfiniment depuis le même téléphone.
   */
  async enforceAccountCap(fingerprint: string, userId?: string): Promise<void> {
    const existing = await this.prisma.device.findMany({
      where: { fingerprint },
      select: { userId: true },
      distinct: ['userId'],
    });

    const otherAccounts = existing.filter((d) => d.userId !== userId);

    if (otherAccounts.length >= MAX_ACCOUNTS_PER_DEVICE) {
      this.logger.warn(
        `Plafond de comptes atteint pour l'empreinte ${fingerprint.slice(0, 8)}…`,
      );
      throw new ForbiddenException(
        'Trop de comptes ont été créés depuis cet appareil',
      );
    }
  }

  /** Appareils actifs d'un compte, pour l'écran « sessions ouvertes ». */
  listForUser(userId: string) {
    return this.prisma.device.findMany({
      where: { userId },
      orderBy: { lastSeenAt: 'desc' },
      select: {
        id: true,
        platform: true,
        model: true,
        osVersion: true,
        appVersion: true,
        integrityVerdict: true,
        firstSeenAt: true,
        lastSeenAt: true,
      },
    });
  }

  /**
   * Nombre de comptes non bannis partageant cet appareil.
   * Signal repris par le score de risque du lot L5.
   */
  async countLinkedAccounts(fingerprint: string): Promise<number> {
    const devices = await this.prisma.device.findMany({
      where: {
        fingerprint,
        user: { status: { notIn: [UserStatus.DELETED] } },
      },
      select: { userId: true },
      distinct: ['userId'],
    });
    return devices.length;
  }
}
