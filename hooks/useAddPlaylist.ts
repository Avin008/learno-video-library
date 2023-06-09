import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { createPlaylist } from "../services/firebaseFunc";
import { useAuthStore } from "../store";
import { toast } from "react-hot-toast";

const useAddPlaylist = (playlistName: string) => {
  const queryClient = useQueryClient();

  const token = useAuthStore((store: any) => store.token);

  const { mutate, isLoading, isError } = useMutation(
    async () => {
      return createPlaylist(token, playlistName);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["user"]);
        toast.success("Playlist Created");
      },
    }
  );

  return { mutate, isLoading, isError };
};

export default useAddPlaylist;
