import {
  useQuery,
  useMutation,
  useQueryClient,
  useInfiniteQuery,
} from "@tanstack/react-query";
import {
  getVideos,
  getVideoById,
  uploadVideo,
  deleteVideo,
  editvideo,
  togglePublishStatus,
  getNextVideos,
  updateVideoViews,
} from "../api/video.api";

// custom hook for getVideos
export const useVideos = (options = {}) => {
  const { userId, sortBy, sortType, query } = options;
  return useInfiniteQuery({
    queryKey: ["videos", { userId, sortBy, sortType, query }],
    queryFn: ({ pageParam = 1 }) =>
      getVideos(pageParam, userId, sortBy, sortType, query),
    getNextPageParam: (lastPage) => {
      if (lastPage.hasNextPage === false) return;
      return lastPage.nextPage;
    },
    staleTime: 1000 * 60 * 0.5, // 5 minutes
  });
};

// custom hook for getVideoById
export const useVideoById = (videoId, isAuthenticated) => {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: ["video", videoId],
    queryFn: () =>
      isAuthenticated ? getVideoById(videoId) : getVideoById(videoId, false),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["watchHistory"] });
    },
    staleTime: 1000 * 60 * 2,
  });
};

// custom hook for getNextVideos
export const useNextVideos = (videoId) => {
  return useQuery({
    queryKey: ["nextVideos", videoId],
    queryFn: () => getNextVideos(videoId),
    staleTime: 1000 * 60 * 3,
  });
};

// custom hook for uploadVideos
export const useUploadVideo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => uploadVideo(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["channelStats"],
      });
      queryClient.invalidateQueries({ queryKey: ["channelVideos"] });
    },
  });
};

// custom hook for togglePublishStatus
export const useTogglePublish = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (videoId) => togglePublishStatus(videoId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["videos"] });
      queryClient.invalidateQueries({ queryKey: ["channelVideos"] });
    },
  });
};

// custom hook for deleteVideo
export const useDeleteVideo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (videoId) => deleteVideo(videoId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["channelVideos"] });
      queryClient.invalidateQueries({ queryKey: ["channelStats"] });
      queryClient.invalidateQueries({ queryKey: ["videos"] });
    },
  });
};

// custom hook for editVideo
export const useEditVideo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ videoId, data }) => editvideo(videoId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["videos"] });
      queryClient.invalidateQueries({ queryKey: ["channelVideos"] });
    },
  });
};

// custom hook for updateVideoViews
export const useUpdateVideoViews = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (videoId) => updateVideoViews(videoId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["videos"] });
    },
  });
};
