import axios from "axios";
import {
  GuestServerPayload,
  HostServerPayload,
} from "../interface/account-details";
import { getCookie } from "../utils/cookieGetFunction";
import { api } from "./api.config";
import { setAuth } from "./api.config";

export const addHostDetailsApi = async (data: HostServerPayload) => {
  const apiEndpoint = "/users/update-host-details";
  try {
    // Retrieve token and set authorization
    const getToken = async () => {
      const token = await getCookie();
      return token.token;
    };

    const token = await getToken();
    setAuth(token);

    // Perform API call
    const response = await api.post(apiEndpoint, data);
    return response; // Return the response for success
  } catch (error) {
    // Handle Axios-specific errors
    if (axios.isAxiosError(error) && error.response?.data?.message) {
      throw new Error(error.response.data.message); // Throw custom error
    }
    // Throw generic error for unexpected issues
    throw new Error("An unexpected error occurred");
  }
};

export const addGuestDetailsApi = async (data: GuestServerPayload) => {
  const guestEndpoint = "/users/update-guest-details";
  try {
    const getToken = async () => {
      const token = await getCookie();
      return token.token;
    };
    // Set the authorization header
    const token = await getToken();
    setAuth(token);
    const response = await api.post(guestEndpoint, data);
    return response; // Return the response to the Thunk
  } catch (error) {
    // Throw the error and let the Thunk handle it
    throw error;
  }
};
