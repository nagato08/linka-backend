import path from 'node:path';
import 'dotenv/config';
import { defineConfig } from '@prisma/config';
import { PrismaPg } from '@prisma/adapter-pg';

/**
 * Configuration Prisma 7.
 *
 * Depuis Prisma 7, l'URL de connexion ne vit plus dans le bloc `datasource`
 * mais ici, via un driver adapter. Le moteur JS supprime le binaire Rust.
 */
export default defineConfig({
  // Schéma éclaté par domaine dans prisma/schema/
  schema: path.join('prisma', 'schema'),

  // Requis par `prisma migrate` en plus du driver adapter.
  datasource: {
    url: process.env.DATABASE_URL ?? '',
    // Base jetable utilisée par `migrate diff` pour rejouer l'historique des
    // migrations et le comparer au schéma. Sans elle, la commande refuse de
    // travailler à partir d'un dossier de migrations.
    //
    // La clé est omise plutôt que mise à vide quand la variable est absente :
    // Prisma refuse une chaîne vide et fait échouer toute commande, y compris
    // `migrate deploy` qui n'a pourtant aucun besoin de base jetable. C'est
    // exactement le cas en production, où seule DATABASE_URL est définie.
    ...(process.env.SHADOW_DATABASE_URL
      ? { shadowDatabaseUrl: process.env.SHADOW_DATABASE_URL }
      : {}),
  },

  migrations: {
    path: path.join('prisma', 'migrations'),
    // Seeds : exécutés après `prisma migrate reset`
    seed: 'tsx prisma/seed/index.ts',
  },

  async adapter() {
    const connectionString = process.env.DATABASE_URL;

    if (!connectionString) {
      throw new Error(
        'DATABASE_URL manquante. Copier .env.example vers .env avant toute commande Prisma.',
      );
    }

    return new PrismaPg({ connectionString });
  },
});
