import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserRole, UserStatus } from '../../generated/prisma/enums';
import { PrismaService } from '../../core/prisma/prisma.service';
import { TypedConfigService } from '../../core/config/config.module';
import { HashService } from '../../core/crypto/hash.service';

export interface AccessTokenPayload {
  /** Identifiant de l'utilisateur. */
  sub: string;
  /** Identifiant de session, pour pouvoir révoquer un seul appareil. */
  sid: string;
  role: UserRole;
  status: UserStatus;
}

export interface TokenPair {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}

const REFRESH_TTL_DAYS = 30;

@Injectable()
export class TokenService {
  private readonly logger = new Logger(TokenService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
    private readonly hash: HashService,
    private readonly config: TypedConfigService,
  ) {}

  /**
   * Ouvre une session et délivre le couple de jetons.
   *
   * Le jeton d'accès est un JWT court, vérifiable sans toucher la base — c'est
   * ce qui permet d'encaisser le volume de requêtes du deck et du chat. Le
   * jeton de rafraîchissement, lui, est opaque et stocké haché : il n'est
   * consulté que toutes les quinze minutes, le coût d'un accès base est
   * négligeable, et la révocation devient immédiate.
   */
  async issue(
    user: { id: string; role: UserRole; status: UserStatus },
    context: { deviceId?: string; ipAddress?: string; userAgent?: string },
  ): Promise<TokenPair> {
    const refreshToken = this.hash.generateRefreshToken();

    const session = await this.prisma.session.create({
      data: {
        userId: user.id,
        refreshTokenHash: this.hash.hashToken(refreshToken),
        deviceId: context.deviceId,
        ipAddress: context.ipAddress,
        userAgent: context.userAgent?.slice(0, 500),
        expiresAt: new Date(Date.now() + REFRESH_TTL_DAYS * 86_400_000),
      },
    });

    return {
      accessToken: await this.signAccessToken(user, session.id),
      refreshToken,
      expiresIn: this.accessTtlSeconds(),
    };
  }

  /**
   * Échange un jeton de rafraîchissement contre un nouveau couple.
   *
   * Rotation systématique, avec détection de rejeu : si le jeton présenté
   * correspond à une session déjà révoquée, c'est qu'une copie circule. Dans
   * ce cas toutes les sessions de l'utilisateur sautent — on préfère
   * déconnecter partout plutôt que laisser un voleur de jeton en place.
   */
  async rotate(
    refreshToken: string,
    context: { ipAddress?: string; userAgent?: string },
  ): Promise<TokenPair> {
    const tokenHash = this.hash.hashToken(refreshToken);

    const session = await this.prisma.session.findUnique({
      where: { refreshTokenHash: tokenHash },
      include: { user: true },
    });

    if (!session) {
      throw new UnauthorizedException('Session invalide');
    }

    if (session.revokedAt) {
      this.logger.warn(
        `Rejeu de jeton détecté pour l'utilisateur ${session.userId} : révocation globale`,
      );
      await this.revokeAllForUser(session.userId, 'token_reuse');
      throw new UnauthorizedException('Session compromise, reconnectez-vous');
    }

    if (session.expiresAt < new Date()) {
      throw new UnauthorizedException('Session expirée');
    }

    this.assertUsable(session.user.status);

    const newToken = this.hash.generateRefreshToken();

    // Révocation de l'ancienne et création de la nouvelle dans la même
    // transaction : un échec à mi-chemin déconnecterait l'utilisateur sans
    // lui rendre de jeton utilisable.
    const rotated = await this.prisma.$transaction(async (tx) => {
      await tx.session.update({
        where: { id: session.id },
        data: { revokedAt: new Date(), revokedReason: 'rotated' },
      });

      return tx.session.create({
        data: {
          userId: session.userId,
          refreshTokenHash: this.hash.hashToken(newToken),
          deviceId: session.deviceId,
          ipAddress: context.ipAddress ?? session.ipAddress,
          userAgent: context.userAgent?.slice(0, 500) ?? session.userAgent,
          expiresAt: new Date(Date.now() + REFRESH_TTL_DAYS * 86_400_000),
        },
      });
    });

    return {
      accessToken: await this.signAccessToken(session.user, rotated.id),
      refreshToken: newToken,
      expiresIn: this.accessTtlSeconds(),
    };
  }

  async verifyAccessToken(token: string): Promise<AccessTokenPayload> {
    try {
      return await this.jwt.verifyAsync<AccessTokenPayload>(token, {
        secret: this.config.get('JWT_ACCESS_SECRET'),
      });
    } catch {
      throw new UnauthorizedException('Jeton invalide ou expiré');
    }
  }

  /** Déconnexion d'un seul appareil. */
  async revokeSession(sessionId: string, reason = 'logout'): Promise<void> {
    await this.prisma.session.updateMany({
      where: { id: sessionId, revokedAt: null },
      data: { revokedAt: new Date(), revokedReason: reason },
    });
  }

  /** Déconnexion de tous les appareils : rejeu détecté, bannissement, suppression. */
  async revokeAllForUser(userId: string, reason: string): Promise<number> {
    const result = await this.prisma.session.updateMany({
      where: { userId, revokedAt: null },
      data: { revokedAt: new Date(), revokedReason: reason },
    });
    return result.count;
  }

  private signAccessToken(
    user: { id: string; role: UserRole; status: UserStatus },
    sessionId: string,
  ): Promise<string> {
    const payload: AccessTokenPayload = {
      sub: user.id,
      sid: sessionId,
      role: user.role,
      status: user.status,
    };

    return this.jwt.signAsync(payload, {
      secret: this.config.get('JWT_ACCESS_SECRET'),
      // En secondes plutôt qu'en chaîne « 15m » : jsonwebtoken n'accepte les
      // durées textuelles que via un type littéral, et la conversion est de
      // toute façon nécessaire pour renseigner `expiresIn` dans la réponse.
      expiresIn: this.accessTtlSeconds(),
    });
  }

  /**
   * Un compte banni ou en attente de suppression ne doit pas pouvoir prolonger
   * sa session par simple rafraîchissement.
   */
  private assertUsable(status: UserStatus): void {
    if (
      status === UserStatus.BANNED ||
      status === UserStatus.DELETED ||
      status === UserStatus.DELETION_PENDING
    ) {
      throw new UnauthorizedException('Compte indisponible');
    }
  }

  private accessTtlSeconds(): number {
    const ttl = this.config.get('JWT_ACCESS_TTL');
    const match = /^(\d+)([smhd])$/.exec(ttl);
    if (!match) return 900;

    const value = Number(match[1]);
    const unit = match[2];
    const multipliers: Record<string, number> = {
      s: 1,
      m: 60,
      h: 3_600,
      d: 86_400,
    };
    return value * (multipliers[unit] ?? 60);
  }
}
