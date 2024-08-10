import axios from "axios";
import toast from "react-hot-toast";
import { BASE_URL } from "../constants";

const API = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

// get user playlists api call
export const getUserPlaylists = async (userId, isGuest) => {
  if (isGuest) {
    return [];
  }
  try {
    const { data } = await API.get(`/playlist/user/${userId}`);
    return data?.data;
  } catch (error) {
    throw error?.response?.data?.error;
  }
};

// get playlistById api call
export const getPlaylistById = async (playlistId) => {
  // console.log("this get playlist by id called", playlistId);
  try {
    const { data } = await API.get(`/playlist/${playlistId}`);
    // console.log(data.data);
    return data?.data;
  } catch (error) {
    throw error?.response?.data?.error;
  }
};

// update playlist api call
export const updatePlaylist = async (playlistId, playlistData) => {
  try {
    const { data } = await API.patch(`/playlist/${playlistId}`, playlistData);
    toast.success(data?.message);
    return data?.data;
  } catch (error) {
    throw error?.response?.data?.error;
  }
};

//   deletePlaylist api call
export const deletePlaylist = async (playlistId) => {
  try {
    const { data } = await API.delete(`/playlist/${playlistId}`);
    toast.success(data?.message);
    return data?.data;
  } catch (error) {
    throw error?.response?.data?.error;
  }
};

//   createPlaylist api call

export const createPlaylist = async (playlistData) => {
  try {
    const { data } = await API.post("/playlist", playlistData);
    toast.success(data?.message);

    return data?.data;
  } catch (error) {
    throw error?.response?.data?.error;
  }
};

// add videoToPlaylist api call
export const addVideoToPlaylist = async (videoId, playlistId) => {
  try {
    const { data } = await API.patch(`/playlist/add/${videoId}/${playlistId}`);
    toast.success(data?.message);
    return data?.data;
  } catch (error) {
    throw error?.response?.data?.error;
  }
};

// removeVideoFromPlaylist api call
export const removeVideoFromPlaylist = async (videoId, playlistId) => {
  try {
    const { data } = await API.patch(
      `/playlist/remove/${videoId}/${playlistId}`
    );
    toast.success(data?.message);
    return data?.data;
  } catch (error) {
    throw error?.response?.data?.error;
  }
};

// check videoInPlaylist api call
export const checkVideoInPlaylist = async (videoId, playlistId) => {
  try {
    const { data } = await API.get(
      `/playlist/check-video/${playlistId}/${videoId}`
    );
    return data?.data?.isPresent;
  } catch (error) {
    throw error?.response?.data?.error;
  }
};
