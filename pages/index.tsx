import {
  LoadingSpinner,
  VideoCard,
} from "../components";
import {
  useGetCollectionData,
  useGetUserData,
  useToggle,
} from "../hooks";
import { Video } from "../types";

export default function Home() {
  const {
    data: videos,
    isLoading: isvideosLoading,
    isError: isvideosError,
  } = useGetCollectionData("videos");

  const {
    data: userData,
    isLoading: isUserDataLoading,
    isError: isUserDataError,
  } = useGetUserData();

  return (
    <div className="grid gap-5 p-2 sm:col-span-12 sm:grid-cols-1 md:grid-cols-2 lg:col-span-10 lg:grid-cols-3">
      {isvideosLoading ? (
        <LoadingSpinner />
      ) : (
        videos?.map((videoData: Video) => (
          <VideoCard
            key={videoData.id}
            videoData={videoData}
            userData={userData}
          />
        ))
      )}
    </div>
  );
}
