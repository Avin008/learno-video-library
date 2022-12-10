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
      className="fixed top-0 bottom-0 left-0 right-0 z-20 flex items-center justify-center bg-black bg-opacity-30"
      onClick={togglePlaylistModal}
    >
      <div
        className="mx-2 h-fit w-80 rounded-md shadow-md dark:bg-dark-background"
        onClick={handlePlaylistModalClose}
      >
        <div className="flex items-center justify-between border-b p-2 dark:border-dark-border">
          <h1 className="text-lg font-normal dark:text-dark-text">
            Save to...
          </h1>
          <MdClose
            className="text-2xl hover:cursor-pointer dark:text-dark-text"
            onClick={togglePlaylistModal}
          />
        </div>
        <ul className="h-40 space-y-3 overflow-y-scroll p-2 shadow-inner dark:text-dark-text">
          {data.map((x) => (
            <li
              className="flex items-center gap-3 p-2 hover:cursor-pointer"
              key={x}
            >
              <input
                className="h-4 w-4 border-2 dark:border-dark-primary"
                type="checkbox"
                name=""
                id=""
              />
              {x}
            </li>
          ))}
        </ul>
        <div className="flex h-fit flex-col space-y-3 border-t px-3 py-3 dark:border-gray-700">
          <input
            className="w-full border-b bg-transparent p-1 outline-none placeholder:text-gray-500 dark:border-dark-primary dark:text-dark-text"
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
              className="w-full rounded-md p-1 dark:bg-dark-primary dark:text-dark-text"
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
