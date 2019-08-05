FROM node:12.5.0-alpine

RUN set -eux \
 && apk update \
 && apk upgrade \
 && apk add --no-cache tini

ENTRYPOINT ["/sbin/tini", "--"]

WORKDIR /app

COPY package.json package-lock.json ./

RUN set -eux \
 && npm install

COPY ./ ./
