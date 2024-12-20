//slice definition for the account details addition

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HostFormData } from "../../interface/account-details";
import { HostDetailsAddThunk } from "../thunks/account-details-verify.reducer";

const initialState: HostFormData = {
  userType: "host",
  hostBirthDay: "",
  hostPhoneNumber: "",
  hostCountry: "",
  hostProfilePicture: "",
  hostBusinessName: "",
  hostBusinessAddress: "",
  hostCompanyRegistrationNumber: "",
  hostTaxInformation: "",
  hostPreferredPayoutMethod: "",
  hostFrontIdCard: null,
  hostBackIdCard: null,
  hostGovernmentIdType: "",
  hostGovernmentIdNumber: "",
  hostHostingExperience: 0,
  userRole: "",
  loading: false,
  success: false,
  error: false,
};

export const hostAccountDetailsReducer = createSlice({
  name: "details-update",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(HostDetailsAddThunk.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.success = false;
      })
      .addCase(HostDetailsAddThunk.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
        state.error = false;
      })
      .addCase(HostDetailsAddThunk.rejected, (state) => {
        state.error = true;
        state.success = false;
        state.loading = false;
      });
  },
});

export default hostAccountDetailsReducer.reducer;
