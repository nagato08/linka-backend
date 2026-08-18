import { Module } from '@nestjs/common';
import { LoggerModule as PinoLoggerModule } from 'nestjs-pino';
import { randomUUID } from 'node:crypto';
import type { IncomingMessage, ServerResponse } from 'node:http';

/**
 * Journalisation structurée.
 *
 * La liste de censure n'est pas cosmétique. Sur une application de rencontre,
 * un log trop bavard devient un fichier de données sensibles : numéros de
 * téléphone, jetons, et surtout orientation sexuelle — pénalisée au Cameroun.
 * Ces champs ne doivent jamais atteindre le disque ni un agrégateur externe.
 */
const REDACTED_PATHS = [
  'req.headers.authorization',
  'req.headers.cookie',
  'req.headers["x-api-key"]',
  'req.body.password',
  'req.body.code',
  'req.body.otp',
  'req.body.refreshToken',
  'req.body.phone',
  'req.body.orientation',
  'res.headers["set-cookie"]',
  '*.passwordHash',
  '*.refreshTokenHash',
  '*.codeHash',
  '*.phoneHash',
  '*.orientationEnc',
  '*.storeReceipt',
  '*.embedding',
];

@Module({
  imports: [
    PinoLoggerModule.forRoot({
      pinoHttp: {
        level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',

        transport:
          process.env.NODE_ENV === 'development'
            ? {
                target: 'pino-pretty',
                options: {
                  singleLine: true,
                  translateTime: 'HH:MM:ss',
                  ignore: 'pid,hostname',
                },
              }
            : undefined,

        redact: {
          paths: REDACTED_PATHS,
          censor: '[censuré]',
        },

        // Identifiant de corrélation propagé jusqu'au client, indispensable
        // pour relier un incident remonté par un utilisateur à ses traces.
        genReqId: (req: IncomingMessage, res: ServerResponse) => {
          const existing = req.headers['x-request-id'];
          const id =
            (Array.isArray(existing) ? existing[0] : existing) ?? randomUUID();
          res.setHeader('x-request-id', id);
          return id;
        },

        customLogLevel: (_req, res, err) => {
          if (err || res.statusCode >= 500) return 'error';
          if (res.statusCode >= 400) return 'warn';
          return 'info';
        },

        // Le health check pollue les logs sans rien apprendre.
        autoLogging: {
          ignore: (req: IncomingMessage) => req.url === '/health',
        },
      },
    }),
  ],
})
export class LoggerModule {}
