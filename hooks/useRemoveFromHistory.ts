import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { removeFromHistory } from "../services/firebaseFunc";
import { Video } from "../types";
import { toast } from "react-hot-toast";

const useRemoveFromHistory = (
  videoData: Video,
  userID: string | undefined
) => {
  const queryClient = useQueryClient();

  const { mutate, isLoading, isError } = useMutation(
    async () => {
      return removeFromHistory(userID!, videoData);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["user"]);
        toast.success("Removed from History");
      },
    }
  );

  return {
    mutate,
    isLoading,
    isError,
  };
};

export default useRemoveFromHistory;
