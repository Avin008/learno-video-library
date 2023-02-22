import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removePlaylist } from "../services/firebaseFunc";
import { useAuthStore } from "../store";

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
      },
    }
  );

  return { mutate, isLoading, isError };
};

export default useRemovePlaylist;
