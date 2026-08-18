/**
 * Villes du Cameroun, couvrant les dix régions.
 *
 * L'ouverture est nationale : toutes ces zones sont actives dès le lancement.
 * La densité, elle, restera très inégale — d'où le rayon adaptatif du deck,
 * qui s'élargit jusqu'à trouver assez de candidats plutôt que de renvoyer une
 * pile vide à un utilisateur d'Ebolowa.
 *
 * `boostSlots` est proportionnel à la population attendue : plafonner le
 * nombre de boosts simultanés évite qu'ils se diluent au point de ne plus rien
 * valoir dans les petites villes.
 */
export interface CitySeed {
  name: string;
  region: string;
  latitude: number;
  longitude: number;
  radiusKm: number;
  boostSlots: number;
}

export const CAMEROON_CITIES: CitySeed[] = [
  // --- Littoral -------------------------------------------------------------
  {
    name: 'Douala',
    region: 'Littoral',
    latitude: 4.0511,
    longitude: 9.7679,
    radiusKm: 30,
    boostSlots: 10,
  },
  {
    name: 'Nkongsamba',
    region: 'Littoral',
    latitude: 4.9547,
    longitude: 9.9404,
    radiusKm: 20,
    boostSlots: 2,
  },
  {
    name: 'Edéa',
    region: 'Littoral',
    latitude: 3.8,
    longitude: 10.1333,
    radiusKm: 20,
    boostSlots: 2,
  },
  {
    name: 'Loum',
    region: 'Littoral',
    latitude: 4.7167,
    longitude: 9.7333,
    radiusKm: 15,
    boostSlots: 1,
  },

  // --- Centre ---------------------------------------------------------------
  {
    name: 'Yaoundé',
    region: 'Centre',
    latitude: 3.848,
    longitude: 11.5021,
    radiusKm: 30,
    boostSlots: 10,
  },
  {
    name: 'Mbalmayo',
    region: 'Centre',
    latitude: 3.5167,
    longitude: 11.5,
    radiusKm: 20,
    boostSlots: 2,
  },
  {
    name: 'Bafia',
    region: 'Centre',
    latitude: 4.75,
    longitude: 11.2333,
    radiusKm: 20,
    boostSlots: 1,
  },
  {
    name: 'Obala',
    region: 'Centre',
    latitude: 4.1667,
    longitude: 11.5333,
    radiusKm: 15,
    boostSlots: 1,
  },

  // --- Ouest ----------------------------------------------------------------
  {
    name: 'Bafoussam',
    region: 'Ouest',
    latitude: 5.4737,
    longitude: 10.4179,
    radiusKm: 25,
    boostSlots: 5,
  },
  {
    name: 'Dschang',
    region: 'Ouest',
    latitude: 5.4468,
    longitude: 10.0537,
    radiusKm: 20,
    boostSlots: 3,
  },
  {
    name: 'Mbouda',
    region: 'Ouest',
    latitude: 5.6333,
    longitude: 10.25,
    radiusKm: 20,
    boostSlots: 2,
  },
  {
    name: 'Foumban',
    region: 'Ouest',
    latitude: 5.7264,
    longitude: 10.9,
    radiusKm: 20,
    boostSlots: 2,
  },

  // --- Nord-Ouest (anglophone) ---------------------------------------------
  {
    name: 'Bamenda',
    region: 'Nord-Ouest',
    latitude: 5.9631,
    longitude: 10.1591,
    radiusKm: 25,
    boostSlots: 5,
  },
  {
    name: 'Kumbo',
    region: 'Nord-Ouest',
    latitude: 6.2,
    longitude: 10.6667,
    radiusKm: 20,
    boostSlots: 2,
  },
  {
    name: 'Ndop',
    region: 'Nord-Ouest',
    latitude: 6.0,
    longitude: 10.4333,
    radiusKm: 15,
    boostSlots: 1,
  },

  // --- Sud-Ouest (anglophone) ----------------------------------------------
  {
    name: 'Buea',
    region: 'Sud-Ouest',
    latitude: 4.156,
    longitude: 9.241,
    radiusKm: 20,
    boostSlots: 4,
  },
  {
    name: 'Limbe',
    region: 'Sud-Ouest',
    latitude: 4.0228,
    longitude: 9.1954,
    radiusKm: 20,
    boostSlots: 3,
  },
  {
    name: 'Kumba',
    region: 'Sud-Ouest',
    latitude: 4.6363,
    longitude: 9.4469,
    radiusKm: 20,
    boostSlots: 3,
  },
  {
    name: 'Tiko',
    region: 'Sud-Ouest',
    latitude: 4.075,
    longitude: 9.36,
    radiusKm: 15,
    boostSlots: 1,
  },

  // --- Nord -----------------------------------------------------------------
  {
    name: 'Garoua',
    region: 'Nord',
    latitude: 9.3017,
    longitude: 13.3921,
    radiusKm: 25,
    boostSlots: 4,
  },
  {
    name: 'Guider',
    region: 'Nord',
    latitude: 9.9333,
    longitude: 13.95,
    radiusKm: 20,
    boostSlots: 1,
  },

  // --- Extrême-Nord ---------------------------------------------------------
  {
    name: 'Maroua',
    region: 'Extrême-Nord',
    latitude: 10.591,
    longitude: 14.3159,
    radiusKm: 25,
    boostSlots: 4,
  },
  {
    name: 'Kousséri',
    region: 'Extrême-Nord',
    latitude: 12.0769,
    longitude: 15.0306,
    radiusKm: 20,
    boostSlots: 2,
  },
  {
    name: 'Mokolo',
    region: 'Extrême-Nord',
    latitude: 10.74,
    longitude: 13.8,
    radiusKm: 20,
    boostSlots: 1,
  },

  // --- Adamaoua -------------------------------------------------------------
  {
    name: 'Ngaoundéré',
    region: 'Adamaoua',
    latitude: 7.3167,
    longitude: 13.5833,
    radiusKm: 25,
    boostSlots: 3,
  },
  {
    name: 'Tibati',
    region: 'Adamaoua',
    latitude: 6.4667,
    longitude: 12.6333,
    radiusKm: 20,
    boostSlots: 1,
  },

  // --- Est ------------------------------------------------------------------
  {
    name: 'Bertoua',
    region: 'Est',
    latitude: 4.5772,
    longitude: 13.6846,
    radiusKm: 25,
    boostSlots: 2,
  },
  {
    name: 'Batouri',
    region: 'Est',
    latitude: 4.4333,
    longitude: 14.3667,
    radiusKm: 20,
    boostSlots: 1,
  },

  // --- Sud ------------------------------------------------------------------
  {
    name: 'Ebolowa',
    region: 'Sud',
    latitude: 2.9,
    longitude: 11.15,
    radiusKm: 20,
    boostSlots: 2,
  },
  {
    name: 'Kribi',
    region: 'Sud',
    latitude: 2.937,
    longitude: 9.91,
    radiusKm: 20,
    boostSlots: 2,
  },
  {
    name: 'Sangmélima',
    region: 'Sud',
    latitude: 2.9333,
    longitude: 11.9833,
    radiusKm: 20,
    boostSlots: 1,
  },
];
