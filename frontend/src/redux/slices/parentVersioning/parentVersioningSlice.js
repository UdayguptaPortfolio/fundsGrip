import { createSlice } from "@reduxjs/toolkit";

const getParentVersioning = createSlice({
  name: "getParentVersion",
  initialState: { parentVersion: {} },
  reducers: {
    setParentVersions: (state, action) => {
      const { payload } = action;
      state.parentVersion = { ...payload };
    }
  }
});

export const { setParentVersions } = getParentVersioning.actions;

export const {
  reducer: getParentVersionReducer,
  name: getParentVersionReducerSliceKey,
  actions: getParentVersioningAction
} = getParentVersioning;

export default getParentVersioning.reducer;
