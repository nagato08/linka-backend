import { Injectable, Logger } from '@nestjs/common';
import { createCipheriv, createDecipheriv, randomBytes } from 'node:crypto';
import { TypedConfigService } from '../config/config.module';

const ALGORITHM = 'aes-256-gcm';
const IV_LENGTH = 12;
const TAG_LENGTH = 16;

/**
 * Chiffrement de champ, au niveau applicatif.
 *
 * Un seul champ le requiert aujourd'hui : l'orientation sexuelle. Ce n'est pas
 * de la prudence abstraite — l'homosexualité est pénalisée au Cameroun
 * (art. 347-1 du Code pénal). Une copie de sauvegarde égarée, une réquisition,
 * un accès administrateur mal cloisonné : dans chacun de ces cas, une colonne
 * en clair expose directement des personnes.
 *
 * GCM et non CBC : le chiffrement est authentifié, une altération du
 * cryptogramme est détectée au déchiffrement au lieu de produire un clair
 * silencieusement faux.
 */
@Injectable()
export class EncryptionService {
  private readonly logger = new Logger(EncryptionService.name);
  private readonly key: Buffer;

  constructor(config: TypedConfigService) {
    this.key = Buffer.from(config.get('FIELD_ENCRYPTION_KEY'), 'hex');
  }

  /** Renvoie `iv:tag:cryptogramme`, le tout en base64url. */
  encrypt(plaintext: string): string {
    const iv = randomBytes(IV_LENGTH);
    const cipher = createCipheriv(ALGORITHM, this.key, iv);

    const encrypted = Buffer.concat([
      cipher.update(plaintext, 'utf8'),
      cipher.final(),
    ]);

    return [
      iv.toString('base64url'),
      cipher.getAuthTag().toString('base64url'),
      encrypted.toString('base64url'),
    ].join(':');
  }

  /**
   * Renvoie null si le cryptogramme est illisible ou altéré.
   *
   * Une donnée sensible indéchiffrable doit être traitée comme absente, pas
   * faire échouer la lecture d'un profil entier.
   */
  decrypt(payload: string): string | null {
    try {
      const [ivPart, tagPart, dataPart] = payload.split(':');
      if (!ivPart || !tagPart || !dataPart) return null;

      const iv = Buffer.from(ivPart, 'base64url');
      const tag = Buffer.from(tagPart, 'base64url');
      if (iv.length !== IV_LENGTH || tag.length !== TAG_LENGTH) return null;

      const decipher = createDecipheriv(ALGORITHM, this.key, iv);
      decipher.setAuthTag(tag);

      return Buffer.concat([
        decipher.update(Buffer.from(dataPart, 'base64url')),
        decipher.final(),
      ]).toString('utf8');
    } catch {
      this.logger.warn('Déchiffrement impossible : cryptogramme altéré');
      return null;
    }
  }

  encryptNullable(plaintext: string | null | undefined): string | null {
    return plaintext ? this.encrypt(plaintext) : null;
  }

  decryptNullable(payload: string | null | undefined): string | null {
    return payload ? this.decrypt(payload) : null;
  }
}
