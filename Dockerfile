FROM node:lts-alpine

WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN apk update && apk add --no-cache xdg-utils && \
    npm ci && npm cache clean --force
