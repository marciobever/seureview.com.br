# ---- run (single-stage) ----
FROM node:20-alpine

# Recomendado p/ Next no Alpine (compat GLIBC)
RUN apk add --no-cache libc6-compat

WORKDIR /app

# deps (mantém devDependencies p/ o build)
COPY package*.json ./
RUN if [ -f package-lock.json ]; then npm ci; else npm install; fi

# código
COPY . .

# build Next (usa Tailwind/PostCSS instalados nas devDependencies)
RUN npm run build

# runtime
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    HOSTNAME=0.0.0.0 \
    PORT=3000

EXPOSE 3000
CMD ["npm","run","start"]
