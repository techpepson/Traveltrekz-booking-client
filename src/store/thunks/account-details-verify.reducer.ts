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

      // Check if response is present
      if (!response) {
        toast.error("There was no response returned");
        return thunk.rejectWithValue("No response returned from the server");
      }

      // Check the status code for success
      if (response.status >= 200 && response.status < 300) {
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

      // Check if response is present
      if (!response) {
        toast.error("There was no response returned");
        return thunk.rejectWithValue("No response returned from the server");
      }

      // Check the status code for success
      if (response.status >= 200 && response.status < 300) {
        toast.success(
          response.data.message || "Guest details updated successfully"
        );
        return response.data.user; // Return data for the fulfilled case
      } else {
        const errorMessage =
          response.data?.message || "Failed to update guest details";
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
