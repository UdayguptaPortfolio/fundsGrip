import { apiSlice } from "../../apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    portalLogin: builder.mutation({
      query: (credentials) => ({
        url: "api/auth/login",
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

export const { usePortalLoginMutation, useOnVerifyQuery } = authApiSlice;
