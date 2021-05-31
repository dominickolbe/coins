import { Result } from "option-t/cjs/PlainResult";
import { ApiClient } from "../services/ApiClient";

export const api = {
  status: async (): Promise<Result<boolean, null>> => {
    // TODO
    const result = await ApiClient.status.get();
    return result;
  },
};
