import { Controller, Get, VERSION_NEUTRAL } from '@nestjs/common';
import {
  HealthCheck,
  HealthCheckResult,
  HealthCheckService,
  HealthIndicatorResult,
  HealthIndicatorService,
} from '@nestjs/terminus';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { PrismaService } from '../../core/prisma/prisma.service';
import { RedisService } from '../../core/redis/redis.service';
import { Public } from '../auth/decorators/auth.decorators';

@ApiTags('health')
// Le garde JWT est global : sans cette exception, la sonde de l'orchestrateur
// reçoit un 401 et le conteneur est redémarré en boucle.
@Public()
// Hors versionnement : les sondes de l'orchestrateur ont besoin d'un chemin
// stable, qui ne bouge pas quand l'API passe en v2.
@Controller({ path: 'health', version: VERSION_NEUTRAL })
export class HealthController {
  constructor(
    private readonly health: HealthCheckService,
    private readonly indicator: HealthIndicatorService,
    private readonly prisma: PrismaService,
    private readonly redis: RedisService,
  ) {}

  @Get()
  @ApiOperation({ summary: "État de l'API et de ses dépendances" })
  @HealthCheck()
  check(): Promise<HealthCheckResult> {
    return this.health.check([
      () => this.checkPostgres(),
      () => this.checkPostgis(),
      () => this.checkRedis(),
    ]);
  }

  private async checkPostgres(): Promise<HealthIndicatorResult> {
    const check = this.indicator.check('postgres');
    try {
      await this.prisma.$queryRaw`SELECT 1`;
      return check.up();
    } catch (error) {
      return check.down({ message: (error as Error).message });
    }
  }

  /**
   * Vérifié séparément : sans PostGIS ni pgvector, l'API démarre mais le deck
   * et la détection de doublons de visage échouent silencieusement.
   */
  private async checkPostgis(): Promise<HealthIndicatorResult> {
    const check = this.indicator.check('extensions');
    try {
      const rows = await this.prisma.$queryRaw<{ extname: string }[]>`
        SELECT extname FROM pg_extension
        WHERE extname IN ('postgis', 'vector', 'pg_trgm', 'pgcrypto')
      `;
      const found = rows.map((r) => r.extname);
      const missing = ['postgis', 'vector', 'pg_trgm', 'pgcrypto'].filter(
        (e) => !found.includes(e),
      );

      return missing.length === 0
        ? check.up({ extensions: found })
        : check.down({ missing });
    } catch (error) {
      return check.down({ message: (error as Error).message });
    }
  }

  private async checkRedis(): Promise<HealthIndicatorResult> {
    const check = this.indicator.check('redis');
    try {
      return (await this.redis.ping())
        ? check.up()
        : check.down({ message: 'PING sans réponse' });
    } catch (error) {
      return check.down({ message: (error as Error).message });
    }
  }
}
