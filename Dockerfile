# ---- run (single-stage) ----
FROM node:20-alpine
WORKDIR /app

# deps do sistema p/ healthcheck
RUN apk add --no-cache curl

# deps do app
COPY package*.json ./
RUN if [ -f package-lock.json ]; then npm ci; else npm install; fi

# código
COPY . .

# build Next (usa Tailwind/PostCSS das devDependencies)
RUN npm run build

ENV NODE_ENV=production
ENV PORT=3000

# healthcheck: verifica se a home responde 200
HEALTHCHECK --interval=10s --timeout=3s --start-period=10s --retries=3 \
  CMD curl -fsS http://localhost:3000/ || exit 1

EXPOSE 3000
CMD ["npm","run","start"]
