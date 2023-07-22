import { userApiSlice } from "../../userApiSlice";

export const countryApiSlice = userApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getParentVersions: builder.query({
      query: () => ({
        url: `/country`
      }),
      providesTags: ["GetAllCountries"]
    })
  })
});

export const { useGetParentVersionsQuery } = countryApiSlice;
