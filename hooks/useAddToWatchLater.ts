import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addToWatchLater } from "../services/firebaseFunc";
import { Video } from "../types";

const useAddTOWatchLater = (videoData: Video, userID: string | undefined) => {
  const queryClient = useQueryClient();

  const { mutate, isLoading, isError } = useMutation(
    async () => {
      return addToWatchLater(userID!, videoData);
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

export default useAddTOWatchLater;
