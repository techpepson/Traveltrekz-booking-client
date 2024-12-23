//function to get a cookie from the server

import axios from "axios";
import { setAuth } from "../apis/api.config";

export const getCookie = async () => {
  const cookieDevelopmentEndpoint =
    import.meta.env.VITE_DEVELOPMENT_COOKIE_ENDPOINT ||
    "http://localhost:3000/get-cookies";

  const productionCookieEndpoint =
    import.meta.env.VITE_PRODUCTION_COOKIE_ENDPOINT ||
    "https://traveltrekz.onrender.com/get-cookies";
  const cookie = await axios.get(productionCookieEndpoint, {
    withCredentials: true,
  });
  return cookie.data;
};

export const getToken = async () => {
  const token = await getCookie();
  const cookieToken = token.token;
  const cookieStatus = token.status;
  const cookieEmail = token.email;
  return {
    cookieToken,
    cookieStatus,
    cookieEmail,
  };
};
