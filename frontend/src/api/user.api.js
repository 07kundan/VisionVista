import { BASE_URL } from "@/constants";
import axios from "axios";
import toast from "react-hot-toast";

const API = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

// watch history api call
export const getWatchHistory = async () => {
  try {
    const { data } = await API.get("/users/watch-history");
    return data?.data;
  } catch (error) {
    toast.error(error?.response?.data?.error);
    throw error?.response?.data?.error;
  }
};

// clearHistory api call
export const clearWatchHistory = async () => {
  try {
    const { data } = await API.delete("/users/clear-history");
    toast.success(data?.message);
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.error);
    throw error?.response?.data?.error;
  }
};

// user's channel profile api call
export const getUserChannelProfile = async (username) => {
  try {
    const { data } = API.get(`/users/c/${username}`);
    return data?.data;
  } catch (error) {
    toast.error(error?.response?.data?.error);
    throw error?.response?.data?.error;
  }
};

//update user's profile api call
export const updateUserProfile = async (data) => {
  const formData = new FormData();
  if (data) {
    formData.append("avatar", data);
  }
  try {
    const { data } = await API.patch("/users/avatar", formData);
    console.log(data);
    toast.success(data?.message);
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.error);
    throw error?.response?.data?.error;
  }
};

// update user's cover Image api call
export const updateUserCoverImage = async (data) => {
  const coverImageForm = new FormData();
  if (data) {
    coverImageForm.append("coverImage", data);
  }
  try {
    const { data } = await API.patch("/users/cover-image", coverImageForm);
    toast.success(data?.message);
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.error);
    throw error?.response?.data?.error;
  }
};

// update accountdetails api call
export const updateAccountDetails = async (newData) => {
  try {
    const { data } = await API.patch("/users/update-account", newData);
    toast.success(data?.message);
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.error);
    throw error?.response?.data?.error;
  }
};

// update channelInfo api call

export const updateChannelInfo = async (newData) => {
  try {
    const { data } = await API.patch("/users/update-channelinfo", newData);
    toast.success(data?.message);
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.error);
    throw error?.response?.data?.error;
  }
};
