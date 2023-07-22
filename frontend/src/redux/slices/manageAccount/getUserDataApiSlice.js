import { apiSlice } from "../../apiSlice";
export const getUserDataApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUserData: builder.query({
      query: (token) => ({
        url: `/confirmations/?token=${token}`
      }),
      providesTags: ["GetUserData"]
    })
  })
});

export const { useGetUserDataQuery } = getUserDataApiSlice;
