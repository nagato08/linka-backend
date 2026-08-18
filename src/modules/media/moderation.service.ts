import { Injectable, Logger } from '@nestjs/common';
import { GoogleAuth } from 'google-auth-library';
import { PhotoRejectionReason } from '../../generated/prisma/enums';
import { TypedConfigService } from '../../core/config/config.module';

/**
 * L'index de chaîne rend le type assignable au JSON de Prisma, et laisse la
 * place à de nouveaux scores lorsque d'autres modèles seront branchés.
 */
export interface ModerationScores {
  nsfw: number;
  violence: number;
  minor: number;
  aiGenerated: number;
  [key: string]: number;
}

export type ModerationOutcome =
  | { decision: 'APPROVE'; scores: ModerationScores }
  | {
      decision: 'REJECT';
      reason: PhotoRejectionReason;
      scores: ModerationScores;
    }
  | { decision: 'REVIEW'; scores: ModerationScores };

/**
 * Échelle de vraisemblance de Google, convertie en score numérique.
 */
const LIKELIHOOD_SCORE: Record<string, number> = {
  UNKNOWN: 0,
  VERY_UNLIKELY: 0,
  UNLIKELY: 0.25,
  POSSIBLE: 0.5,
  LIKELY: 0.75,
  VERY_LIKELY: 1,
};

interface SafeSearchAnnotation {
  adult?: string;
  violence?: string;
  racy?: string;
  medical?: string;
  spoof?: string;
}

interface VisionResponse {
  responses?: {
    safeSearchAnnotation?: SafeSearchAnnotation;
    faceAnnotations?: { detectionConfidence?: number }[];
    error?: { message?: string };
  }[];
}

/** Au-delà, la photo est refusée sans revue humaine. */
const REJECT_THRESHOLD = 0.75;
/** En dessous, elle est publiée directement. */
const APPROVE_THRESHOLD = 0.25;

/**
 * Modération automatique des images, via Google Cloud Vision.
 *
 * Retenu plutôt qu'AWS Rekognition parce que le compte Google existe déjà pour
 * le Play Store : une API à activer, aucun nouveau fournisseur à ouvrir.
 * L'écart de prix est négligeable — environ 1,50 $ pour mille images, soit
 * 13 $ par mois à trois cents photos par jour.
 *
 * Ce que ça change concrètement : sans modération automatique, cent
 * inscriptions quotidiennes représentent cinq heures de travail humain. Avec,
 * seuls les cas ambigus remontent — moins d'une heure.
 *
 * Deux limites à connaître :
 *
 *   - Vision ne détecte pas l'âge d'une personne. La suspicion de minorité
 *     reste traitée par le signalement et la revue humaine, et c'est pour
 *     cette raison que la demande d'accès à PhotoDNA doit être lancée en
 *     parallèle.
 *   - Vision ne détecte pas les images générées par IA. Le champ existe dans
 *     les scores, il attend un autre modèle.
 */
@Injectable()
export class ModerationService {
  private readonly logger = new Logger(ModerationService.name);
  private readonly auth: GoogleAuth | null = null;

  constructor(private readonly config: TypedConfigService) {
    const serviceAccount = config.get('GOOGLE_SERVICE_ACCOUNT_B64');

    if (serviceAccount) {
      this.auth = new GoogleAuth({
        credentials: JSON.parse(
          Buffer.from(serviceAccount, 'base64').toString('utf8'),
        ) as Record<string, unknown>,
        scopes: ['https://www.googleapis.com/auth/cloud-platform'],
      });
    } else {
      this.logger.warn(
        'Cloud Vision non configuré : toutes les photos partent en revue humaine',
      );
    }
  }

  get isConfigured(): boolean {
    return this.auth !== null;
  }

  /**
   * Analyse une image.
   *
   * En cas d'indisponibilité de l'API, la photo part en revue humaine plutôt
   * que d'être approuvée : une panne chez Google ne doit pas ouvrir la porte à
   * de la pornographie.
   */
  async moderateImage(buffer: Buffer): Promise<ModerationOutcome> {
    const neutral: ModerationScores = {
      nsfw: 0,
      violence: 0,
      minor: 0,
      aiGenerated: 0,
    };

    if (!this.auth) {
      return { decision: 'REVIEW', scores: neutral };
    }

    let annotation: SafeSearchAnnotation;
    let faceCount = 0;

    try {
      const client = await this.auth.getClient();

      const response = await client.request<VisionResponse>({
        url: 'https://vision.googleapis.com/v1/images:annotate',
        method: 'POST',
        data: {
          requests: [
            {
              image: { content: buffer.toString('base64') },
              features: [
                { type: 'SAFE_SEARCH_DETECTION' },
                // Sert au contrôle de cohérence : une photo de profil sans
                // visage n'est pas une photo de profil.
                { type: 'FACE_DETECTION', maxResults: 5 },
              ],
            },
          ],
        },
      });

      const result = response.data.responses?.[0];

      if (result?.error) {
        throw new Error(result.error.message ?? 'erreur Vision');
      }

      annotation = result?.safeSearchAnnotation ?? {};
      faceCount = result?.faceAnnotations?.length ?? 0;
    } catch (error) {
      this.logger.error(
        `Cloud Vision injoignable : ${(error as Error).message}`,
      );
      return { decision: 'REVIEW', scores: neutral };
    }

    const scores: ModerationScores = {
      nsfw: Math.max(
        LIKELIHOOD_SCORE[annotation.adult ?? 'UNKNOWN'] ?? 0,
        // Le contenu suggestif pèse moins qu'un contenu explicite : sur une
        // application de rencontre, une photo de plage n'est pas un problème.
        (LIKELIHOOD_SCORE[annotation.racy ?? 'UNKNOWN'] ?? 0) * 0.6,
      ),
      violence: LIKELIHOOD_SCORE[annotation.violence ?? 'UNKNOWN'] ?? 0,
      minor: 0,
      aiGenerated: 0,
      faces: faceCount,
    };

    if (scores.nsfw >= REJECT_THRESHOLD) {
      return { decision: 'REJECT', reason: PhotoRejectionReason.NSFW, scores };
    }

    if (scores.violence >= REJECT_THRESHOLD) {
      return {
        decision: 'REJECT',
        reason: PhotoRejectionReason.VIOLENCE,
        scores,
      };
    }

    // Aucun visage détecté : ce n'est pas nécessairement un abus — une photo
    // de dos, un paysage — mais ça ne peut pas être la photo principale d'un
    // profil de rencontre. Revue humaine.
    if (faceCount === 0) {
      return { decision: 'REVIEW', scores };
    }

    if (
      scores.nsfw < APPROVE_THRESHOLD &&
      scores.violence < APPROVE_THRESHOLD
    ) {
      return { decision: 'APPROVE', scores };
    }

    return { decision: 'REVIEW', scores };
  }
}
