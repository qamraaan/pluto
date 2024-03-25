import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const apiUrl = import.meta.env.VITE_BASE_URL;
export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: apiUrl,
    prepareHeaders: (headers) => {
      const token = "token";
      if (token) {
        headers.set("Authorization", `${token}`);
      }
      return headers;
    },
  }),

  refetchOnReconnect: true,
  endpoints: () => ({}),
});
