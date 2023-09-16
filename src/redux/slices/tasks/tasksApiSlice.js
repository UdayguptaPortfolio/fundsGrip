import { userApiSlice } from "../../userApiSlice";

export const tasksApiSlice = userApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllTask: builder.query({
      query: () => ({
        url: "api/task",
        method: "GET"
      }),
      providesTags: ["GetAllTask"]
    }),
    createTask: builder.mutation({
      query: (payload) => ({
        url: "api/task/create",
        method: "POST",
        body: { ...payload }
      }),
      invalidatesTags: ["GetAllTask"]
    }),
    getTaskById: builder.mutation({
      query: (data) => ({
        url: `api/task/${data}`,
        method: "GET"
      })
    }),
    updateTaskById: builder.mutation({
      query: (payload) => ({
        url: `api/task/update/${payload?._id}`,
        method: "PATCH",
        body: { ...payload }
      }),
      invalidatesTags: ["GetAllTask"]
    }),
    deleteTaskById: builder.mutation({
      query: (data) => ({
        url: `api/task/delete/${data}`,
        method: "DELETE"
      }),
      invalidatesTags: ["GetAllTask"]
    })
  })
});

export const {
  useCreateTaskMutation,
  useGetAllTaskQuery,
  useGetTaskByIdMutation,
  useUpdateTaskByIdMutation,
  useDeleteTaskByIdMutation
} = tasksApiSlice;
