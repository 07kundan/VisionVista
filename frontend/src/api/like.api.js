import axios from "axios";
import toast from "react-hot-toast";
import { BASE_URL } from "../constants";
import { useSelector } from "react-redux";

const API = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

// toggleVideoLike api call
export const toggleVideoLike = async (videoId) => {
  try {
    const { data } = await API.post(`/like/toggle/v/${videoId}`);
    return data?.data;
  } catch (error) {
    toast.error(error?.response?.data?.error);
    throw error?.response?.data?.error;
  }
};

// toggleCommentLike api call
export const toggleCommentLike = async (commentId) => {
  try {
    const { data } = await API.post(`/like/toggle/c/${commentId}`);
    return data?.data;
  } catch (error) {
    toast.error(error?.response?.data?.error);
    throw error?.response?.data?.error;
  }
};

// toggleTweetLike api call
export const toggleTweetLike = async (tweetId) => {
  try {
    const { data } = await API.post(`/like/toggle/t/${tweetId}`);
    return data?.data;
  } catch (error) {
    toast.error(error?.response?.data?.error);
    throw error?.response?.data?.error;
  }
};

// get liked Video api call
export const getLikedVideos = async (isGuest) => {
  if (isGuest) {
    toast.success("Sign up kr le bhai");
    return [];
  }
  try {
    const { data } = await API.get("/like/videos");
    return data?.data;
  } catch (error) {
    toast.error(error?.response?.data?.error);
    throw error?.response?.data?.error;
  }
};
