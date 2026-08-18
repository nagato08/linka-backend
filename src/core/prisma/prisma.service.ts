import {
  Injectable,
  Logger,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../../generated/prisma/client';
import { TypedConfigService } from '../config/config.module';

/**
 * Client Prisma exposé à l'application.
 *
 * Prisma 7 impose un driver adapter : le moteur Rust a disparu, la connexion
 * passe par `pg`. Le pool est dimensionné pour Fluid/conteneur, pas pour du
 * serverless à froid.
 */
@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  private readonly logger = new Logger(PrismaService.name);

  constructor(config: TypedConfigService) {
    const adapter = new PrismaPg({
      connectionString: config.get('DATABASE_URL'),
      max: 20,
      idleTimeoutMillis: 30_000,
      connectionTimeoutMillis: 5_000,
    });

    super({
      adapter,
      log: config.isDevelopment
        ? [
            { emit: 'event', level: 'warn' },
            { emit: 'event', level: 'error' },
          ]
        : [{ emit: 'event', level: 'error' }],
    });
  }

  async onModuleInit(): Promise<void> {
    await this.$connect();
    this.logger.log('Connexion PostgreSQL établie');
  }

  async onModuleDestroy(): Promise<void> {
    await this.$disconnect();
  }

  /**
   * Vide toutes les tables métier. Réservé aux tests d'intégration.
   * Refuse de s'exécuter en production — une purge accidentelle y serait
   * irréversible.
   */
  async truncateAll(): Promise<void> {
    if (process.env.NODE_ENV === 'production') {
      throw new Error('truncateAll est interdit en production');
    }

    const tables = await this.$queryRaw<{ tablename: string }[]>`
      SELECT tablename FROM pg_tables
      WHERE schemaname = 'public'
        AND tablename NOT IN ('_prisma_migrations', 'spatial_ref_sys')
    `;

    const list = tables.map((t) => `"public"."${t.tablename}"`).join(', ');
    await this.$executeRawUnsafe(`TRUNCATE TABLE ${list} CASCADE`);
  }
}
