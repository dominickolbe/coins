import * as rt from "runtypes";

export const RtCoingeckoCoin = rt.Record({
  id: rt.String,
  symbol: rt.String,
  name: rt.String,
  image: rt.String.Or(rt.Null),
  market_cap_rank: rt.Number.Or(rt.Null),
  current_price: rt.Number,
  high_24h: rt.Number.Or(rt.Null),
  low_24h: rt.Number.Or(rt.Null),
  ath: rt.Number.Or(rt.Null),
  ath_date: rt.String.Or(rt.Null),
  atl: rt.Number.Or(rt.Null),
  atl_date: rt.String.Or(rt.Null),
  price_change_24h: rt.Number.Or(rt.Null),
  price_change_percentage_24h: rt.Number.Or(rt.Null),
  price_change_percentage_14d_in_currency: rt.Number.Or(rt.Null),
  price_change_percentage_1h_in_currency: rt.Number.Or(rt.Null),
  price_change_percentage_1y_in_currency: rt.Number.Or(rt.Null),
  price_change_percentage_200d_in_currency: rt.Number.Or(rt.Null),
  price_change_percentage_24h_in_currency: rt.Number.Or(rt.Null),
  price_change_percentage_30d_in_currency: rt.Number.Or(rt.Null),
  price_change_percentage_7d_in_currency: rt.Number.Or(rt.Null),
  last_updated: rt.String,
});

export const RtCoingeckoCoinArr = rt.Array(RtCoingeckoCoin);

// TODO
export const RtCoingeckoCoinHistory = rt.Record({
  prices: rt.Array(rt.Array(rt.Number.Or(rt.Null))),
});
