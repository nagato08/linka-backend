import type { Request } from 'express';
import { UserRole } from '../../../generated/prisma/enums';
import type { AccessTokenPayload } from '../token.service';
export declare const IS_PUBLIC_KEY = "isPublic";
export declare const ROLES_KEY = "roles";
export declare const Public: () => import("@nestjs/common").CustomDecorator<string>;
export declare const Roles: (...roles: UserRole[]) => import("@nestjs/common").CustomDecorator<string>;
export interface AuthenticatedRequest extends Request {
    user?: AccessTokenPayload;
}
export declare const CurrentUser: (...dataOrPipes: (keyof AccessTokenPayload | import("@nestjs/common").PipeTransform<any, any> | import("@nestjs/common").Type<import("@nestjs/common").PipeTransform<any, any>> | undefined)[]) => ParameterDecorator;
