import Navbar from "./Navbar";
import SideBar from "./Sidebar";
import { Inter } from "@next/font/google";
import { useSidebarStore, useThemeStore } from "../store";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const Layout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const sidebar = useSidebarStore((store) => store.sidebar);
  const darkMode = useThemeStore((store) => store.darkMode);

  return (
    <div className={`${darkMode && "dark"}`}>
      <div
        className={`min-h-screen border border-transparent dark:bg-dark-background ${inter.variable} font-sans`}
      >
        <Navbar />
        <main className=" mt-16 grid min-h-screen grid-cols-12 sm:relative lg:static">
          <div
            className={`${
              sidebar ? "sm:block" : "sm:hidden"
            } col-span-2 border-r transition-all dark:border-dark-border dark:bg-dark-background sm:absolute sm:bottom-0 sm:top-0 sm:z-10 lg:static lg:block`}
          >
            <SideBar />
          </div>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
