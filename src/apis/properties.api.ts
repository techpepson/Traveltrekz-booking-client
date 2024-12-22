import Cookies from "js-cookie";
import { api, setAuth } from "./api.config";
import { PropertyPayloadTypes } from "../interface/properties.interface";
import axios from "axios";
import { toast } from "react-toastify";

export const addPropertyApi = async (payload: PropertyPayloadTypes) => {
  try {
    const urlPath = "/properties/add-property";
    const token = Cookies.get("generated_token");

    // Set the authorization header
    setAuth(token);

    // Make the API request
    const response = await api.post(urlPath, payload);

    // Return the response if the request was successful
    return response;
  } catch (error) {
    // Handle Axios errors specifically
    if (axios.isAxiosError(error)) {
      // Check if error response exists
      if (error.response && error.response.data) {
        const errorMessage =
          error.response.data.message ||
          "An error occurred while adding the property";

        // Log the error and return the message
        toast.error(errorMessage);
        console.error("Axios error:", errorMessage);
        throw new Error(errorMessage); // Throwing a detailed error message
      }

      // Handle unexpected Axios errors without a response
      const genericError =
        "An unexpected error occurred while making the request.";
      console.error("Axios error:", genericError);
      throw new Error(genericError);
    }

    // Handle non-Axios errors (e.g., network errors)
    const networkError = "A network error occurred. Please try again later.";
    console.error("Network error:", networkError);
    throw new Error(networkError);
  }
};

export const fetchPendingPropertiesApi = async () => {
  try {
    const url = "/properties/host-get-pending-property";
    const token = Cookies.get("generated_token");

    setAuth(token);
    const response = await api.get(url);

    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response && error.response?.data) {
        const errorMessage =
          error.response.data.message ||
          "An error occurred while fetching properties";
        console.error("Axios error:", errorMessage);
        throw new Error(errorMessage);
      }
      // Handle unexpected Axios errors without a response
      const genericError =
        "An unexpected error occurred while making the request.";
      console.error("Axios error:", genericError);
      throw new Error(genericError);
    }
    // Handle non-Axios errors (e.g., network errors)
    const networkError = "A network error occurred. Please try again later.";
    console.error("Network error:", networkError);
    throw new Error(networkError);
  }
};

//approved properties
export const fetchApprovedPropertiesApi = async () => {
  try {
    const url = "/properties/host-get-approved-property";
    const token = Cookies.get("generated_token");

    setAuth(token);
    const response = await api.get(url);

    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response && error.response?.data) {
        const errorMessage =
          error.response.data.message ||
          "An error occurred while fetching properties";
        console.error("Axios error:", errorMessage);
        throw new Error(errorMessage);
      }
      // Handle unexpected Axios errors without a response
      const genericError =
        "An unexpected error occurred while making the request.";
      console.error("Axios error:", genericError);
      throw new Error(genericError);
    }
    // Handle non-Axios errors (e.g., network errors)
    const networkError = "A network error occurred. Please try again later.";
    console.error("Network error:", networkError);
    throw new Error(networkError);
  }
};
