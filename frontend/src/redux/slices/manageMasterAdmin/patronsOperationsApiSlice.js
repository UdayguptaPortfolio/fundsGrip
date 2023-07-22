import { userApiSlice } from "../../userApiSlice";

export const updatePatronApiSlice = userApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    updatePatrons: builder.mutation({
      query: ({ payload, id }) => ({
        url: `/patrons/${id}`,
        method: "PUT",
        body: { ...payload }
      }),
      invalidatesTags: ["GetAllPatrons"]
    }),
    deleteSpecificPatron: builder.mutation({
      query: (id) => ({
        url: `/patrons/${id}`,
        method: "DELETE",
        body: { id }
      }),
      invalidatesTags: ["GetAllPatrons"]
    }),
    deleteBulkPatron: builder.mutation({
      query: (data) => ({
        url: `/patrons/destroy_all`,
        method: "DELETE",
        body: data
      }),
      invalidatesTags: ["GetAllPatrons"]
    }),
    blockPatron: builder.mutation({
      query: (payload) => ({
        url: `/patrons`,
        method: "PATCH",
        body: { ...payload }
      }),
      invalidatesTags: ["GetAllPatrons"]
    }),
    resetPasswordByAdmin: builder.mutation({
      query: (payload) => ({
        url: `/patrons/reset_password`,
        method: "POST",
        body: { ...payload }
      })
    })
  })
});

export const {
  useUpdatePatronsMutation,
  useDeleteSpecificPatronMutation,
  useDeleteBulkPatronMutation,
  useBlockPatronMutation,
  useResetPasswordByAdminMutation
} = updatePatronApiSlice;
