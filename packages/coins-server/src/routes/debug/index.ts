import Koa from "koa";
import Router from "koa-router";
import { unwrapOr } from "option-t/cjs/PlainResult";
import { RedisCtrl } from "../../database/redis";
import { hasAuthHeader } from "../../middleware/auth";
import { getProcessUptime } from "../../utils";

export const setupDebugRouter = (params: { prefix: string }) => {
  const { prefix } = params;
  return {
    init: (app: Koa) => {
      const router = new Router();

      router.get("/__status", async (ctx) => {
        ctx.body = {
          status: "success",
          uptime: getProcessUptime(),
        };
      });

      router.get("/__headers", async (ctx) => {
        ctx.body = ctx.request.headers;
      });

      router.get("/__cache", hasAuthHeader, async (ctx) => {
        const query = typeof ctx.query.q === "string" ? ctx.query.q : "*";
        const response = await RedisCtrl.keys(query);
        ctx.body = unwrapOr(response, []);
      });

      router.allowedMethods();
      router.prefix(prefix);

      app.use(router.routes());
    },
  };
};
