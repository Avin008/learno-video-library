import { Playlist, Video } from "../types";

const removeVideoFromPlaylistFunc = (
  userPlaylistData: Playlist[],
  playlistData: Playlist,
  videoData: Video
) => {
  return userPlaylistData.map((x) => {
    if (x.id === playlistData.id) {
      return {
        ...x,
        videos: x.videos.filter((x) => x.id !== videoData.id),
      };
    } else {
      return x;
    }
  });
};

export default removeVideoFromPlaylistFunc;
