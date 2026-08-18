import { ValidationPipe, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from 'nestjs-pino';
import helmet from 'helmet';

import { AppModule } from './app.module';
import { TypedConfigService } from './core/config/config.module';
import { RedisIoAdapter } from './core/redis/redis-io.adapter';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
    // Corps brut conservé pour les webhooks de paiement : vérifier une
    // signature sur du JSON reparsé échoue, l'ordre des clés et l'espacement
    // ayant changé.
    rawBody: true,
  });

  const logger = app.get(Logger);
  app.useLogger(logger);

  const config = app.get(TypedConfigService);

  app.use(helmet());
  app.enableCors({
    origin: config.isProduction ? [] : true,
    credentials: true,
  });

  // Versionnement par URI dès le départ : le client mobile est déployé par les
  // stores, d'anciennes versions resteront actives sur les téléphones bien
  // après la mise à jour du serveur.
  app.enableVersioning({ type: VersioningType.URI, defaultVersion: '1' });
  app.setGlobalPrefix('api', { exclude: ['health'] });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: { enableImplicitConversion: false },
    }),
  );

  // Diffusion des WebSockets entre instances. Sans cet adaptateur, deux
  // personnes connectées à des processus différents ne reçoivent plus leurs
  // messages en temps réel — un défaut invisible avec un seul processus.
  const wsAdapter = new RedisIoAdapter(app);
  wsAdapter.connect();
  app.useWebSocketAdapter(wsAdapter);

  // Ferme proprement les connexions PostgreSQL et Redis à l'arrêt du
  // conteneur, au lieu de les laisser expirer.
  app.enableShutdownHooks();

  if (!config.isProduction) {
    const doc = new DocumentBuilder()
      .setTitle('API')
      .setDescription("API de l'application de rencontre")
      .setVersion('1.0')
      .addBearerAuth()
      .build();

    SwaggerModule.setup('docs', app, SwaggerModule.createDocument(app, doc));
  }

  const port = config.get('PORT');
  await app.listen(port, '0.0.0.0');

  logger.log(`API démarrée sur le port ${port}`);
}

void bootstrap();
