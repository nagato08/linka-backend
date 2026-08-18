import { ForbiddenException, Injectable, Logger } from '@nestjs/common';
import { GoogleAuth } from 'google-auth-library';
import { IntegrityVerdict } from '../../generated/prisma/enums';
import { TypedConfigService } from '../../core/config/config.module';

interface PlayIntegrityResponse {
  tokenPayloadExternal?: {
    appIntegrity?: { appRecognitionVerdict?: string };
    deviceIntegrity?: { deviceRecognitionVerdict?: string[] };
    accountDetails?: { appLicensingVerdict?: string };
  };
}

/**
 * Attestation d'intégrité de l'appareil.
 *
 * Depuis l'abandon du SMS, c'est **le** rempart anti-faux-comptes. Une adresse
 * e-mail se crée gratuitement et sans limite ; un appareil Android réel, non
 * rooté, faisant tourner une version authentique de l'application, non.
 *
 * Play Integrity répond à trois questions :
 *   - l'application est-elle celle publiée sur le Play Store, non modifiée ;
 *   - l'appareil est-il réel et non compromis, plutôt qu'un émulateur ;
 *   - le compte Google a-t-il réellement installé l'application.
 *
 * C'est ce qui coupe les fermes de comptes à la racine, là où l'OTP se
 * contourne encore avec des services d'adresses temporaires.
 */
@Injectable()
export class IntegrityService {
  private readonly logger = new Logger(IntegrityService.name);
  private readonly auth: GoogleAuth | null = null;
  private readonly packageName: string;
  private readonly required: boolean;

  constructor(private readonly config: TypedConfigService) {
    this.packageName = config.get('PLAY_INTEGRITY_PACKAGE_NAME');
    this.required = config.get('REQUIRE_DEVICE_INTEGRITY');

    const serviceAccount = config.get('GOOGLE_SERVICE_ACCOUNT_B64');

    if (serviceAccount && this.packageName) {
      this.auth = new GoogleAuth({
        credentials: JSON.parse(
          Buffer.from(serviceAccount, 'base64').toString('utf8'),
        ) as Record<string, unknown>,
        scopes: ['https://www.googleapis.com/auth/playintegrity'],
      });
    }

    // Le contrôle activé sans identifiants ne vérifierait rien tout en
    // laissant croire le contraire. Mieux vaut refuser de démarrer.
    if (this.required && !this.auth) {
      throw new Error(
        'REQUIRE_DEVICE_INTEGRITY est actif mais PLAY_INTEGRITY_PACKAGE_NAME ou ' +
          'GOOGLE_SERVICE_ACCOUNT_B64 manque. Aucune attestation ne serait vérifiée.',
      );
    }

    if (!this.auth) {
      this.logger.warn(
        "Play Integrity non configuré : l'inscription n'est pas protégée",
      );
    }
  }

  /**
   * Vérifie une attestation et renvoie le verdict.
   *
   * Lève une exception, plutôt que de renvoyer FAIL, quand le contrôle est
   * exigé et que l'appareil échoue : le compte ne doit pas être créé du tout.
   */
  async verify(integrityToken?: string): Promise<IntegrityVerdict> {
    if (!this.auth) {
      return IntegrityVerdict.UNEVALUATED;
    }

    if (!integrityToken) {
      if (this.required) {
        throw new ForbiddenException(
          "Cet appareil n'a pas pu être vérifié. Installez l'application depuis le Play Store.",
        );
      }
      return IntegrityVerdict.UNEVALUATED;
    }

    let verdict: IntegrityVerdict;

    try {
      const client = await this.auth.getClient();
      const response = await client.request<PlayIntegrityResponse>({
        url: `https://playintegrity.googleapis.com/v1/${this.packageName}:decodeIntegrityToken`,
        method: 'POST',
        data: { integrityToken },
      });

      verdict = this.interpret(response.data);
    } catch (error) {
      // Une panne de l'API Google ne doit pas bloquer toutes les inscriptions.
      // Le verdict reste indéterminé et le score de risque prendra le relais.
      this.logger.error(
        `Play Integrity injoignable : ${(error as Error).message}`,
      );
      return IntegrityVerdict.UNEVALUATED;
    }

    if (verdict === IntegrityVerdict.FAIL && this.required) {
      this.logger.warn(
        'Attestation refusée : appareil ou application non conforme',
      );
      throw new ForbiddenException(
        "Cet appareil n'a pas pu être vérifié. Installez l'application depuis le Play Store.",
      );
    }

    return verdict;
  }

  /**
   * Traduit la réponse de Google.
   *
   * `MEETS_DEVICE_INTEGRITY` est le seuil retenu : il exige un appareil
   * Android certifié, non rooté, avec un chargeur d'amorçage verrouillé.
   * Le niveau inférieur, `MEETS_BASIC_INTEGRITY`, laisse passer les émulateurs
   * — ce qui viderait le contrôle de son intérêt.
   */
  private interpret(data: PlayIntegrityResponse): IntegrityVerdict {
    const payload = data.tokenPayloadExternal;

    if (!payload) return IntegrityVerdict.UNEVALUATED;

    const appVerdict = payload.appIntegrity?.appRecognitionVerdict;
    const deviceVerdicts =
      payload.deviceIntegrity?.deviceRecognitionVerdict ?? [];

    const appIsGenuine = appVerdict === 'PLAY_RECOGNIZED';
    const deviceIsGenuine = deviceVerdicts.includes('MEETS_DEVICE_INTEGRITY');

    return appIsGenuine && deviceIsGenuine
      ? IntegrityVerdict.PASS
      : IntegrityVerdict.FAIL;
  }

  get isEnforced(): boolean {
    return this.required;
  }
}
