import React from "react";
import { MdPlaylistAdd, MdThumbUp, MdWatchLater } from "react-icons/md";

const WatchLaterVideoCardMenu = (): React.ReactElement => {
  const handleClick = (e: React.SyntheticEvent) => {
    e.stopPropagation();
  };

  return (
    <ul className="bg-background absolute bottom-1 right-2 z-10 h-fit w-fit space-y-1 border border-dark-border bg-dark-background py-1 text-xs text-gray-200 shadow-md transition-all">
      <li
        className="flex items-center gap-2 p-2 transition-all hover:bg-dark-hover"
        onClick={handleClick}
      >
        <MdPlaylistAdd className="text-xl" /> REMOVE FROM WATCH LATER
      </li>
    </ul>
  );
};

export default WatchLaterVideoCardMenu;
