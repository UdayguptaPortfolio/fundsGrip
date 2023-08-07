import { apiSlice } from "../../apiSlice";

export const verificationApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    userVerification: builder.mutation({
      query: (credentials) => ({
        url: "/confirmations",
        method: "POST",
        body: { ...credentials }
      })
    })
  })
});

export const { useUserVerificationMutation } = verificationApiSlice;
