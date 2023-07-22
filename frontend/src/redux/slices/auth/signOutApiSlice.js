import { apiSlice } from "../../apiSlice";

export const signOutApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signOutUser: builder.mutation({
      query: (credentials) => ({
        url: "",
        method: "DELETE",
        body: { ...credentials }
      })
    })
  })
});

export const { useSignOutUserMutation } = signOutApiSlice;
