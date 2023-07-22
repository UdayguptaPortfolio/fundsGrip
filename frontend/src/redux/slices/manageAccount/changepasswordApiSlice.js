import { apiSlice } from "../../apiSlice";

export const changepasswordApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    changePassword: builder.mutation({
      query: (credentials) => ({
        url: "/passwords",
        method: "PATCH",
        body: { ...credentials }
      })
    })
  })
});

export const { useChangePasswordMutation } = changepasswordApiSlice;
