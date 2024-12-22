//reducer function to fetch the host pending properties

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  PendingPropertiesTypes,
  PendingPropPayload,
} from "../../interface/properties.interface";
import { FetchHostPendingPropertyThunk } from "../thunks/properties.thunks";

const initialState: PendingPropPayload = {
  pendingProperties: [],
  approvedProperties: [],
  loading: false,
  success: false,
  error: false,
};

export const pendingPropertiesFetch = createSlice({
  name: "host/pending-properties/fetch",
  initialState,
  reducers: {
    fetchPendingProps: (
      state,
      action: PayloadAction<PendingPropertiesTypes[]>
    ) => {
      state.pendingProperties = action.payload;
    },
    fetchApprovedProps: (
      state,
      action: PayloadAction<PendingPropertiesTypes[]>
    ) => {
      state.approvedProperties = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(FetchHostPendingPropertyThunk.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = false;
      })
      .addCase(FetchHostPendingPropertyThunk.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
        state.error = false;
      })
      .addCase(FetchHostPendingPropertyThunk.rejected, (state) => {
        state.error = true;
        state.loading = false;
        state.success = false;
      });
  },
});

export const { fetchPendingProps, fetchApprovedProps } =
  pendingPropertiesFetch.actions;

export default pendingPropertiesFetch.reducer;
