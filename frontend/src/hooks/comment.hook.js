import {
  addComment,
  deleteComment,
  getAllComments,
  updateComment,
} from "@/api/comment.api";
import {
  useInfiniteQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

// custom hook for addComment
export const useAddComment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ videoId, comment }) =>
      addComment(videoId, { content: comment }),

    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["comments", variables.videoId],
      });
    },
  });
};

// custom hook for editComment
export const useEditComment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ commentId, comment }) =>
      updateComment(commentId, { content: comment }),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["comments"],
      });
    },
  });
};

// custom hook for deleteComment
export const useDeleteComment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (commentId) => deleteComment(commentId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["comments"],
      });
    },
  });
};

// custom hook for getAllComment
export const useComments = (videoId, authenticated) => {
  return useInfiniteQuery({
    queryKey: ["comments", videoId],
    queryFn: ({ pageParam = 1 }) =>
      getAllComments(videoId, authenticated, pageParam),
    getNextPageParam: (lastPage) => {
      if (lastPage.hasNextPage === false) return;
      return lastPage.nextPage;
    },
    staleTime: 1000 * 60 * 2, // 2 minutes
  });
};
