import { Coin } from "coins-models/types";

export const filterCoinsBy = (coins: Coin[], query: string) => {
  if (!query) return coins;
  const fCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(query.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(query.toLowerCase())
  );
  return fCoins;
};

export const findCoinById = (coins: Coin[], id: string) => {
  const coin = coins.find((i) => i.coinId === id);
  if (!coin) throw new Error(`coin with id: ${id} not found`);
  return coin;
};
