require("dotenv-safe").config();

import KoaCors from "@koa/cors";
import { HTTP_STATUS_INTERNAL_SERVER_ERROR } from "coins-utils/src";
import Koa from "koa";
import bodyParser from "koa-bodyparser";
import { CLIENT_ORIGIN, PORT } from "./config";
import { Database } from "./database/mongo";
import { RedisCtrl } from "./database/redis";
import { checkCacheHeader } from "./middleware/cache";
import { setupApiRouter } from "./routes/api";
import { setupDebugRouter } from "./routes/debug";

const SetupDebugRouter = setupDebugRouter({ prefix: "/debug" });
const SetupApiRouter = setupApiRouter({ prefix: "/api" });

const server = async () => {
  console.log(`[Info]: server is starting`);

  const result = await Database.connect();
  if (result.err) process.exit(1);

  RedisCtrl.flushdb();

  const app = new Koa();

  app.use(checkCacheHeader);

  app.use(
    KoaCors({
      credentials: true,
      origin: CLIENT_ORIGIN,
      allowMethods: "GET",
    })
  );

  app.use(bodyParser());

  app.use(async (ctx, next) => {
    try {
      await next();
    } catch (err) {
      ctx.status = err.status || HTTP_STATUS_INTERNAL_SERVER_ERROR;
      ctx.app.emit("error", err, ctx);
    }
  });

  SetupDebugRouter.init(app);
  SetupApiRouter.init(app);

  app.listen(PORT, () => {
    console.log(`[Info]: server is running on port ${PORT}`);
  });
};

server();
