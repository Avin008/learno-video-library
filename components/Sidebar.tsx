import {
  MdFavorite,
  MdHistory,
  MdHome,
  MdOutlineFeaturedPlayList,
  MdWatchLater,
} from "react-icons/md";

const SideBar = (): React.ReactElement => {
  return (
    <ul className="sticky top-16 flex flex-col space-y-3">
      <li className="flex items-center gap-3 bg-primary p-4 text-white hover:cursor-pointer hover:bg-hover">
        <MdHome size={20} /> HOME
      </li>
      <li className=" flex items-center gap-3 p-4 text-white hover:cursor-pointer hover:bg-hover">
        <MdOutlineFeaturedPlayList size={20} /> PLAYLIST
      </li>
      <li className=" flex items-center gap-3 p-4 text-white hover:cursor-pointer hover:bg-hover">
        <MdFavorite size={20} /> LIKED
      </li>
      <li className=" flex items-center gap-3 p-4 text-white hover:cursor-pointer hover:bg-hover">
        <MdWatchLater size={20} /> WATCH LATER
      </li>
      <li className=" flex items-center gap-3 p-4 text-white hover:cursor-pointer hover:bg-hover">
        <MdHistory size={20} /> HISTORY
      </li>
    </ul>
  );
};

export default SideBar;
