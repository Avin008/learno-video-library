import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { addToWatchLater } from "../services/firebaseFunc";
import { Video } from "../types";
import { toast } from "react-hot-toast";

const useAddTOWatchLater = (
  videoData: Video,
  userID: string | undefined
) => {
  const queryClient = useQueryClient();

  const { mutate, isLoading, isError } = useMutation(
    async () => {
      return addToWatchLater(userID!, videoData);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["user"]);
        toast.success("Added to Watch Later");
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
