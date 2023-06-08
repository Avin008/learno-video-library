import { useInfiniteQuery } from "@tanstack/react-query";
import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
  where,
} from "firebase/firestore";
import { db } from "../services/firebase";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const useGetVideosData = (category: string) => {
  const categories = [
    "Talks",
    "React",
    "Lofi",
    "Javascript",
  ];

  const { inView, ref } = useInView();
  const {
    data,
    isInitialLoading,
    hasNextPage,
    isFetching,
    isRefetching,
    fetchNextPage,
    refetch,
  } = useInfiniteQuery(
    ["videos-data"],
    async ({ pageParam = 1 }) => {
      const collectionRef = collection(db, "videos");
      const q = query(
        collectionRef,
        orderBy("category"),
        where(
          "category",
          "not-in",
          categories.includes(category)
            ? categories.filter((x) => x !== category)
            : ["no-filter"]
        ),
        startAfter(pageParam),
        limit(6)
      );
      const docRef = (await getDocs(q)).docs?.slice(-1)[0];
      const docs = (await getDocs(q)).docs.map((videos) =>
        videos.data()
      );

      return { docRef, docs };
    },
    {
      getNextPageParam: (lastPage, pages) => {
        return lastPage.docRef;
      },
    }
  );

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  return {
    data,
    isInitialLoading,
    hasNextPage,
    fetchNextPage,
    isFetching,
    isRefetching,
    refetch,
    ref,
  };
};

export default useGetVideosData;
