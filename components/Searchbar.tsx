import React, { useState } from "react";
import { MdSearch } from "react-icons/md";

const Searchbar = () => {
  const [searchKey, setSearchKey] = useState<string>("");

  return (
    <div className="relative w-4/12 space-y-2 rounded-md">
      <div className="relative flex h-10 items-center rounded-md border border-dark-border focus-within:border-gray-500">
        <input
          className="h-full w-11/12 bg-transparent px-4 text-gray-300 outline-none placeholder-shown:border-gray-700"
          type="text"
          placeholder="Search Videos"
          onChange={(
            e: React.ChangeEvent<HTMLInputElement>
          ) => {
            setSearchKey(e.target.value);
          }}
        />
        <span className="absolute right-1 rounded-md bg-dark-hover p-1 text-gray-200">
          <MdSearch size={25} />
        </span>
      </div>
      {searchKey && (
        <ul className="absolute left-0 right-0 h-fit rounded-md border border-dark-border bg-dark-background py-1 shadow-md">
          {[
            "React Master Class",
            "Namaste Javascript",
            "Dragon Ball",
          ].map((x) => (
            <li className="p-2 text-dark-text hover:cursor-pointer hover:bg-dark-hover">
              {x}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Searchbar;
