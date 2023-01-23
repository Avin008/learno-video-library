import {
  Container,
  LoadingSpinner,
} from "../../components";
import LikedVideoCard from "../../components/LikedVideoCard";
import { useGetUserData } from "../../hooks";
import { Video } from "../../types";

const LikedPage = (): React.ReactElement => {
  const {
    data: userData,
    isLoading: isUserDataLoading,
    isError: isUserDataError,
  } = useGetUserData();

  return (
    <Container>
      {isUserDataLoading && <LoadingSpinner />}
      {userData?.liked?.map((videoData: Video) => (
        <LikedVideoCard
          key={videoData.id}
          videoData={videoData}
        />
      ))}
    </Container>
  );
};

export default LikedPage;
