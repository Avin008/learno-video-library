import {
  Container,
  LoadingSpinner,
} from "../../components";
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
      {userData?.watchLater?.map((x: Video) => (
        <WatchLaterVideoCard key={x.id} videoData={x} />
      ))}
    </Container>
  );
};

export default WatchLaterPage;
