import { z } from 'zod';

/**
 * Validation des variables d'environnement.
 *
 * Volontairement stricte et exécutée au démarrage : un secret manquant doit
 * faire échouer le boot, pas produire une panne silencieuse en production.
 * Un `FIELD_ENCRYPTION_KEY` absent rendrait par exemple l'orientation
 * sexuelle stockée en clair sans que rien ne le signale.
 */
export const envSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'test', 'production'])
    .default('development'),
  PORT: z.coerce.number().int().positive().default(3000),

  DATABASE_URL: z.url(),
  REDIS_URL: z.url(),

  // Stockage compatible S3 : MinIO en local, Cloudflare R2 en production.
  // R2 plutôt que Cloudinary pour une seule raison, décisive : l'egress y est
  // gratuit. Un deck fait ~7 Mo, et les utilisateurs le rechargent en boucle.
  S3_ENDPOINT: z.url(),
  S3_ACCESS_KEY: z.string().min(1),
  S3_SECRET_KEY: z.string().min(1),
  S3_BUCKET: z.string().min(1),
  S3_REGION: z.string().min(1).default('auto'),
  /** Domaine public servant les médias : MinIO en local, CDN Cloudflare en production. */
  S3_PUBLIC_URL: z.url(),
  /** MinIO exige le style chemin ; R2 et S3 utilisent le style hôte virtuel. */
  S3_FORCE_PATH_STYLE: z
    .string()
    .default('true')
    .transform((v) => v === 'true'),

  /** Poivre du hachage SHA-256 des numéros. Le changer invalide tous les phoneHash. */
  PHONE_HASH_PEPPER: z.string().min(16),

  /** Clé AES-256-GCM, 32 octets en hexadécimal. */
  FIELD_ENCRYPTION_KEY: z
    .string()
    .regex(
      /^[0-9a-f]{64}$/i,
      'doit faire 64 caractères hexadécimaux (32 octets)',
    ),

  // --- E-mail ---------------------------------------------------------------
  // Vide en développement : les codes sont alors écrits dans les journaux.
  // Le service refuse de démarrer en production sans clé.
  RESEND_API_KEY: z.string().default(''),
  MAIL_FROM: z.string().min(3).default('Linka <onboarding@resend.dev>'),

  // --- Attestation d'intégrité ----------------------------------------------
  // Depuis l'abandon du SMS, c'est le principal rempart anti-faux-comptes :
  // une adresse e-mail est gratuite et illimitée, pas un appareil réel.
  REQUIRE_DEVICE_INTEGRITY: z
    .string()
    .default('false')
    .transform((v) => v === 'true'),
  PLAY_INTEGRITY_PACKAGE_NAME: z.string().default(''),
  /// Compte de service Google, encodé en base64.
  GOOGLE_SERVICE_ACCOUNT_B64: z.string().default(''),

  // --- Notifications (Firebase Cloud Messaging) -----------------------------
  // L'API historique avec clé serveur est fermée depuis 2024 : seule la v1,
  // authentifiée par compte de service, fonctionne encore.
  FIREBASE_PROJECT_ID: z.string().default(''),
  FIREBASE_SERVICE_ACCOUNT_B64: z.string().default(''),

  // --- Paiement (NotchPay) --------------------------------------------------
  // Mobile money camerounais : MTN MoMo et Orange Money.
  // L'ouverture d'un compte marchand exige un RCCM — donc une société
  // enregistrée. Sans ces clés, la monétisation est simplement indisponible.
  NOTCHPAY_PUBLIC_KEY: z.string().default(''),
  NOTCHPAY_PRIVATE_KEY: z.string().default(''),
  NOTCHPAY_WEBHOOK_SECRET: z.string().default(''),
  /**
   * Déclare qu'un déploiement est censé encaisser des paiements.
   *
   * Vrai par défaut : oublier les clés en production reste une erreur, et le
   * démarrage doit alors échouer plutôt que de laisser croire que la
   * monétisation fonctionne. Le passer à false est une décision explicite,
   * pour les environnements où elle n'est pas encore ouverte — l'ouverture
   * d'un compte marchand exige un RCCM, qui peut prendre des semaines.
   */
  PAYMENTS_ENABLED: z
    .string()
    .default('true')
    .transform((v) => v !== 'false'),
  /** Base publique de l'API, pour construire l'URL de rappel. */
  APP_PUBLIC_URL: z.string().default('http://localhost:3000'),

  JWT_ACCESS_SECRET: z.string().min(16),
  JWT_REFRESH_SECRET: z.string().min(16),
  JWT_ACCESS_TTL: z.string().default('15m'),
  JWT_REFRESH_TTL: z.string().default('30d'),
});

export type Env = z.infer<typeof envSchema>;

export function validateEnv(raw: Record<string, unknown>): Env {
  const result = envSchema.safeParse(raw);

  if (!result.success) {
    const details = result.error.issues
      .map((issue) => `  - ${issue.path.join('.')} : ${issue.message}`)
      .join('\n');

    throw new Error(
      `Configuration invalide. Vérifier le fichier .env :\n${details}`,
    );
  }

  return result.data;
}
