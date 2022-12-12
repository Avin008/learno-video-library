import Image from "next/image";
import CreatePlaylistModal from "../../components/CreatePlaylistModal";
import SingleVideoCard from "../../components/SingleVideoCard";
import SuggestedVideoCard from "../../components/SuggestedVideoCard";
import { useState } from "react";
import { data } from "../../data";
import { useGetVideoData, useToggle } from "../../hooks";
import { useRouter } from "next/router";

const SingleVideoPage = (): React.ReactElement => {
  const { show: showPlaylistModel, toggle: toggleShowPlaylistModal } =
    useToggle();

  const router = useRouter();

  const videoID = router.query.videoID as string;
  const isReady = router.isReady;

  const {
    data: videoData,
    isLoading: isVideoDataLoading,
    isError: isVideoDataError,
  } = useGetVideoData(videoID, isReady);

  return (
    <div className="mt-2 grid gap-5 px-2 sm:col-span-12 sm:grid-cols-1 md:grid-cols-8 lg:col-span-10">
      <div className="md:col-span-5">
        <SingleVideoCard
          key={videoData.id}
          videoData={videoData}
          togglePlaylistModal={toggleShowPlaylistModal}
        />
      </div>
      <div className="space-y-5 p-1 md:col-span-3">
        {data.map((x) => (
          <SuggestedVideoCard key={x._id} videoData={x} />
        ))}
      </div>
      {/* {showPlaylistModel && (
        <CreatePlaylistModal toggleShowPlaylistModal={togglePlaylistModal} />
      )} */}
    </div>
  );
};

export default SingleVideoPage;
