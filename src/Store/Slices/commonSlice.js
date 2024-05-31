import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedIn: false
};
export const commonSlice = createSlice({
  name: "Common",
  initialState,
  reducers: {
    loggedInStatusChange: (state, action) => {
      state.loggedIn = action.payload;
    },
    resetCommonStates: () => initialState,
  },
});
export const {
  loggedInStatusChange
} = commonSlice.actions;
export default commonSlice.reducer;
