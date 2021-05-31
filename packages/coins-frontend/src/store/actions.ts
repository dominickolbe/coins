import { Action, AsyncAction } from "overmind";
import { APP_NAME } from "../config";
import { ApiClient } from "../services/ApiClient";

export const app: {
  setTitle: Action<string | undefined, void>;
} = {
  setTitle: (_, payload) => {
    document.title = payload ? `${APP_NAME} / ${payload}` : APP_NAME;
  },
};

export const data: {
  coins: {
    get: AsyncAction;
  };
} = {
  coins: {
    get: async ({ state, actions, effects }) => {
      const result = await ApiClient.coins.get();
      if (!result.ok) {
        // TODO display proper error message -> alert
        state.coins.isLoading = false;
      } else {
        state.coins = {
          data: result.val,
          isLoading: false,
        };
      }
    },
  },
};
