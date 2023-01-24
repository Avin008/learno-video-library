import {
  Container,
  LoadingSpinner,
} from "../../components";
import EmptyCategory from "../../components/EmptyCategory";
import LikedVideoCard from "../../components/LikedVideoCard";
import { useGetUserData } from "../../hooks";
import { Video } from "../../types";

const LikedPage = (): React.ReactElement => {
  const {
    data: userData,
    isLoading: isUserDataLoading,
    isError: isUserDataError,
  } = useGetUserData();

  if (isUserDataLoading) {
    return <LoadingSpinner />;
  }

  return (
    <Container>
      {userData?.liked.length > 0 ? (
        userData?.liked?.map((videoData: Video) => (
          <LikedVideoCard
            key={videoData.id}
            videoData={videoData}
          />
        ))
      ) : (
        <EmptyCategory
          img="heart.png"
          message="You Haven't Liked any videos yet!"
          link="/"
        />
      )}
    </Container>
  );
};

export default LikedPage;
