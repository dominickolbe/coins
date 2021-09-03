import { ICoin } from "coins-models/types";
import mongoose from "mongoose";

const CoinScheme = new mongoose.Schema(
  {
    coinId: {
      type: String,
      required: true,
      unique: true,
    },
    symbol: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: null,
    },
    market_cap_rank: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    high_24h: {
      type: Number,
      default: null,
    },
    low_24h: {
      type: Number,
      default: null,
    },
    ath: {
      type: Number,
      default: null,
    },
    ath_date: {
      type: String,
      default: null,
    },
    atl: {
      type: Number,
      default: null,
    },
    atl_date: {
      type: String,
      default: null,
    },
    price_change_24h: {
      type: Number,
      default: null,
    },
    price_change_percentage: {
      type: {
        _14d: {
          type: Number,
          default: null,
        },
        _1h: {
          type: Number,
          default: null,
        },
        _1y: {
          type: Number,
          default: null,
        },
        _200d: {
          type: Number,
          default: null,
        },
        _24h: {
          type: Number,
          default: null,
        },
        _30d: {
          type: Number,
          default: null,
        },
        _7d: {
          type: Number,
          default: null,
        },
      },
      required: true,
    },
    updatedAt: {
      type: String,
      default: () => new Date().toISOString(),
    },
    createdAt: {
      type: String,
      default: () => new Date().toISOString(),
    },
  },
  { versionKey: false }
);

export const CoinModel = mongoose.model<ICoin>("Coin", CoinScheme);
