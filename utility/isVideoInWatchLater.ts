import { User, Video } from "../types";

const isVideoInWatchLater = (userData: User, videoData: Video) =>
  userData.watchLater.find((x) => x.id === videoData.id) ? true : false;

export default isVideoInWatchLater;
