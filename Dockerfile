# ---- build ----
FROM node:20-alpine AS build
WORKDIR /app

# Dependências primeiro (melhor cache)
COPY package*.json ./
# Usa lock se existir, senão instala normal
RUN if [ -f package-lock.json ]; then npm ci; else npm install; fi

# Código
COPY . .

# Garante build reproduzível e sem telemetry
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# 🔨 Build Next.js em modo standalone (exige next.config.js com output: 'standalone')
RUN npm install

# ---- runtime ----
FROM node:20-alpine AS runtime
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV NEXT_TELEMETRY_DISABLED=1

# Usuário não-root
RUN addgroup -S nextjs && adduser -S nextjs -G nextjs

# Copia o bundle standalone gerado pelo Next
# Isso coloca /app/server.js e /app/.next/static
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static
# Se tiver /public, copie também:
# COPY --from=build /app/public ./public

USER nextjs
EXPOSE 3000

# 🚀 Sobe o servidor Next standalone
CMD ["node", "server.js"]
