# Migrations — règle à respecter

## Générer une migration

`prisma migrate dev` exige un terminal interactif et ne fonctionne pas en CI.
Procédure retenue :

```bash
npx prisma migrate diff \
  --from-migrations=prisma/migrations \
  --to-schema=prisma/schema \
  --script -o /tmp/next.sql

# Relire /tmp/next.sql, puis :
mkdir -p prisma/migrations/<horodatage>_<nom>
cp /tmp/next.sql prisma/migrations/<horodatage>_<nom>/migration.sql
npx prisma migrate deploy
```

## Ce qu'il faut retirer à chaque fois

Prisma ne sait pas déclarer un index posé sur une colonne `Unsupported`. Il
considère donc les deux index suivants comme des intrus et propose de les
supprimer **dans chaque migration générée** :

```sql
DROP INDEX "profiles_discovery_location_gist_idx";   -- ← à retirer
DROP INDEX "face_embeddings_embedding_hnsw_idx";     -- ← à retirer
```

Les supprimer casserait deux choses :

- l'index GiST : la recherche géographique du deck repasserait en parcours
  complet de table ;
- l'index HNSW : la détection de comptes multiples par comparaison de vecteurs
  faciaux deviendrait inexploitable.

**Toute migration générée doit être relue avant d'être appliquée.** C'est le
prix des types PostgreSQL que Prisma ne modélise pas.

## Ce qui a déjà été réglé

Deux autres objets figuraient autrefois dans cette liste. Ils ont été déclarés
dans le schéma Prisma pour cesser d'apparaître :

- `swipes_archive` → modèle `SwipeArchive` ;
- `cities_name_trgm_idx` → `@@index([name(ops: raw("gin_trgm_ops"))], type: Gin)`.

Quand un objet SQL brut peut être exprimé en Prisma, il doit l'être : chaque
déclaration en moins est une occasion de moins de casser la base par
inadvertance.

## Base jetable

`migrate diff` a besoin d'une base de travail pour rejouer l'historique.
`SHADOW_DATABASE_URL` la désigne, et `prisma.config.ts` la transmet.
Elle est créée une fois :

```bash
docker exec linka-postgres psql -U linka -d postgres -c "CREATE DATABASE linka_shadow;"
```
