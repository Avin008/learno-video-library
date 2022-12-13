import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPlaylist } from "../services/firebaseFunc";
import { useAuthStore } from "../store";

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
      },
    }
  );

  return { mutate, isLoading, isError };
};

export default useAddPlaylist;
