/**
 * Centres d'intérêt, repris du parcours d'inscription du client Flutter et
 * complétés de leur libellé anglais — le Cameroun est officiellement bilingue,
 * et les régions du Nord-Ouest et du Sud-Ouest sont anglophones.
 *
 * L'utilisateur en choisit au minimum cinq. Ils alimentent le score
 * d'affinité du classement du deck.
 */
export interface InterestSeed {
  slug: string;
  labelFr: string;
  labelEn: string;
  emoji: string;
  category: string;
}

export const INTERESTS: InterestSeed[] = [
  // --- Culture & médias -----------------------------------------------------
  {
    slug: 'cinema',
    labelFr: 'Cinéma',
    labelEn: 'Cinema',
    emoji: '🎬',
    category: 'culture',
  },
  {
    slug: 'musique',
    labelFr: 'Musique',
    labelEn: 'Music',
    emoji: '🎵',
    category: 'culture',
  },
  {
    slug: 'concerts',
    labelFr: 'Concerts',
    labelEn: 'Concerts',
    emoji: '🎸',
    category: 'culture',
  },
  {
    slug: 'lecture',
    labelFr: 'Lecture',
    labelEn: 'Reading',
    emoji: '📖',
    category: 'culture',
  },
  {
    slug: 'mangas',
    labelFr: 'Mangas',
    labelEn: 'Manga',
    emoji: '📚',
    category: 'culture',
  },
  {
    slug: 'podcasts',
    labelFr: 'Podcasts',
    labelEn: 'Podcasts',
    emoji: '🎙️',
    category: 'culture',
  },
  {
    slug: 'art',
    labelFr: 'Art',
    labelEn: 'Art',
    emoji: '🎨',
    category: 'culture',
  },
  {
    slug: 'comedie',
    labelFr: 'Comédie',
    labelEn: 'Comedy',
    emoji: '😂',
    category: 'culture',
  },
  {
    slug: 'ecriture',
    labelFr: 'Écriture',
    labelEn: 'Writing',
    emoji: '✍️',
    category: 'culture',
  },
  {
    slug: 'photographie',
    labelFr: 'Photographie',
    labelEn: 'Photography',
    emoji: '📷',
    category: 'culture',
  },

  // --- Sport & bien-être ----------------------------------------------------
  {
    slug: 'sport',
    labelFr: 'Sport',
    labelEn: 'Sports',
    emoji: '🏃',
    category: 'sport',
  },
  {
    slug: 'gym',
    labelFr: 'Gym',
    labelEn: 'Gym',
    emoji: '🏋️',
    category: 'sport',
  },
  {
    slug: 'randonnee',
    labelFr: 'Randonnée',
    labelEn: 'Hiking',
    emoji: '🏞️',
    category: 'sport',
  },
  {
    slug: 'cyclisme',
    labelFr: 'Cyclisme',
    labelEn: 'Cycling',
    emoji: '🚴',
    category: 'sport',
  },
  {
    slug: 'danse',
    labelFr: 'Danse',
    labelEn: 'Dancing',
    emoji: '💃',
    category: 'sport',
  },
  {
    slug: 'yoga',
    labelFr: 'Yoga',
    labelEn: 'Yoga',
    emoji: '🧘',
    category: 'bien-etre',
  },
  {
    slug: 'meditation',
    labelFr: 'Méditation',
    labelEn: 'Meditation',
    emoji: '🕉️',
    category: 'bien-etre',
  },

  // --- Gastronomie ----------------------------------------------------------
  {
    slug: 'cuisine',
    labelFr: 'Cuisine',
    labelEn: 'Cooking',
    emoji: '🍳',
    category: 'gastronomie',
  },
  {
    slug: 'restaurant',
    labelFr: 'Restaurant',
    labelEn: 'Dining out',
    emoji: '🍔',
    category: 'gastronomie',
  },
  {
    slug: 'snacks',
    labelFr: 'Snacks / BT',
    labelEn: 'Street food',
    emoji: '🍹',
    category: 'gastronomie',
  },

  // --- Technologie & travail ------------------------------------------------
  {
    slug: 'technologie',
    labelFr: 'Technologie',
    labelEn: 'Technology',
    emoji: '💻',
    category: 'tech',
  },
  {
    slug: 'codage',
    labelFr: 'Codage',
    labelEn: 'Coding',
    emoji: '⌨️',
    category: 'tech',
  },
  {
    slug: 'jeux_video',
    labelFr: 'Jeux vidéo',
    labelEn: 'Video games',
    emoji: '🎮',
    category: 'tech',
  },
  {
    slug: 'entrepreneuriat',
    labelFr: 'Entrepreneuriat',
    labelEn: 'Entrepreneurship',
    emoji: '🏢',
    category: 'tech',
  },
  {
    slug: 'design',
    labelFr: "Design d'intérieur",
    labelEn: 'Interior design',
    emoji: '🏠',
    category: 'tech',
  },

  // --- Style de vie ---------------------------------------------------------
  {
    slug: 'voyage',
    labelFr: 'Voyage',
    labelEn: 'Travel',
    emoji: '✈️',
    category: 'lifestyle',
  },
  {
    slug: 'shopping',
    labelFr: 'Shopping',
    labelEn: 'Shopping',
    emoji: '👠',
    category: 'lifestyle',
  },
  {
    slug: 'maquillage',
    labelFr: 'Maquillage',
    labelEn: 'Makeup',
    emoji: '💄',
    category: 'lifestyle',
  },
  {
    slug: 'tatouages',
    labelFr: 'Tatouages',
    labelEn: 'Tattoos',
    emoji: '💀',
    category: 'lifestyle',
  },
  {
    slug: 'voitures',
    labelFr: 'Voitures',
    labelEn: 'Cars',
    emoji: '🚗',
    category: 'lifestyle',
  },
  {
    slug: 'animaux',
    labelFr: 'Animaux',
    labelEn: 'Animals',
    emoji: '🐾',
    category: 'lifestyle',
  },
  {
    slug: 'jardinage',
    labelFr: 'Jardinage',
    labelEn: 'Gardening',
    emoji: '🌱',
    category: 'lifestyle',
  },

  // --- Engagement -----------------------------------------------------------
  {
    slug: 'benevolat',
    labelFr: 'Bénévolat',
    labelEn: 'Volunteering',
    emoji: '❤️',
    category: 'engagement',
  },
  {
    slug: 'durabilite',
    labelFr: 'Durabilité',
    labelEn: 'Sustainability',
    emoji: '♻️',
    category: 'engagement',
  },
];
