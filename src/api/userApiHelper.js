import axios from "axios/index";
import _ from "lodash";

const BASE_API_URL = `${process.env.REACT_APP_USER_API_URL}`;

const getHeaders = (customheaders) => {
  const accessToken = localStorage.getItem("token");
  const cognitoToken = localStorage.getItem("cognito_id_token");
  const defaultHeaders = {
    Accept: "application/json",
    SERVICE_AUTHORIZATION: `Bearer ${accessToken}`,
    AUTHORIZATION: `${cognitoToken}`,
    "Content-Type": "application/json"
  };
  const headers = {
    ...defaultHeaders,
    ...customheaders
  };
  return headers;
};

const apiService = axios.create({});

const url = (path, params) => {
  const sections = path.split(":");
  const sectionsWithParams = sections.map((section) =>
    _.startsWith(section, "/") ? section : params[section]
  );
  const pathWithParams = sectionsWithParams.join("");
  return BASE_API_URL + pathWithParams;
};

export const get = (path, params = {}) =>
  apiService.get(url(path, params), { params, headers: getHeaders() });

export const post = (path, params = {}) =>
  apiService.post(url(path, params), params, { headers: getHeaders() });

export const put = (path, params = {}) =>
  apiService.put(url(path, params), params, {
    headers: getHeaders()
  });

export const deleteRequest = (path, params = {}) =>
  apiService.delete(url(path, params), { params, headers: getHeaders() });
