import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addToLiked } from "../services/firebaseFunc";
import { Video } from "../types";

const useAddToLiked = (videoData: Video, userID: string | undefined) => {
  const queryClient = useQueryClient();

  const { mutate, isLoading, isError } = useMutation(
    async () => {
      return addToLiked(userID!, videoData);
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

export default useAddToLiked;
