import Link from "next/link";
import { useRouter } from "next/router";
import {
  MdOutlineDarkMode,
  MdLightMode,
  MdOutlineMenu,
  MdAccountCircle,
} from "react-icons/md";
import { useAuth } from "../hooks";
import {
  useSidebarStore,
  useThemeStore,
  useAuthStore,
} from "../store";
import { ClipLoader } from "react-spinners";
import Searchbar from "./Searchbar";
import Image from "next/image";

const Navbar = (): React.ReactElement => {
  const expandSidebar = useSidebarStore(
    (store) => store.expandSidebar
  );
  const darkMode = useThemeStore((store) => store.darkMode);
  const toggleDarkMode = useThemeStore(
    (store) => store.toggleDarkMode
  );
  const addAuth = useAuthStore(
    (store: any) => store.addAuth
  );
  const removeAuth = useAuthStore(
    (store: any) => store.removeAuth
  );

  const { status, loading, token } = useAuth();

  const router = useRouter();

  return (
    <div className="fixed left-0 right-0 top-0 z-40 flex h-16 items-center justify-between border-b bg-white shadow-md dark:border-dark-border dark:bg-dark-background sm:px-4 lg:px-8">
      <div className="flex items-center">
        <span className="flex items-center gap-3 text-2xl font-extrabold">
          <span
            className="hover:bg-hover cursor-pointer rounded-md p-1 text-2xl transition-all sm:block lg:hidden"
            onClick={expandSidebar}
          >
            <MdOutlineMenu color="white" />
          </span>
          <Link href="/">
            <div className="flex items-center gap-2">
              <div className="relative h-9 w-9">
                <Image
                  src="/star-of-david.png"
                  fill
                  alt=""
                />
              </div>
              <span className="dark:text-slate-300 sm:hidden lg:block">
                Learno
              </span>
            </div>
          </Link>
        </span>
      </div>

      <Searchbar />

      <ul
        className="flex items-center
       gap-4 text-base font-medium transition-all"
      >
        {loading ? (
          <ClipLoader color="gray" size={25} />
        ) : status ? (
          <li
            className={`flex items-center gap-1 rounded-md border border-dark-border px-3 py-2 text-sm font-medium text-white shadow-sm hover:cursor-pointer`}
            onClick={removeAuth}
          >
            <MdAccountCircle size={20} /> Logout
          </li>
        ) : (
          <Link href="/login">
            <li
              className={`flex items-center gap-1 rounded-md border border-dark-border px-3 py-2 text-sm font-medium text-white shadow-sm hover:cursor-pointer ${
                router.pathname === "/login" && ""
              }`}
            >
              <MdAccountCircle size={20} /> Login
            </li>
          </Link>
        )}
        <li
          className="rounded-md px-3 py-2 text-sm font-medium transition-all hover:cursor-pointer dark:text-gray-300  dark:hover:bg-dark-hover dark:hover:text-white sm:fixed sm:top-3 sm:right-5 sm:hidden md:static lg:block"
          onClick={toggleDarkMode}
        >
          {darkMode ? (
            <MdLightMode size={25} />
          ) : (
            <MdOutlineDarkMode size={25} />
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
