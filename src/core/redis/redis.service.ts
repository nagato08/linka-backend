import {
  Injectable,
  Logger,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import Redis from 'ioredis';
import { TypedConfigService } from '../config/config.module';

/**
 * Redis porte quatre usages distincts :
 *   - le deck pré-calculé (une file de candidats par utilisateur) ;
 *   - le set « déjà vu », qui évite d'interroger la table des swipes ;
 *   - la limitation de débit, notamment sur l'envoi d'OTP ;
 *   - le pub/sub des WebSockets, pour scaler la messagerie horizontalement.
 *
 * Trois connexions sont nécessaires : le mode abonné d'un client Redis
 * monopolise la connexion, un client abonné ne peut plus rien publier ni lire.
 */
@Injectable()
export class RedisService implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(RedisService.name);

  readonly client: Redis;
  readonly subscriber: Redis;
  readonly publisher: Redis;

  constructor(config: TypedConfigService) {
    const url = config.get('REDIS_URL');

    const options = {
      maxRetriesPerRequest: 3,
      // Les coupures réseau sont fréquentes sur le marché visé : on reconnecte
      // avec un délai croissant plutôt que d'abandonner.
      retryStrategy: (times: number) => Math.min(times * 200, 3_000),
      lazyConnect: true,
    };

    this.client = new Redis(url, options);
    this.subscriber = new Redis(url, options);
    this.publisher = new Redis(url, options);
  }

  async onModuleInit(): Promise<void> {
    await Promise.all([
      this.ensureConnected(this.client),
      this.ensureConnected(this.subscriber),
      this.ensureConnected(this.publisher),
    ]);
    this.logger.log('Connexions Redis établies');
  }

  /**
   * N'ouvre la connexion que si elle est encore au repos.
   *
   * L'adaptateur WebSocket récupère ce service pendant l'amorçage, ce qui peut
   * déclencher l'ouverture avant `onModuleInit`. Appeler `connect()` sur un
   * client déjà connecté fait lever ioredis, et l'application ne démarre pas
   * du tout.
   */
  private async ensureConnected(client: Redis): Promise<void> {
    if (client.status === 'wait') {
      await client.connect();
    }
  }

  async onModuleDestroy(): Promise<void> {
    await Promise.all([
      this.client.quit(),
      this.subscriber.quit(),
      this.publisher.quit(),
    ]);
  }

  async ping(): Promise<boolean> {
    return (await this.client.ping()) === 'PONG';
  }
}
