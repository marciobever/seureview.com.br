# ---- run (single-stage) ----
FROM node:20-alpine
WORKDIR /app

# deps
COPY package*.json ./
RUN if [ -f package-lock.json ]; then npm ci; else npm install; fi

# código
COPY . .

# build Next
RUN npm run build

ENV NODE_ENV=production
ENV PORT=3000
EXPOSE 3000

CMD ["npm","run","start"]
