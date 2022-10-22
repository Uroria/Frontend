FROM node:16.16.0-alpine as dependencies
WORKDIR /uroria-web
COPY package.json package-lock.json ./
RUN npm ci

FROM node:16.16.0-alpine as builder
WORKDIR /uroria-web
COPY . .
COPY --from=dependencies /uroria-web/node_modules ./node_modules
RUN npm run build

FROM node:16.16.0-alpine as runner
WORKDIR /uroria-web
ENV NODE_ENV production
COPY --from=builder /uroria-web/next.config.js ./
COPY --from=builder /uroria-web/public ./public
COPY --from=builder /uroria-web/.next ./.next
COPY --from=builder /uroria-web/node_modules ./node_modules
COPY --from=builder /uroria-web/package.json ./package.json

EXPOSE 3000
CMD ["npm", "run", "start"]