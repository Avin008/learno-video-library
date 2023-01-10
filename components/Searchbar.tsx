import { MdSearch } from "react-icons/md";

const Searchbar = () => {
  return (
    <div className="relative w-4/12 space-y-2 rounded-md">
      <div className="relative flex h-10 items-center rounded-md border border-dark-border focus-within:border-gray-500">
        <input
          className="h-full w-11/12 bg-transparent px-4 text-gray-300 outline-none placeholder-shown:border-gray-700"
          type="text"
          placeholder="Search Videos"
        />
        <span className="absolute right-1 rounded-md bg-dark-hover p-1 text-gray-200">
          <MdSearch size={25} />
        </span>
      </div>
      {false && (
        <div className="absolute left-0 right-0 h-32 rounded-md border border-dark-border"></div>
      )}
    </div>
  );
};

export default Searchbar;
