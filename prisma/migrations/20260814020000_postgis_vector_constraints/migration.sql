-- ============================================================================
-- Objets que Prisma ne sait pas exprimer
--
-- Trois familles :
--   1. Géographie PostGIS   — colonne dérivée + index GiST
--   2. Vecteurs pgvector    — index HNSW cosinus
--   3. Contraintes CHECK    — invariants que la couche applicative ne peut pas
--                             garantir seule sous concurrence
--   4. Index partiels       — requêtes chaudes du deck et de la modération
--   5. Archive des swipes   — maîtrise de la croissance de la table la plus
--                             écrite du schéma
--
-- Tout est idempotent : cette migration peut être rejouée sans dommage.
-- ============================================================================


-- ----------------------------------------------------------------------------
-- 1. Géographie
-- ----------------------------------------------------------------------------

-- La colonne "discoveryLocation" est dérivée de discoveryLatitude/Longitude.
--
-- Elle est entretenue par un trigger plutôt que déclarée GENERATED ALWAYS :
-- Prisma ne modélise pas les colonnes générées et chercherait à « corriger »
-- la différence à chaque migration suivante. Un trigger lui est invisible.
CREATE OR REPLACE FUNCTION profiles_sync_discovery_location()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW."discoveryLatitude" IS NULL OR NEW."discoveryLongitude" IS NULL THEN
    NEW."discoveryLocation" := NULL;
  ELSE
    NEW."discoveryLocation" := ST_SetSRID(
      ST_MakePoint(NEW."discoveryLongitude", NEW."discoveryLatitude"),
      4326
    )::geography;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_profiles_sync_discovery_location ON "profiles";
CREATE TRIGGER trg_profiles_sync_discovery_location
  BEFORE INSERT OR UPDATE OF "discoveryLatitude", "discoveryLongitude"
  ON "profiles"
  FOR EACH ROW
  EXECUTE FUNCTION profiles_sync_discovery_location();

-- Index spatial du deck. Sans lui, ST_DWithin dégénère en parcours complet.
CREATE INDEX IF NOT EXISTS "profiles_discovery_location_gist_idx"
  ON "profiles" USING GIST ("discoveryLocation");


-- ----------------------------------------------------------------------------
-- 2. Vecteurs faciaux
-- ----------------------------------------------------------------------------

-- Recherche du plus proche voisin en distance cosinus : un même visage
-- rattaché à deux comptes est un signal de fraude fort.
-- HNSW plutôt qu'IVFFlat : pas d'entraînement préalable, donc utilisable dès
-- la première ligne insérée.
CREATE INDEX IF NOT EXISTS "face_embeddings_embedding_hnsw_idx"
  ON "face_embeddings" USING hnsw ("embedding" vector_cosine_ops);


-- ----------------------------------------------------------------------------
-- 3. Contraintes d'intégrité
-- ----------------------------------------------------------------------------

-- Un match est stocké avec userAId < userBId. Sans cet ordre imposé, deux
-- likes réciproques simultanés produisent deux lignes distinctes — donc deux
-- conversations pour un seul match. L'unicité de la paire n'est réellement
-- effective qu'avec cette contrainte.
ALTER TABLE "matches" DROP CONSTRAINT IF EXISTS "matches_user_order_check";
ALTER TABLE "matches" ADD CONSTRAINT "matches_user_order_check"
  CHECK ("userAId" < "userBId");

-- Une conversation appartient à un match OU à un événement, jamais aux deux,
-- jamais à aucun.
ALTER TABLE "conversations" DROP CONSTRAINT IF EXISTS "conversations_owner_check";
ALTER TABLE "conversations" ADD CONSTRAINT "conversations_owner_check"
  CHECK (num_nonnulls("matchId", "eventId") = 1);

-- Un produit se paie en argent réel ou en crédits, pas les deux.
ALTER TABLE "products" DROP CONSTRAINT IF EXISTS "products_pricing_check";
ALTER TABLE "products" ADD CONSTRAINT "products_pricing_check"
  CHECK (
    ("priceAmount" IS NOT NULL AND "currencyCode" IS NOT NULL AND "creditCost" IS NULL)
    OR
    ("creditCost" IS NOT NULL AND "priceAmount" IS NULL)
  );

