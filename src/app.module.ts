import { Module } from '@nestjs/common';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { ScheduleModule } from '@nestjs/schedule';

import { AppConfigModule } from './core/config/config.module';
import { CryptoModule } from './core/crypto/crypto.module';
import { LoggerModule } from './core/logger/logger.module';
import { PrismaModule } from './core/prisma/prisma.module';
import { RedisModule } from './core/redis/redis.module';
import { QueueModule } from './core/queue/queue.module';
import { StorageModule } from './core/storage/storage.module';
import { AllExceptionsFilter } from './common/filters/all-exceptions.filter';
import { AuthModule } from './modules/auth/auth.module';
import { AccountModule } from './modules/account/account.module';
import { AdminModule } from './modules/admin/admin.module';
import { BillingModule } from './modules/billing/billing.module';
import { SafetyModule } from './modules/safety/safety.module';
import { VerificationModule } from './modules/verification/verification.module';
import { JwtAuthGuard } from './modules/auth/guards/jwt-auth.guard';
import { RolesGuard } from './modules/auth/guards/roles.guard';
import { EventsModule } from './modules/events/events.module';
import { HealthModule } from './modules/health/health.module';
import { TravelModule } from './modules/travel/travel.module';
import { ChatModule } from './modules/chat/chat.module';
import { DiscoveryModule } from './modules/discovery/discovery.module';
import { MatchingModule } from './modules/matching/matching.module';
import { MediaModule } from './modules/media/media.module';
import { NotificationsModule } from './modules/notifications/notifications.module';
import { ProfileModule } from './modules/profile/profile.module';

@Module({
  imports: [
    AppConfigModule,
    LoggerModule,
    PrismaModule,
    RedisModule,
    CryptoModule,
    StorageModule,
    QueueModule,

    // Purge RGPD, recalcul des scores de risque, nettoyage des codes expirés.
    ScheduleModule.forRoot(),

    // Limitation de débit globale. Une application de rencontre est une cible
    // permanente de scrapers : les profils ont de la valeur marchande.
    // Les points sensibles (envoi d'OTP, swipes, messages) ajoutent leurs
    // propres plafonds par-dessus celui-ci.
    ThrottlerModule.forRoot({
      throttlers: [
        { name: 'short', ttl: 1_000, limit: 10 },
        { name: 'medium', ttl: 60_000, limit: 120 },
        { name: 'long', ttl: 3_600_000, limit: 2_000 },
      ],
    }),

    AuthModule,
    BillingModule,
    NotificationsModule,
    ProfileModule,
    MediaModule,
    DiscoveryModule,
    MatchingModule,
    ChatModule,
    SafetyModule,
    VerificationModule,
    AccountModule,
    AdminModule,
    TravelModule,
    EventsModule,
    HealthModule,
  ],
  providers: [
    { provide: APP_FILTER, useClass: AllExceptionsFilter },

    // Ordre significatif : le débit d'abord, l'authentification ensuite, les
    // rôles en dernier. Vérifier le jeton avant de limiter le débit
    // laisserait un attaquant faire travailler la base sans être freiné.
    { provide: APP_GUARD, useClass: ThrottlerGuard },
    { provide: APP_GUARD, useClass: JwtAuthGuard },
    { provide: APP_GUARD, useClass: RolesGuard },
  ],
})
export class AppModule {}
