import { createAsyncThunk } from "@reduxjs/toolkit";
import { registerApi, loginApi } from "../../apis/api.exports";
import {
  LoginBodyTypes,
  RegisterBodyTypes,
} from "../../interface/auth.reducer.interface";
import axios from "axios";
import { toast } from "react-toastify"; // Importing Toastify

export const RegisterAuthThunk = createAsyncThunk(
  "auth/register",
  async (data: RegisterBodyTypes, thunk) => {
    try {
      // Check if the payload is present
      if (!data || Object.keys(data).length === 0) {
        console.log("The object payload for the body is not valid.");
        toast.error("The payload is not valid."); // Show error toast
        return;
      }

      const response = await registerApi(data);

      // Check if the status is 201 (success)
      if (response?.status === 201) {
        window.location.href = import.meta.env.VITE_LOGIN_URL;
        toast.success(response.data.message); // Show success toast
        return response.data.message; // Return the success message
      }

      // check for error status of 400
      if (response?.status === 400) {
        toast.error(response.data.message);
        return thunk.rejectWithValue(response.data.message);
      }

      // check for error status of 404
      if (response?.status === 404) {
        toast.error(response.data.message);
        return thunk.rejectWithValue(response.data.message);
      }

      // check for error status of 409
      if (response?.status === 409) {
        toast.error(response.data.message);
        return thunk.rejectWithValue(response.data.message);
      }

      // check for error status of 500
      if (response?.status === 500) {
        toast.error(response.data.message);
        return thunk.rejectWithValue(response.data.message);
      }
    } catch (error) {
      // Check for Axios-specific errors
      if (axios.isAxiosError(error)) {
        const errorMessage = error.message || "An unexpected error occurred";
        toast.error(errorMessage); // Show error toast
        return thunk.rejectWithValue(errorMessage); // Reject with the error message
      }
    }
  }
);

//login API thunk
export const LoginAuthThunk = createAsyncThunk(
  "auth/login",
  async (data: LoginBodyTypes, thunk) => {
    try {
      // Check if the payload is present
      if (!data || Object.keys(data).length === 0) {
        console.log("The object payload for the body is not valid.");
        toast.error("The payload is not valid."); // Show error toast
        return;
      }

      const response = await loginApi(data);

      // Check if the status is 201 (success)
      if (response?.status === 200) {
        toast.success(response.data.message); // Show success toast
        return response.data.message; // Return the success message
      }

      // check for error status of 400
      if (response?.status === 400) {
        toast.error(response.data.message);
        return thunk.rejectWithValue(response.data.message);
      }

      // check for error status of 404
      if (response?.status === 404) {
        toast.error(response.data.message);
        return thunk.rejectWithValue(response.data.message);
      }

      // check for error status of 409
      if (response?.status === 409) {
        toast.error(response.data.message);
        return thunk.rejectWithValue(response.data.message);
      }

      // check for error status of 500
      if (response?.status === 500) {
        toast.error(response.data.message);
        return thunk.rejectWithValue(response.data.message);
      }
    } catch (error) {
      // Check for Axios-specific errors
      if (axios.isAxiosError(error)) {
        const errorMessage = error.message || "An unexpected error occurred";
        toast.error(errorMessage); // Show error toast
        return thunk.rejectWithValue(errorMessage); // Reject with the error message
      }
    }
  }
);
