FROM node:lts-slim

WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN apt-get update && \
    apt-get install -y \
      libasound2 \
      libatk-bridge2.0-0 \
      libatk1.0-0 \
      libatspi2.0-0 \
      libcairo2 \
      libcups2 \
      libnspr4 \
      libnss3 \
      libpango-1.0-0 \
      libxdamage1 \
      libxkbcommon0 \
      xdg-utils && \
    npm ci && \
    npm cache clean --force && \
    apt-get clean && \
    npx playwright install --with-deps
