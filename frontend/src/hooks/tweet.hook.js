import {
  useInfiniteQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import {
  createTweet,
  deleteTweet,
  getAllTweet,
  getChannelTweets,
  updateTweet,
} from "@/api/tweet.api";

// custom hook for getAllTweets
export const useAllTweets = (authenticated) => {
  return useInfiniteQuery({
    queryKey: ["tweets"],
    queryFn: ({ pageParam = 1 }) => getAllTweet({ pageParam, authenticated }),
    getNextPageParam: (lastPage) => {
      if (lastPage.hasNextPage) {
        return lastPage.nextPage;
      }
      return undefined;
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: 2,
  });
};

// custom hook for getChannelTweets
export const useChannelTweets = (channelId) => {
  return useInfiniteQuery({
    queryKey: ["tweets", channelId],
    queryFn: ({ pageParam = 1 }) => {
      if (channelId === null || channelId === undefined) {
        return Promise.resolve({ docs: [], hasNextPage: false });
      }
      return getChannelTweets({ pageParam, channelId });
    },
    getNextPageParam: (lastPage) => {
      if (lastPage.hasNextPage) {
        return lastPage.nextPage;
      }
      return undefined;
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: 2,
    enabled: !!channelId, // Only run the query if channelId is truthy
  });
};

// custom hook for createTweet
export const useAddTweet = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ tweet }) => createTweet({ content: tweet }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["tweets"],
      });
    },
  });
};

// custom hook for updateTweet
export const useEditTweet = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ tweetId, tweet }) =>
      updateTweet(tweetId, { content: tweet }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["tweets"],
      });
    },
  });
};

// custom hook for deleteTweet
export const useDeleteTweet = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (tweetId) => deleteTweet(tweetId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["tweets"],
      });
    },
  });
};
