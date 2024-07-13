import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getLikedVideos,
  toggleCommentLike,
  toggleTweetLike,
  toggleVideoLike,
} from "@/api/like.api";

// custom hook for toggleLike
export const useLike = (type) => {
  const queryClient = useQueryClient();
  if (type === "video") {
    return useMutation({
      mutationFn: (videoId) => toggleVideoLike(videoId),
      onSuccess: (data, videoId) => {
        queryClient.invalidateQueries({ queryKey: ["video", videoId] });
      },
    });
  }

  if (type === "comment") {
    return useMutation({
      mutationFn: (commentId) => toggleCommentLike(commentId),
      onSuccess: (data, commentId) => {
        queryClient.invalidateQueries({ queryKey: ["comments"] });
      },
    });
  }
  if (type === "tweet") {
    return useMutation({
      mutationFn: (tweetId) => toggleTweetLike(tweetId),
      onSuccess: (data, tweetId) => {
        queryClient.invalidateQueries({ queryKey: ["tweets"] });
      },
    });
  }
};

// custom hook for getLikedVideo
export const useLikedVideos = () => {
  return useQuery({
    queryKey: ["likedVideo"],
    queryFn: () => getLikedVideos(),
  });
};
