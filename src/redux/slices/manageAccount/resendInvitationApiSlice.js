import { userApiSlice } from "../../userApiSlice";

export const resendinvitationApiSlice = userApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    resendInvitation: builder.mutation({
      query: (credentials) => ({
        url: "/resend_invitation",
        method: "POST",
        body: { ...credentials }
      })
    })
  })
});

export const { useResendInvitationMutation } = resendinvitationApiSlice;
