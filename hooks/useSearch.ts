import { useQuery } from "@tanstack/react-query";
import { getCollectionData } from "../services/firebaseFunc";

const useSearch = () => {
  const {
    data: searchData,
    isLoading,
    isError,
  } = useQuery(["search"], async () => {
    return getCollectionData("videos");
  });

  return { searchData, isLoading, isError };
};

export default useSearch;
