import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeFromLiked } from "../services/firebaseFunc";
import { Video } from "../types";

const useRemoveFromLiked = (videoData: Video, userID: string | undefined) => {
  const queryClient = useQueryClient();

  const { mutate, isLoading, isError } = useMutation(
    async () => {
      return removeFromLiked(userID!, videoData);
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

export default useRemoveFromLiked;
