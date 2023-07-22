import { userApiSlice } from "../../userApiSlice";

export const resetPasswordApiSlice = userApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    resetPassword: builder.mutation({
      query: (credentials) => ({
        url: "/reset_password",
        method: "PATCH",
        body: { ...credentials }
      })
    })
  })
});

export const { useResetPasswordMutation } = resetPasswordApiSlice;
