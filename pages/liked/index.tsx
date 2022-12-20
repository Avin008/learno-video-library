import { LoadingSpinner } from "../../components";
import LikedVideoCard from "../../components/LikedVideoCard";
import { data } from "../../data";
import { useGetUserData } from "../../hooks";
import { Video } from "../../types";

const LikedPage = (): React.ReactElement => {
  const {
    data: userData,
    isLoading: isUserDataLoading,
    isError: isUserDataError,
  } = useGetUserData();

  return (
    <div className="grid gap-5 p-2 sm:col-span-12 sm:grid-cols-1 md:grid-cols-2 lg:col-span-10 lg:grid-cols-3">
      {isUserDataLoading && <LoadingSpinner />}
      {userData?.liked?.map(
        (videoData: Video) => (
          <LikedVideoCard
            key={videoData.id}
            videoData={videoData}
          />
        )
      )}
    </div>
  );
};

export default LikedPage;
