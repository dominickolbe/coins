import { createErr, createOk } from "option-t/cjs/PlainResult";
import { CoinModel } from "../database/mongo/model/Coin";
import { CoingeckoApiClient } from "../services/Coingecko";
import { transformCoingeckoMarketBody } from "./transform";

export const importer = {
  coins: async (limit: number, offset: number) => {
    const result = await CoingeckoApiClient.getMarket(limit, offset);
    if (!result.ok) return createErr(result.err);

    const coins = transformCoingeckoMarketBody(result.val);

    for (const coin of coins) {
      const { createdAt, ...rest } = coin;
      try {
        await CoinModel.findOneAndUpdate(
          { coinId: coin.coinId },
          {
            $set: {
              ...rest,
            },
          },
          { setDefaultsOnInsert: true, upsert: true, new: true }
        );
      } catch (error) {
        console.log(`[Error]: import of '${coin.coinId}' to database failed`);
        console.log(error);
      }
    }

    return createOk(coins);
  },
};
