import { Video, Playlist } from "../types";

const isVideoInPlaylist = (playlist: Playlist[], videoData: Video) => {
  let isInPlaylist = false;
  for (let x of playlist) {
    for (let y of x.videos) {
      if (y.id === videoData.id) {
        isInPlaylist = true;
      }
    }
  }
  return isInPlaylist;
};

export default isVideoInPlaylist;
