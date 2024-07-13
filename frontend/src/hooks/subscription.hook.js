import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getSubscribedChannels,
  toggleSubscribe,
  getChannelSubscribers,
} from "@/api/subscription.api";

// custom hook for toogleSubscribe
export const useSubscribe = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (channelId) => toggleSubscribe(channelId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["subscribedChannels"],
      });
      queryClient.invalidateQueries({
        queryKey: ["video"],
      });
      queryClient.invalidateQueries({
        queryKey: ["channelSubscribers"],
      });
    },
  });
};

// custom hook for getSubscribedChannels
export const useSubscribedChannels = (userId) => {
  return useQuery({
    queryKey: ["subscribedChannels", userId],
    queryFn: () => {
      return getSubscribedChannels(userId);
    },
    staleTime: 1000 * 60 * 5,
  });
};

// custom hook for getChannelSubscribers
export const useChannelSubcribers = (channelId) => {
  return useQuery({
    queryKey: ["channelSubscribers", channelId],
    queryFn: () => getChannelSubscribers(channelId),
    staleTime: 1000 * 60 * 5,
  });
};
