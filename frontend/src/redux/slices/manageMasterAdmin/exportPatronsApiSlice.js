import { userApiSlice } from "../../userApiSlice";

export const exportPatronsApiSlice = userApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    exportPatrons: builder.mutation({
      query: (credentials) => ({
        url: "/patrons/export",
        method: "POST",
        body: { ...credentials }
      })
    })
  })
});

export const { useExportPatronsMutation } = exportPatronsApiSlice;
