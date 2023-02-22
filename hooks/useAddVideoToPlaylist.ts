import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { useAuthStore } from "../store";
import { Playlist, Video } from "../types";
import addVideoToplaylistFunc from "../utility/addVideoToPlaylist";
import { addVideoToPlaylist } from "../services/firebaseFunc";

const useAddVideoToPlaylist = (
  userPlaylistData: Playlist[],
  videoData: Video
) => {
  const queryClient = useQueryClient();

  const token = useAuthStore(
    (store: any) => store.token
  );

  const { mutate, isLoading, isError } =
    useMutation(
      async (playlistData: Playlist) => {
        return addVideoToPlaylist(
          token,
          addVideoToplaylistFunc(
            userPlaylistData,
            playlistData,
            videoData
          )
        );
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(["user"]);
        },
      }
    );

  return { mutate, isLoading, isError };
};

export default useAddVideoToPlaylist;
