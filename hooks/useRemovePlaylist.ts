import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { removePlaylist } from "../services/firebaseFunc";
import { useAuthStore } from "../store";
import { toast } from "react-hot-toast";

const useRemovePlaylist = (playlistObj: any) => {
  const queryClient = useQueryClient();

  const token = useAuthStore((store: any) => store.token);

  const { mutate, isLoading, isError } = useMutation(
    async () => {
      return removePlaylist(token, playlistObj);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["user"]);
        toast.success("Playlist Removed");
      },
    }
  );

  return { mutate, isLoading, isError };
};

export default useRemovePlaylist;
