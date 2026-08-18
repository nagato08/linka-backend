#!/usr/bin/env bash
#
# Sauvegarde chiffrée de la base, envoyée vers le stockage objet.
#
# À planifier dans la crontab de l'hôte :
#   0 2 * * * /opt/linka/scripts/backup.sh >> /var/log/linka-backup.log 2>&1
#
# Une sauvegarde jamais restaurée n'est pas une sauvegarde : teste la
# restauration au moins une fois avant d'en avoir besoin.

set -euo pipefail

BACKUP_DIR="${BACKUP_DIR:-/opt/linka/backups}"
RETENTION_DAYS="${RETENTION_DAYS:-14}"
STAMP="$(date +%Y%m%d-%H%M%S)"
ARCHIVE="$BACKUP_DIR/linka-$STAMP.sql.gz"

mkdir -p "$BACKUP_DIR"

echo "[$(date -Is)] Sauvegarde en cours…"

docker exec linka-postgres pg_dump \
  -U "${POSTGRES_USER:-linka}" \
  -d "${POSTGRES_DB:-linka}" \
  --no-owner --no-privileges \
  | gzip -9 > "$ARCHIVE"

SIZE="$(du -h "$ARCHIVE" | cut -f1)"
echo "[$(date -Is)] Archive créée : $ARCHIVE ($SIZE)"

# Chiffrement avant tout envoi : l'archive contient des adresses e-mail, des
# vecteurs faciaux et l'orientation sexuelle chiffrée. Elle ne doit jamais
# quitter la machine en clair.
if [ -n "${BACKUP_PASSPHRASE:-}" ]; then
  gpg --batch --yes --symmetric --cipher-algo AES256 \
      --passphrase "$BACKUP_PASSPHRASE" \
      -o "$ARCHIVE.gpg" "$ARCHIVE"
  rm -f "$ARCHIVE"
  ARCHIVE="$ARCHIVE.gpg"
  echo "[$(date -Is)] Archive chiffrée."
else
  echo "[$(date -Is)] AVERTISSEMENT : BACKUP_PASSPHRASE absente, archive en clair."
fi

# Copie hors machine. Une sauvegarde restée sur le serveur ne protège de rien
# le jour où c'est le serveur qui disparaît.
if [ -n "${S3_BACKUP_BUCKET:-}" ]; then
  aws s3 cp "$ARCHIVE" "s3://$S3_BACKUP_BUCKET/$(basename "$ARCHIVE")" \
    --endpoint-url "${S3_ENDPOINT:-}" \
    && echo "[$(date -Is)] Copie distante effectuée."
fi

find "$BACKUP_DIR" -name 'linka-*.sql.gz*' -mtime "+$RETENTION_DAYS" -delete
echo "[$(date -Is)] Terminé. Rétention : $RETENTION_DAYS jours."
