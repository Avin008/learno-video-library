import React from "react";
import { MdDelete } from "react-icons/md";
import { useRemoveFromWatchLater } from "../hooks";
import { useAuthStore } from "../store";
import { Video } from "../types";

type WatchLaterVideoCardMenuProps = { videoData: Video };

const WatchLaterVideoCardMenu = ({
  videoData,
}: WatchLaterVideoCardMenuProps): React.ReactElement => {
  const token = useAuthStore((store: any) => store.token);

  const {
    mutate: removeVideoFromWatchLater,
    isLoading,
    isError,
  } = useRemoveFromWatchLater(videoData, token);

  const handleClick = (e: React.SyntheticEvent) => {
    e.stopPropagation();
    removeVideoFromWatchLater();
  };

  return (
    <ul className="bg-background absolute bottom-1 right-2 z-10 h-fit w-fit space-y-1 border bg-white py-1 text-xs shadow-md transition-all dark:border-dark-border dark:bg-dark-background dark:text-gray-200">
      <li
        className="flex items-center gap-2 p-2 transition-all hover:bg-gray-200 dark:hover:bg-dark-hover"
        onClick={handleClick}
      >
        <MdDelete className="text-xl" /> REMOVE FROM WATCH
        LATER
      </li>
    </ul>
  );
};

export default WatchLaterVideoCardMenu;
