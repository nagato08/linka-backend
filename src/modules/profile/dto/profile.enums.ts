/**
 * Énumérations exposées par l'API du profil.
 *
 * Réexportées depuis le client Prisma pour que les DTO n'importent pas
 * directement du code généré, et pour rassembler ici le seul cas particulier :
 * l'orientation, absente du schéma en tant qu'énumération puisqu'elle est
 * stockée chiffrée.
 */
export {
  EducationLevel,
  Frequency,
  Gender,
  Intention,
  MatchingBucket,
  Religion,
  SeekingTarget,
} from '../../../generated/prisma/enums';

/**
 * Orientation sexuelle.
 *
 * Définie ici et non dans le schéma : la colonne stocke un cryptogramme, pas
 * une valeur d'énumération. L'homosexualité est pénalisée au Cameroun
 * (art. 347-1 du Code pénal) — une colonne en clair exposerait directement des
 * personnes en cas de fuite de sauvegarde ou de réquisition.
 *
 * Le champ reste facultatif, sert uniquement au filtrage côté serveur, et
 * n'est jamais renvoyé par un endpoint public.
 */
export const Orientation = {
  STRAIGHT: 'STRAIGHT',
  GAY: 'GAY',
  LESBIAN: 'LESBIAN',
  BISEXUAL: 'BISEXUAL',
  PANSEXUAL: 'PANSEXUAL',
  ASEXUAL: 'ASEXUAL',
  QUESTIONING: 'QUESTIONING',
  OTHER: 'OTHER',
  PREFER_NOT_TO_SAY: 'PREFER_NOT_TO_SAY',
} as const;

export type Orientation = (typeof Orientation)[keyof typeof Orientation];
