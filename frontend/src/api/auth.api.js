import axios from "axios";
import toast from "react-hot-toast";
import { BASE_URL } from "../constants";

const API = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

//Axios interceptors are functions that Axios runs before a request is sent or after a response is received.

// below interceptor handles the case where an API request fails because the JWT has expired. It automatically tries to refresh the token and retry the request. If the token refresh is successful, the request is retried with the new token. If it fails or if the error is not related to JWT expiry, the error is propagated as usual.

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
        // console.log("this refresh access token called");
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

// login api call
export const login = async (formData) => {
  try {
    const response = await API.post("/users/login", formData);

    // console.log("response", response);
    if (response && response.data) {
      const user = response.data.data.user;
      toast.success(response.data.message);
      return user;
    } else {
      throw new Error("invalid response structure");
    }
  } catch (error) {
    // console.log("error");
    toast.error("login unsuccessful", error?.response?.data?.error);
    throw error;
  }
};

// logout api call
export const logout = async () => {
  try {
    const { data } = await API.post("/users/logout");
    toast.success(data?.message);
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.error);
    throw error?.response?.data?.error;
  }
};

// register api call
export const register = async (data) => {
  const formData = new FormData();
  if (!data.avatar) {
    toast.error("Avatar is required");
    return;
  }
  formData.append("avatar", data.avatar);
  if (data.coverImage) {
    formData.append("coverImage", data.coverImage);
  }
  formData.append("username", data.username);
  formData.append("email", data.email);
  formData.append("password", data.password);
  formData.append("fullName", data.fullName);
  // console.log("formData", formData);
  try {
    const { data } = await API.post("/users/register", formData);
    // console.log("api data", data);
    toast.success(data?.message);
    return data?.data;
  } catch (error) {
    toast.error(error?.response?.data?.error);
    // console.log("databaseerror", error?.response?.data?.error);
    throw error?.response?.data?.error;
  }
};

// currentUser api call

export const getCurrentUser = async () => {
  try {
    const { data } = await API.get("/users/current-user");
    // console.log(data);
    return data?.data?.user;
  } catch (error) {
    // console.log(error);
    throw error?.response?.data?.error;
  }
};

// change password api call
export const changePassword = async (newPassData) => {
  try {
    const { data } = await API.post("/users/change-password", newPassData);
    toast.success(data?.message);
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.error);
    throw error?.response?.data?.error;
  }
};

// refreshAccessToken api call
export const refreshAccessToken = async () => {
  try {
    const { data } = await API.post("/users/refresh-token");
    return data?.data;
  } catch (error) {
    throw error?.response?.data?.error;
  }
};
