import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { addToLiked } from "../services/firebaseFunc";
import { Video } from "../types";
import { toast } from "react-hot-toast";

const useAddToLiked = (
  videoData: Video,
  userID: string | undefined
) => {
  const queryClient = useQueryClient();

  const { mutate, isLoading, isError } = useMutation(
    async () => {
      return addToLiked(userID!, videoData);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["user"]);
        toast.success("Added to Liked");
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
