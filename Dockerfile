FROM node:16-alpine

WORKDIR /usr/src/app

COPY package.json package.json
COPY packages/coins-models/package.json packages/coins-models/package.json
COPY packages/coins-server/package.json packages/coins-server/package.json
COPY packages/coins-utils/package.json packages/coins-utils/package.json

COPY yarn.lock yarn.lock

RUN yarn install --frozen-lockfile

COPY packages packages

CMD ["yarn", "server:start"]