import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { addToHistory } from "../services/firebaseFunc";
import { Video } from "../types";
import { toast } from "react-hot-toast";

const useAddToHistory = (
  videoData: Video,
  userID: string | undefined
) => {
  const queryClient = useQueryClient();

  const { mutate, isLoading, isError } = useMutation(
    async () => {
      return addToHistory(userID!, videoData);
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

export default useAddToHistory;
