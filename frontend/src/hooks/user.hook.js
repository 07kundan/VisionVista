import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import {
  getWatchHistory,
  getUserChannelProfile,
  updateUserCoverImage,
  updateUserProfile,
  updateAccountDetails,
  updateChannelInfo,
  clearWatchHistory,
} from "@/api/user.api";

// custom hook for getwatchHistory
export const useWatchHistory = (isGuest = false) => {
  return useQuery({
    queryKey: ["watchHistory", isGuest],
    queryFn: () => getWatchHistory(isGuest),
    refetchOnWindowFocus: true,
  });
};

// custom hook for getUserChannelProfile
export const useUserChannelInfo = (username) => {
  return useQuery({
    queryKey: ["channelInfo", username],
    queryFn: () => getUserChannelProfile(username),
    refetchOnWindowFocus: true,
  });
};

// custom hook for updateUserProfile
export const useUpdateAvatar = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => updateUserProfile(data),
    onSuccess: () => {
      queryClient.invalidateQueries("channelInfo");
    },
  });
};

// custom hook for updateUserCoverImage
export const useUpdateCoverImage = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => updateUserCoverImage(data),
    onSuccess: () => {
      queryClient.invalidateQueries("channelInfo");
    },
  });
};

// custom hook for updateAccountDetails
export const useUpdateAccountDetails = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => updateAccountDetails(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["channelInfo"] });
      queryClient.invalidateQueries({ queryKey: ["currentUser"] });
    },
  });
};

// custom hook for updateChannelInfo
export const useUpdateChannelInfo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => updateChannelInfo(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["currentUser"] });
      queryClient.invalidateQueries({ queryKey: ["channelInfo"] });
    },
  });
};

// custom hook for clearWatchHistory
export const useClearWatchHistory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => clearWatchHistory(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["watchHistory"] });
    },
  });
};
