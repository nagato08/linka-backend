# PostgreSQL 17 + PostGIS + pgvector
#
# Aucune image publique ne fournit les deux extensions. PostGIS sert la
# recherche géographique du deck, pgvector la détection de comptes multiples
# par comparaison de vecteurs faciaux.
#
# Volontairement basé sur l'image postgres officielle plutôt que sur
# postgis/postgis : cette dernière active d'office fuzzystrmatch,
# postgis_topology et postgis_tiger_geocoder, que Prisma voit alors comme une
# divergence de schéma à chaque migration. Ici, les extensions sont créées par
# la migration elle-même, et par elle seule.
FROM postgres:17-bookworm

RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        postgresql-17-postgis-3 \
        postgresql-17-pgvector \
    && rm -rf /var/lib/apt/lists/*
