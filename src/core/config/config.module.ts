import { Global, Module } from '@nestjs/common';
import {
  ConfigModule as NestConfigModule,
  ConfigService,
} from '@nestjs/config';
import { validateEnv, type Env } from './env.schema';

/**
 * Service de configuration typé. Évite les `configService.get<string>('X')`
 * disséminés, où une faute de frappe ne se voit qu'à l'exécution.
 */
export class TypedConfigService {
  constructor(private readonly config: ConfigService) {}

  get<K extends keyof Env>(key: K): Env[K] {
    return this.config.get(key as string) as Env[K];
  }

  get isProduction(): boolean {
    return this.get('NODE_ENV') === 'production';
  }

  get isDevelopment(): boolean {
    return this.get('NODE_ENV') === 'development';
  }
}

@Global()
@Module({
  imports: [
    NestConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      envFilePath: ['.env'],
      validate: validateEnv,
    }),
  ],
  providers: [
    {
      provide: TypedConfigService,
      useFactory: (config: ConfigService) => new TypedConfigService(config),
      inject: [ConfigService],
    },
  ],
  exports: [TypedConfigService],
})
export class AppConfigModule {}
