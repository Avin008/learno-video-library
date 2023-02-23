import React from "react";
import { MdDelete } from "react-icons/md";
import { useRemoveVideoFromPlaylist } from "../hooks";
import { Playlist, User, Video } from "../types";

const PlaylistCardMenu = ({
  userData,
  videoData,
  playlistData,
}: {
  userData: User;
  videoData: Video;
  playlistData: Playlist;
}): React.ReactElement => {
  const { mutate: removeVideoFromPlaylist } =
    useRemoveVideoFromPlaylist(
      userData.playlist,
      videoData
    );

  const handleClick = (e: React.SyntheticEvent) => {
    e.stopPropagation();
    removeVideoFromPlaylist(playlistData);
  };

  return (
    <ul className="absolute bottom-1 right-2 z-10 h-fit w-fit space-y-1 border border-gray-600 bg-opacity-95 py-1 text-xs text-gray-200 shadow-md transition-all dark:border-dark-border dark:bg-dark-background">
      <li
        className="flex items-center gap-2 p-2 transition-all hover:bg-dark-hover"
        onClick={handleClick}
      >
        <MdDelete className="text-xl" /> REMOVE FROM
        PLAYLIST
      </li>
    </ul>
  );
};

export default PlaylistCardMenu;
