import Image from "next/image";
import { MdMoreVert } from "react-icons/md";
import PlaylistCardMenu from "./PlaylistCardMenu";
import { useRouter } from "next/router";
import { Playlist, User } from "../types";
import { useToggle } from "../hooks";

const PlaylistCard = ({
  playlistData,
  userData,
}: {
  userData: User;
  playlistData: Playlist;
}): React.ReactElement => {
  const {
    show: showVideoOptions,
    toggle: toggleSetVideoOptions,
  } = useToggle();

  const router = useRouter();

  const navigate = () => {
    router.push(`playlist/${playlistData.id}`);
  };

  return (
    <div className="h-full w-full">
      <div
        className="relative aspect-video hover:cursor-pointer"
        onClick={navigate}
      >
        {
          <Image
            className=""
            src={
              playlistData.videos[0]
                ? playlistData.videos[0].thumbnail
                : "https://firebasestorage.googleapis.com/v0/b/video-library-app-3e865.appspot.com/o/EMPTY%20PLAYLIST.png?alt=media&token=c630f904-687b-4259-b374-9090d48f5adf&_gl=1*qm821y*_ga*MTUxNzkzODU2MS4xNjY2NzAyMDQ2*_ga_CW55HF8NVT*MTY4NTY5NDczMi4zMS4xLjE2ODU2OTQ3NzIuMC4wLjA."
            }
            alt=""
            fill
            onClick={navigate}
          />
        }
        {showVideoOptions && (
          <PlaylistCardMenu
            userData={userData}
            playlistData={playlistData}
          />
        )}
        <div className="absolute top-0 bottom-0 left-[50%] right-0 flex items-center justify-center bg-gray-800 bg-opacity-70">
          <span className="text-3xl font-semibold text-white">
            {playlistData.videos.length}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-8 pt-3">
        <div className="col-span-6 space-y-1">
          <h2 className="text-base font-semibold dark:text-gray-300">
            {playlistData.name}
          </h2>
        </div>
        <div className="col-span-2 flex items-start justify-end">
          <span
            className="rounded-full p-1 hover:cursor-pointer dark:hover:bg-dark-hover"
            onClick={toggleSetVideoOptions}
          >
            <MdMoreVert
              className="rounded-full dark:text-gray-200"
              size={25}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default PlaylistCard;
