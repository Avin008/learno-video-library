import {
  CategoryChips,
  LoadingSpinner,
  VideoCard,
} from "../components";
import {
  useGetCollectionData,
  useGetUserData,
} from "../hooks";
import { Video } from "../types";
import { useState } from "react";
import { filterByCategory } from "../utility";

export default function Home() {
  const {
    data: videos,
    isLoading: isvideosLoading,
    isError: isvideosError,
  } = useGetCollectionData("videos");

  const {
    data: userData,
    isLoading: isUserDataLoading,
    isError: isUserDataError,
  } = useGetUserData();

  const [category, setCategory] = useState<string>("All");

  return (
    <div className="space-y-3 px-2 sm:col-span-12 lg:col-span-10">
      {!isvideosLoading && (
        <CategoryChips
          videoData={videos}
          category={category}
          categorySetterFunc={setCategory}
        />
      )}
      <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {isvideosLoading ? (
          <LoadingSpinner />
        ) : (
          filterByCategory(videos, category).map(
            (videoData: Video) => (
              <VideoCard
                key={videoData.id}
                videoData={videoData}
                userData={userData}
              />
            )
          )
        )}
      </div>
    </div>
  );
}
