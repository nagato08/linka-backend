-- ============================================================================
-- Boosts par durée, et non plus par palier nommé
--
-- La grille commerciale est passée à six durées (30 min → 24 h) au lieu de
-- quatre paliers. `durationMinutes` accompagne le changement : `durationDays`
-- ne sait pas exprimer une demi-heure.
--
-- ATTENTION — les deux DROP INDEX proposés par `prisma migrate diff` ont été
-- retirés de ce fichier à la main. Prisma ne sait pas déclarer un index sur
-- une colonne `Unsupported` : il voit donc l'index GiST de `profiles` et
-- l'index HNSW de `face_embeddings` comme des intrus et propose de les
-- supprimer à chaque diff. Les effacer casserait la recherche géographique du
-- deck et la détection de comptes multiples.
--
-- Voir prisma/migrations/README.md.
-- ============================================================================

-- Les produits de boost existants portent les anciennes valeurs d'énumération,
-- qui n'ont pas d'équivalent dans la nouvelle. Ils sont retirés ici et
-- réinsérés par le seed avec la nouvelle grille tarifaire.
DELETE FROM "products" WHERE "type" = 'BOOST';

BEGIN;
CREATE TYPE "boost_tier_new" AS ENUM ('BOOST_30M', 'BOOST_1H', 'BOOST_3H', 'BOOST_6H', 'BOOST_12H', 'BOOST_24H');
ALTER TABLE "products" ALTER COLUMN "boostTier" TYPE "boost_tier_new" USING ("boostTier"::text::"boost_tier_new");
ALTER TABLE "boosts" ALTER COLUMN "tier" TYPE "boost_tier_new" USING ("tier"::text::"boost_tier_new");
ALTER TYPE "boost_tier" RENAME TO "boost_tier_old";
ALTER TYPE "boost_tier_new" RENAME TO "boost_tier";
DROP TYPE "public"."boost_tier_old";
COMMIT;

-- Durée des boosts, en minutes.
ALTER TABLE "products" ADD COLUMN "durationMinutes" INTEGER;

-- L'index de l'archive prend le nom qu'attend Prisma, maintenant que la table
-- est déclarée dans le schéma.
ALTER INDEX "swipes_archive_actor_idx" RENAME TO "swipes_archive_actorId_createdAt_idx";
