import {
  COINS_DEFAULT_ORDER_BY,
  HTTP_STATUS_BAD_REQUEST,
} from "coins-utils/src";
import Koa from "koa";
import Router from "koa-router";
import { CoinModel } from "../../database/mongo/model/Coin";
import { getCache, setCache } from "../../middleware/cache";

export const setupApiRouter = (params: { prefix: string }) => {
  const { prefix } = params;
  return {
    init: (app: Koa) => {
      const router = new Router();

      router.get("/__status", async (ctx) => {
        ctx.body = {
          status: "success",
        };
      });

      router.get(
        "/coins",
        getCache,
        async (ctx, next) => {
          try {
            // TODO: add query
            const LIMIT = 250;
            const OFFSET = 0;

            const data = await CoinModel.find()
              .sort(COINS_DEFAULT_ORDER_BY)
              .limit(LIMIT)
              .skip(OFFSET);

            ctx.body = data;
            return next();
          } catch (error) {
            console.log(error);
            ctx.response.status = HTTP_STATUS_BAD_REQUEST;
            return;
          }
        },
        setCache
      );

      router.allowedMethods();
      router.prefix(prefix);

      app.use(router.routes());
    },
  };
};
