import { Inter } from "@next/font/google";
import Navbar from "./Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`${inter.variable} font-sans`}>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
