# Production image for Google Cloud Run.
# Built remotely by Cloud Build via `gcloud run deploy --source .`
#
# Runs `next start` rather than the `output: "standalone"` server.js: in
# Next 16.3 the standalone server binds HOSTNAME=0.0.0.0 but resolves
# middleware rewrites against a localhost origin, so next-intl's locale
# rewrite is treated as external and redirect-loops (/about -> /about).

FROM node:24-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build && npm prune --omit=dev

FROM node:24-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=8080

RUN addgroup -S nodejs && adduser -S nextjs -G nodejs

COPY --from=builder --chown=nextjs:nodejs /app ./

USER nextjs
EXPOSE 8080
CMD ["node_modules/.bin/next", "start"]
