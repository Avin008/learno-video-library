import { User, Video } from "../types";

const isVideoInLiked = (userData: User, videoData: Video) =>
  userData.liked.find((x) => x.id === videoData.id) ? true : false;

export default isVideoInLiked;
