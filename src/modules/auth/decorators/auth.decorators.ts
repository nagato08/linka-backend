import {
  createParamDecorator,
  ExecutionContext,
  SetMetadata,
} from '@nestjs/common';
import type { Request } from 'express';
import { UserRole } from '../../../generated/prisma/enums';
import type { AccessTokenPayload } from '../token.service';

export const IS_PUBLIC_KEY = 'isPublic';
export const ROLES_KEY = 'roles';

/**
 * Ouvre une route sans authentification.
 *
 * Le garde JWT est global : l'oubli d'un décorateur rend une route
 * inaccessible, ce qui se voit immédiatement. L'inverse — un garde à poser
 * route par route — laisse passer les oublis en silence, et c'est ainsi qu'une
 * ressource se retrouve exposée.
 */
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);

export const Roles = (...roles: UserRole[]) => SetMetadata(ROLES_KEY, roles);

export interface AuthenticatedRequest extends Request {
  user?: AccessTokenPayload;
}

export const CurrentUser = createParamDecorator(
  (data: keyof AccessTokenPayload | undefined, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<AuthenticatedRequest>();
    const user = request.user;
    if (!user) return undefined;
    return data ? user[data] : user;
  },
);
