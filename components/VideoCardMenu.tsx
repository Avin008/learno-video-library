import { MdPlaylistAdd, MdThumbUp, MdWatchLater } from "react-icons/md";

const VideoCardMenu = ({
  togglePlaylistModal,
}: {
  togglePlaylistModal: () => void;
}): React.ReactElement => {
  return (
    <ul className="absolute bottom-1 right-2 h-fit w-44 space-y-1 border border-gray-600 bg-background bg-opacity-95 py-1 text-xs text-gray-200 shadow-md transition-all">
      <li className="flex items-center gap-2 p-2 transition-all hover:bg-hover">
        <MdThumbUp /> ADD TO LIKE
      </li>
      <li
        className="flex items-center gap-2 p-2 transition-all hover:bg-hover"
        onClick={togglePlaylistModal}
      >
        <MdPlaylistAdd /> ADD TO PLAYLIST
      </li>
      <li className="flex items-center gap-2 p-2 transition-all hover:bg-hover">
        <MdWatchLater /> WATCH LATER
      </li>
    </ul>
  );
};

export default VideoCardMenu;
