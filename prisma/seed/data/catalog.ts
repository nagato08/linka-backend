/**
 * Devises et catalogue Linka.
 *
 * Tous les montants sont des ENTIERS en unité mineure. Le franc CFA n'a pas de
 * sous-unité : 2 500 XAF s'écrit 2500, pas 250000. D'où `minorUnitScale`, qui
 * évite l'hypothèse « × 100 » partout dans le code — hypothèse qui casserait
 * la comptabilité au passage à l'euro.
 *
 * Deux monnaies coexistent, et c'est voulu :
 *   - le XAF, seule porte d'entrée d'argent réel, via mobile money ;
 *   - les pièces, monnaie interne dépensée dans l'application.
 *
 * Ce détour existe parce que le prélèvement récurrent est quasi inexistant en
 * mobile money : on ne peut pas débiter un utilisateur tous les mois. Il
 * achète donc un stock, puis le consomme quand il veut.
 */

export interface CurrencySeed {
  code: string;
  name: string;
  symbol: string;
  minorUnitScale: number;
}

export const CURRENCIES: CurrencySeed[] = [
  { code: 'XAF', name: 'Franc CFA BEAC', symbol: 'FCFA', minorUnitScale: 1 },
  { code: 'EUR', name: 'Euro', symbol: '€', minorUnitScale: 100 },
  { code: 'USD', name: 'Dollar américain', symbol: '$', minorUnitScale: 100 },
];

export interface ProductSeed {
  sku: string;
  type:
    | 'CREDIT_PACK'
    | 'SUBSCRIPTION'
    | 'BOOST'
    | 'SUPERLIKE_PACK'
    | 'MESSAGE_BEFORE_MATCH'
    | 'REWIND_PACK'
    | 'EVENT_SLOT';
  titleFr: string;
  titleEn: string;
  descriptionFr?: string;
  descriptionEn?: string;
  priceAmount?: number;
  currencyCode?: string;
  creditCost?: number;
  creditGrant?: number;
  quantity?: number;
  durationDays?: number;
  durationMinutes?: number;
  boostTier?:
    | 'BOOST_30M'
    | 'BOOST_1H'
    | 'BOOST_3H'
    | 'BOOST_6H'
    | 'BOOST_12H'
    | 'BOOST_24H';
  tier?: 'PLUS' | 'GOLD';
  sortOrder: number;
}

