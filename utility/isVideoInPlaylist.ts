import { Video, Playlist } from "../types";

const isVideoInPlaylist = (playlist: Playlist[], videoData: Video) => {
  let inPlaylist: {
    status: boolean;
    video: null | Video;
    playlist: null | Playlist;
  } = { status: false, video: null, playlist: null };
  for (let x of playlist) {
    for (let y of x.videos) {
      if (y.id === videoData.id) {
        (inPlaylist.status = true),
          (inPlaylist.video = y),
          (inPlaylist.playlist = x);
      }
    }
  }
  return inPlaylist;
};

export default isVideoInPlaylist;
