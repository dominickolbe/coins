import { HTTP_STATUS_UNAUTHORIZED } from "coins-utils/src";
import Koa from "koa";
import { API_AUTH_KEY, CUSTOM_HEADER } from "../config";

export const hasAuthHeader = async (ctx: Koa.Context, next: Koa.Next) => {
  const value = ctx.request.headers[CUSTOM_HEADER.API_KEY];

  if (value !== API_AUTH_KEY) {
    ctx.response.status = HTTP_STATUS_UNAUTHORIZED;
    return;
  }

  return next();
};
