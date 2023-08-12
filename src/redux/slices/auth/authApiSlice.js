import { apiSlice } from "../../apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    masterLogin: builder.mutation({
      query: (credentials) => ({
        url: "",
        method: "POST",
        body: { ...credentials }
      })
    }),
    onVerify: builder.query({
      query: (credentials) => ({
        url: `/?token=${credentials}`,
        method: "GET"
      }),
      providesTags: ["VerifyEmail"]
    })
  })
});

export const { useMasterLoginMutation, useOnVerifyQuery } = authApiSlice;
