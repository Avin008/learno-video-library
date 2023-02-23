import { useRouter } from "next/router";
import {
  Container,
  LoadingSpinner,
} from "../../components";
import EmptyCategory from "../../components/EmptyCategory";
import WatchLaterVideoCard from "../../components/WatchLaterVideoCard";
import { useGetUserData } from "../../hooks";
import { useAuthStore } from "../../store";
import { Video } from "../../types";
import { useEffect } from "react";

const WatchLaterPage = (): React.ReactElement => {
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
      {authStatus ? (
        userData?.watchLater?.length > 0 ? (
          userData?.watchLater?.map((x: Video) => (
            <WatchLaterVideoCard key={x.id} videoData={x} />
          ))
        ) : (
          <EmptyCategory
            img="clock.png"
            link="/"
            message="You Haven't Added any videos to watch later yet!"
          />
        )
      ) : null}
    </Container>
  );
};

export default WatchLaterPage;
