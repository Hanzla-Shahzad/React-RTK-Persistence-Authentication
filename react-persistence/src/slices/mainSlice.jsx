import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
  name: "persist",
  initialState: {
    user: null,
    isLogin: false,
    token: null,
  },
  reducers: {
    login: (state, action) => {
      const { inpData } = action.payload;

      const fakeToken = btoa(`${inpData}:${Date.now()}`);

      state.user = inpData;
      state.token = fakeToken;
      state.isLogin = true;
    },
    logout: (state) => {
      state.isLogin = false;
      state.token = "";
    },
  },
});
export const { login, logout } = mainSlice.actions;
export default mainSlice.reducer;
