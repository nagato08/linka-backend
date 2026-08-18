import { Injectable, Logger } from '@nestjs/common';
import { TypedConfigService } from '../../core/config/config.module';

export interface FaceAnalysis {
  /** 0 à 1. Probabilité qu'un visage réel soit devant la caméra. */
  livenessScore: number;
  /** 0 à 1. Similarité cosinus avec les photos du profil. */
  matchScore: number;
  /** Vecteur ArcFace, 512 dimensions. Null si aucun visage n'a été trouvé. */
  embedding: number[] | null;
  /** Vrai si la pose demandée a été exécutée. */
  challengePerformed: boolean;
}

/**
 * Comparaison faciale et détection de vivacité.
 *
 * NON BRANCHÉE. Aucun modèle n'est chargé : ce service renvoie une analyse
 * neutre, et toute vérification part en revue humaine. C'est volontairement le
 * comportement le plus prudent — accorder un badge sans vérifier reviendrait à
 * certifier des faux profils, ce qui est pire que de ne pas avoir de badge du
 * tout.
 *
 * Pour la brancher, deux chemins possibles :
 *
 *   1. Auto-hébergé — `onnxruntime-node` avec InsightFace `buffalo_l` pour
 *      l'extraction ArcFace, et Silent-Face-Anti-Spoofing pour la vivacité.
 *      Environ 300 Mo de modèles, 200 à 400 ms par vérification sur CPU,
 *      aucun coût par appel. C'est le choix retenu au vu des volumes.
 *
 *   2. AWS Rekognition — `CompareFaces` et `DetectFaceLiveness`. Aucune
 *      installation, mais facturé à l'appel.
 *
 * Google Cloud Vision ne convient pas ici : il détecte les visages et leurs
 * points caractéristiques, mais ne fournit délibérément aucun vecteur de
 * reconnaissance. Il sert à la modération des photos, pas à la comparaison.
 */
@Injectable()
export class FaceMatcherService {
  private readonly logger = new Logger(FaceMatcherService.name);

  constructor(private readonly config: TypedConfigService) {}

  get isConfigured(): boolean {
    return false;
  }

  /**
   * Analyse une capture face aux photos du profil.
   *
   * L'ordre des contrôles compte : sans vivacité, la comparaison faciale ne
   * prouve rien — une photo du profil tenue devant la caméra obtiendrait un
   * score de similarité parfait.
   */
  analyse(
    _capture: Buffer,
    _profilePhotos: Buffer[],
    _expectedPose: string,
  ): Promise<FaceAnalysis> {
    if (this.config.isProduction) {
      this.logger.warn(
        'Comparaison faciale non branchée : toutes les vérifications partent en revue humaine',
      );
    }

    return Promise.resolve({
      livenessScore: 0,
      matchScore: 0,
      embedding: null,
      challengePerformed: false,
    });
  }

  /**
   * Similarité cosinus entre deux vecteurs.
   *
   * Implémentée ici plutôt que déléguée : elle sert aussi aux tests et à la
   * vérification manuelle d'un doublon signalé par la base.
   */
  cosineSimilarity(a: number[], b: number[]): number {
    if (a.length !== b.length || a.length === 0) return 0;

    let dot = 0;
    let normA = 0;
    let normB = 0;

    for (let i = 0; i < a.length; i += 1) {
      dot += a[i] * b[i];
      normA += a[i] * a[i];
      normB += b[i] * b[i];
    }

    const denominator = Math.sqrt(normA) * Math.sqrt(normB);
    return denominator === 0 ? 0 : dot / denominator;
  }
}
