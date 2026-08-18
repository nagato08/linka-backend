import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../../src/generated/prisma/client';

import { CAMEROON_CITIES } from './data/cities';
import { INTERESTS } from './data/interests';
import { PROMPTS } from './data/prompts';
import { CURRENCIES, PRODUCTS } from './data/catalog';

/**
 * Seed des données de référence.
 *
 * Entièrement idempotent : chaque entrée est identifiée par une clé naturelle
 * (code de devise, nom de ville, slug, sku) et passe par un upsert. Le script
 * peut donc être rejoué en production pour publier un nouveau tarif ou un
 * nouveau centre d'intérêt, sans dupliquer l'existant ni casser les
 * références des profils déjà enregistrés.
 */

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});
const prisma = new PrismaClient({ adapter });

async function seedCurrencies(): Promise<number> {
  for (const currency of CURRENCIES) {
    await prisma.currency.upsert({
      where: { code: currency.code },
      create: currency,
      update: {
        name: currency.name,
        symbol: currency.symbol,
        minorUnitScale: currency.minorUnitScale,
      },
    });
  }
  return CURRENCIES.length;
}

async function seedCities(): Promise<number> {
  for (const city of CAMEROON_CITIES) {
    await prisma.city.upsert({
      where: {
        country_region_name: {
          country: 'CM',
          region: city.region,
          name: city.name,
        },
      },
      create: { ...city, country: 'CM', isActive: true },
      update: {
        latitude: city.latitude,
        longitude: city.longitude,
        radiusKm: city.radiusKm,
        boostSlots: city.boostSlots,
      },
    });
  }
  return CAMEROON_CITIES.length;
}

async function seedInterests(): Promise<number> {
  for (const [index, interest] of INTERESTS.entries()) {
    await prisma.interest.upsert({
      where: { slug: interest.slug },
      create: { ...interest, sortOrder: index * 10, isActive: true },
      update: {
        labelFr: interest.labelFr,
        labelEn: interest.labelEn,
        emoji: interest.emoji,
        category: interest.category,
        sortOrder: index * 10,
      },
    });
  }
  return INTERESTS.length;
}

async function seedPrompts(): Promise<number> {
  for (const [index, prompt] of PROMPTS.entries()) {
    await prisma.prompt.upsert({
      where: { slug: prompt.slug },
      create: { ...prompt, sortOrder: index * 10, isActive: true },
      update: {
        textFr: prompt.textFr,
        textEn: prompt.textEn,
        category: prompt.category,
        sortOrder: index * 10,
      },
    });
  }
  return PROMPTS.length;
}

async function seedProducts(): Promise<number> {
  for (const product of PRODUCTS) {
    await prisma.product.upsert({
      where: { sku: product.sku },
      create: { ...product, isActive: true },
      update: { ...product },
    });
  }
  return PRODUCTS.length;
}

async function main(): Promise<void> {
  console.log('Seed en cours…\n');

  const results = [
    ['Devises', await seedCurrencies()],
    ['Villes du Cameroun', await seedCities()],
    ["Centres d'intérêt", await seedInterests()],
    ['Prompts', await seedPrompts()],
    ['Produits', await seedProducts()],
  ] as const;

  for (const [label, count] of results) {
    console.log(`  ${String(count).padStart(3)} ${label}`);
  }

  console.log('\nSeed terminé.');
}

main()
  .catch((error: unknown) => {
    console.error('Échec du seed :', error);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
