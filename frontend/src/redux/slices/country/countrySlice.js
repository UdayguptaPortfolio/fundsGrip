import { createSlice } from "@reduxjs/toolkit";

const getAllCountries = createSlice({
  name: "getAllCountry",
  initialState: { country: {} },
  reducers: {
    setCountries: (state, action) => {
      const { payload } = action;
      state.country = { ...payload };
    }
  }
});

export const { setCountries } = getAllCountries.actions;

export const {
  reducer: getCountryReducer,
  name: getCountryReducerSliceKey,
  actions: getCountrySliceAction
} = getAllCountries;

export default getAllCountries.reducer;
