// configuration file for APIs
import axios from "axios";
// API base URL from environment variable
const baseUrl =
  import.meta.env.VITE_API_BASE_URL || "https://traveltrekz.onrender.com/api";

const developmentBaseUrl =
  import.meta.env.VITE_DEVELOPMENT_API_BASE_URL || "http://localhost:3000/api";

// Axios instance for making API requests
export const api = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
});

// Function to set the Authorization header for authenticated requests
export const setAuth = (token?: string) => {
  if (token) {
    // Ensure 'Bearer' is added if required by your API
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common.Authorization; // Remove auth if token is null/undefined
  }
};
