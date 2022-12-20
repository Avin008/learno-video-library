import { LoadingSpinner } from "../../components";
import PlaylistCard from "../../components/PlaylistCard";
import { useGetUserData } from "../../hooks";
import { Playlist } from "../../types";

const PlaylistPage = (): React.ReactElement => {
  const {
    data: userData,
    isLoading: isUserDataLoading,
    isError: isUserDataError,
  } = useGetUserData();

  return (
    <div className="space-y-3  sm:col-span-12 lg:col-span-10">
      {isUserDataLoading && <LoadingSpinner />}
      <div className="grid gap-5 p-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {userData?.playlist?.map(
          (x: Playlist) => (
            <PlaylistCard
              key={x.id}
              playlistData={x}
              userData={userData}
            />
          )
        )}
      </div>
    </div>
  );
};

export default PlaylistPage;
