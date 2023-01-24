import {
  Container,
  LoadingSpinner,
} from "../../components";
import EmptyCategory from "../../components/EmptyCategory";
import WatchLaterVideoCard from "../../components/WatchLaterVideoCard";
import { useGetUserData } from "../../hooks";
import { Video } from "../../types";

const WatchLaterPage = (): React.ReactElement => {
  const {
    data: userData,
    isLoading: isUserDataLoading,
    isError: isUserDataError,
  } = useGetUserData();

  return (
    <Container>
      {isUserDataLoading && <LoadingSpinner />}
      {userData?.watchLater?.length > 0 ? (
        userData?.watchLater?.map((x: Video) => (
          <WatchLaterVideoCard key={x.id} videoData={x} />
        ))
      ) : (
        <EmptyCategory
          img="heart.png"
          link=""
          message="You Haven't Added any videos to watch later yet!"
        />
      )}
    </Container>
  );
};

export default WatchLaterPage;
