import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AuthState } from "../types/types";

const initialState = {
  isAuthenticated: true,
  token: "",
};
//this slice can be used to authenticate a user.
const authSlice = createSlice({
  name: "authorize",
  initialState,
  reducers: {
    setAuthDetails: (state, action: PayloadAction<AuthState>) => {
      state = { ...state, ...action.payload };
      return state;
    },
    logout: (state) => {
      state = { ...initialState };
      return state;
    },
  },
});

export const { setAuthDetails, logout } = authSlice.actions;
export default authSlice.reducer;
