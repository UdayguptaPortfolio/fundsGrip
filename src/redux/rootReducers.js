import { combineReducers } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";
import {
  authReducer,
  getPatronReducer,
  getParentVersionReducer,
  getCountryReducer
} from "./slices/index";
import { userApiSlice } from "./userApiSlice";

const createRootReducer = (injectedReducers = {}) =>
  combineReducers({
    ...injectedReducers,
    authState: authReducer,
    getPatronState: getPatronReducer,
    getParentVersion: getParentVersionReducer,
    getAllCountry: getCountryReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    [userApiSlice.reducerPath]: userApiSlice.reducer
  });

export { createRootReducer };
