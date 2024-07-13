const { BASE_URL } = require("@/constants");
const { default: axios } = require("axios");

const API = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

// get all tweet api call
export const getAllTweet = async ({ pageParam = 1, authenticated = true }) => {
  try {
    const { data } = await API.get(
      `/tweet${authenticated ? "" : "?guest=true"}`,
      { params: { page: pageParam, limit: 10 } }
    );
    return data?.data;
  } catch (error) {
    toast.error(error?.response?.data?.error || "Failed to fetch tweets");
    throw error?.response?.data?.error;
  }
};

// get channel tweet api call

export const getChannelTweets = async ({ pageParam = 1, channelId }) => {
  try {
    const { data } = await API.get(`/tweet/user/${channelId}`, {
      params: { page: pageParam, limit: 10 },
    });
    return data?.data;
  } catch (error) {
    toast.error(error?.response?.data?.error || "Failed to fetch tweets");
    throw error?.response?.data?.error;
  }
};

// create tweet api call
export const createTweet = async (tweet) => {
  try {
    const { data } = await API.post("/tweet/", tweet);
    toast.success(data?.message);
    return data?.data;
  } catch (error) {
    toast.error(error?.response?.data?.error);
    throw error?.response?.data?.error;
  }
};

// update tweet api call
export const updateTweet = async (tweetId, tweet) => {
  try {
    const { data } = await API.patch(`/tweet/${tweetId}`, tweet);
    toast.success(data?.message);
    return data?.data;
  } catch (error) {
    toast.error(error?.response?.data?.error);
    throw error?.response?.data?.error;
  }
};

// delete tweet api call
export const deleteTweet = async (tweetId) => {
  try {
    const { data } = await API.delete(`/tweet/${tweetId}`);
    toast.success(data?.message);
    return data?.data;
  } catch (error) {
    toast.error(error?.response?.data?.error);
    throw error?.response?.data?.error;
  }
};
