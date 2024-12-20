import { createSlice } from "@reduxjs/toolkit";
import { GuestDetailsAddThunk } from "../thunks/account-details-verify.reducer";
import { GuestFormData } from "../../interface/account-details";

const initialState: GuestFormData = {
  userType: "guest",
  guestBirthDay: "",
  guestCountry: "",
  guestProfilePicture: "",
  guestFrontIdCard: "",
  guestBackIdCard: "",
  guestGovernmentIdType: "",
  guestGovernmentIdNumber: "",
  userRole: "admin-guest",
  success: false,
  loading: false,
  error: false,
};

export const guestAccountSlice = createSlice({
  name: "guest/details/add",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GuestDetailsAddThunk.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.success = false;
      })
      .addCase(GuestDetailsAddThunk.fulfilled, (state) => {
        state.loading = false;
        state.error = false;
        state.success = true;
      })
      .addCase(GuestDetailsAddThunk.rejected, (state) => {
        state.error = true;
        state.loading = false;
        state.success = false;
      });
  },
});

export default guestAccountSlice.reducer;
