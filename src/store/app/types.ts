import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";

export type AppState = {
  id: number | null;
  token: string | null;
  phone: number | null;
};

// Contracts
export type BaseContract<T> = CaseReducer<AppState, PayloadAction<T>>;
