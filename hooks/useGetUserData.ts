import { useQuery } from "@tanstack/react-query";
import { getSingleDoc } from "../services/firebaseFunc";
import { useAuthStore } from "../store";

const useGetUserData = (): {
  data: any;
  isLoading: boolean;
  isError: boolean;
} => {
  const authStatus = useAuthStore((store: any) => store.authStatus);
  const token = useAuthStore((store: any) => store.token);

  const { data, isLoading, isError } = useQuery(
    ["user"],
    async () => {
      return getSingleDoc("users", token);
    },
    {
      enabled: authStatus,
    }
  );

  return { data, isLoading, isError };
};

export default useGetUserData;
