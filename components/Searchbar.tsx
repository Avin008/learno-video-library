import { DocumentData } from "firebase/firestore";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { MdSearch } from "react-icons/md";
import { useSearch } from "../hooks";
import { Video } from "../types";
import { searchFunc } from "../utility";

const Searchbar = () => {
  const [searchKey, setSearchKey] = useState<string>("");
  const router = useRouter();
  const { searchData, isLoading, isError } = useSearch();

  return (
    <div className="relative w-4/12 space-y-2 rounded-md">
      <div className="relative flex h-10 items-center rounded-md border border-dark-border focus-within:border-gray-500">
        <input
          className="h-full w-11/12 bg-transparent px-4 outline-none dark:text-gray-300 dark:placeholder-shown:border-gray-700"
          type="text"
          placeholder="Search Videos"
          value={searchKey}
          onChange={(
            e: React.ChangeEvent<HTMLInputElement>
          ) => {
            setSearchKey(e.target.value);
          }}
        />
        <span className="absolute right-1 rounded-md p-1 dark:text-gray-300">
          <MdSearch size={25} />
        </span>
      </div>
      {searchFunc(searchData, searchKey) && searchKey && (
        <ul className="absolute left-0 right-0 h-fit rounded-md bg-white shadow-md dark:bg-dark-background">
          {searchFunc(searchData, searchKey)?.map(
            (x: Video) => (
              <li
                key={x.id}
                className="border p-2 text-sm hover:cursor-pointer hover:bg-gray-100 dark:border-dark-border dark:text-dark-text dark:hover:bg-dark-hover"
                onClick={() => {
                  router.push(`/video/${x.id}`);
                  setSearchKey("");
                }}
              >
                {x.title}
              </li>
            )
          )}
        </ul>
      )}
    </div>
  );
};

export default Searchbar;
