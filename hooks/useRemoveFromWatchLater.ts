import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeFromWatchLater } from "../services/firebaseFunc";
import { Video } from "../types";

const useRemoveFromWatchLater = (
  videoData: Video,
  userID: string | undefined
) => {
  const queryClient = useQueryClient();

  const { mutate, isLoading, isError } = useMutation(
    async () => {
      return removeFromWatchLater(userID!, videoData);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["user"]);
      },
    }
  );

  return {
    mutate,
    isLoading,
    isError,
  };
};

export default useRemoveFromWatchLater;
