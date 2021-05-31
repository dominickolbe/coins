import { Coin, CoingeckoCoinArr } from "coins-models/types";

export const transformCoingeckoMarketBody = (
  data: CoingeckoCoinArr
): Coin[] => {
  return data.map((coin) => ({
    coinId: coin.id,
    symbol: coin.symbol,
    name: coin.name,
    image: coin.image,
    market_cap_rank: coin.market_cap_rank ?? 9999,
    price: coin.current_price,
    high_24h: coin.high_24h,
    low_24h: coin.low_24h,
    ath: coin.ath,
    ath_date: coin.ath_date,
    atl: coin.atl,
    atl_date: coin.atl_date,
    price_change_24h: coin.price_change_24h,
    price_change_percentage: {
      _1h: coin.price_change_percentage_1h_in_currency,
      _24h: coin.price_change_percentage_24h_in_currency,
      _7d: coin.price_change_percentage_7d_in_currency,
      _14d: coin.price_change_percentage_14d_in_currency,
      _30d: coin.price_change_percentage_30d_in_currency,
      _200d: coin.price_change_percentage_200d_in_currency,
      _1y: coin.price_change_percentage_1y_in_currency,
    },
    updatedAt: coin.last_updated,
    createdAt: "",
  }));
};
