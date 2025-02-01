import { useAppDispatch, useAppSelector as useSelector } from "../index";
import { appActions } from "./slice";
import * as types from "./types";

export const useApp = () => {
  const dispatch = useAppDispatch();

  const setApp = (app: types.AppState | null) => {
    dispatch(appActions.setAppState(app));
  };

  const removeApp = () => dispatch(appActions.removeAppState());

  return {
    app: useSelector(({ app }) => app),
    removeApp,
    setApp,
  };
};
