import Navbar from "./Navbar";
import SideBar from "./Sidebar";
import { Inter } from "@next/font/google";
import useSidebarStore from "../lib/store/sidebarExpandStore";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const Layout = ({ children }: { children: React.ReactNode }) => {
  const sidebarExpand = useSidebarStore((store) => store.sidebarExpand);
  return (
    <div
      className={`min-h-screen border border-transparent bg-gray-800 ${inter.variable} font-sans`}
    >
      <Navbar />
      <main className=" mt-16 grid min-h-full grid-cols-12 bg-gray-800 bg-opacity-95 sm:relative lg:static">
        <div
          className={`col-span-2 border border-gray-700 bg-[#1F2937] transition-all sm:absolute sm:bottom-0 sm:top-0 sm:z-10 lg:static sm:${
            sidebarExpand ? "block" : "hidden"
          } lg:block`}
        >
          <SideBar />
        </div>
        {children}
      </main>
    </div>
  );
};

export default Layout;
