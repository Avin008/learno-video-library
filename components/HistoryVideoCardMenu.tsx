import React from "react";
import { MdPlaylistAdd, MdThumbUp, MdWatchLater } from "react-icons/md";

const HistoryVideoCardMenu = (): React.ReactElement => {
  const handleClick = (e: React.SyntheticEvent) => {
    e.stopPropagation();
  };

  return (
    <ul className="absolute bottom-1 right-2 z-10 h-fit w-fit space-y-1 border border-gray-600 bg-background bg-opacity-95 py-1 text-xs text-gray-200 shadow-md transition-all">
      <li
        className="flex items-center gap-2 p-2 transition-all hover:bg-hover"
        onClick={handleClick}
      >
        <MdPlaylistAdd className="text-xl" /> REMOVE FROM HISTORY
      </li>
    </ul>
  );
};

export default HistoryVideoCardMenu;