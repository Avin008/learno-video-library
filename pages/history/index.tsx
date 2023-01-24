import {
  Container,
  LoadingSpinner,
} from "../../components";
import EmptyCategory from "../../components/EmptyCategory";
import HistoryVideoCard from "../../components/HistoryVideoCard";
import { useGetUserData } from "../../hooks";
import { Video } from "../../types";

const HistoryPage = (): React.ReactElement => {
  const {
    data: userData,
    isLoading: isUserDataLoading,
    isError,
  } = useGetUserData();

  if (isUserDataLoading) {
    return <LoadingSpinner />;
  }

  return (
    <Container>
      {userData?.history?.length > 0 ? (
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
