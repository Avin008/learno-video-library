import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { removeVideoFromPlaylist } from "../services/firebaseFunc";
import { useAuthStore } from "../store";
import { Playlist, Video } from "../types";
import removeVideoFromPlaylistFunc from "../utility/removeVideoFromPlaylist";
import { toast } from "react-hot-toast";

const useRemoveVideoFromPlaylist = (
  userPlaylistData: Playlist[],
  videoData: Video
) => {
  const queryClient = useQueryClient();

  const token = useAuthStore((store: any) => store.token);

  const { mutate, isLoading, isError } = useMutation(
    async (playlistData: Playlist) => {
      return removeVideoFromPlaylist(
        token,
        removeVideoFromPlaylistFunc(
          userPlaylistData,
          playlistData,
          videoData
        )
      );
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["user"]);
        toast.success("Removed from Playlist");
      },
    }
  );

  return { mutate, isLoading, isError };
};
export default useRemoveVideoFromPlaylist;
