import Image from "next/image";
import {
  MdOutlineThumbUp,
  MdPlaylistAdd,
  MdThumbUp,
  MdWatchLater,
} from "react-icons/md";

const SingleVideoCard = ({
  togglePlaylistModal,
}: {
  togglePlaylistModal: () => void;
}): React.ReactElement => {
  return (
    <div className="space-y-3">
      <div className="relative aspect-video">
        <iframe
          height="100%"
          width="100%"
          src="https://www.youtube.com/embed/rkZl2gsLUp4?autoplay=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
      <div className="px-2 sm:space-y-1 md:space-y-4 lg:space-y-2">
        <h1 className="text-lg font-medium dark:text-gray-300">
          Yuval Noah Harari | 21 Lessons for the 21st Century | Talks at Google
        </h1>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 font-semibold dark:text-gray-400">
            <div className="relative h-10 w-10 rounded-full">
              <Image
                className="rounded-full"
                src="https://yt3.ggpht.com/ytc/AKedOLQDTf95gNBGbmSrs0I54WEsOqOw9oddIblPuQnj1w=s88-c-k-c0x00ffffff-no-rj"
                alt=""
                fill
              />
            </div>
            <span>Ted Talks</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-5 text-xs dark:text-gray-100 sm:justify-end">
          <span className="flex w-fit cursor-pointer items-center gap-2 rounded-md border p-1 dark:hover:bg-dark-hover lg:px-4">
            <MdOutlineThumbUp size={18} />
            <span className="sm:hidden md:block">LIKE</span>
          </span>
          <span
            className="border-primary flex w-fit cursor-pointer items-center gap-2 rounded-md border  p-1 dark:hover:bg-dark-hover lg:px-4"
            onClick={togglePlaylistModal}
          >
            <MdPlaylistAdd size={18} />
            <span className="sm:hidden md:block">ADD TO PLAYLIST</span>
          </span>
          <span className="border-primary dark:hover:bg-hover flex w-fit cursor-pointer items-center gap-2 rounded-md  border p-1 lg:px-4">
            <MdWatchLater size={18} />
            <span className="sm:hidden md:block">WATCH LATER</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SingleVideoCard;
