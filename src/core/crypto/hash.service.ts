import { Injectable } from '@nestjs/common';
import { hash as argonHash, verify as argonVerify } from '@node-rs/argon2';
import {
  createHmac,
  randomBytes,
  randomInt,
  timingSafeEqual,
} from 'node:crypto';
import { TypedConfigService } from '../config/config.module';

@Injectable()
export class HashService {
  private readonly pepper: string;

  constructor(config: TypedConfigService) {
    this.pepper = config.get('PHONE_HASH_PEPPER');
  }

  /**
   * Empreinte d'un numéro au format E.164.
   *
   * HMAC et non simple SHA-256 : l'espace des numéros camerounais tient dans
   * quelques dizaines de millions de valeurs. Sans clé secrète, une table
   * arc-en-ciel reconstitue l'annuaire complet en quelques minutes.
   *
   * Sert au recoupement avec les contacts bloqués sans jamais manipuler de
   * numéros en clair de part et d'autre.
   */
  hashPhone(phoneE164: string): string {
    return createHmac('sha256', this.pepper).update(phoneE164).digest('hex');
  }

  /** Empreinte d'un code OTP, même raison : six chiffres se cassent instantanément. */
  hashOtp(code: string, phoneE164: string): string {
    return createHmac('sha256', this.pepper)
      .update(`${phoneE164}:${code}`)
      .digest('hex');
  }

  /** Empreinte d'un jeton de rafraîchissement, déjà aléatoire sur 256 bits. */
  hashToken(token: string): string {
    return createHmac('sha256', this.pepper).update(token).digest('hex');
  }

  /**
   * Comparaison à temps constant. Un `===` sur un condensat fuit sa position
   * de divergence et ouvre une attaque temporelle sur la vérification d'OTP.
   */
  safeEqual(a: string, b: string): boolean {
    const bufA = Buffer.from(a, 'utf8');
    const bufB = Buffer.from(b, 'utf8');
    if (bufA.length !== bufB.length) return false;
    return timingSafeEqual(bufA, bufB);
  }

  hashPassword(password: string): Promise<string> {
    // Argon2id : résistant au GPU et aux compromis temps-mémoire, contrairement
    // à bcrypt. Paramètres alignés sur les recommandations OWASP.
    return argonHash(password, {
      memoryCost: 19_456,
      timeCost: 2,
      parallelism: 1,
    });
  }

  async verifyPassword(hash: string, password: string): Promise<boolean> {
    try {
      return await argonVerify(hash, password);
    } catch {
      return false;
    }
  }

  /** Code OTP à six chiffres, tiré d'une source cryptographique. */
  generateOtpCode(): string {
    return randomInt(0, 1_000_000).toString().padStart(6, '0');
  }

  /** Jeton de rafraîchissement opaque, 256 bits. */
  generateRefreshToken(): string {
    return randomBytes(32).toString('base64url');
  }

  /**
   * Code de parrainage sur six caractères.
   *
   * Alphabet volontairement amputé de I, O, 0 et 1 : le code se transmet à
   * l'oral ou par SMS, et ces caractères se confondent.
   */
  generateReferralCode(): string {
    const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    const bytes = randomBytes(6);
    let code = '';
    for (const byte of bytes) {
      code += alphabet[byte % alphabet.length];
    }
    return code;
  }
}
