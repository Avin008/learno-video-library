import { useRouter } from "next/router";
import {
  Container,
  LoadingSpinner,
} from "../../components";
import EmptyCategory from "../../components/EmptyCategory";
import PlaylistCard from "../../components/PlaylistCard";
import { useGetUserData } from "../../hooks";
import { useAuthStore } from "../../store";
import { Playlist } from "../../types";
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

  useEffect(() => {
    if (!authStatus) {
      router.push("/login");
    }
  }, [authStatus]);

  if (isUserDataLoading) {
    return <LoadingSpinner />;
  }

  return (
    <Container>
      <head>
        <title>Playlist | Learno</title>
      </head>
      {authStatus ? (
        userData?.playlist.length > 0 ? (
          userData?.playlist?.map((x: Playlist) => (
            <PlaylistCard
              key={x.id}
              playlistData={x}
              userData={userData}
            />
          ))
        ) : (
          <EmptyCategory
            img="subscription.png"
            link="/"
            message="Your Playlist is Empty"
          />
        )
      ) : null}
    </Container>
  );
};

export default PlaylistPage;
