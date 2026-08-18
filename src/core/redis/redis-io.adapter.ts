import { INestApplicationContext, Logger } from '@nestjs/common';
import { IoAdapter } from '@nestjs/platform-socket.io';
import { createAdapter } from '@socket.io/redis-adapter';
import type { ServerOptions } from 'socket.io';
import { RedisService } from './redis.service';

/**
 * Adaptateur Redis pour Socket.IO.
 *
 * Sans lui, un serveur ne connaît que ses propres connexions : dès la
 * deuxième instance, deux personnes qui discutent mais sont connectées à des
 * processus différents ne reçoivent plus rien en temps réel. Le message est
 * bien écrit en base, mais n'arrive qu'au rechargement — un défaut qui ne se
 * voit jamais en développement avec un seul processus, et toujours en
 * production.
 *
 * Il faut deux connexions Redis distinctes : le mode abonné d'un client Redis
 * monopolise la connexion, un client abonné ne peut plus rien publier.
 */
export class RedisIoAdapter extends IoAdapter {
  private readonly logger = new Logger(RedisIoAdapter.name);
  private adapterConstructor?: ReturnType<typeof createAdapter>;

  constructor(private readonly app: INestApplicationContext) {
    super(app);
  }

  connect(): void {
    const redis = this.app.get(RedisService);

    this.adapterConstructor = createAdapter(redis.publisher, redis.subscriber);

    this.logger.log('Adaptateur Redis actif pour les WebSockets');
  }

  createIOServer(port: number, options?: ServerOptions): unknown {
    const server = super.createIOServer(port, options) as {
      adapter: (adapter: unknown) => void;
    };

    if (this.adapterConstructor) {
      server.adapter(this.adapterConstructor);
    }

    return server;
  }
}
