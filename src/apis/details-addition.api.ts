import axios from "axios";
import {
  GuestAccountEdit,
  GuestServerPayload,
  HostAccountEdit,
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
    throw error;
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

//host account edit api
export const hostAccountEditApi = async (payload: HostAccountEdit) => {
  const endpoint = "/users/details-role/edit";
  try {
    const getToken = async () => {
      const token = await getCookie();
      return token.token;
    };
    const token = await getToken();
    setAuth(token);
    const response = await api.patch(endpoint, payload);
    return response;
  } catch (error) {
    throw error;
  }
};

//guest account edit
export const guestAccountEditApi = async (payload: GuestAccountEdit) => {
  const endpoint = "/guest/details-role/edit";
  try {
    const getToken = async () => {
      const token = await getCookie();
      return token.token;
    };
    const token = await getToken();
    setAuth(token);
    const response = await api.patch(endpoint, payload);
    return response;
  } catch (error) {
    throw error;
  }
};
