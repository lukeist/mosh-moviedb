import { createSlice } from "@reduxjs/toolkit";
import fakeUserDb from "../components/fakeUserDb";

const slice = createSlice({
  name: "login",
  initialState: fakeUserDb,
  reducers: {
    accountLogged: (login, action) => {
      login.account.username === action.payload.account.username
        ? (login.errors.username = false)
        : (login.errors.username = true);
      login.account.password === action.payload.account.password
        ? (login.errors.password = false)
        : (login.errors.password = true);
    },
  },
});

export const { accountLogged } = slice.actions;
export default slice.reducer;