export const PRODUCTS: ProductSeed[] = [
  // --- Packs de pièces, payés en mobile money -------------------------------
  // Remise croissante : 0,90 → 0,70 XAF la pièce. Une remise qui n'augmente
  // pas avec le volume pousse à racheter le plus petit pack en boucle, ce qui
  // multiplie les transactions — chacune coûtant 2,5 à 3,5 % chez NotchPay.
  {
    sku: 'coins_1000',
    type: 'CREDIT_PACK',
    titleFr: '1 000 pièces',
    titleEn: '1,000 coins',
    priceAmount: 900,
    currencyCode: 'XAF',
    creditGrant: 1_000,
    sortOrder: 10,
  },
  {
    sku: 'coins_3000',
    type: 'CREDIT_PACK',
    titleFr: '3 000 pièces',
    titleEn: '3,000 coins',
    descriptionFr: '8 % de remise',
    descriptionEn: '8% off',
    priceAmount: 2_500,
    currencyCode: 'XAF',
    creditGrant: 3_000,
    sortOrder: 20,
  },
  {
    sku: 'coins_6000',
    type: 'CREDIT_PACK',
    titleFr: '6 000 pièces',
    titleEn: '6,000 coins',
    descriptionFr: '17 % de remise',
    descriptionEn: '17% off',
    priceAmount: 4_500,
    currencyCode: 'XAF',
    creditGrant: 6_000,
    sortOrder: 30,
  },
  {
    sku: 'coins_10000',
    type: 'CREDIT_PACK',
    titleFr: '10 000 pièces',
    titleEn: '10,000 coins',
    descriptionFr: '22 % de remise',
    descriptionEn: '22% off',
    priceAmount: 7_000,
    currencyCode: 'XAF',
    creditGrant: 10_000,
    sortOrder: 40,
  },

  // --- Abonnement Plus ------------------------------------------------------
  // Les likes étant illimités pour tous, Plus se justifie par le confort :
  // rewind sans compter, aucune publicité, filtres avancés.
  {
    sku: 'sub_plus_1m',
    type: 'SUBSCRIPTION',
    titleFr: 'Plus — 1 mois',
    titleEn: 'Plus — 1 month',
    descriptionFr: 'Rewind illimité, sans publicité, filtres avancés',
    descriptionEn: 'Unlimited rewind, no ads, advanced filters',
    priceAmount: 3_000,
    currencyCode: 'XAF',
    durationDays: 30,
    tier: 'PLUS',
    sortOrder: 100,
  },
  {
    sku: 'sub_plus_3m',
    type: 'SUBSCRIPTION',
    titleFr: 'Plus — 3 mois',
    titleEn: 'Plus — 3 months',
    descriptionFr: '11 % de remise',
    descriptionEn: '11% off',
    priceAmount: 8_000,
    currencyCode: 'XAF',
    durationDays: 90,
    tier: 'PLUS',
    sortOrder: 110,
  },
  {
    sku: 'sub_plus_6m',
    type: 'SUBSCRIPTION',
    titleFr: 'Plus — 6 mois',
    titleEn: 'Plus — 6 months',
    descriptionFr: '22 % de remise',
    descriptionEn: '22% off',
    priceAmount: 14_000,
    currencyCode: 'XAF',
    durationDays: 180,
    tier: 'PLUS',
    sortOrder: 120,
  },
  {
    sku: 'sub_plus_12m',
    type: 'SUBSCRIPTION',
    titleFr: 'Plus — 12 mois',
    titleEn: 'Plus — 12 months',
    descriptionFr: '33 % de remise',
    descriptionEn: '33% off',
    priceAmount: 24_000,
    currencyCode: 'XAF',
    durationDays: 365,
    tier: 'PLUS',
    sortOrder: 130,
  },

  // --- Abonnement Gold ------------------------------------------------------
  // Le mode incognito porte l'offre à lui seul : dans un pays où les cercles
  // sociaux sont serrés, ne pas être vu par ses collègues et sa famille a une
  // valeur réelle. Les trois autres avantages rendent le prix acceptable.
  {
    sku: 'sub_gold_1m',
    type: 'SUBSCRIPTION',
    titleFr: 'Gold — 1 mois',
    titleEn: 'Gold — 1 month',
    descriptionFr:
      'Mode incognito, mode voyage illimité, priorité, 1 boost offert par mois',
    descriptionEn:
      'Incognito mode, unlimited travel mode, priority, 1 free boost monthly',
    priceAmount: 8_000,
    currencyCode: 'XAF',
    durationDays: 30,
    tier: 'GOLD',
    sortOrder: 200,
  },
  {
    sku: 'sub_gold_3m',
    type: 'SUBSCRIPTION',
    titleFr: 'Gold — 3 mois',
    titleEn: 'Gold — 3 months',
    descriptionFr: '17 % de remise',
    descriptionEn: '17% off',
    priceAmount: 20_000,
    currencyCode: 'XAF',
    durationDays: 90,
    tier: 'GOLD',
    sortOrder: 210,
  },
  {
    sku: 'sub_gold_6m',
    type: 'SUBSCRIPTION',
    titleFr: 'Gold — 6 mois',
    titleEn: 'Gold — 6 months',
    descriptionFr: '27 % de remise',
    descriptionEn: '27% off',
    priceAmount: 35_000,
    currencyCode: 'XAF',
    durationDays: 180,
    tier: 'GOLD',
    sortOrder: 220,
  },
  {
    sku: 'sub_gold_12m',
    type: 'SUBSCRIPTION',
    titleFr: 'Gold — 12 mois',
    titleEn: 'Gold — 12 months',
    descriptionFr: '37 % de remise',
    descriptionEn: '37% off',
    priceAmount: 60_000,
    currencyCode: 'XAF',
    durationDays: 365,
    tier: 'GOLD',
    sortOrder: 230,
  },

  // --- Boosts, payés en pièces ----------------------------------------------
  // Le coût à l'heure décroît sur toute la grille : 1 000 → 900 → 833 → 750 →
  // 667 → 417 XAF. Une inversion, même sur un seul palier, se remarque vite et
  // donne le sentiment d'être piégé.
  {
    sku: 'boost_30m',
    type: 'BOOST',
    titleFr: 'Boost 30 minutes',
    titleEn: '30-minute boost',
    descriptionFr: 'En tête des profils pendant 30 minutes',
    descriptionEn: 'Top of the deck for 30 minutes',
    creditCost: 600,
    boostTier: 'BOOST_30M',
    durationMinutes: 30,
    sortOrder: 300,
  },
  {
    sku: 'boost_1h',
    type: 'BOOST',
    titleFr: 'Boost 1 heure',
    titleEn: '1-hour boost',
    creditCost: 1_100,
    boostTier: 'BOOST_1H',
    durationMinutes: 60,
    sortOrder: 310,
  },
  {
    sku: 'boost_3h',
    type: 'BOOST',
    titleFr: 'Boost 3 heures',
    titleEn: '3-hour boost',
    creditCost: 3_000,
    boostTier: 'BOOST_3H',
    durationMinutes: 180,
    sortOrder: 320,
  },
  {
    sku: 'boost_6h',
    type: 'BOOST',
    titleFr: 'Boost 6 heures',
    titleEn: '6-hour boost',
    descriptionFr: 'Couvre toute une soirée',
    descriptionEn: 'Covers a whole evening',
    creditCost: 5_500,
    boostTier: 'BOOST_6H',
    durationMinutes: 360,
    sortOrder: 330,
  },
  {
    sku: 'boost_12h',
    type: 'BOOST',
    titleFr: 'Boost 12 heures',
    titleEn: '12-hour boost',
    creditCost: 10_000,
    boostTier: 'BOOST_12H',
    durationMinutes: 720,
    sortOrder: 340,
  },
  {
    sku: 'boost_24h',
    type: 'BOOST',
    titleFr: 'Boost 24 heures',
    titleEn: '24-hour boost',
    descriptionFr: 'Le meilleur tarif à l’heure',
    descriptionEn: 'Best hourly rate',
    creditCost: 12_500,
    boostTier: 'BOOST_24H',
    durationMinutes: 1_440,
    sortOrder: 350,
  },

  // --- Consommables ---------------------------------------------------------
  // Le super like se signale : la personne est prévenue immédiatement et le
  // profil passe en tête de sa pile, encadré. Son prix s'intercale entre le
  // rewind (50) et le message avant match (150).
  {
    sku: 'superlike_1',
    type: 'SUPERLIKE_PACK',
    titleFr: '1 super like',
    titleEn: '1 super like',
    creditCost: 100,
    quantity: 1,
    sortOrder: 400,
  },
  {
    sku: 'superlikes_5',
    type: 'SUPERLIKE_PACK',
    titleFr: '5 super likes',
    titleEn: '5 super likes',
    descriptionFr: '10 % de remise',
    descriptionEn: '10% off',
    creditCost: 450,
    quantity: 5,
    sortOrder: 410,
  },
  {
    sku: 'superlikes_20',
    type: 'SUPERLIKE_PACK',
    titleFr: '20 super likes',
    titleEn: '20 super likes',
    descriptionFr: '20 % de remise',
    descriptionEn: '20% off',
    creditCost: 1_600,
    quantity: 20,
    sortOrder: 420,
  },
  {
    sku: 'message_before_match',
    type: 'MESSAGE_BEFORE_MATCH',
    titleFr: 'Message avant match',
    titleEn: 'Message before match',
    descriptionFr: 'Écrire à quelqu’un sans attendre le match',
    descriptionEn: 'Message someone without waiting for a match',
    creditCost: 150,
    quantity: 1,
    sortOrder: 430,
  },
  {
    sku: 'rewind_1',
    type: 'REWIND_PACK',
    titleFr: '1 rewind',
    titleEn: '1 rewind',
    descriptionFr: 'Au-delà des dix rewinds offerts',
    descriptionEn: 'Beyond the ten free rewinds',
    creditCost: 50,
    quantity: 1,
    sortOrder: 440,
  },
  {
    sku: 'rewind_10',
    type: 'REWIND_PACK',
    titleFr: '10 rewinds',
    titleEn: '10 rewinds',
    descriptionFr: '10 % de remise',
    descriptionEn: '10% off',
    creditCost: 450,
    quantity: 10,
    sortOrder: 450,
  },
  {
    sku: 'event_slot',
    type: 'EVENT_SLOT',
    titleFr: 'Créer un événement',
    titleEn: 'Create an event',
    descriptionFr: 'Au-delà des événements inclus dans votre formule',
    descriptionEn: 'Beyond the events included in your plan',
    creditCost: 400,
    quantity: 1,
    sortOrder: 460,
  },
];
