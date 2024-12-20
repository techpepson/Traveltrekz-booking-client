//thunk api for properties

import { createAsyncThunk } from "@reduxjs/toolkit";
import { addPropertyApi } from "../../apis/properties.api";
import { toast } from "react-toastify";
import axios from "axios";
import { PropertyPayloadTypes } from "../../interface/properties.interface";

export const AddPropertyThunk = createAsyncThunk(
  "host/property/add",
  async (payload: PropertyPayloadTypes, thunk) => {
    try {
      const response = await addPropertyApi(payload);

      if (!response) {
        toast.error("There was no response returned");
        return thunk.rejectWithValue("No response returned from the server");
      }

      console.log("Response status:", response.status);
      console.log("Response data:", response.data);

      // Handle successful responses (status 200-299)
      if (response.status >= 200 && response.status < 300) {
        toast.success(response.data.message || "Property addition successful");
        return response.data.user; // Return data for the fulfilled case
      }

      // Handle client-side errors (status 400-499)
      if (response.status >= 400 && response.status < 500) {
        const errorMessage =
          response.data?.statusText || "Property addition failed";
        toast.error(errorMessage); // Show error message from the server or fallback
        return thunk.rejectWithValue(errorMessage); // Reject with the error message
      }
    } catch (error) {
      // Handle Axios errors or network issues
      if (axios.isAxiosError(error) && error.response?.data) {
        const errorMessage =
          error.response.data.message || "Property addition failed";
        toast.error(errorMessage);
        return thunk.rejectWithValue(errorMessage); // Reject with the error message
      }

      // Handle any other unexpected errors
    }
  }
);
