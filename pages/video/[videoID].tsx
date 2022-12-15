import CreatePlaylistModal from "../../components/CreatePlaylistModal";
import SingleVideoCard from "../../components/SingleVideoCard";
import SuggestedVideoCard from "../../components/SuggestedVideoCard";
import {
  useGetCollectionData,
  useGetUserData,
  useGetVideoData,
  useToggle,
} from "../../hooks";
import { useRouter } from "next/router";
import { LoadingSpinner } from "../../components";
import { Video } from "../../types";

const SingleVideoPage =
  (): React.ReactElement => {
    const {
      show: showPlaylistModel,
      toggle: toggleShowPlaylistModal,
    } = useToggle();

    const router = useRouter();

    const videoID = router.query
      .videoID as string;
    const isReady = router.isReady;

    const {
      data: videoData,
      isLoading: isVideoDataLoading,
      isError: isVideoDataError,
    } = useGetVideoData(videoID, isReady);

    const {
      data: userData,
      isLoading: isUserDataLoading,
      isError: isUserDataError,
    } = useGetUserData();

    const {
      data: SuggestedVideoData,
      isLoading: isSuggestedVideoData,
      isError: isSuggestedVideoDataError,
    } = useGetCollectionData("videos");

    return (
      <div className="mt-2 grid gap-5 px-2 sm:col-span-12 sm:grid-cols-1 md:grid-cols-8 lg:col-span-10">
        {isVideoDataLoading ? (
          <LoadingSpinner />
        ) : (
          <div className="md:col-span-5">
            <SingleVideoCard
              key={videoData.id}
              videoData={videoData}
              userData={userData}
              toggleShowPlaylistModal={
                toggleShowPlaylistModal
              }
            />
          </div>
        )}
        {!isVideoDataLoading && (
          <div className="space-y-5 p-1 md:col-span-3">
            {SuggestedVideoData.filter(
              (data: Video) =>
                data.id !== videoData.id
            ).map((x: Video) => (
              <SuggestedVideoCard
                key={x.id}
                videoData={x}
              />
            ))}
          </div>
        )}
        {showPlaylistModel && (
          <CreatePlaylistModal
            videoData={videoData}
            userData={userData}
            toggleShowPlaylistModal={
              toggleShowPlaylistModal
            }
          />
        )}
      </div>
    );
  };

export default SingleVideoPage;
