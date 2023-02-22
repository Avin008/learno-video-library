import { Playlist, Video } from "../types";

const addVideoToplaylistFunc = (
  userPlaylistData: Playlist[],
  playlistData: Playlist,
  videoData: Video
) => {
  return userPlaylistData.map((x) => {
    if (x.id === playlistData.id) {
      return {
        ...x,
        videos: [...x.videos, videoData],
      };
    } else {
      return x;
    }
  });
};

export default addVideoToplaylistFunc;
