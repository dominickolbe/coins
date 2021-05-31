import axios from "axios";
import { RtCoinArr } from "coins-models/runtypes";
import { HTTP_STATUS_OK } from "coins-utils/src";
import { createErr, createOk } from "option-t/cjs/PlainResult";
import { API_BASE } from "../../config";

export const ApiClient = {
  status: {
    get: async () => {
      try {
        const response = await axios.get(`${API_BASE}/api/__status`);
        // TODO: check response
        if (response.status === HTTP_STATUS_OK) return createOk(true);
        return createErr(null);
      } catch {
        return createErr(null);
      }
    },
  },
  coins: {
    get: async (limit: number = 250, offset: number = 0) => {
      try {
        const response = await axios.get(
          `${API_BASE}/api/coins?limit=${limit}&offset=${offset}`
        );
        const result = RtCoinArr.check(response.data);
        return createOk(result);
      } catch (error) {
        console.error(error);
        return createErr(error);
      }
    },
  },
};
