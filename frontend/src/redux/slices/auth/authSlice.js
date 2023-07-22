import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authState",
  initialState: { userData: {} },
  reducers: {
    setMasterUserData: (state, action) => {
      const { payload } = action;
      state.userData = { ...payload };
    }
  }
});

export const { setMasterUserData } = authSlice.actions;

export const {
  reducer: authReducer,
  name: masterUserSliceKey,
  actions: masterUserSliceAction
} = authSlice;

export default authSlice.reducer;
