import Image from "next/image";
import { data } from "..";
import CreatePlaylistModal from "../../components/CreatePlaylistModal";
import SingleVideoCard from "../../components/SingleVideoCard";
import SuggestedVideoCard from "../../components/SuggestedVideoCard";
import { useState } from "react";

const SingleVideoPage = (): React.ReactElement => {
  const [showPlaylistModel, setShowPlaylistModal] = useState<boolean>(false);

  const togglePlaylistModal = (): void => {
    setShowPlaylistModal((prev) => !prev);
  };

  return (
    <div className="mt-2 grid gap-5 px-2 sm:col-span-12 sm:grid-cols-1 md:grid-cols-8 lg:col-span-10">
      <div className="md:col-span-5">
        <SingleVideoCard togglePlaylistModal={togglePlaylistModal} />
      </div>
      <div className="space-y-5 p-1 md:col-span-3">
        {data.map((x) => (
          <SuggestedVideoCard key={x._id} videoData={x} />
        ))}
      </div>
      {showPlaylistModel && (
        <CreatePlaylistModal togglePlaylistModal={togglePlaylistModal} />
      )}
    </div>
  );
};

export default SingleVideoPage;