-- Montants toujours positifs. Les remboursements sont des lignes distinctes,
-- jamais des montants négatifs.
ALTER TABLE "products" DROP CONSTRAINT IF EXISTS "products_amount_positive_check";
ALTER TABLE "products" ADD CONSTRAINT "products_amount_positive_check"
  CHECK (
    ("priceAmount" IS NULL OR "priceAmount" > 0)
    AND ("creditCost" IS NULL OR "creditCost" > 0)
    AND ("creditGrant" IS NULL OR "creditGrant" > 0)
  );

-- Un mouvement de crédit nul n'a aucun sens et masquerait un bug.
ALTER TABLE "credit_ledger" DROP CONSTRAINT IF EXISTS "credit_ledger_delta_check";
ALTER TABLE "credit_ledger" ADD CONSTRAINT "credit_ledger_delta_check"
  CHECK ("delta" <> 0);

-- Le solde ne descend jamais sous zéro : un découvert de crédits serait un
-- trou de caisse.
ALTER TABLE "credit_ledger" DROP CONSTRAINT IF EXISTS "credit_ledger_balance_check";
ALTER TABLE "credit_ledger" ADD CONSTRAINT "credit_ledger_balance_check"
  CHECK ("balanceAfter" >= 0);

-- On ne se swipe pas soi-même.
ALTER TABLE "swipes" DROP CONSTRAINT IF EXISTS "swipes_self_check";
ALTER TABLE "swipes" ADD CONSTRAINT "swipes_self_check"
  CHECK ("actorId" <> "targetId");

-- On ne se bloque pas soi-même.
ALTER TABLE "blocks" DROP CONSTRAINT IF EXISTS "blocks_self_check";
ALTER TABLE "blocks" ADD CONSTRAINT "blocks_self_check"
  CHECK ("blockerId" <> "blockedId");

-- Six photos au maximum, positions 0 à 5.
ALTER TABLE "photos" DROP CONSTRAINT IF EXISTS "photos_position_check";
ALTER TABLE "photos" ADD CONSTRAINT "photos_position_check"
  CHECK ("position" >= 0 AND "position" <= 5);

-- Bornes d'âge cohérentes, et jamais en dessous de la majorité légale.
ALTER TABLE "preferences" DROP CONSTRAINT IF EXISTS "preferences_age_range_check";
ALTER TABLE "preferences" ADD CONSTRAINT "preferences_age_range_check"
  CHECK ("minAge" >= 18 AND "maxAge" >= "minAge" AND "maxAge" <= 120);

ALTER TABLE "preferences" DROP CONSTRAINT IF EXISTS "preferences_distance_check";
ALTER TABLE "preferences" ADD CONSTRAINT "preferences_distance_check"
  CHECK ("maxDistanceKm" > 0 AND "maxDistanceKm" <= 20000);

-- Coordonnées valides. Une latitude hors bornes fait silencieusement sortir
-- un profil de tous les résultats spatiaux.
ALTER TABLE "profiles" DROP CONSTRAINT IF EXISTS "profiles_coordinates_check";
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_coordinates_check"
  CHECK (
    ("homeLatitude" IS NULL OR ("homeLatitude" BETWEEN -90 AND 90))
    AND ("homeLongitude" IS NULL OR ("homeLongitude" BETWEEN -180 AND 180))
    AND ("discoveryLatitude" IS NULL OR ("discoveryLatitude" BETWEEN -90 AND 90))
    AND ("discoveryLongitude" IS NULL OR ("discoveryLongitude" BETWEEN -180 AND 180))
  );

ALTER TABLE "profiles" DROP CONSTRAINT IF EXISTS "profiles_completion_check";
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_completion_check"
  CHECK ("completionScore" BETWEEN 0 AND 100);

-- Capacité d'un événement, et répartition par genre cohérente avec elle.
ALTER TABLE "events" DROP CONSTRAINT IF EXISTS "events_capacity_check";
ALTER TABLE "events" ADD CONSTRAINT "events_capacity_check"
  CHECK (
    "capacity" > 0 AND "capacity" <= 100
    AND COALESCE("seatsWomen", 0) + COALESCE("seatsMen", 0) <= "capacity"
  );

