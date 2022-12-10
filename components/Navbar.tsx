import Link from "next/link";
import { useRouter } from "next/router";
import { MdOutlineDarkMode, MdLightMode, MdOutlineMenu } from "react-icons/md";
import { useSidebarStore, useThemeStore } from "../store";

const Navbar = (): React.ReactElement => {
  const expandSidebar = useSidebarStore((store) => store.expandSidebar);
  const darkMode = useThemeStore((store) => store.darkMode);
  const toggleDarkMode = useThemeStore((store) => store.toggleDarkMode);

  const router = useRouter();

  return (
    <div className="fixed left-0 right-0 top-0 z-20 flex h-16 items-center justify-between border-b-2 px-8 shadow-md dark:border-dark-border dark:bg-dark-background">
      <div className="flex items-center">
        <span className="flex items-center gap-3 text-2xl font-extrabold">
          <span
            className="hover:bg-hover cursor-pointer rounded-md p-1 text-2xl transition-all sm:block lg:hidden"
            onClick={expandSidebar}
          >
            <MdOutlineMenu color="white" />
          </span>
          <div className="text-3xl text-dark-primary">Learno.</div>
        </span>
      </div>

      <ul
        className="flex items-center
       gap-6 text-base font-medium transition-all"
      >
        <Link href="/login">
          <li
            className={`rounded-md bg-dark-primary px-3 py-2 text-sm font-medium text-white hover:cursor-pointer ${
              router.pathname === "/login" && ""
            }`}
          >
            LOGIN
          </li>
        </Link>
        <li
          className="rounded-md px-3 py-2 text-sm font-medium transition-all  hover:cursor-pointer dark:text-gray-300 dark:hover:bg-dark-hover dark:hover:text-white sm:fixed sm:top-3 sm:right-5 md:static"
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
