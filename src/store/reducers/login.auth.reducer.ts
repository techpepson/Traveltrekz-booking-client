import { createSlice } from "@reduxjs/toolkit";
import { LoginAuthReducerTypes } from "../../interface/interface.exports";
import { LoginAuthThunk } from "../thunks/auth.thunkApi";

const initialState: LoginAuthReducerTypes = {
  loading: false,
  error: false,
  success: false,
  userEmail: "",
  userPassword: "",
};

export const loginReducer = createSlice({
  name: "login/reducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(LoginAuthThunk.pending, (state) => {
      state.loading = true;
      state.success = false;
      state.error = false;
    });
    builder.addCase(LoginAuthThunk.rejected, (state) => {
      state.loading = false;
      state.success = false;
      state.error = true;
    });
    builder.addCase(LoginAuthThunk.fulfilled, (state) => {
      state.loading = false;
      state.success = true;
      state.error = false;
    });
  },
});

export default loginReducer.reducer;
