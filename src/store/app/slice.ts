import * as types from "./types";
import { createSlice } from "@reduxjs/toolkit";

import * as reducers from "./reducers";
// import { extraReducers } from "./thunk";

const initialState: types.AppState = {
  //   isLoading: false,
  id: null,
  token: null,
  phone: null,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers,
  // extraReducers,
});

export const appActions = appSlice.actions;
export default appSlice.reducer;
