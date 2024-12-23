import {
  GuestServerPayload,
  HostServerPayload,
} from "../interface/account-details";
import { getCookie } from "../utils/cookieGetFunction";
import { api } from "./api.config";
import { setAuth } from "./api.config";

const apiEndpoint = "/users/update-host-details";
export const addHostDetailsApi = async (data: HostServerPayload) => {
  try {
    const getToken = async () => {
      const token = await getCookie();
      return token.token;
    };
    // Set the authorization header
    const token = await getToken();
    setAuth(token);
    const response = await api.post(apiEndpoint, data);
    return response;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw new Error("An error occurred while adding host details");
    }
    console.error("Unexpected error:", error);
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
    return response;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw new Error("An error occurred while adding guest details");
    }
    console.error("Unexpected error:", error);
    throw new Error("An unexpected error occurred");
  }
};
