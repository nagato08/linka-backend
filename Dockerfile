# =============================================================================
# Image de production de l'API Linka
#
# Construction en plusieurs étapes : l'image finale ne contient ni les sources
# TypeScript, ni les outils de compilation, ni les dépendances de
# développement. On passe d'environ 1,2 Go à moins de 300 Mo, ce qui compte
# quand on déploie depuis une connexion lente.
# =============================================================================

# --- Étape 1 : dépendances complètes, compilation ----------------------------
FROM node:24-bookworm-slim AS builder

WORKDIR /app

# Les manifestes d'abord : tant qu'ils ne changent pas, Docker réutilise la
# couche d'installation, qui est de loin la plus lente.
COPY package.json package-lock.json ./
RUN npm ci

COPY prisma ./prisma
COPY prisma.config.ts tsconfig*.json nest-cli.json ./
COPY src ./src

# Le client Prisma est généré avant la compilation : le code TypeScript en
# dépend directement.
RUN npx prisma generate && npm run build

# --- Étape 2 : dépendances de production seulement ---------------------------
FROM node:24-bookworm-slim AS deps

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev && npm cache clean --force

# --- Étape 3 : image finale --------------------------------------------------
FROM node:24-bookworm-slim AS runner

# sharp et Prisma ont besoin d'OpenSSL ; curl sert à la sonde de santé.
RUN apt-get update \
    && apt-get install -y --no-install-recommends openssl curl \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

ENV NODE_ENV=production

# --chown=node:node partout : `prisma migrate deploy` écrit dans
# node_modules/@prisma/engines au démarrage (vérification des binaires), et
# les fichiers copiés depuis les étapes précédentes appartiennent à root par
# défaut. Sans ça, USER node ci-dessous ne peut plus rien écrire.
COPY --from=deps --chown=node:node /app/node_modules ./node_modules
COPY --from=builder --chown=node:node /app/dist ./dist
COPY --from=builder --chown=node:node /app/src/generated ./src/generated
COPY --from=builder --chown=node:node /app/prisma ./prisma
COPY --from=builder --chown=node:node /app/prisma.config.ts ./
COPY --chown=node:node package.json ./

# Exécution sans privilèges : une faille dans une dépendance ne doit pas
# donner les droits root dans le conteneur.
USER node

EXPOSE 3000

# La sonde interroge PostgreSQL, Redis et les extensions — pas seulement le
# port. Un processus qui répond mais dont la base est tombée n'est pas sain.
HEALTHCHECK --interval=30s --timeout=5s --start-period=40s --retries=3 \
    CMD curl -fsS http://localhost:3000/health || exit 1

CMD ["node", "dist/main.js"]
