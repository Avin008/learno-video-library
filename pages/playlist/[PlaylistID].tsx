import { useRouter } from "next/router";
import {
  Container,
  LoadingSpinner,
} from "../../components";
import PlaylistVideoCard from "../../components/PlaylistVideoCard";
import { useGetUserData } from "../../hooks";
import { Playlist, Video } from "../../types";

const PlaylistPage = (): React.ReactElement => {
  const {
    data: userData,
    isLoading: isUserDataLoading,
    isError: isUserDataError,
  } = useGetUserData();

  const router = useRouter();
  const { isReady } = router;

  const playlistID = router.query.playlistID as string;

  const playlistData =
    isReady &&
    userData?.playlist?.find(
      (x: Playlist) => x.id === playlistID
    );

  return (
    <div className="sm:col-span-12 lg:col-span-10">
      {isUserDataLoading && <LoadingSpinner />}
      {!isUserDataLoading && (
        <Container>
          {playlistData?.videos?.map((videoData: Video) => (
            <PlaylistVideoCard
              key={videoData.id}
              videoData={videoData}
              userData={userData}
              playlistData={playlistData}
            />
          ))}
        </Container>
      )}
    </div>
  );
};

export default PlaylistPage;
