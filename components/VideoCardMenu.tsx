import { useRouter } from "next/router";
import {
  MdPlaylistAdd,
  MdThumbUp,
  MdWatchLater,
} from "react-icons/md";
import { useAuthStore } from "../store";
import { User, Video } from "../types";
import {
  useAddToLiked,
  useAddTOWatchLater,
  useRemoveFromWatchLater,
  useRemoveFromLiked,
} from "../hooks";

import {
  isVideoInLiked,
  isVideoInPlaylist,
  isVideoInWatchLater,
} from "../utility";

type VideoCardMenuProps = {
  userData: User;
  videoData: Video;
  toggleShowPlaylistModal: () => void;
};

const VideoCardMenu = ({
  userData,
  videoData,
  toggleShowPlaylistModal,
}: VideoCardMenuProps): React.ReactElement => {
  const authStatus = useAuthStore(
    (store: any) => store.authStatus
  );
  const token = useAuthStore((store: any) => store.token);

  const router = useRouter();

  const navigate = () => router.push("/login");

  const { mutate: addToLiked } = useAddToLiked(
    videoData,
    token
  );
  const { mutate: removeFromLiked } = useRemoveFromLiked(
    videoData,
    token
  );
  const { mutate: addToWatchLater } = useAddTOWatchLater(
    videoData,
    token
  );
  const { mutate: removeFromWatchLater } =
    useRemoveFromWatchLater(videoData, token);

  return (
    <ul className="bg-background absolute bottom-1 right-2 h-fit w-fit space-y-1 border bg-white py-1 text-xs text-black shadow-md transition-all dark:border-dark-border dark:bg-dark-background dark:text-gray-200">
      {authStatus && isVideoInLiked(userData, videoData) ? (
        <li
          className="flex items-center gap-2 p-2 transition-all hover:bg-gray-300 dark:hover:bg-dark-hover"
          onClick={() => removeFromLiked()}
        >
          <MdThumbUp /> REMOVE FROM LIKED
        </li>
      ) : (
        <li
          className="flex items-center gap-2 p-2 transition-all  hover:bg-gray-300 dark:hover:bg-dark-hover"
          onClick={() => {
            authStatus ? addToLiked() : navigate();
          }}
        >
          <MdThumbUp /> ADD TO LIKE
        </li>
      )}
      {authStatus &&
      isVideoInPlaylist(userData.playlist, videoData)
        .status ? (
        <li
          className="flex items-center gap-2 p-2  transition-all hover:bg-gray-300 dark:hover:bg-dark-hover"
          onClick={toggleShowPlaylistModal}
        >
          <MdPlaylistAdd /> REMOVE FROM PLAYLIST
        </li>
      ) : (
        <li
          className="flex items-center gap-2 p-2  transition-all hover:bg-gray-300 dark:hover:bg-dark-hover"
          onClick={() => {
            authStatus
              ? toggleShowPlaylistModal()
              : navigate();
          }}
        >
          <MdPlaylistAdd /> ADD TO PLAYLIST
        </li>
      )}
      {authStatus &&
      isVideoInWatchLater(userData, videoData) ? (
        <li
          className="flex items-center gap-2 p-2  transition-all hover:bg-gray-300 dark:hover:bg-dark-hover"
          onClick={() => removeFromWatchLater()}
        >
          <MdWatchLater /> REMOVE FROM WATCH LATER
        </li>
      ) : (
        <li
          className="flex items-center gap-2 p-2  transition-all hover:bg-gray-300 dark:hover:bg-dark-hover"
          onClick={() => {
            authStatus ? addToWatchLater() : navigate();
          }}
        >
          <MdWatchLater /> WATCH LATER
        </li>
      )}
    </ul>
  );
};

export default VideoCardMenu;
