import { createSlice } from "@reduxjs/toolkit";

const getPatronSlice = createSlice({
  name: "getPatronState",
  initialState: { patronsData: {} },
  reducers: {
    setPatronsList: (state, action) => {
      const { payload } = action;
      state.patronsData = { ...payload };
    }
  }
});

export const { setPatronsList } = getPatronSlice.actions;

export const {
  reducer: getPatronReducer,
  name: getPatronReducerSliceKey,
  actions: getPatronSliceAction
} = getPatronSlice;

export default getPatronSlice.reducer;
