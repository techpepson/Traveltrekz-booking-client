import axios from "axios";

//function to fetch the user details from the server for client side rendering
export const fetchUserDetails = async (userEmail: string) => {
  const developmentBaseUrl =
    import.meta.env.VITE_DEV_USER_DETAILS_FETCH ??
    "http://localhost:3000/host/details";
  const productionEndpoint =
    import.meta.env.VITE_PROD_USER_DETAILS_FETCH ??
    "https://traveltrekz.onrender.com/host/details";
  try {
    const response = await axios.post(
      developmentBaseUrl,
      { userEmail },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    return response.data.payload;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
