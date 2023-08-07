import { apiSlice } from "../../apiSlice";

export const searchDataApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    searchData: builder.mutation({
      query: (credentials) => ({
        url: `/patrons/search`,
        method: "POST",
        body: { ...credentials }
      })
    })
  })
});

export const { useSearchDataMutation } = searchDataApiSlice;
