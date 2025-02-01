import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "./baseQuery";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery(),
  refetchOnReconnect: true,
  // refetchOnFocus: true,
  tagTypes: ["messages"],
  endpoints: () => ({}),
});
