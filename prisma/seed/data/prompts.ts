/**
 * Questions à trous affichées sur le profil.
 *
 * Deux bénéfices, l'un produit, l'autre sécurité : elles engagent bien plus
 * qu'une biographie libre, et elles sont nettement plus coûteuses à remplir de
 * façon crédible pour un faux compte — une réponse générique se repère.
 */
export interface PromptSeed {
  slug: string;
  textFr: string;
  textEn: string;
  category: string;
}

export const PROMPTS: PromptSeed[] = [
  {
    slug: 'perfect_sunday',
    textFr: 'Mon dimanche parfait ressemble à…',
    textEn: 'My perfect Sunday looks like…',
    category: 'lifestyle',
  },
  {
    slug: 'best_meal',
    textFr: 'Le meilleur plat que je sais préparer…',
    textEn: 'The best dish I can cook…',
    category: 'gastronomie',
  },
  {
    slug: 'first_date',
    textFr: 'Un premier rendez-vous réussi, pour moi, c’est…',
    textEn: 'A great first date, to me, is…',
    category: 'rencontre',
  },
  {
    slug: 'looking_for',
    textFr: 'Ce que je cherche vraiment…',
    textEn: 'What I am really looking for…',
    category: 'rencontre',
  },
  {
    slug: 'make_me_laugh',
    textFr: 'Le meilleur moyen de me faire rire…',
    textEn: 'The surest way to make me laugh…',
    category: 'personnalite',
  },
  {
    slug: 'proud_of',
    textFr: 'Je suis fier·e de…',
    textEn: 'I am proud of…',
    category: 'personnalite',
  },
  {
    slug: 'unpopular_opinion',
    textFr: 'Mon avis que personne ne partage…',
    textEn: 'My most unpopular opinion…',
    category: 'personnalite',
  },
  {
    slug: 'travel_next',
    textFr: 'La prochaine ville que je veux découvrir…',
    textEn: 'The next city I want to discover…',
    category: 'voyage',
  },
  {
    slug: 'weekend_spot',
    textFr: 'Mon endroit préféré dans ma ville…',
    textEn: 'My favourite spot in my city…',
    category: 'voyage',
  },
  {
    slug: 'life_goal',
    textFr: 'Dans cinq ans, j’aimerais…',
    textEn: 'In five years, I would like to…',
    category: 'projet',
  },
  {
    slug: 'family_value',
    textFr: 'Ce que ma famille m’a appris…',
    textEn: 'What my family taught me…',
    category: 'valeurs',
  },
  {
    slug: 'deal_breaker',
    textFr: 'Ce que je ne supporte pas…',
    textEn: 'My absolute deal-breaker…',
    category: 'valeurs',
  },
];
