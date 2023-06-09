import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { removeFromLiked } from "../services/firebaseFunc";
import { Video } from "../types";
import { toast } from "react-hot-toast";

const useRemoveFromLiked = (
  videoData: Video,
  userID: string | undefined
) => {
  const queryClient = useQueryClient();

  const { mutate, isLoading, isError } = useMutation(
    async () => {
      return removeFromLiked(userID!, videoData);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["user"]);
        toast.success("Removed from Liked");
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
