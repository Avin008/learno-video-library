import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { MdOutlineDarkMode, MdLightMode, MdOutlineMenu } from "react-icons/md";
import { useSidebarStore } from "../store";
const Navbar = (): React.ReactElement => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const expandSidebar = useSidebarStore((store) => store.expandSidebar);

  const router = useRouter();

  return (
    <div className="fixed left-0 right-0 top-0 z-20 flex h-16 items-center justify-between border-b-2 border-dark-border bg-dark-background px-8 shadow-md">
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
       gap-6 text-base font-medium text-gray-200 transition-all"
      >
        <Link href="/login">
          <li
            className={`rounded-md bg-dark-primary px-3 py-2 text-sm font-medium text-white hover:cursor-pointer hover:bg-opacity-75 hover:text-white ${
              router.pathname === "/login" &&
              "bg-light-primary font-medium text-white"
            }`}
          >
            LOGIN
          </li>
        </Link>
        <li
          className="hover:bg-hover rounded-md px-3 py-2 text-sm font-medium  text-gray-300 transition-all hover:cursor-pointer hover:text-white sm:fixed sm:top-3 sm:right-5 md:static"
          onClick={() => setDarkMode((darkMode) => !darkMode)}
        >
          {darkMode ? (
            <MdOutlineDarkMode size={25} />
          ) : (
            <MdLightMode size={25} />
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
