import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { toast } from "react-toastify";

const BASE_API_URL = `${process.env.REACT_APP_USER_API_URL}`;

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_API_URL,
  prepareHeaders: (headers) => {
    const accessToken = localStorage.getItem("token");
    const cognitoToken = localStorage.getItem("cognito_id_token");
    if (accessToken) {
      headers.set("SERVICE_AUTHORIZATION", `Bearer ${accessToken}`);
      headers.set("AUTHORIZATION", `${cognitoToken}`);
      headers.set("Content-Type", "application/json");
    } else {
      headers.delete("Authorization");
    }
    return headers;
  }
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  if (result?.data?.status === 401 || result?.error?.status === 401) {
    localStorage.clear();
    // toast.error("You are logged in on another device!.We are redirecting to login....");
    result?.error?.data?.message
      ? toast.error(result?.error?.data?.message)
      : toast.error("Authentication Error!.");
    setTimeout(() => {
      window.location.href = "/login";
    }, [4000]);
  } else if (result?.data?.status === 403 || result?.error?.status === 403) {
    toast.error("Authentication Error!.");
    localStorage.clear();
    setTimeout(() => {
      window.location.href = "/login";
    }, [1000]);
  }

  return result;
};

export const userApiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  tagTypes: [
    "CreateMasterAdmin",
    "GetAllPatrons",
    "GetUserData",
    "GetAllParentVersion",
    "GetAllCountries"
  ],
  endpoints: () => ({})
});
