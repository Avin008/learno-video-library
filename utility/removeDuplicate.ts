import { Video } from "../types";

const removeDuplicates = (videoData: Video[]) => {
  const categoryData = videoData.map(
    (x) => x.category
  );
  // @ts-ignore
  return ["All", ...new Set(categoryData)];
};

export default removeDuplicates;
