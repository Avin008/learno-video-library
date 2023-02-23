import { useRouter } from "next/router";
import {
  Container,
  LoadingSpinner,
} from "../../components";
import PlaylistVideoCard from "../../components/PlaylistVideoCard";
import { useGetUserData } from "../../hooks";
import { useAuthStore } from "../../store";
import { Playlist, Video } from "../../types";
import { useEffect } from "react";

const PlaylistPage = (): React.ReactElement => {
  const {
    data: userData,
    isLoading: isUserDataLoading,
    isError: isUserDataError,
  } = useGetUserData();

  const authStatus = useAuthStore(
    (store: any) => store.authStatus
  );

  const router = useRouter();
  const { isReady } = router;

  useEffect(() => {
    if (!authStatus) {
      router.push("/login");
    }
  }, [authStatus]);

  const playlistID = router.query.playlistID as string;

  const playlistData =
    isReady &&
    userData?.playlist?.find(
      (x: Playlist) => x.id === playlistID
    );

  return (
    <div className="sm:col-span-12 lg:col-span-10">
      {isUserDataLoading ? <LoadingSpinner />}
      {!isUserDataLoading && (
        <Container>
          {authStatus &&
            playlistData?.videos?.map(
              (videoData: Video) => (
                <PlaylistVideoCard
                  key={videoData.id}
                  videoData={videoData}
                  userData={userData}
                  playlistData={playlistData}
                />
              )
            ): null}
        </Container>
      )}
    </div>
  );
};

export default PlaylistPage;
