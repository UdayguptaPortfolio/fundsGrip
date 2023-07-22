import * as api from "./apiHelper";
import * as userApi from "./userApiHelper";

export const refreshToken = async (payload) => {
  const refreshTokenResponse = await api.post(`/refresh_token`, payload);
  return refreshTokenResponse;
};

export const verifiedEmail = async (params) => {
  const postTextResponse = await api.get(`/?token=${params}`);
  return postTextResponse;
};

export const getUserData = async (params) => {
  const getUserDataResponse = await api.get(`/confirmations/?token=${params}`);
  return getUserDataResponse;
};

export const getParentVersions = async () => {
  const getParentVersionsResponse = await userApi.get(`/parent_versions`);
  return getParentVersionsResponse;
};

export const getAllCountries = async () => {
  const getAllCountriesResponse = await userApi.get(`/country`);
  return getAllCountriesResponse;
};
