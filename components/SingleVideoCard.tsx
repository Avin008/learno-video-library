import Image from "next/image";
import { useRouter } from "next/router";
import {
  MdOutlineThumbUp,
  MdPlaylistAdd,
  MdWatchLater,
} from "react-icons/md";
import {
  useAddToLiked,
  useAddTOWatchLater,
  useRemoveFromLiked,
  useRemoveFromWatchLater,
} from "../hooks";
import { useAuthStore } from "../store";
import { User, Video } from "../types";
import {
  isVideoInLiked,
  isVideoInPlaylist,
  isVideoInWatchLater,
} from "../utility";

const SingleVideoCard = ({
  toggleShowPlaylistModal,
  videoData,
  userData,
}: {
  toggleShowPlaylistModal: () => void;
  videoData: Video;
  userData: User;
}): React.ReactElement => {
  const authStatus = useAuthStore(
    (store: any) => store.authStatus
  );

  const token = useAuthStore(
    (store: any) => store.token
  );

  const router = useRouter();

  const navigate = () => {
    router.push("/login");
  };

  const { mutate: addVideoToLiked } =
    useAddToLiked(videoData, token);

  const { mutate: removeVideoFromLiked } =
    useRemoveFromLiked(videoData, token);

  const { mutate: addToWatchLater } =
    useAddTOWatchLater(videoData, token);
  const { mutate: removeFromWatchLate } =
    useRemoveFromWatchLater(videoData, token);

  return (
    <div className="space-y-3">
      <div className="relative aspect-video">
        <iframe
          height="100%"
          width="100%"
          src={videoData.videoLink}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
      <div className="px-2 sm:space-y-1 md:space-y-4 lg:space-y-4">
        <h1 className="text-lg font-medium dark:text-gray-300">
          {videoData.title}
        </h1>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 font-semibold dark:text-gray-400">
            <div className="relative h-10 w-10 rounded-full">
              <Image
                className="rounded-full"
                src={videoData.channelIcon}
                alt=""
                fill
              />
            </div>
            <span>{videoData.channelName}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-5 text-xs dark:text-gray-100 sm:justify-end">
          {authStatus &&
          isVideoInLiked(userData, videoData) ? (
            <span
              className="flex w-fit cursor-pointer items-center gap-2 rounded-md border p-1 dark:hover:bg-dark-hover lg:px-4"
              onClick={() => {
                removeVideoFromLiked();
              }}
            >
              <MdOutlineThumbUp size={18} />
              <span className="sm:hidden md:block">
                REMOVE FROM LIKE
              </span>
            </span>
          ) : (
            <span
              className="flex w-fit cursor-pointer items-center gap-2 rounded-md border p-1 dark:hover:bg-dark-hover lg:px-4"
              onClick={() => {
                authStatus
                  ? addVideoToLiked()
                  : navigate();
              }}
            >
              <MdOutlineThumbUp size={18} />
              <span className="sm:hidden md:block">
                LIKE
              </span>
            </span>
          )}
          {authStatus &&
          isVideoInPlaylist(
            userData.playlist,
            videoData
          ).status ? (
            <span
              className="border-primary flex w-fit cursor-pointer items-center gap-2 rounded-md border  p-1 dark:hover:bg-dark-hover lg:px-4"
              onClick={() => {
                authStatus
                  ? toggleShowPlaylistModal()
                  : navigate();
              }}
            >
              <MdPlaylistAdd size={18} />
              <span className="sm:hidden md:block">
                REMOVE FROM PLAYLIST
              </span>
            </span>
          ) : (
            <span
              className="border-primary flex w-fit cursor-pointer items-center gap-2 rounded-md border  p-1 dark:hover:bg-dark-hover lg:px-4"
              onClick={() => {
                authStatus
                  ? toggleShowPlaylistModal()
                  : navigate();
              }}
            >
              <MdPlaylistAdd size={18} />
              <span className="sm:hidden md:block">
                ADD TO PLAYLIST
              </span>
            </span>
          )}
          {authStatus &&
          isVideoInWatchLater(
            userData,
            videoData
          ) ? (
            <span
              className="border-primary dark:hover:bg-hover flex w-fit cursor-pointer items-center gap-2 rounded-md  border p-1 lg:px-4"
              onClick={() => {
                removeFromWatchLate();
              }}
            >
              <MdWatchLater size={18} />
              <span className="sm:hidden md:block">
                REMOVE FROM WATCH LATER
              </span>
            </span>
          ) : (
            <span
              className="border-primary dark:hover:bg-hover flex w-fit cursor-pointer items-center gap-2 rounded-md  border p-1 lg:px-4"
              onClick={() => {
                authStatus
                  ? addToWatchLater()
                  : navigate();
              }}
            >
              <MdWatchLater size={18} />
              <span className="sm:hidden md:block">
                WATCH LATER
              </span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleVideoCard;
