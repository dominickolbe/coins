import { Coin } from "coins-models/types";

export type StateApp = {
  isInitialized: boolean;
  isLoading: boolean;
  error: string | null;
};

export type StateData = {
  isLoading: boolean;
  data: Coin[];
};

export type State = {
  app: StateApp;
  coins: StateData;
};

export const state: State = {
  app: {
    isInitialized: false,
    isLoading: false,
    error: null,
  },
  coins: {
    isLoading: true,
    data: [],
  },
};