ALTER TABLE "events" DROP CONSTRAINT IF EXISTS "events_schedule_check";
ALTER TABLE "events" ADD CONSTRAINT "events_schedule_check"
  CHECK ("endsAt" IS NULL OR "endsAt" > "startsAt");


-- ----------------------------------------------------------------------------
-- 4. Index partiels des requêtes chaudes
-- ----------------------------------------------------------------------------

-- Écran « qui m'a liké », gratuit et donc très sollicité.
-- L'index partiel évite d'indexer les PASS, qui représentent la majorité des
-- lignes et ne sont jamais lus par cette requête.
CREATE INDEX IF NOT EXISTS "swipes_likes_received_idx"
  ON "swipes" ("targetId", "createdAt" DESC)
  WHERE "action" IN ('LIKE', 'SUPERLIKE') AND "isRewound" = false;

-- Candidats éligibles au deck : actifs, non masqués, profil renseigné.
CREATE INDEX IF NOT EXISTS "profiles_deck_candidates_idx"
  ON "profiles" ("matchingBucket", "isVerified", "completionScore" DESC)
  WHERE "incognito" = false AND "discoveryLatitude" IS NOT NULL;

-- File de modération : seules les tâches non résolues sont lues.
CREATE INDEX IF NOT EXISTS "moderation_tasks_pending_idx"
  ON "moderation_tasks" ("priority" DESC, "createdAt")
  WHERE "status" IN ('QUEUED', 'IN_REVIEW');

-- Boosts en cours, interrogés à chaque construction de deck.
CREATE INDEX IF NOT EXISTS "boosts_running_idx"
  ON "boosts" ("cityId", "endAt")
  WHERE "status" = 'ACTIVE';

-- Paiements non terminaux, balayés par le job de réconciliation mobile money.
CREATE INDEX IF NOT EXISTS "payment_intents_unsettled_idx"
  ON "payment_intents" ("createdAt")
  WHERE "status" IN ('CREATED', 'PENDING', 'PROCESSING');

-- Comptes en attente de purge RGPD.
CREATE INDEX IF NOT EXISTS "users_pending_deletion_idx"
  ON "users" ("deletionRequestedAt")
  WHERE "deletionRequestedAt" IS NOT NULL AND "deletedAt" IS NULL;

-- Recherche de ville par saisie approximative, tolérante aux fautes.
CREATE INDEX IF NOT EXISTS "cities_name_trgm_idx"
  ON "cities" USING GIN ("name" gin_trgm_ops);

-- Session active la plus récente d'un appareil.
CREATE INDEX IF NOT EXISTS "sessions_active_idx"
  ON "sessions" ("userId", "lastUsedAt" DESC)
  WHERE "revokedAt" IS NULL;


-- ----------------------------------------------------------------------------
-- 5. Archive des swipes
-- ----------------------------------------------------------------------------

-- La table des swipes est de loin la plus écrite : les swipes sont 10 à 100
-- fois plus nombreux que les interactions utiles.
--
-- Le partitionnement par date est écarté volontairement : PostgreSQL exige que
-- la clé de partition figure dans toute contrainte unique, ce qui ferait sauter
-- l'unicité (actorId, targetId) dont dépend la correction du matching.
--
-- La croissance est donc absorbée par archivage : au-delà de 90 jours, les PASS
-- non suivis d'effet migrent ici. L'exclusion « déjà vu » en lecture chaude
-- passe de toute façon par un set Redis, jamais par cette table.
CREATE TABLE IF NOT EXISTS "swipes_archive" (
  "id"        UUID         NOT NULL,
  "actorId"   UUID         NOT NULL,
  "targetId"  UUID         NOT NULL,
  "action"    "swipe_action" NOT NULL,
  "source"    "swipe_source" NOT NULL,
  "isRewound" BOOLEAN      NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL,
  "archivedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

  CONSTRAINT "swipes_archive_pkey" PRIMARY KEY ("id")
);

CREATE INDEX IF NOT EXISTS "swipes_archive_actor_idx"
  ON "swipes_archive" ("actorId", "createdAt" DESC);
