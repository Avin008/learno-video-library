import {
  Container,
  LoadingSpinner,
} from "../../components";
import PlaylistCard from "../../components/PlaylistCard";
import { useGetUserData } from "../../hooks";
import { Playlist } from "../../types";

const PlaylistPage = (): React.ReactElement => {
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
      {userData?.playlist?.map((x: Playlist) => (
        <PlaylistCard
          key={x.id}
          playlistData={x}
          userData={userData}
        />
      ))}
    </Container>
  );
};

export default PlaylistPage;
