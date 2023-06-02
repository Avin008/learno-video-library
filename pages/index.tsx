import {
  CategoryChips,
  Container,
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
      <head>
        <title>Home | Learno</title>
      </head>
      {!isvideosLoading && (
        <CategoryChips
          videoData={videos}
          category={category}
          categorySetterFunc={setCategory}
        />
      )}
      <Container>
        {isvideosLoading && <LoadingSpinner />}
        {!isvideosLoading &&
          filterByCategory(videos, category).map(
            (videoData: Video) => (
              <VideoCard
                key={videoData.id}
                videoData={videoData}
                userData={userData}
              />
            )
          )}
      </Container>
    </div>
  );
}
