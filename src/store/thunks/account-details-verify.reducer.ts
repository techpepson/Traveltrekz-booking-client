import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  GuestServerPayload,
  HostFormData,
  HostServerPayload,
} from "../../interface/account-details";
import {
  addGuestDetailsApi,
  addHostDetailsApi,
} from "../../apis/details-addition.api";
import { toast } from "react-toastify";
import axios from "axios";

export const HostDetailsAddThunk = createAsyncThunk(
  "host/details/add",
  async (data: HostServerPayload, thunk) => {
    try {
      const response = await addHostDetailsApi(data);

      // Check the status code for success
      if (response && response.status >= 200 && response.status < 300) {
        toast.success(
          response.data.message || "Host details updated successfully"
        );
        return response.data.user; // Return data for the fulfilled case
      }
      if (response.status >= 400 && response.status < 500) {
        const errorMessage =
          response.data?.message || "Failed to update host details";
        toast.error(errorMessage);
        return thunk.rejectWithValue(errorMessage); // Reject with the error message
      }
    } catch (error) {
      // Handle Axios errors
      if (axios.isAxiosError(error) && error.response?.data) {
        const errorMessage =
          error.response.data.message || "Details update failed";
        toast.error(errorMessage);
        return thunk.rejectWithValue(errorMessage);
      }

      // Handle non-Axios errors
      const genericError = "An unexpected error occurred";
      toast.error(genericError);
      return thunk.rejectWithValue(genericError);
    }
  }
);

export const GuestDetailsAddThunk = createAsyncThunk(
  "guest/details/add",
  async (data: GuestServerPayload, thunk) => {
    try {
      const response = await addGuestDetailsApi(data);

      // Check if response exists and is successful
      if (response && response.status >= 200 && response.status < 300) {
        toast.success(
          response.data.message || "Guest details updated successfully"
        );
        return response.data.user;
      } else {
        const errorMessage =
          response.data?.message || "Failed to update guest details";
        toast.error(errorMessage);
        return thunk.rejectWithValue(errorMessage);
      }
    } catch (error) {
      // Handle errors thrown by API
      if (axios.isAxiosError(error) && error.response?.data) {
        const errorMessage =
          error.response.data.message || "Details update failed";
        toast.error(errorMessage); // Only one toast for errors
        return thunk.rejectWithValue(errorMessage);
      }

      // Handle unexpected errors
      toast.error("An unexpected error occurred");
      return thunk.rejectWithValue("Unexpected error occurred");
    }
  }
);
