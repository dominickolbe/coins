![GitHub Workflow Status](https://img.shields.io/github/workflow/status/dominickolbe/coins/Test?label=tests)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/dominickolbe/coins/Release?label=release)
![GitHub package.json version](https://img.shields.io/github/package-json/v/dominickolbe/coins)

<p align="center">
  <p align="center">:money_with_wings: :money_with_wings: :money_with_wings:</p>
  <h3 align="center">coins</h3>
  <p align="center">simple and easy to track your crypto.<p>
</p>

![Preview](https://github.com/dominickolbe/coins/blob/master/preview.png?raw=true "coins.domnc.app")

## Preview

[see live version here](https://coins.domnc.app)

The current production build is served by [vercel.com](https://vercel.com)

```http
https://coins.domnc.app
```

## Getting Started

### Prerequisites

I build this project with the following setup:

- macOS Monterey v12.0 Beta
- node v16.7.0
- yarn v1.22.11
- npm v7.20.3
- Docker v20.10.7

### Development

1. create your `.env` file based on the `.env.example`

2. install all necessary dependencies

```bash
yarn install
```

3. start frontend

```bash
yarn start:dev:frontend
```

4. start server

```bash
yarn start:dev:server
```

## Production

1. create your `.env` file based on the `.env.example`

2. build docker application

```bash
docker-compose --env-file packages/coins-server/.env build
```

3. start docker application

```bash
docker-compose --env-file packages/coins-server/.env up
```

4. stop docker application

```bash
docker-compose --env-file packages/coins-server/.env down
```

---

## Commands

Update application

```bash
sh scripts/release-task
```

Import coins data from external API

```bash
sh scripts/run-import-coins.sh
```

---

## Job tasks

Import coins data from external API

```bash
NODE_ENV=production yarn workspace coins-server ts-node --transpile-only ./src/tasks/run-import-coins.ts *OPTIONAL_PAGE*
```

crontab example

```bash
*/10 * * * * cd /coins && bash scripts/run-import-coins.sh >/dev/null 2>&1
```

---

## LICENSE

Copyright © 2021 [Dominic Kolbe](https://dominickolbe.dk) :de:
