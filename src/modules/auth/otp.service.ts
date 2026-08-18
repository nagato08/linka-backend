import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import {
  AppLocale,
  OtpChannel,
  OtpPurpose,
} from '../../generated/prisma/enums';
import { TooManyRequestsException } from '../../common/exceptions/too-many-requests.exception';
import { PrismaService } from '../../core/prisma/prisma.service';
import { RedisService } from '../../core/redis/redis.service';
import { HashService } from '../../core/crypto/hash.service';
import { EmailService } from './email.service';

/**
 * Dix minutes, contre cinq pour un SMS.
 *
 * Un e-mail transite par plusieurs serveurs, peut atterrir en indésirables, et
 * l'utilisateur doit basculer d'application pour le lire. Cinq minutes
 * produiraient des expirations sur des tentatives parfaitement légitimes.
 */
const OTP_TTL_SECONDS = 600;
const MAX_ATTEMPTS = 5;

/**
 * Plafonds d'envoi.
 *
 * L'e-mail ne coûte presque rien, contrairement au SMS. Ces plafonds ne
 * protègent donc plus une facture : ils empêchent de transformer le service en
 * outil de harcèlement — inonder la boîte de quelqu'un en réclamant des codes
 * à son adresse.
 */
const LIMITS = {
  perIdentifierHour: { max: 5, windowSeconds: 3_600 },
  perIdentifierDay: { max: 15, windowSeconds: 86_400 },
  perIpDay: { max: 30, windowSeconds: 86_400 },
} as const;

@Injectable()
export class OtpService {
  private readonly logger = new Logger(OtpService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly redis: RedisService,
    private readonly hash: HashService,
    private readonly email: EmailService,
  ) {}

  /**
   * Émet un code et l'achemine.
   *
   * Les codes encore valides pour cet identifiant et cette intention sont
   * invalidés au passage : sans cela, un attaquant accumule des codes actifs et
   * multiplie d'autant ses chances de tomber juste.
   */
  async request(
    identifier: string,
    purpose: OtpPurpose,
    locale: AppLocale,
    ipAddress?: string,
    channel: OtpChannel = OtpChannel.EMAIL,
  ): Promise<{ expiresAt: Date }> {
    await this.enforceRateLimits(identifier, ipAddress);

    await this.prisma.otpCode.updateMany({
      where: { identifier, purpose, consumedAt: null },
      data: { consumedAt: new Date() },
    });

    const code = this.hash.generateOtpCode();
    const expiresAt = new Date(Date.now() + OTP_TTL_SECONDS * 1_000);

    await this.prisma.otpCode.create({
      data: {
        identifier,
        channel,
        purpose,
        codeHash: this.hash.hashOtp(code, identifier),
        expiresAt,
        maxAttempts: MAX_ATTEMPTS,
        ipAddress,
      },
    });

    if (channel === OtpChannel.EMAIL) {
      await this.email.sendOtp(identifier, code, locale);
    } else {
      // Le canal SMS reste inutilisé : son ouverture exige une société
      // enregistrée et l'approbation d'un sender ID.
      throw new BadRequestException("Le canal SMS n'est pas encore disponible");
    }

    return { expiresAt };
  }

  /**
   * Vérifie un code et le consomme.
   *
   * Le compteur de tentatives est incrémenté avant la comparaison : un abandon
   * de requête en cours de traitement ne doit pas offrir un essai gratuit.
   */
  async verify(
    identifier: string,
    purpose: OtpPurpose,
    code: string,
  ): Promise<void> {
    const record = await this.prisma.otpCode.findFirst({
      where: { identifier, purpose, consumedAt: null },
      orderBy: { createdAt: 'desc' },
    });

    if (!record) {
      throw new BadRequestException('Aucun code en attente pour cette adresse');
    }

    if (record.expiresAt < new Date()) {
      throw new BadRequestException('Code expiré, demandez-en un nouveau');
    }

    if (record.attempts >= record.maxAttempts) {
      // Le code est brûlé : le laisser vivant offrirait des essais illimités
      // à qui relance la vérification.
      await this.prisma.otpCode.update({
        where: { id: record.id },
        data: { consumedAt: new Date() },
      });
      throw new BadRequestException(
        'Trop de tentatives, demandez un nouveau code',
      );
    }

    const updated = await this.prisma.otpCode.update({
      where: { id: record.id },
      data: { attempts: { increment: 1 } },
    });

    if (
      !this.hash.safeEqual(
        updated.codeHash,
        this.hash.hashOtp(code, identifier),
      )
    ) {
      const left = updated.maxAttempts - updated.attempts;
      throw new BadRequestException(
        left > 0
          ? `Code incorrect, ${left} tentative(s) restante(s)`
          : 'Code incorrect, demandez un nouveau code',
      );
    }

    await this.prisma.otpCode.update({
      where: { id: record.id },
      data: { consumedAt: new Date() },
    });
  }

  /**
   * Trois compteurs indépendants dans Redis.
   *
   * Le plafond par IP existe parce que celui par identifiant ne suffit pas :
   * rien n'empêche d'itérer sur des milliers d'adresses depuis une seule
   * machine pour créer des comptes en série.
   */
  private async enforceRateLimits(
    identifier: string,
    ipAddress?: string,
  ): Promise<void> {
    const checks: { key: string; max: number; window: number }[] = [
      {
        key: `otp:id:h:${identifier}`,
        max: LIMITS.perIdentifierHour.max,
        window: LIMITS.perIdentifierHour.windowSeconds,
      },
      {
        key: `otp:id:d:${identifier}`,
        max: LIMITS.perIdentifierDay.max,
        window: LIMITS.perIdentifierDay.windowSeconds,
      },
    ];

    if (ipAddress) {
      checks.push({
        key: `otp:ip:d:${ipAddress}`,
        max: LIMITS.perIpDay.max,
        window: LIMITS.perIpDay.windowSeconds,
      });
    }

    for (const check of checks) {
      const count = await this.redis.client.incr(check.key);

      // L'expiration n'est posée qu'à la création : la rafraîchir à chaque
      // appel ferait glisser la fenêtre indéfiniment et rendrait le plafond
      // inatteignable.
      if (count === 1) {
        await this.redis.client.expire(check.key, check.window);
      }

      if (count > check.max) {
        const ttl = await this.redis.client.ttl(check.key);
        this.logger.warn(`Plafond de codes atteint : ${check.key}`);
        throw new TooManyRequestsException(
          `Trop de demandes. Réessayez dans ${Math.ceil(ttl / 60)} minute(s).`,
          ttl,
        );
      }
    }
  }
}
