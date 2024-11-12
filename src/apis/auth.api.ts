import {
  LoginBodyTypes,
  RegisterBodyTypes,
} from "../interface/auth.reducer.interface";
import { api } from "./api.config";
import { toast } from "react-toastify";
import axios from "axios";

export const registerApi = async (payload: RegisterBodyTypes) => {
  const registerEndpoint = "/auth/user/register";

  if (!payload || Object.keys(payload).length === 0) {
    toast.error("The object body is null.");
    return null;
  }

  try {
    const response = await api.post(registerEndpoint, payload);
    return response; // Return the response, even if it's a non-2xx status
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      // Return the response even if there's an error status
      return error.response;
    }
    throw error; // Re-throw non-Axios errors or network errors
  }
};

//login api endpoint
export const loginApi = async (payload: LoginBodyTypes) => {
  const loginEndpoint = "/auth/user/login";

  if (!payload || Object.keys(payload).length === 0) {
    toast.error("The object body is null.");
    return null;
  }

  try {
    const response = await api.post(loginEndpoint, payload);
    return response; // Return the response, even if it's a non-2xx status
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      // Return the response even if there's an error status
      return error.response;
    }
    throw error; // Re-throw non-Axios errors or network errors
  }
};
