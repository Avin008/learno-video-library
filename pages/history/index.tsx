import { useRouter } from "next/router";
import {
  Container,
  LoadingSpinner,
} from "../../components";
import EmptyCategory from "../../components/EmptyCategory";
import HistoryVideoCard from "../../components/HistoryVideoCard";
import { useGetUserData } from "../../hooks";
import { useAuthStore } from "../../store";
import { Video } from "../../types";
import { useEffect } from "react";

const HistoryPage = (): React.ReactElement => {
  const {
    data: userData,
    isLoading: isUserDataLoading,
    isError,
  } = useGetUserData();

  const authStatus = useAuthStore(
    (store: any) => store.authStatus
  );

  const router = useRouter();

  useEffect(() => {
    if (!authStatus) {
      router.push("/login");
    }
  }, [authStatus]);

  if (isUserDataLoading) {
    return <LoadingSpinner />;
  }

  return (
    <Container>
      {authStatus ? (
        userData?.history?.length > 0 ? (
          userData?.history?.map((videoData: Video) => (
            <HistoryVideoCard
              key={videoData.id}
              videoData={videoData}
            />
          ))
        ) : (
          <EmptyCategory
            img="history.png"
            message="History is Empty"
            link="/"
          />
        )
      ) : null}
    </Container>
  );
};

export default HistoryPage;
