import Navbar from "./Navbar";
import SideBar from "./Sidebar";
import { Inter } from "@next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={`min-h-screen border border-transparent bg-gray-800 ${inter.variable} font-sans`}
    >
      <Navbar />
      <main className=" mt-16 grid min-h-full grid-cols-12 bg-gray-800 bg-opacity-95">
        <div className="col-span-2 border border-gray-700 bg-[#1F2937] sm:hidden lg:block">
          <SideBar />
        </div>
        {children}
      </main>
    </div>
  );
};

export default Layout;
