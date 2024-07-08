import axios from "axios";
import toast from "react-hot-toast";
import { BASE_URL } from "@/constants";

const API = axios.create({
  baseURL: BASE_URL,
  withCredentials: ture,
});

//Axios interceptors are functions that Axios runs before a request is sent or after a response is received.

// below nterceptor handles the case where an API request fails because the JWT has expired. It automatically tries to refresh the token and retry the request. If the token refresh is successful, the request is retried with the new token. If it fails or if the error is not related to JWT expiry, the error is propagated as usual.

// Assuming API is your Axios instance
API.interceptors.response.use(
  (response) => response, // For successful requests, it'll return the response

  //   handling error
  async (error) => {
    const originalRequest = error.config;
    // Checking if the error is due to an expired JWT and we haven't already retried the request
    if (
      error?.response?.data?.error === "jwt expired" &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true; // Mark this request as retried
      try {
        console.log("this refresh access token called");
        const { accessToken } = await refreshAccessToken(); //this function refreshes the token and returns the new one
        // Update the authorization header with the new token
        API.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
        originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;
        return API(originalRequest); // Retry the original request with the new token
      } catch (refreshError) {
        // If the token refresh fails, reject the promise
        return Promise.reject(refreshError);
      }
    }
    // For all other errors, just return the promise rejection
    return Promise.reject(error);
  }
);

export const login = async (formData) => {
  try {
    const response = await API.post("/users/login", formData);

    if (response && response.data) {
      const user = response.data.data.user;
      toast.success(response.data.message);
      return user;
    } else {
      throw new Error("invalid response structure");
    }
  } catch (error) {
    console.log("error");
    toast.error(error?.response?.data?.error);
    throw error?.response?.data?.error;
  }
};
