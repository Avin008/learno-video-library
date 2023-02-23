import { useRouter } from "next/router";
import {
  MdFavorite,
  MdOutlineWatchLater,
  MdOutlineHome,
  MdOutlineFavoriteBorder,
  MdHistory,
  MdHome,
  MdOutlineFeaturedPlayList,
  MdWatchLater,
  MdFeaturedPlayList,
  MdOutlineHistory,
} from "react-icons/md";
import { useAuth } from "../hooks";

const SideBar = (): React.ReactElement => {
  const router = useRouter();
  const { status: authStatus } = useAuth();

  const navigate = (route: string) => {
    router.push(`/${route}`);
  };

  const activeLink = (
    route: string,
    routerTwo?: string
  ) => {
    return (
      router.asPath === route ||
      (routerTwo && router.pathname.includes(routerTwo))
    );
  };

  return (
    <ul className="sticky top-16 flex flex-col space-y-3">
      <li
        className={`flex items-center gap-3 p-4 transition-all hover:cursor-pointer dark:text-dark-text dark:hover:bg-dark-hover ${
          activeLink("/") && "dark:bg-dark-hover"
        }`}
        onClick={() => {
          navigate("/");
        }}
      >
        {activeLink("/") ? (
          <MdHome size={20} />
        ) : (
          <MdOutlineHome size={20} />
        )}{" "}
        HOME
      </li>
      <li
        className={`flex items-center gap-3 p-4 transition-all hover:cursor-pointer dark:text-dark-text dark:hover:bg-dark-hover ${
          activeLink(
            "/playlist",
            "/playlist/[PlaylistID]"
          ) && "dark:bg-dark-hover"
        }`}
        onClick={() => {
          if (authStatus) {
            navigate("playlist");
          } else {
            navigate("login");
          }
        }}
      >
        {activeLink(
          "/playlist",
          "/playlist/[PlaylistID]"
        ) ? (
          <MdFeaturedPlayList size={20} />
        ) : (
          <MdOutlineFeaturedPlayList size={20} />
        )}{" "}
        PLAYLIST
      </li>
      <li
        className={`flex items-center gap-3 p-4 transition-all hover:cursor-pointer dark:text-dark-text dark:hover:bg-dark-hover ${
          activeLink("/liked") && "dark:bg-dark-hover"
        }`}
        onClick={() => {
          if (authStatus) {
            navigate("liked");
          } else {
            navigate("login");
          }
        }}
      >
        {activeLink("/liked") ? (
          <MdFavorite size={20} />
        ) : (
          <MdOutlineFavoriteBorder size={20} />
        )}{" "}
        LIKED
      </li>
      <li
        className={`flex items-center gap-3 p-4 transition-all hover:cursor-pointer dark:text-dark-text dark:hover:bg-dark-hover ${
          activeLink("/watch-later") && "dark:bg-dark-hover"
        }`}
        onClick={() => {
          if (authStatus) {
            navigate("watch-later");
          } else {
            navigate("login");
          }
        }}
      >
        {activeLink("/watch-later") ? (
          <MdWatchLater size={20} />
        ) : (
          <MdOutlineWatchLater size={20} />
        )}{" "}
        WATCH LATER
      </li>
      <li
        className={`flex items-center gap-3 p-4 transition-all hover:cursor-pointer dark:text-dark-text dark:hover:bg-dark-hover ${
          activeLink("/history") && "dark:bg-dark-hover"
        }`}
        onClick={() => {
          if (authStatus) {
            navigate("history");
          } else {
            navigate("login");
          }
        }}
      >
        {activeLink("/history") ? (
          <MdHistory size={20} />
        ) : (
          <MdOutlineHistory size={20} />
        )}
        HISTORY
      </li>
    </ul>
  );
};

export default SideBar;
