import { useState, useEffect } from "react";
import { useAuthStore } from "../store";

const useAuth = (): {
  status: boolean | null;
  loading: boolean;
  token: string | null;
} => {
  const [status, setStatus] = useState<boolean | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [token, setToken] = useState<string | null>(null);

  const authStatus = useAuthStore((store: any) => store.authStatus);
  const authToken = useAuthStore((store: any) => store.token);

  useEffect(() => {
    if (authStatus) {
      setStatus(true);
      setToken(authToken);
      setLoading(false);
    } else {
      setStatus(false);
      setToken(null);
      setLoading(false);
    }
  }, [authStatus]);

  return {
    status,
    loading,
    token,
  };
};

export default useAuth;
