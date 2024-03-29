import Navbar from "./Navbar";
import SideBar from "./Sidebar";
import { Inter } from "@next/font/google";
import { useSidebarStore, useThemeStore } from "../store";
import { Toaster } from "react-hot-toast";

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
        <main className="mt-16 grid grid-cols-12 sm:relative lg:static">
          <div
            className={`${
              sidebar ? "sm:block" : "sm:hidden"
            } col-span-2 transition-all dark:border-dark-border dark:bg-dark-background sm:absolute sm:bottom-0 sm:top-0 sm:z-30 lg:static lg:block`}
          >
            <SideBar />
          </div>
          {children}
        </main>
        <Toaster position="bottom-center" />
      </div>
    </div>
  );
};

export default Layout;
