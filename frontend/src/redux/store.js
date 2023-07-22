import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createRootReducer } from "./rootReducers";
import { apiSlice } from "./apiSlice";
import { userApiSlice } from "./userApiSlice";

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false
})
  .concat(apiSlice.middleware)
  .concat(userApiSlice.middleware);

export const store = configureStore({
  reducer: createRootReducer(),
  middleware: customizedMiddleware
});

export const { dispatch, getState } = store;
