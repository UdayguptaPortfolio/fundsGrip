import { userApiSlice } from "../../userApiSlice";

export const masterAdminApiSlice = userApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    inviteMasterAdmin: builder.mutation({
      query: (credentials) => ({
        url: "/invite",
        method: "POST",
        body: { ...credentials }
      }),
      invalidatesTags: ["GetAllPatrons"]
    })
  })
});

export const { useInviteMasterAdminMutation } = masterAdminApiSlice;
