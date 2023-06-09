import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { removeFromWatchLater } from "../services/firebaseFunc";
import { Video } from "../types";
import { toast } from "react-hot-toast";

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
        toast.success("Removed from Watch Later");
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
