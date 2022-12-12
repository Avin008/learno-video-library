import { useQuery } from "@tanstack/react-query";
import { getSingleDoc } from "../services/firebaseFunc";

const useGetVideoData = (
  videoDocumentID: string,
  isReady: boolean
): { data: any; isLoading: boolean; isError: boolean } => {
  const { data, isLoading, isError } = useQuery(
    ["video"],
    async () => {
      return getSingleDoc("videos", videoDocumentID);
    },
    {
      enabled: isReady,
    }
  );

  return { data, isLoading, isError };
};

export default useGetVideoData;
