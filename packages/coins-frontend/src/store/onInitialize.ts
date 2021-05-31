import { ERROR_MSG } from "coins-utils/src";
import { OnInitialize } from "overmind";

export const onInitialize: OnInitialize = async (
  { state, actions, effects },
  instance
) => {
  const result = await effects.api.status();
  if (!result.ok) {
    state.app.error = ERROR_MSG.API_ERROR;
  } else {
    actions.data.coins.get();
  }

  state.app.isInitialized = true;
};
