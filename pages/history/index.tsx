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

  if (!authStatus) router.push("/login");

  if (isUserDataLoading) {
    return <LoadingSpinner />;
  }

  return (
    <Container>
      {authStatus && userData?.history?.length > 0 ? (
        userData?.history?.map((videoData: Video) => (
          <HistoryVideoCard
            key={videoData.id}
            videoData={videoData}
          />
        ))
      ) : (
        <EmptyCategory
          img="heart.png"
          message="History is Empty"
          link="/"
        />
      )}
    </Container>
  );
};

export default HistoryPage;
