//function to get a cookie from the server

import axios from "axios";

export const getCookie = async () => {
  const cookieEndpoint = "http://localhost:3000/get-cookies";
  const cookie = await axios.get(cookieEndpoint, { withCredentials: true });
  return cookie.data;
};
