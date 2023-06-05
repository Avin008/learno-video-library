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
import { useEffect, useState } from "react";
import useGetVideosData from "../hooks/useGetVideosData";
import { useQueryClient } from "@tanstack/react-query";

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
  const queryClient = useQueryClient();
  const [initialRefech, setInitialRefetch] =
    useState<boolean>(false);

  const {
    data: videoData,
    isInitialLoading: isLoading,
    hasNextPage,
    isFetching,
    refetch,
    ref,
  } = useGetVideosData(category);

  const categorySetter = (category: string): void => {
    setCategory(category);
    setInitialRefetch(true);
  };

  useEffect(() => {
    if (initialRefech) {
      refetch();
    }
  }, [category, initialRefech]);

  return (
    <div className="space-y-3 px-2 sm:col-span-12 lg:col-span-10">
      {!isvideosLoading && (
        <CategoryChips
          videoData={videos}
          category={category}
          categorySetterFunc={categorySetter}
        />
      )}

      <Container>
        {isvideosLoading && <LoadingSpinner />}
        {!isvideosLoading &&
          videoData?.pages.map((x: any) => (
            <>
              {x.docs.map((video: Video) => (
                <VideoCard
                  key={video.id}
                  videoData={video}
                  userData={userData}
                />
              ))}
            </>
          ))}
      </Container>
      {hasNextPage && (
        <div
          ref={ref}
          className="flex w-full justify-center text-gray-400"
        >
          Loading more...
        </div>
      )}
    </div>
  );
}
