import { createAsyncThunk } from "@reduxjs/toolkit";
import { registerApi, loginApi } from "../../apis/api.exports";
import {
  LoginBodyTypes,
  RegisterBodyTypes,
} from "../../interface/auth.reducer.interface";
import axios from "axios";
import { toast } from "react-toastify"; // Importing Toastify
import Cookie from "js-cookie";

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
        setTimeout(() => {
          window.location.href = import.meta.env.VITE_LOGIN_URL;
        }, 5000);
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
        //store the logged in user details in a cookie
        Cookie.set("user_name", response.data.name);
        Cookie.set("generated_token", response.data.token);
        Cookie.set("user_status", response.data.userStatus);

        //redirect the logged in user based on their user status
        if (response.data.userStatus !== "approved") {
          setTimeout(() => {
            window.location.href = import.meta.env.VITE_USER_DETAILS_PAGE;
          }, 5000);
        } else {
          if (response.data.userType === "host") {
            setTimeout(() => {
              window.location.href = import.meta.env.VITE_HOST_HOMEPAGE;
            }, 5000);
          }
          if (response.data.userType === "guest") {
            setTimeout(() => {
              window.location.href = import.meta.env.VITE_GUEST_HOMEPAGE;
            }, 5000);
          }
        }

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
