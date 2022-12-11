import Head from "next/head";
import CreatePlaylistModal from "../components/CreatePlaylistModal";
import VideoCard from "../components/VideoCard";
import { useState } from "react";
import { useGetCollectionData, useGetUserData } from "../hooks";
import { Video } from "../types";

export default function Home() {
  const [showPlaylistModal, setShowPlaylistModal] = useState<boolean>(false);

  const togglePlaylistModal = (): void => {
    setShowPlaylistModal((prev) => !prev);
  };

  const {
    data: videoData,
    isLoading: isVideoDataLoading,
    isError: isVideoDataError,
  } = useGetCollectionData("videos");

  const { data: userData, isLoading, isError } = useGetUserData();

  return (
    <div className="grid gap-5 p-2 sm:col-span-12 sm:grid-cols-1 md:grid-cols-2 lg:col-span-10 lg:grid-cols-3">
      {videoData?.map((video: Video) => (
        <VideoCard
          key={video.id}
          videoData={video}
          userData={userData}
          togglePlaylistModal={togglePlaylistModal}
        />
      ))}
      {showPlaylistModal && (
        <CreatePlaylistModal togglePlaylistModal={togglePlaylistModal} />
      )}
    </div>
  );
}
