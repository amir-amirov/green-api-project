import * as types from "./types";

export const removeAppState = (state: types.AppState) => {
  return {
    ...state,
    module: null,
    courseId: null,
  };
};
export const setAppState: types.BaseContract<types.AppState | null> = (
  state,
  action
) => {
  return {
    ...state,
    ...action.payload,
  };
};
