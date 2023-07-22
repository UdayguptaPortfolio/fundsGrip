import { userApiSlice } from "../../userApiSlice";

export const parentVersioningApiSlice = userApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getParentVersions: builder.query({
      query: () => ({
        url: `/parent_versions`
      }),
      providesTags: ["GetAllParentVersion"]
    }),
    createParentVersions: builder.mutation({
      query: (data) => ({
        url: `/parent_versions`,
        method: "POST",
        body: { ...data }
      }),
      invalidatesTags: ["GetAllParentVersion"]
    }),
    updateParentVersions: builder.mutation({
      query: ({ payload, id }) => ({
        url: `/parent_versions/${id}`,
        method: "PUT",
        body: { ...payload }
      }),
      invalidatesTags: ["GetAllParentVersion"]
    }),
    deleteSpecificParentVersion: builder.mutation({
      query: (id) => ({
        url: `/parent_versions/${id}`,
        method: "DELETE"
      }),
      invalidatesTags: ["GetAllParentVersion"]
    }),
    deleteBulksParentVersion: builder.mutation({
      query: (payload) => ({
        url: `/parent_versions/destroy_all`,
        method: "DELETE",
        body: { ...payload }
      }),
      invalidatesTags: ["GetAllParentVersion"]
    })
  })
});

export const {
  useGetParentVersionsQuery,
  useCreateParentVersionsMutation,
  useUpdateParentVersionsMutation,
  useDeleteSpecificParentVersionMutation,
  useDeleteBulksParentVersionMutation
} = parentVersioningApiSlice;
