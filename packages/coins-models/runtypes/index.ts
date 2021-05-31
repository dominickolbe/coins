import * as rt from "runtypes";

// COIN

export const RtCoin = rt.Record({
  coinId: rt.String,
  symbol: rt.String,
  name: rt.String,
  image: rt.String.Or(rt.Null),
  market_cap_rank: rt.Number,
  price: rt.Number,
  high_24h: rt.Number.Or(rt.Null),
  low_24h: rt.Number.Or(rt.Null),
  ath: rt.Number.Or(rt.Null),
  ath_date: rt.String.Or(rt.Null),
  atl: rt.Number.Or(rt.Null),
  atl_date: rt.String.Or(rt.Null),
  price_change_24h: rt.Number.Or(rt.Null),
  price_change_percentage: rt.Record({
    _1h: rt.Number.Or(rt.Null),
    _24h: rt.Number.Or(rt.Null),
    _7d: rt.Number.Or(rt.Null),
    _14d: rt.Number.Or(rt.Null),
    _30d: rt.Number.Or(rt.Null),
    _200d: rt.Number.Or(rt.Null),
    _1y: rt.Number.Or(rt.Null),
  }),
  updatedAt: rt.String,
  createdAt: rt.String,
});

export const RtCoinArr = rt.Array(RtCoin);

export const RtCoinHistory = rt.Record({
  coinId: rt.String,
  data: rt.Array(rt.Array(rt.Number)),
  createdAt: rt.InstanceOf(Date).Or(rt.String),
  updatedAt: rt.InstanceOf(Date).Or(rt.String),
});
