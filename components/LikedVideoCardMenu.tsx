import React from "react";
import { MdDelete } from "react-icons/md";
import { useRemoveFromLiked } from "../hooks";
import { useAuthStore } from "../store";
import { Video } from "../types";

const LikedVideoCardMenu = ({
  videoData,
}: {
  videoData: Video;
}): React.ReactElement => {
  const token = useAuthStore((store: any) => store.token);

  const { mutate: removeVideoFromLiked } =
    useRemoveFromLiked(videoData, token);

  const handleClick = (e: React.SyntheticEvent) => {
    e.stopPropagation();
    removeVideoFromLiked();
  };

  return (
    <ul className="bg-background absolute bottom-1 right-2 z-10 h-fit w-fit space-y-1 border py-1 text-xs shadow-md transition-all dark:border-dark-border dark:bg-dark-background dark:text-gray-200">
      <li
        className="flex items-center gap-2 p-2 transition-all dark:hover:bg-dark-hover"
        onClick={handleClick}
      >
        <MdDelete className="text-xl" /> REMOVE FROM LIKED
      </li>
    </ul>
  );
};

export default LikedVideoCardMenu;
