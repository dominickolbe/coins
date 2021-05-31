import { HTTP_STATUS_OK } from "coins-utils/src";
import Koa from "koa";
import { CACHE_DISABLED, CUSTOM_HEADER } from "../config";
import { CACHE_TTL_DEFAULT } from "../config";
import { RedisCtrl } from "../database/redis";

export const checkCacheHeader = (ctx: Koa.Context, next: Koa.Next) => {
  const value = ctx.request.headers[CUSTOM_HEADER.CACHE_CONTROL];
  switch (value) {
    case "no-cache":
      ctx.cache = false;
      break;
    default:
      ctx.cache = true;
      break;
  }
  return next();
};

export const getCache = async (ctx: Koa.Context, next: Koa.Next) => {
  if (!ctx.cache || CACHE_DISABLED) return next();
  const response = await RedisCtrl.get(ctx.request.url);
  if (response.ok) {
    ctx.body = JSON.parse(response.val);
    return;
  }
  return next();
};

export const setCache = async (ctx: Koa.Context, next: Koa.Next) => {
  if (!ctx.cache || CACHE_DISABLED) return next();
  if (ctx.response.status === HTTP_STATUS_OK) {
    RedisCtrl.setWithEx(
      ctx.request.url,
      JSON.stringify(ctx.body),
      CACHE_TTL_DEFAULT
    );
  }
  return next();
};
