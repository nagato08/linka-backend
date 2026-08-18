import { BadRequestException, Injectable } from '@nestjs/common';
import { parsePhoneNumberWithError, type PhoneNumber } from 'libphonenumber-js';
import { MobileMoneyOperator } from '../../generated/prisma/enums';

export interface NormalizedPhone {
  e164: string;
  country: string;
  /** Renseigné quand l'opérateur accepte le mobile money. */
  operator: MobileMoneyOperator | null;
}

/**
 * Normalisation et contrôle des numéros.
 *
 * Premier filtre anti-faux-comptes de la chaîne, et le moins coûteux. Au
 * Cameroun la carte SIM est nominative : un numéro mobile valide a bien plus
 * de valeur qu'une adresse e-mail, qui se crée en dix secondes et à l'infini.
 *
 * Les plages sont aussi utilisées pour router le paiement : MTN MoMo et
 * Orange Money couvrent l'essentiel du marché, et l'opérateur se déduit du
 * préfixe sans rien demander à l'utilisateur.
 */
@Injectable()
export class PhoneService {
  /**
   * Plages mobiles camerounaises (numérotation à 9 chiffres depuis 2015).
   * Tout ce qui n'y figure pas — fixes en 2xx, numéros virtuels, VoIP — est
   * refusé à l'inscription.
   */
  private static readonly CM_RANGES: {
    pattern: RegExp;
    operator: MobileMoneyOperator | null;
    label: string;
  }[] = [
    {
      pattern: /^67\d{7}$/,
      operator: MobileMoneyOperator.MTN_MOMO,
      label: 'MTN',
    },
    {
      pattern: /^65[0-4]\d{6}$/,
      operator: MobileMoneyOperator.MTN_MOMO,
      label: 'MTN',
    },
    {
      pattern: /^68[0-4]\d{6}$/,
      operator: MobileMoneyOperator.MTN_MOMO,
      label: 'MTN',
    },
    {
      pattern: /^69\d{7}$/,
      operator: MobileMoneyOperator.ORANGE_MONEY,
      label: 'Orange',
    },
    {
      pattern: /^65[5-9]\d{6}$/,
      operator: MobileMoneyOperator.ORANGE_MONEY,
      label: 'Orange',
    },
    {
      pattern: /^68[5-9]\d{6}$/,
      operator: MobileMoneyOperator.ORANGE_MONEY,
      label: 'Orange',
    },
    // Nexttel et Camtel : lignes valides, mais sans mobile money exploitable.
    { pattern: /^66\d{7}$/, operator: null, label: 'Nexttel' },
    { pattern: /^62\d{7}$/, operator: null, label: 'Camtel' },
  ];

  /**
   * Indicatifs des marchés ouverts. Le Cameroun d'abord ; l'Europe et le
   * Canada suivront, avec une vérification d'opérateur par interrogation HLR
   * puisque les plages y sont trop mouvantes pour être codées en dur.
   */
  private static readonly ALLOWED_COUNTRIES = new Set(['CM']);

  normalize(raw: string): NormalizedPhone {
    let parsed: PhoneNumber;

    try {
      // Défaut camerounais : l'utilisateur saisit « 670000001 », pas
      // « +237670000001 ».
      parsed = parsePhoneNumberWithError(raw.trim(), 'CM');
    } catch {
      throw new BadRequestException('Numéro de téléphone invalide');
    }

    if (!parsed.isValid()) {
      throw new BadRequestException('Numéro de téléphone invalide');
    }

    const country = parsed.country ?? '';

    if (!PhoneService.ALLOWED_COUNTRIES.has(country)) {
      throw new BadRequestException(
        "L'application n'est pas encore disponible dans ce pays",
      );
    }

    const national = parsed.nationalNumber;
    const range = PhoneService.CM_RANGES.find((r) => r.pattern.test(national));

    if (!range) {
      // Couvre d'un coup les lignes fixes, les numéros virtuels et les
      // services VoIP : aucun n'occupe les plages mobiles.
      throw new BadRequestException(
        'Seuls les numéros mobiles camerounais sont acceptés',
      );
    }

    return {
      e164: parsed.number,
      country,
      operator: range.operator,
    };
  }

  /** Masque d'affichage : +237 6XX XX 45 67. */
  mask(e164: string): string {
    if (e164.length < 6) return '***';
    return `${e164.slice(0, 6)}${'X'.repeat(e164.length - 10)}${e164.slice(-4)}`;
  }
}
