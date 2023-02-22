import { useRouter } from "next/router";
import {
  Container,
  LoadingSpinner,
} from "../../components";
import EmptyCategory from "../../components/EmptyCategory";
import LikedVideoCard from "../../components/LikedVideoCard";
import { useGetUserData } from "../../hooks";
import { useAuthStore } from "../../store";
import { Video } from "../../types";
import { useEffect } from "react";

const LikedPage = (): React.ReactElement => {
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
      {authStatus && userData?.liked.length > 0 ? (
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
