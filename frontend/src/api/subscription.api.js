import axios from "axios";
import toast from "react-hot-toast";
import { BASE_URL } from "../constants";

const API = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

// toggle subscribe api call
export const toggleSubscribe = async (channelId) => {
  try {
    const { data } = await API.post(`/subscription/c/${channelId}`);
    return data?.data;
  } catch (error) {
    // console.log(error);
    toast.error(error?.response?.data?.error);
    throw error?.response?.data?.error;
  }
};

// get subscribed channel api call
export const getSubscribedChannels = async (subscriberId) => {
  try {
    const { data } = await API.get(`/subscription/u/${subscriberId}`);
    return data?.data;
  } catch (error) {
    // console.log(error);
    throw error?.response?.data?.error;
  }
};

// get channel's subscriber api call
export const getChannelSubscribers = async (channelId, isGuest) => {
  if (isGuest) {
    // toast.success("Sign up kr le bhai");
    return [];
  }
  try {
    const { data } = await API.get(`/subscription/c/${channelId}`);
    return data?.data;
  } catch (error) {
    // console.log(error);
    throw error?.response?.data?.error;
  }
};
