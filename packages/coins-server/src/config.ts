// APP
export const PORT = process.env.PORT;

export const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN;

// DATABASE
export const MONGO_HOST = `${process.env.MONGO_HOST}`;
export const REDIS_HOST = `${process.env.REDIS_HOST}`;

// API AUTH
export const API_AUTH_KEY = process.env.API_AUTH_KEY ?? "";

// CUSTOM HEADER
export const CUSTOM_HEADER = {
  API_KEY: "x-api-key",
  CACHE_CONTROL: "x-cache-control",
};

// CACHE
export const CACHE_DISABLED = process.env.CACHE_DISABLED === "true";
export const CACHE_TTL_DEFAULT = 60 * 9;
