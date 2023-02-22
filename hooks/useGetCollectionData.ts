import { useQuery } from "@tanstack/react-query";
import { getCollectionData } from "../services/firebaseFunc";

const useGetCollectionData = (
  collectionName: string
): { data: any; isLoading: boolean; isError: boolean } => {
  const { data, isLoading, isError } = useQuery([collectionName], async () => {
    return getCollectionData(collectionName);
  });

  return { data, isLoading, isError };
};

export default useGetCollectionData;
