import React from "react";
import { MdPlaylistAdd, MdThumbUp, MdWatchLater } from "react-icons/md";

const PlaylistCardMenu = (): React.ReactElement => {
  const handleClick = (e: React.SyntheticEvent) => {
    e.stopPropagation();
  };

  return (
    <ul className="absolute bottom-1 right-2 z-10 h-fit w-fit space-y-1 border py-1 text-xs shadow-md transition-all dark:border-dark-border dark:bg-dark-background dark:text-gray-200">
      <li
        className="flex items-center gap-2 p-2 transition-all dark:hover:bg-dark-hover"
        onClick={handleClick}
      >
        <MdPlaylistAdd className="text-xl" /> REMOVE FROM PLAYLIST
      </li>
    </ul>
  );
};

export default PlaylistCardMenu;
