import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalUsers: 0,
};
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setTotalUsers: (state, action: PayloadAction<{ totalUsers: number }>) => {
      state = { ...state, ...action.payload };
      return state;
    },
  },
});

export const { setTotalUsers } = usersSlice.actions;
export default usersSlice.reducer;
