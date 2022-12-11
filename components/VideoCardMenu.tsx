import { useRouter } from "next/router";
import { MdPlaylistAdd, MdThumbUp, MdWatchLater } from "react-icons/md";
import {
  useAddToLiked,
  useAddTOWatchLater,
  useRemoveFromWatchLater,
} from "../hooks";
import useRemoveFromLiked from "../hooks/useRemoveFromLiked";
import { useAuthStore } from "../store";
import { User, Video } from "../types";
import isVideoInPlaylist from "../utility/isVideoInPlaylist";

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
  const token = useAuthStore((store: any) => store.token);

  const router = useRouter();

  const navigate = () => router.push("/login");

  const isVideoInLiked = userData.liked.find((x) => x.id === videoData.id)
    ? true
    : false;

  const isVideoInWatchLater = userData.watchLater.find(
    (x) => x.id === videoData.id
  )
    ? true
    : false;

  const { mutate: addToLiked } = useAddToLiked(videoData, token);
  const { mutate: removeFromLiked } = useRemoveFromLiked(videoData, token);
  const { mutate: addToWatchLater } = useAddTOWatchLater(videoData, token);
  const { mutate: removeFromWatchLater } = useRemoveFromWatchLater(
    videoData,
    token
  );

  return (
    <ul className="bg-background absolute bottom-1 right-2 h-fit w-fit space-y-1 border py-1 text-xs shadow-md transition-all dark:border-dark-border dark:bg-dark-background dark:text-gray-200">
      {authStatus && isVideoInLiked ? (
        <li
          className="flex items-center gap-2 p-2 transition-all dark:hover:bg-dark-hover"
          onClick={() => removeFromLiked()}
        >
          <MdThumbUp /> REMOVE FROM LIKED
        </li>
      ) : (
        <li
          className="flex items-center gap-2 p-2 transition-all dark:hover:bg-dark-hover"
          onClick={() => {
            authStatus ? addToLiked() : navigate();
          }}
        >
          <MdThumbUp /> ADD TO LIKE
        </li>
      )}
      {authStatus && isVideoInPlaylist(userData.playlist, videoData.id) ? (
        <li
          className="flex items-center gap-2 p-2 transition-all dark:hover:bg-dark-hover"
          onClick={togglePlaylistModal}
        >
          <MdPlaylistAdd /> REMOVE FROM PLAYLIST
        </li>
      ) : (
        <li
          className="flex items-center gap-2 p-2 transition-all dark:hover:bg-dark-hover"
          onClick={() => {
            authStatus ? togglePlaylistModal() : navigate();
          }}
        >
          <MdPlaylistAdd /> ADD TO PLAYLIST
        </li>
      )}
      {authStatus && isVideoInWatchLater ? (
        <li
          className="flex items-center gap-2 p-2 transition-all dark:hover:bg-dark-hover"
          onClick={() => removeFromWatchLater()}
        >
          <MdWatchLater /> REMOVE FROM WATCH LATER
        </li>
      ) : (
        <li
          className="flex items-center gap-2 p-2 transition-all dark:hover:bg-dark-hover"
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
