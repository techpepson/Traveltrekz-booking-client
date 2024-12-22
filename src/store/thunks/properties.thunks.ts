//thunk api for properties

import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addPropertyApi,
  fetchApprovedPropertiesApi,
  fetchPendingPropertiesApi,
} from "../../apis/properties.api";
import { toast } from "react-toastify";
import axios from "axios";
import { PropertyPayloadTypes } from "../../interface/properties.interface";
import {
  fetchApprovedProps,
  fetchPendingProps,
} from "../reducers/fetchHostPendingProperties";

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
// export const FetchHostApprovedPropertyThunk = createAsyncThunk(
//   "host/property/add",
//   async (payload: PropertyPayloadTypes, thunk) => {
//     try {
//       const response = await addPropertyApi(payload);

//       if (!response) {
//         toast.error("There was no response returned");
//         return thunk.rejectWithValue("No response returned from the server");
//       }

//       console.log("Response status:", response.status);
//       console.log("Response data:", response.data);

//       // Handle successful responses (status 200-299)
//       if (response.status >= 200 && response.status < 300) {
//         toast.success(response.data.message || "Property addition successful");
//         return response.data.user; // Return data for the fulfilled case
//       }

//       // Handle client-side errors (status 400-499)
//       if (response.status >= 400 && response.status < 500) {
//         const errorMessage =
//           response.data?.statusText || "Property addition failed";
//         toast.error(errorMessage); // Show error message from the server or fallback
//         return thunk.rejectWithValue(errorMessage); // Reject with the error message
//       }
//     } catch (error) {
//       // Handle Axios errors or network issues
//       if (axios.isAxiosError(error) && error.response?.data) {
//         const errorMessage =
//           error.response.data.message || "Property addition failed";
//         toast.error(errorMessage);
//         return thunk.rejectWithValue(errorMessage); // Reject with the error message
//       }

//       // Handle any other unexpected errors
//     }
//   }
// );

//pending properties thunk
export const FetchHostPendingPropertyThunk = createAsyncThunk(
  "host/pending-property/fetch",
  async (_, thunk) => {
    try {
      const response = await fetchPendingPropertiesApi();

      if (!response) {
        toast.error("There was no response returned");
        return thunk.rejectWithValue("No response returned from the server");
      }

      console.log("Response status:", response.status);
      console.log("Response data:", response.data);

      // Handle successful responses (status 200-299)
      if (response.status >= 200 && response.status < 300) {
        console.log("I am from the pending host")
        thunk.dispatch(fetchPendingProps(response.data.data));
        return response.data.data; // Return data for the fulfilled case
      }

      // Handle client-side errors (status 400-499)
      if (response.status >= 400 && response.status < 500) {
        const errorMessage =
          response.data?.statusText || "Property fetch failed";
        // Show error message from the server or fallback
        return thunk.rejectWithValue(errorMessage); // Reject with the error message
      }
    } catch (error) {
      // Handle Axios errors or network issues
      if (axios.isAxiosError(error) && error.response?.data) {
        const errorMessage =
          error.response.data.message || "Property fetch failed";

        return thunk.rejectWithValue(errorMessage); // Reject with the error message
      }

      // Handle any other unexpected errors
    }
  }
);

//approved properties fetch
export const FetchHostApprovedPropertyThunk = createAsyncThunk(
  "host/approved-property/fetch",
  async (_, thunk) => {
    try {
      const response = await fetchApprovedPropertiesApi();

      if (!response) {
        toast.error("There was no response returned");
        return thunk.rejectWithValue("No response returned from the server");
      }

      console.log("Response status:", response.status);
      console.log("Response data:", response.data);

      // Handle successful responses (status 200-299)
      if (response.status >= 200 && response.status < 300) {
        thunk.dispatch(fetchApprovedProps(response.data.data));
        return response.data.data; // Return data for the fulfilled case
      }

      // Handle client-side errors (status 400-499)
      if (response.status >= 400 && response.status < 500) {
        const errorMessage =
          response.data?.statusText || "Property fetch failed";
        // Show error message from the server or fallback
        return thunk.rejectWithValue(errorMessage); // Reject with the error message
      }
    } catch (error) {
      // Handle Axios errors or network issues
      if (axios.isAxiosError(error) && error.response?.data) {
        const errorMessage =
          error.response.data.message || "Property fetch failed";

        return thunk.rejectWithValue(errorMessage); // Reject with the error message
      }

      // Handle any other unexpected errors
    }
  }
);
