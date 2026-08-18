import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UserStatus } from '../../../generated/prisma/enums';
import { TokenService } from '../token.service';
import { PrismaService } from '../../../core/prisma/prisma.service';
import {
  AuthenticatedRequest,
  IS_PUBLIC_KEY,
} from '../decorators/auth.decorators';

/**
 * Garde d'authentification, appliqué globalement.
 *
 * La session est vérifiée en base à chaque requête, alors que le JWT se
 * suffirait à lui-même. C'est un aller-retour Redis-like assumé : sans lui,
 * un compte banni ou une session révoquée resterait valable jusqu'à
 * l'expiration du jeton d'accès. Sur un produit où la révocation immédiate
 * d'un harceleur est une exigence de sûreté, quinze minutes de latence sont
 * quinze minutes de trop.
 */
@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly tokens: TokenService,
    private readonly prisma: PrismaService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) return true;

    const request = context.switchToHttp().getRequest<AuthenticatedRequest>();
    const token = this.extractToken(request);

    if (!token) {
      throw new UnauthorizedException('Jeton manquant');
    }

    const payload = await this.tokens.verifyAccessToken(token);

    const session = await this.prisma.session.findUnique({
      where: { id: payload.sid },
      select: {
        revokedAt: true,
        expiresAt: true,
        user: { select: { status: true, role: true } },
      },
    });

    if (!session || session.revokedAt || session.expiresAt < new Date()) {
      throw new UnauthorizedException('Session révoquée ou expirée');
    }

    this.assertUsable(session.user.status);

    // Le statut et le rôle sont relus en base plutôt que repris du jeton :
    // une sanction prononcée il y a trente secondes doit s'appliquer tout de
    // suite, sans attendre le prochain rafraîchissement.
    request.user = {
      ...payload,
      status: session.user.status,
      role: session.user.role,
    };

    return true;
  }

  private extractToken(request: AuthenticatedRequest): string | null {
    const header = request.headers.authorization;
    if (!header) return null;

    const [scheme, value] = header.split(' ');
    return scheme?.toLowerCase() === 'bearer' && value ? value : null;
  }

  /**
   * Un compte en shadow ban continue d'utiliser l'application normalement :
   * c'est tout l'intérêt du dispositif. Le lui signaler le pousserait à se
   * recréer un compte dans la minute.
   */
  private assertUsable(status: UserStatus): void {
    if (status === UserStatus.BANNED) {
      throw new ForbiddenException('Compte suspendu');
    }
    if (
      status === UserStatus.DELETED ||
      status === UserStatus.DELETION_PENDING
    ) {
      throw new UnauthorizedException('Compte supprimé');
    }
  }
}
