import Image from "next/image";
import { MdMoreVert } from "react-icons/md";
import { CreatePlaylistModal, VideoCardMenu } from "../components";
import { useRouter } from "next/router";
import { User, Video } from "../types";
import { useAddToHistory, useToggle } from "../hooks";
import { useAuthStore } from "../store";

type VideoCardProps = {
  videoData: Video;
  userData: User;
};

const VideoCard = ({
  videoData,
  userData,
}: VideoCardProps): React.ReactElement => {
  const { show: showVideoOptions, toggle: toggleShowVideoOptions } =
    useToggle();

  const { show: showPlaylistModal, toggle: toggleShowPlaylistModal } =
    useToggle();

  const authStatus = useAuthStore((store: any) => store.authStatus);

  const router = useRouter();
  const {
    mutate: addToHistory,
    isLoading,
    isError,
  } = useAddToHistory(videoData, userData.id);

  const navigate = () => {
    router.push(`/video/${videoData.id}`);
    authStatus && addToHistory();
  };

  return (
    <div className="h-full w-full">
      <div className="relative aspect-video hover:cursor-pointer">
        <Image
          className=""
          src={videoData.thumbnail}
          alt=""
          fill
          onClick={navigate}
        />
        {showVideoOptions && (
          <VideoCardMenu
            toggleShowPlaylistModal={toggleShowPlaylistModal}
            userData={userData}
            videoData={videoData}
          />
        )}
      </div>
      <div className="grid grid-cols-8 pt-3">
        <div className="col-span-2 flex justify-center">
          <div className="relative h-10 w-10">
            <Image
              className="rounded-full"
              src={videoData.channelIcon}
              alt=""
              fill
            />
          </div>
        </div>
        <div className="col-span-5 space-y-1">
          <h1 className="text-sm font-semibold leading-5 dark:text-gray-300">
            {videoData.title.length > 50
              ? `${videoData.title.slice(0, 50)}..`
              : videoData.title}
          </h1>
          <h2 className="text-sm font-semibold dark:text-gray-400">
            {videoData.channelName}
          </h2>
        </div>
        <div className="col-span-1 flex items-start justify-end">
          <span
            className="rounded-full p-1 hover:cursor-pointer dark:hover:bg-dark-hover"
            onClick={toggleShowVideoOptions}
          >
            <MdMoreVert className="rounded-full dark:text-gray-200" size={25} />
          </span>
        </div>
      </div>
      {showPlaylistModal && (
        <CreatePlaylistModal
          userData={userData}
          videoData={videoData}
          toggleShowPlaylistModal={toggleShowPlaylistModal}
        />
      )}
    </div>
  );
};

export default VideoCard;
