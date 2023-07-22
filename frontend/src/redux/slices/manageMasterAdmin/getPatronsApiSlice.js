import { userApiSlice } from "../../userApiSlice";

export const getPatronsApiSlice = userApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPatrons: builder.query({
      query: ({ page, rowsPerPage }) => ({
        url: `/patrons/?page_no=${page}&items_per_page=${rowsPerPage}`
      }),
      providesTags: ["GetAllPatrons"]
    })
  })
});

export const { useGetPatronsQuery } = getPatronsApiSlice;
