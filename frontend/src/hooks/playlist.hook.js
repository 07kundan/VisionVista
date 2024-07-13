import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addVideoToPlaylist,
  checkVideoInPlaylist,
  createPlaylist,
  deletePlaylist,
  getPlaylistById,
  getUserPlaylists,
  removeVideoFromPlaylist,
  updatePlaylist,
} from "@/api/playlist.api";

// custom hook for getUserPlaylist
export const usePlaylistsByUser = (userId) => {
  return useQuery({
    queryKey: ["playlists", userId],
    queryFn: () => getUserPlaylists(userId),
    staleTime: 1000 * 60 * 4,
  });
};

// custom hook for getPlaylistById
export const usePlaylistById = (playlistId) => {
  return useQuery({
    queryKey: ["playlist", playlistId],
    queryFn: () => getPlaylistById(playlistId),
    staleTime: 1000 * 60 * 4,
  });
};

// custom hook for updatePlaylist
export const useUpdatePlaylist = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => updatePlaylist(data),
    onSuccess: () => {
      queryClient.invalidateQueries("playlists");
    },
  });
};

// custom hook for deletePlaylist
export const useDeletePlaylist = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (playlistId) => deletePlaylist(playlistId),
    onSuccess: () => {
      queryClient.invalidateQueries("playlists");
    },
  });
};

// custom hook for createPlaylist
export const useCreatePlaylist = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => createPlaylist(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["playlists"] });
    },
  });
};

// custom hook for addVideoToPlaylist
export const useAddVideoToPlaylist = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ videoId, playlistId }) =>
      addVideoToPlaylist(videoId, playlistId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["check-video"] });
      queryClient.invalidateQueries({
        queryKey: ["playlists"],
      });
    },
  });
};

// custom hook for removeVideoFromPlaylist
export const useRemoveVideoFromPlaylist = () => {
  return useMutation({
    mutationFn: ({ videoId, playlistId }) =>
      removeVideoFromPlaylist(videoId, playlistId),
  });
};

// custom hook for isVideoInPlaylist
export const useIsVideoInPlaylist = (videoId, playlistId) => {
  return useQuery({
    queryKey: ["check-video", videoId, playlistId],
    queryFn: () => checkVideoInPlaylist(videoId, playlistId),
    staleTime: 1000 * 60 * 4,
  });
};
