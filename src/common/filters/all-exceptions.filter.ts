import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import type { Request, Response } from 'express';
import { Prisma } from '../../generated/prisma/client';

interface ErrorBody {
  statusCode: number;
  code: string;
  message: string;
  details?: unknown;
  requestId?: string;
  timestamp: string;
  path: string;
}

/**
 * Filtre d'exception unique.
 *
 * Deux règles :
 *   - le client reçoit toujours la même forme de réponse, quelle que soit
 *     l'origine de l'erreur ;
 *   - aucune erreur interne ne fuit vers le client. Un message Prisma expose
 *     des noms de tables et de contraintes, autant d'indications gratuites
 *     pour qui sonde l'API.
 */
@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  private readonly logger = new Logger(AllExceptionsFilter.name);

  catch(exception: unknown, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const body = this.buildBody(exception, request);

    // Seules les erreurs serveur sont journalisées avec leur pile. Une 4xx est
    // une erreur du client, pas un incident : la tracer noierait les vraies.
    if (body.statusCode >= 500) {
      this.logger.error(
        `${request.method} ${request.url} → ${body.statusCode}`,
        exception instanceof Error ? exception.stack : String(exception),
      );
    }

    response.status(body.statusCode).json(body);
  }

  private buildBody(exception: unknown, request: Request): ErrorBody {
    const base = {
      requestId: request.headers['x-request-id'] as string | undefined,
      timestamp: new Date().toISOString(),
      path: request.url,
    };

    if (exception instanceof HttpException) {
      const status = exception.getStatus();
      const payload = exception.getResponse();

      // Les erreurs de ValidationPipe arrivent sous forme d'objet avec un
      // tableau de messages : on les remonte telles quelles, elles sont utiles
      // au client et ne divulguent rien.
      if (typeof payload === 'object' && payload !== null) {
        const record = payload as Record<string, unknown>;
        return {
          ...base,
          statusCode: status,
          code: (record.error as string) ?? HttpStatus[status] ?? 'ERROR',
          message: Array.isArray(record.message)
            ? 'Requête invalide'
            : ((record.message as string) ?? exception.message),
          details: Array.isArray(record.message) ? record.message : undefined,
        };
      }

      return {
        ...base,
        statusCode: status,
        code: HttpStatus[status] ?? 'ERROR',
        message: String(payload),
      };
    }

    if (exception instanceof Prisma.PrismaClientKnownRequestError) {
      return { ...base, ...this.mapPrismaError(exception) };
    }

    return {
      ...base,
      statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      code: 'INTERNAL_ERROR',
      message: 'Une erreur interne est survenue',
    };
  }

  /**
   * Traduit les codes Prisma en réponses HTTP, sans jamais recopier le message
   * d'origine.
   */
  private mapPrismaError(
    error: Prisma.PrismaClientKnownRequestError,
  ): Pick<ErrorBody, 'statusCode' | 'code' | 'message'> {
    switch (error.code) {
      case 'P2002':
        return {
          statusCode: HttpStatus.CONFLICT,
          code: 'ALREADY_EXISTS',
          message: 'Cette ressource existe déjà',
        };
      case 'P2003':
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          code: 'INVALID_REFERENCE',
          message: 'Référence invalide',
        };
      case 'P2025':
        return {
          statusCode: HttpStatus.NOT_FOUND,
          code: 'NOT_FOUND',
          message: 'Ressource introuvable',
        };
      // Violation d'une contrainte CHECK : ordre des utilisateurs d'un match,
      // solde de crédits négatif, coordonnées hors bornes…
      case 'P2010':
        return {
          statusCode: HttpStatus.UNPROCESSABLE_ENTITY,
          code: 'CONSTRAINT_VIOLATION',
          message: 'Opération refusée par une contrainte de cohérence',
        };
      default:
        return {
          statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
          code: 'DATABASE_ERROR',
          message: 'Une erreur interne est survenue',
        };
    }
  }
}
