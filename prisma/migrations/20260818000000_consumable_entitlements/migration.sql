-- ============================================================================
-- Droits consommables distincts des droits d'abonnement
--
-- Deux valeurs manquaient, et leur absence avait un coût réel :
--
--   - un pack de dix rewinds accordait UNLIMITED_REWIND, c'est-à-dire un
--     avantage de l'abonnement Plus (3 000 XAF/mois) pour 450 pièces ;
--   - les super likes consommaient MESSAGE_BEFORE_MATCH, si bien qu'acheter
--     des super likes vidait le crédit de messages, et inversement.
--
-- ATTENTION — les DROP INDEX sur `profiles_discovery_location_gist_idx` et
-- `face_embeddings_embedding_hnsw_idx` proposés par `prisma migrate diff` ont
-- été retirés à la main. Voir prisma/migrations/README.md.
-- ============================================================================

ALTER TYPE "entitlement_key" ADD VALUE 'SUPERLIKE';
ALTER TYPE "entitlement_key" ADD VALUE 'EXTRA_REWIND';
