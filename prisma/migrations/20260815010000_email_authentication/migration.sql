-- ============================================================================
-- Authentification par e-mail
--
-- L'ouverture d'un compte SMS exige une société enregistrée et l'approbation
-- d'un sender ID — plusieurs semaines. L'e-mail permet de démarrer sans ce
-- délai, et le téléphone revient au premier paiement : le mobile money le
-- vérifie gratuitement, l'utilisateur confirmant avec son code PIN sur son
-- propre téléphone.
--
-- ATTENTION — les DROP INDEX sur `profiles_discovery_location_gist_idx` et
-- `face_embeddings_embedding_hnsw_idx` proposés par `prisma migrate diff` ont
-- été retirés à la main. Voir prisma/migrations/README.md.
-- ============================================================================

-- Les comptes sans adresse ne peuvent pas satisfaire la nouvelle contrainte.
-- Aucun n'existe à ce stade ; l'instruction protège une reprise éventuelle.
DELETE FROM "users" WHERE "email" IS NULL;

CREATE TYPE "otp_channel" AS ENUM ('EMAIL', 'SMS');

ALTER TYPE "auth_provider" ADD VALUE 'EMAIL';

-- Un seul champ pour l'adresse ou le numéro : la vérification est identique,
-- seul le transport change.
DROP INDEX "otp_codes_phone_purpose_createdAt_idx";

ALTER TABLE "otp_codes" DROP COLUMN "phone",
ADD COLUMN     "channel" "otp_channel" NOT NULL DEFAULT 'EMAIL',
ADD COLUMN     "identifier" VARCHAR(255) NOT NULL;

CREATE INDEX "otp_codes_identifier_purpose_createdAt_idx"
  ON "otp_codes"("identifier", "purpose", "createdAt" DESC);

ALTER TABLE "users" ALTER COLUMN "phone" DROP NOT NULL,
ALTER COLUMN "phoneHash" DROP NOT NULL,
ALTER COLUMN "email" SET NOT NULL,
ALTER COLUMN "authProvider" SET DEFAULT 'EMAIL';
