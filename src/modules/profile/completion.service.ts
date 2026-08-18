import { Injectable } from '@nestjs/common';
import { PhotoStatus } from '../../generated/prisma/enums';
import { PrismaService } from '../../core/prisma/prisma.service';

export interface CompletionReport {
  score: number;
  /** Vrai lorsque le profil peut entrer dans les decks. */
  isComplete: boolean;
  missing: string[];
}

/** Nombre minimal de photos approuvées pour paraître dans un deck. */
export const MIN_APPROVED_PHOTOS = 2;
const MIN_INTERESTS = 5;

/**
 * Score de complétude.
 *
 * Deux usages. Il indique à l'utilisateur ce qui manque, et il pondère le
 * classement du deck : un profil vide dessert autant celui qui le publie que
 * ceux à qui on l'impose. Le mettre en avant ferait fuir tout le monde.
 *
 * Il sert aussi de garde-fou anti-faux-comptes : un compte automatisé remplit
 * rarement des prompts et une biographie crédibles, il reste donc bas dans le
 * classement sans qu'aucune règle explicite ne le vise.
 */
@Injectable()
export class CompletionService {
  constructor(private readonly prisma: PrismaService) {}

  async evaluate(userId: string): Promise<CompletionReport> {
    const profile = await this.prisma.profile.findUnique({
      where: { userId },
      include: {
        photos: {
          where: { deletedAt: null, status: PhotoStatus.APPROVED },
          select: { id: true },
        },
        interests: { select: { interestId: true } },
        prompts: { select: { id: true } },
      },
    });

    if (!profile) {
      return { score: 0, isComplete: false, missing: ['profile'] };
    }

    const missing: string[] = [];
    let score = 0;

    // --- Socle obligatoire : 30 points --------------------------------------
    // Ces champs sont posés à la création du profil, donc toujours présents.
    score += 30;

    // --- Photos : 30 points -------------------------------------------------
    // Le poste le plus lourd, et de loin. Un profil sans photo ne reçoit
    // presque aucun like : le mettre dans un deck gaspille l'attention des
    // autres.
    const approved = profile.photos.length;
    if (approved >= MIN_APPROVED_PHOTOS) {
      score += Math.min(30, 15 * approved);
    } else {
      missing.push(`photos (${approved}/${MIN_APPROVED_PHOTOS})`);
      score += 15 * approved;
    }

    // --- Localisation : 15 points -------------------------------------------
    // Sans coordonnées, aucune requête géographique ne peut retourner ce
    // profil : il est invisible, quoi qu'il contienne d'autre.
    if (
      profile.discoveryLatitude !== null &&
      profile.discoveryLongitude !== null
    ) {
      score += 15;
    } else {
      missing.push('localisation');
    }

    // --- Centres d'intérêt : 15 points --------------------------------------
    if (profile.interests.length >= MIN_INTERESTS) {
      score += 15;
    } else {
      missing.push(
        `centres d'intérêt (${profile.interests.length}/${MIN_INTERESTS})`,
      );
      score += Math.floor((profile.interests.length / MIN_INTERESTS) * 15);
    }

    // --- Biographie : 5 points ----------------------------------------------
    if (profile.bio && profile.bio.trim().length >= 30) {
      score += 5;
    } else {
      missing.push('biographie');
    }

    // --- Prompts : 5 points -------------------------------------------------
    if (profile.prompts.length >= 1) {
      score += 5;
    } else {
      missing.push('au moins une question renseignée');
    }

    // --- Champs facultatifs : 5 points au total -----------------------------
    const optional = [
      profile.heightCm,
      profile.profession,
      profile.religion,
      profile.education,
      profile.smoking,
      profile.drinking,
      profile.languages.length > 0 ? profile.languages : null,
    ].filter((value) => value !== null && value !== undefined).length;

    score += Math.min(5, optional);

    // La complétude ne dépend que de ce qui rend un profil exploitable dans un
    // deck : de quoi le montrer, et de quoi le situer.
    const isComplete =
      approved >= MIN_APPROVED_PHOTOS &&
      profile.discoveryLatitude !== null &&
      profile.interests.length >= MIN_INTERESTS;

    return { score: Math.min(100, score), isComplete, missing };
  }

  /** Recalcule et persiste. À appeler après toute modification du profil. */
  async refresh(userId: string): Promise<CompletionReport> {
    const report = await this.evaluate(userId);

    await this.prisma.profile.updateMany({
      where: { userId },
      data: { completionScore: report.score },
    });

    return report;
  }
}
