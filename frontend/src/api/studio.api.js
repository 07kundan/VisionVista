import axios from "axios";
import toast from "react-hot-toast";
import { BASE_URL } from "../constants";

const API = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

// get channel stats api call
export const getChannelStats = async () => {
  try {
    const { data } = await API.get("/dashboard/stats");
    return data.data;
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

// get channel video api call
export const getChannelVideos = async () => {
  try {
    const { data } = await API.get("/dashboard/videos");
    return data.data;
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

// get channelAbout api call
export const getChannelAbouts = async () => {
  try {
    const { data } = await API.get("/dashboard/about");
    console.log(data.data);
    return data.data;
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
