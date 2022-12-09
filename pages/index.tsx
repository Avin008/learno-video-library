import Head from "next/head";
import Image from "next/image";
import CreatePlaylistModal from "../components/CreatePlaylistModal";
import SideBar from "../components/Sidebar";
import VideoCard from "../components/VideoCard";
import { useState } from "react";

export const data: {
  _id: string;
  title: string;
  thumbnail: string;
  channelIcon: string;
  channelName: string;
  videoLink: string;
  category: string;
}[] = [
  {
    _id: "ZXWDJUui",
    title:
      "Yuval Noah Harari | 21 Lessons for the 21st Century | Talks at Google",
    thumbnail:
      "https://i.ytimg.com/vi/Bw9P_ZXWDJU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAdTmhOgRc7_yovZ_4EQsFrFMVAmw",
    channelIcon:
      "https://yt3.ggpht.com/ytc/AKedOLQDTf95gNBGbmSrs0I54WEsOqOw9oddIblPuQnj1w=s88-c-k-c0x00ffffff-no-rj",
    channelName: "Talks at Google",
    videoLink: "https://www.youtube.com/embed/Bw9P_ZXWDJU?autoplay=1",
    category: "TEDx",
  },
  {
    _id: "wNHCvnYarnk",
    title: "How to manage your mental health | Leon Taylor | TEDxClapham",
    thumbnail:
      "https://i.ytimg.com/vi/rkZl2gsLUp4/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCv2YhIK9sh5IdYQQKL8VQvkO8WUw",
    channelIcon:
      "https://yt3.ggpht.com/ytc/AKedOLQGnY6McntoY-eWaRDI047FWFqj7pVlw2nBfkwz7w=s88-c-k-c0x00ffffff-no-rj",

    channelName: "TEDx Talks",
    videoLink: "https://www.youtube.com/embed/rkZl2gsLUp4?autoplay=1",
    category: "Talks",
  },
  {
    _id: "EDIpoyr5XqrxU4",
    title:
      "How JavaScript Works 🔥& Execution Context | Namaste JavaScript Ep.1",
    thumbnail:
      "https://i.ytimg.com/vi/ZvbzSrg0afE/hqdefault.jpg?sqp=-oaymwEjCOADEI4CSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDUlLcNYk2P3kkgwL3qw_D1rKfTzg",
    channelIcon:
      "https://yt3.ggpht.com/ytc/AKedOLR8gqN3fHHNYbehMcsJ49rapBPhJMGPYSrl6YQyNg=s88-c-k-c0x00ffffff-no-rj",
    channelName: "Akshay Saini",
    videoLink: "https://www.youtube.com/embed/ZvbzSrg0afE?autoplay=1",
    category: "JavaScript",
  },
  {
    _id: "nMZpLMrye1Ay",
    title: "React 18 Fundamentals Crash Course 2022",
    thumbnail:
      "https://i.ytimg.com/vi/jLS0TkAHvRg/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB127T_aM5OC6ny3_vSkhjialrMHg",
    channelIcon:
      "https://yt3.ggpht.com/os7Yw6RimtysXXpc8NrXraci87TjXgZSUQyAezi0D3RrNL3YP5riIwi1-0al4Wz0XwzH6oBu6g=s88-c-k-c0x00ffffff-no-rj",
    channelName: "Codevolution",
    videoLink: "https://www.youtube.com/embed/jLS0TkAHvRg?autoplay=1",
    category: "React",
  },
  {
    _id: "nMZpwbuLM1A",
    title:
      "How JavaScript Code is executed? ❤️& Call Stack | Namaste JavaScript Ep. 2",
    thumbnail:
      "https://i.ytimg.com/vi/iLWTnMzWtj4/hqdefault.jpg?sqp=-oaymwEjCOADEI4CSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBscZCzkV4Y01AdM4UfdfdfcLjDJg",
    channelIcon:
      "https://yt3.ggpht.com/ytc/AKedOLR8gqN3fHHNYbehMcsJ49rapBPhJMGPYSrl6YQyNg=s88-c-k-c0x00ffffff-no-rj",
    channelName: "Akshay Saini",
    videoLink: "https://www.youtube.com/embed/iLWTnMzWtj4?autoplay=1",
    category: "JavaScript",
  },
  {
    _id: "WD440twcCY2Vs0",
    title: "Why we procrastinate by Vik Nithy @ TEDxYouth@TheScotsCollege",
    thumbnail: "https://i.ytimg.com/vi_webp/WD440CY2Vs0/mqdefault.webp",
    channelIcon:
      "https://yt3.ggpht.com/ytc/AKedOLQGnY6McntoY-eWaRDI047FWFqj7pVlw2nBfkwz7w=s88-c-k-c0x00ffffff-no-rj",
    channelName: "TEDx Talks",
    videoLink: "https://www.youtube.com/embed/WD440CY2Vs0?autoplay=1",
    category: "TEDx",
  },
  {
    _id: "nMZptuydLM1Ax",
    title:
      "Hoisting in JavaScript 🔥(variables & functions) | Namaste JavaScript Ep. 3",
    thumbnail:
      "https://i.ytimg.com/vi/Fnlnw8uY6jo/hqdefault.jpg?sqp=-oaymwEjCOADEI4CSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBjvtyGpD79hn1sdkmRbV-dxlLLOQ",
    channelIcon:
      "https://yt3.ggpht.com/ytc/AKedOLR8gqN3fHHNYbehMcsJ49rapBPhJMGPYSrl6YQyNg=s88-c-k-c0x00ffffff-no-rj",
    channelName: "Akshay Saini",
    videoLink: "https://www.youtube.com/embed/Fnlnw8uY6jo?autoplay=1",
    category: "JavaScript",
  },
  {
    _id: "nMZpLM1wdtqcmwd",
    title: "Top CSS Selectors You Should Know - Colt's Code Camp",
    thumbnail: "https://i.ytimg.com/vi/qj20o5UQ3qI/maxresdefault.jpg",
    channelIcon:
      "https://yt3.ggpht.com/ytc/AKedOLR4BKPIxSr1RjRYn3rujLiX8U3EPhlXXGsx9cYt=s176-c-k-c0x00ffffff-no-rj-mo",
    channelName: "Colt Steele",
    videoLink: "https://www.youtube.com/embed/qj20o5UQ3qI?autoplay=1",
    category: "Css",
  },
  {
    _id: "nMZpLM1Awe58sdsd",
    title: "First React App: Introduction to ReactJS library",
    thumbnail:
      "https://i.ytimg.com/vi/KUJsaM-hAjs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAYde0UmzWBWmbaVH3qI-S3GWOQZg",
    channelIcon:
      "https://yt3.ggpht.com/ytc/AKedOLQnvobEXpzHCxB1g-q2aXbRDzSaznFVHo5OdFML=s88-c-k-c0x00ffffff-no-rj",
    channelName: "Tanay Pratap",
    videoLink: "https://www.youtube.com/embed/KUJsaM-hAjs?autoplay=1",
    category: "React",
  },
  {
    _id: "nMZpLM891Aweio",
    title: "Redux Toolkit Tutorial – JavaScript State Management Library",
    thumbnail:
      "https://i.ytimg.com/vi/bbkBuqC1rU4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDQGroVBF0xrvRwaf-e6Vllzl2aRA",
    channelIcon:
      "https://yt3.ggpht.com/ytc/AKedOLRR2uNiXJiFH-XRmtGgkdICxTuDJxCPJidKFRNCNg=s88-c-k-c0x00ffffff-no-rj",
    channelName: "freeCodeCamp.org",
    videoLink: "https://www.youtube.com/embed/bbkBuqC1rU4?autoplay=1",
    category: "Redux",
  },
];

export default function Home() {
  const [showPlaylistModal, setShowPlaylistModal] = useState<boolean>(false);

  const togglePlaylistModal = (): void => {
    setShowPlaylistModal((prev) => !prev);
  };

  return (
    <div className="grid gap-5 p-2 sm:col-span-12 sm:grid-cols-1 md:grid-cols-2 lg:col-span-10 lg:grid-cols-3">
      {data.map((x) => (
        <VideoCard
          key={x._id}
          data={x}
          togglePlaylistModal={togglePlaylistModal}
        />
      ))}
      {showPlaylistModal && (
        <CreatePlaylistModal togglePlaylistModal={togglePlaylistModal} />
      )}
    </div>
  );
}
