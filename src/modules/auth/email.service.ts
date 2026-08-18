import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { Resend } from 'resend';
import { AppLocale } from '../../generated/prisma/enums';
import { TypedConfigService } from '../../core/config/config.module';
import { DISPOSABLE_EMAIL_DOMAINS } from './disposable-domains';

/**
 * Envoi des codes de vérification par e-mail.
 *
 * Remplace le SMS, dont l'ouverture exige une société enregistrée et
 * l'approbation d'un sender ID — plusieurs semaines de délai.
 *
 * Le compromis doit être conscient : une adresse e-mail se crée gratuitement
 * et sans limite, là où une carte SIM camerounaise est nominative. La barrière
 * anti-faux-comptes se déplace donc entièrement sur l'attestation d'intégrité
 * de l'appareil et le plafond de comptes par appareil.
 */
@Injectable()
export class EmailService {
  private readonly logger = new Logger(EmailService.name);
  private readonly resend: Resend | null;
  private readonly from: string;

  constructor(private readonly config: TypedConfigService) {
    const apiKey = config.get('RESEND_API_KEY');
    this.from = config.get('MAIL_FROM');

    this.resend = apiKey ? new Resend(apiKey) : null;

    if (!this.resend) {
      // Échec au démarrage plutôt qu'une production silencieuse : sans
      // fournisseur, l'envoi « réussit » mais personne ne reçoit rien, et rien
      // dans les métriques ne le montre — les requêtes répondent 200.
      if (this.config.isProduction) {
        throw new Error(
          'RESEND_API_KEY absente. Aucun e-mail ne partira : configurez-la avant tout déploiement.',
        );
      }

      this.logger.warn(
        'Resend non configuré : les codes sont écrits dans les journaux',
      );
    }
  }

  /**
   * Normalise et refuse les adresses jetables.
   *
   * Sans cette vérification, la création de comptes en masse redevient
   * triviale : les services d'adresses temporaires fournissent des boîtes
   * fonctionnelles en une seconde, sans inscription.
   */
  normalize(raw: string): string {
    const email = raw.trim().toLowerCase();

    if (!/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(email)) {
      throw new BadRequestException('Adresse e-mail invalide');
    }

    const domain = email.split('@')[1];

    if (!domain || DISPOSABLE_EMAIL_DOMAINS.has(domain)) {
      throw new BadRequestException(
        'Les adresses temporaires ne sont pas acceptées',
      );
    }

    return email;
  }

  async sendOtp(email: string, code: string, locale: AppLocale): Promise<void> {
    const isEnglish = locale === AppLocale.EN;

    const subject = isEnglish
      ? `${code} — your Linka verification code`
      : `${code} — votre code de vérification Linka`;

    if (!this.resend) {
      this.logger.log(`→ ${email} : code ${code}`);
      return;
    }

    const { error } = await this.resend.emails.send({
      from: this.from,
      to: email,
      subject,
      html: this.template(code, isEnglish),
      // Le code figure aussi en clair : de nombreux clients mobiles bloquent
      // le HTML par défaut sur ce marché.
      text: isEnglish
        ? `Your Linka verification code is ${code}. It expires in 10 minutes.`
        : `Votre code de vérification Linka est ${code}. Il expire dans 10 minutes.`,
    });

    if (error) {
      this.logger.error(`Envoi impossible vers ${email} : ${error.message}`);
      throw new BadRequestException("L'e-mail n'a pas pu être envoyé");
    }
  }

  private template(code: string, isEnglish: boolean): string {
    const title = isEnglish
      ? 'Your verification code'
      : 'Votre code de vérification';
    const hint = isEnglish
      ? 'This code expires in 10 minutes. If you did not request it, ignore this message.'
      : "Ce code expire dans 10 minutes. Si vous ne l'avez pas demandé, ignorez ce message.";

    return `<!doctype html>
<html lang="${isEnglish ? 'en' : 'fr'}">
  <body style="margin:0;padding:32px;background:#f7f7f7;font-family:system-ui,-apple-system,'Segoe UI',sans-serif;">
    <div style="max-width:480px;margin:0 auto;background:#fff;border-radius:16px;padding:32px;">
      <p style="margin:0 0 8px;font-size:20px;font-weight:600;color:#6A4CFF;">Linka</p>
      <h1 style="margin:0 0 24px;font-size:18px;font-weight:600;color:#1C1C1C;">${title}</h1>
      <p style="margin:0 0 24px;font-size:34px;font-weight:700;letter-spacing:8px;color:#1C1C1C;">${code}</p>
      <p style="margin:0;font-size:14px;line-height:1.5;color:#7A7A7A;">${hint}</p>
    </div>
  </body>
</html>`;
  }
}
