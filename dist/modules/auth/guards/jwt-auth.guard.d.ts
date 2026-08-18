import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { TokenService } from '../token.service';
import { PrismaService } from '../../../core/prisma/prisma.service';
export declare class JwtAuthGuard implements CanActivate {
    private readonly reflector;
    private readonly tokens;
    private readonly prisma;
    constructor(reflector: Reflector, tokens: TokenService, prisma: PrismaService);
    canActivate(context: ExecutionContext): Promise<boolean>;
    private extractToken;
    private assertUsable;
}
