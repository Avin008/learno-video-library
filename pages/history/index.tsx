import {
  Container,
  LoadingSpinner,
} from "../../components";
import HistoryVideoCard from "../../components/HistoryVideoCard";
import { useGetUserData } from "../../hooks";
import { Video } from "../../types";

const HistoryPage = (): React.ReactElement => {
  const {
    data: userData,
    isLoading: isUserDataLoading,
    isError,
  } = useGetUserData();

  return (
    <Container>
      {isUserDataLoading && <LoadingSpinner />}
      {userData?.history?.map((videoData: Video) => (
        <HistoryVideoCard
          key={videoData.id}
          videoData={videoData}
        />
      ))}
    </Container>
  );
};

export default HistoryPage;
