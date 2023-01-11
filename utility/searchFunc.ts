import { DocumentData } from "firebase/firestore";
import { Video } from "../types";
const searchFunc = (
  videoData: Video[] | DocumentData[] | undefined,
  searchKey: string
): any => {
  return videoData?.filter(
    (x) =>
      x.title
        .toLowerCase()
        .includes(searchKey.toLowerCase()) ||
      x.channelName.includes(searchKey.toLowerCase())
  );
};

export default searchFunc;
