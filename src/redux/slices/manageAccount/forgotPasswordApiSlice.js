import { apiSlice } from "../../apiSlice";

export const forgotPasswordApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    forgotPassword: builder.mutation({
      query: (credentials) => ({
        url: "/passwords",
        method: "POST",
        body: { ...credentials }
      })
    })
  })
});

export const { useForgotPasswordMutation } = forgotPasswordApiSlice;
