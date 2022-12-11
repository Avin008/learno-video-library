import { MdPlaylistAdd, MdThumbUp, MdWatchLater } from "react-icons/md";
import { useAuthStore } from "../store";
import { User, Video } from "../types";

const VideoCardMenu = ({
  togglePlaylistModal,
  userData,
  videoData,
}: {
  togglePlaylistModal: () => void;
  userData: User;
  videoData: Video;
}): React.ReactElement => {
  const authStatus = useAuthStore((store: any) => store.authStatus);

  const isVideoInLiked = userData.liked.find((x) => x.id === videoData.id)
    ? true
    : false;

  const isVideoInWatchLater = userData.watchLater.find(
    (x) => x.id === videoData.id
  )
    ? true
    : false;

  return (
    <ul className="bg-background absolute bottom-1 right-2 h-fit w-fit space-y-1 border py-1 text-xs shadow-md transition-all dark:border-dark-border dark:bg-dark-background dark:text-gray-200">
      {authStatus && isVideoInLiked ? (
        <li className="flex items-center gap-2 p-2 transition-all dark:hover:bg-dark-hover">
          <MdThumbUp /> REMOVE FROM LIKED
        </li>
      ) : (
        <li className="flex items-center gap-2 p-2 transition-all dark:hover:bg-dark-hover">
          <MdThumbUp /> ADD TO LIKE
        </li>
      )}
      <li
        className="flex items-center gap-2 p-2 transition-all dark:hover:bg-dark-hover"
        onClick={togglePlaylistModal}
      >
        <MdPlaylistAdd /> ADD TO PLAYLIST
      </li>
      {authStatus && isVideoInWatchLater ? (
        <li className="flex items-center gap-2 p-2 transition-all dark:hover:bg-dark-hover">
          <MdWatchLater /> REMOVE FROM WATCH LATER
        </li>
      ) : (
        <li className="flex items-center gap-2 p-2 transition-all dark:hover:bg-dark-hover">
          <MdWatchLater /> WATCH LATER
        </li>
      )}
    </ul>
  );
};

export default VideoCardMenu;
