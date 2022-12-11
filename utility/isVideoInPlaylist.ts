const isVideoInPlaylist = (playlist: any, videoId: string) => {
  let isInPlaylist = false;
  for (let x of playlist) {
    for (let y of x.videos) {
      if (y.id === videoId) {
        isInPlaylist = true;
      }
    }
  }
  return isInPlaylist;
};

export default isVideoInPlaylist;
