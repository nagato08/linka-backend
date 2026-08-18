import { Injectable, Logger } from '@nestjs/common';
import {
  AppLocale,
  LedgerReason,
  OtpPurpose,
  UserStatus,
} from '../../generated/prisma/enums';
import { PrismaService } from '../../core/prisma/prisma.service';
import { HashService } from '../../core/crypto/hash.service';
import { EmailService } from './email.service';
import { OtpService } from './otp.service';
import { TokenService, type TokenPair } from './token.service';
import { DeviceService } from './device.service';
import { ReferralService } from './referral.service';
import { CreditLedgerService } from '../billing/credit-ledger.service';
import type { VerifyOtpDto } from './dto/auth.dto';

/**
 * Pièces offertes à l'inscription.
 *
 * De quoi essayer une fonctionnalité payante — un message avant match en coûte
 * 150, un rewind 50 — sans pouvoir s'en contenter. Personne n'achète un usage
 * dont il ignore l'effet ; le coût réel est proche de zéro, un boost n'étant
 * qu'un rang dans un tri.
 */
const SIGNUP_BONUS_COINS = 500;

export interface RequestContext {
  ipAddress?: string;
  userAgent?: string;
}

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly email: EmailService,
    private readonly otp: OtpService,
    private readonly tokens: TokenService,
    private readonly devices: DeviceService,
    private readonly referrals: ReferralService,
    private readonly hash: HashService,
    private readonly ledger: CreditLedgerService,
  ) {}

  /**
   * Envoie un code de vérification.
   *
   * La réponse ne dit jamais si le numéro correspond déjà à un compte. Sur une
   * application de rencontre, cette information permettrait de vérifier qu'une
   * personne précise est inscrite — un outil de harcèlement offert. L'unique
   * parcours est donc identique pour l'inscription et la connexion.
   */
  async requestOtp(
    rawEmail: string,
    locale: AppLocale = AppLocale.FR,
    context: RequestContext = {},
  ): Promise<{ email: string; expiresAt: Date }> {
    const email = this.email.normalize(rawEmail);

    const { expiresAt } = await this.otp.request(
      email,
      OtpPurpose.LOGIN,
      locale,
      context.ipAddress,
    );

    return { email: this.mask(email), expiresAt };
  }

  /**
   * Vérifie le code, puis connecte ou crée le compte.
   */
  async verifyOtp(
    dto: VerifyOtpDto,
    context: RequestContext = {},
  ): Promise<TokenPair & { status: UserStatus; isNewAccount: boolean }> {
    const email = this.email.normalize(dto.email);

    await this.otp.verify(email, OtpPurpose.LOGIN, dto.code);

    const existing = await this.prisma.user.findUnique({
      where: { email },
      select: { id: true, role: true, status: true },
    });

    // Le plafond de comptes par appareil est vérifié AVANT toute création.
    // L'inverse laisserait un compte fantôme derrière chaque refus : numéro
    // consommé, code OTP brûlé, et un compte dont on vient d'annoncer à
    // l'utilisateur qu'il n'a pas été créé.
    await this.devices.enforceAccountCap(dto.device.fingerprint, existing?.id);

    const isNewAccount = !existing;
    const user = existing ?? (await this.createAccount(email, dto));

    const device = await this.devices.register(user.id, {
      platform: dto.device.platform,
      fingerprint: dto.device.fingerprint,
      model: dto.device.model,
      osVersion: dto.device.osVersion,
      appVersion: dto.device.appVersion,
      integrityToken: dto.device.integrityToken,
    });

    await this.prisma.user.update({
      where: { id: user.id },
      data: {
        lastActiveAt: new Date(),
        emailVerifiedAt: existing ? undefined : new Date(),
      },
    });

    const pair = await this.tokens.issue(user, {
      deviceId: device.id,
      ipAddress: context.ipAddress,
      userAgent: context.userAgent,
    });

    return { ...pair, status: user.status, isNewAccount };
  }

  /**
   * Crée le compte et ses dépendances dans une seule transaction.
   *
   * Préférences et réglages de notification sont posés d'emblée : un profil
   * sans préférences ferait planter la construction du deck, et le code
   * devrait alors gérer partout un cas « préférences absentes » qui ne
   * devrait jamais exister.
   */
  private async createAccount(email: string, dto: VerifyOtpDto) {
    const referralCode = await this.referrals.generateUniqueCode();

    return this.prisma.$transaction(async (tx) => {
      const user = await tx.user.create({
        data: {
          email,
          emailVerifiedAt: new Date(),
          referralCode,
          locale: dto.locale ?? AppLocale.FR,
          status: UserStatus.PENDING_PROFILE,
          preference: { create: {} },
          notificationPreference: { create: {} },
        },
        select: { id: true, role: true, status: true },
      });

      await this.ledger.append(tx, {
        userId: user.id,
        delta: SIGNUP_BONUS_COINS,
        reason: LedgerReason.BONUS_SIGNUP,
        note: 'Bienvenue sur Linka',
      });

      // Après le bonus d'inscription : le parrainage s'ajoute au solde, il ne
      // le remplace pas.
      if (dto.referralCode) {
        await this.referrals.attach(tx, user.id, dto.referralCode);
      }

      this.logger.log(`Compte créé : ${user.id}`);
      return user;
    });
  }

  refresh(
    refreshToken: string,
    context: RequestContext = {},
  ): Promise<TokenPair> {
    return this.tokens.rotate(refreshToken, context);
  }

  async logout(sessionId: string): Promise<void> {
    await this.tokens.revokeSession(sessionId);
  }

  async logoutAll(userId: string): Promise<{ revoked: number }> {
    const revoked = await this.tokens.revokeAllForUser(userId, 'logout_all');
    return { revoked };
  }

  /**
   * Masque l'adresse pour l'affichage : ai***a@example.com.
   *
   * La réponse confirme au client quelle adresse a été utilisée sans la
   * réafficher en clair, au cas où l'écran serait vu par-dessus l'épaule.
   */
  private mask(email: string): string {
    const [local, domain] = email.split('@');
    if (!local || !domain) return '***';

    const visible = local.length <= 2 ? local[0] : local.slice(0, 2);
    return `${visible}${'*'.repeat(Math.max(1, local.length - 3))}${local.slice(-1)}@${domain}`;
  }

  /** Sessions ouvertes, pour l'écran « appareils connectés ». */
  listSessions(userId: string, currentSessionId: string) {
    return this.prisma.session
      .findMany({
        where: { userId, revokedAt: null, expiresAt: { gt: new Date() } },
        orderBy: { lastUsedAt: 'desc' },
        select: {
          id: true,
          ipAddress: true,
          userAgent: true,
          createdAt: true,
          lastUsedAt: true,
          device: {
            select: { platform: true, model: true, osVersion: true },
          },
        },
      })
      .then((sessions) =>
        sessions.map((session) => ({
          ...session,
          isCurrent: session.id === currentSessionId,
        })),
      );
  }
}
