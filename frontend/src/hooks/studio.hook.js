import {
  getChannelAbouts,
  getChannelStats,
  getChannelVideos,
} from "@/api/studio.api";
import { useQuery } from "@tanstack/react-query";

// custom hook for getChannelStats
export const useChannelStats = () => {
  return useQuery({
    queryKey: ["channelStats"],
    queryFn: getChannelStats,
  });
};

// custom hook for getChannelVideos
export const useChannelVideos = () => {
  return useQuery({
    queryKey: ["channelVideos"],
    queryFn: getChannelVideos,
  });
};

// custom hook for getChannelAbout
export const useChannelAbout = () => {
    return useQuery({
      queryKey: ["channelAbout"],
      queryFn: getChannelAbouts,
    });
  };