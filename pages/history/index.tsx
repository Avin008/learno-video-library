import { LoadingSpinner } from "../../components";
import HistoryVideoCard from "../../components/HistoryVideoCard";
import { data } from "../../data";
import { useGetUserData } from "../../hooks";
import { Video } from "../../types";

const HistoryPage = (): React.ReactElement => {
  const {
    data: userData,
    isLoading: isUserDataLoading,
    isError,
  } = useGetUserData();

  return (
    <div className="grid gap-5 p-2 sm:col-span-12 sm:grid-cols-1 md:grid-cols-2 lg:col-span-10 lg:grid-cols-3">
      {isUserDataLoading && <LoadingSpinner />}
      {userData?.history?.map(
        (videoData: Video) => (
          <HistoryVideoCard
            key={videoData.id}
            videoData={videoData}
          />
        )
      )}
    </div>
  );
};

export default HistoryPage;
