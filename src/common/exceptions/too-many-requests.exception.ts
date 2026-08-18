import { HttpException, HttpStatus } from '@nestjs/common';

/**
 * Nest ne fournit pas d'exception 429 prête à l'emploi — seul le
 * ThrottlerGuard en émet une, et elle lui est propre.
 *
 * Les limitations métier (envoi d'OTP, quota de likes, création
 * d'événements) en ont besoin avec leur propre message.
 */
export class TooManyRequestsException extends HttpException {
  constructor(message = 'Trop de requêtes', retryAfterSeconds?: number) {
    super(
      {
        statusCode: HttpStatus.TOO_MANY_REQUESTS,
        error: 'TOO_MANY_REQUESTS',
        message,
        retryAfterSeconds,
      },
      HttpStatus.TOO_MANY_REQUESTS,
    );
  }
}
