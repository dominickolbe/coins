import axios from "axios";
import {
  RtCoingeckoCoinArr,
  RtCoingeckoCoinHistory,
} from "coins-models/runtypes/Coingecko";
import { createErr, createOk } from "option-t/cjs/PlainResult";
import {
  COINGECKO_API_BASE,
  DEFAULT_CURRENCY,
  DEFAULT_REQUEST_TIMEOUT,
} from "./config";

export const CoingeckoApiClient = {
  getMarket: async (count: number, page: number) => {
    try {
      const response = await axios.get(
        `${COINGECKO_API_BASE}/coins/markets?vs_currency=${DEFAULT_CURRENCY}&order=market_cap_desc&per_page=${count}&page=${page}&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C14d%2C30d%2C200d%2C1y`,
        {
          timeout: DEFAULT_REQUEST_TIMEOUT,
        }
      );
      const result = RtCoingeckoCoinArr.check(response.data);
      return createOk(result);
    } catch (error) {
      console.log("[Error]: CoingeckoApiClient.getMarket failed");
      console.log(error);
      return createErr(error);
    }
  },
  getMarketChart: async (id: string) => {
    try {
      const response = await axios.get(
        `${COINGECKO_API_BASE}/coins/${id}/market_chart?vs_currency=${DEFAULT_CURRENCY}&days=30&interval=hourly`,
        {
          timeout: DEFAULT_REQUEST_TIMEOUT,
        }
      );
      const result = RtCoingeckoCoinHistory.check(response.data);
      return createOk(result);
    } catch (error) {
      console.log("[Error]: CoingeckoApiClient.getMarketChart failed");
      console.log(error);
      return createErr(error);
    }
  },
};
