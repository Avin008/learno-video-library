import { useState } from "react";
import { MdClose } from "react-icons/md";

const CreatePlaylistModal = ({
  togglePlaylistModal,
}: {
  togglePlaylistModal: () => void;
}): React.ReactElement => {
  const [showError, setShowError] = useState<boolean>(false);

  const handlePlaylistModalClose = (e: React.SyntheticEvent) => {
    e.stopPropagation();
  };

  const data = ["Sports", "Music", "Entertainment"];

  return (
    <div
      className="fixed top-0 bottom-0 left-0 right-0 z-20 flex items-center justify-center bg-black bg-opacity-30 transition-all"
      onClick={togglePlaylistModal}
    >
      <div
        className="mx-2 h-fit w-80 rounded-md bg-gray-800 shadow-md"
        onClick={handlePlaylistModalClose}
      >
        <div className="flex items-center justify-between border-b border-gray-700 p-2">
          <h1 className="text-lg font-normal text-gray-200">Save to...</h1>
          <MdClose
            className="text-2xl text-gray-200 hover:cursor-pointer"
            onClick={togglePlaylistModal}
          />
        </div>
        <ul className="h-40 space-y-3 overflow-y-scroll py-1 text-gray-200 shadow-inner">
          {data.map((x) => (
            <li
              className="flex items-center gap-3 p-2 hover:cursor-pointer"
              key={x}
            >
              <input
                className="h-4 w-4 border-2 border-gray-200"
                type="checkbox"
                name=""
                id=""
              />
              {x}
            </li>
          ))}
        </ul>
        <div className="flex h-fit flex-col space-y-3 border-t border-gray-700 px-3 pb-3">
          <label className="text-gray-200" htmlFor=""></label>
          <input
            className="w-full border-b border-primary bg-transparent p-1 text-gray-300 outline-none placeholder:text-gray-500"
            type="text"
            name=""
            id=""
            required
            placeholder="playlist name"
          />
          {showError && (
            <span className="font-medium text-red-500">
              playlist already exist!
            </span>
          )}
          <div className="w-full">
            {" "}
            <button
              className="w-full rounded-md bg-primary p-1 text-gray-100"
              onClick={() => setShowError((prev) => !prev)}
            >
              Create new playlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePlaylistModal;
