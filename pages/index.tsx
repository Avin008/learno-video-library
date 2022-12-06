import Head from "next/head";
import Image from "next/image";
import SideBar from "../components/Sidebar";
import VideoCard from "../components/VideoCard";

export default function Home() {
  return (
    <div className="min-h-screen border border-transparent  bg-gray-800">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" mt-16 grid min-h-full grid-cols-12 bg-gray-800 bg-opacity-95">
        <div className="col-span-2 border border-gray-700 bg-[#1F2937]">
          <SideBar />
        </div>
        <div className="col-span-10 grid grid-cols-3 gap-5 p-2">
          {[
            {
              img: "https://i.ytimg.com/vi/Bw9P_ZXWDJU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAdTmhOgRc7_yovZ_4EQsFrFMVAmw",
              name: "Yuval Noah Harari | 21 Lessons for the 21st Century",
              channel:
                "https://yt3.ggpht.com/ytc/AKedOLQDTf95gNBGbmSrs0I54WEsOqOw9oddIblPuQnj1w=s88-c-k-c0x00ffffff-no-rj",
            },
            {
              img: "https://i.ytimg.com/vi/ZvbzSrg0afE/hqdefault.jpg?sqp=-oaymwEjCOADEI4CSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDUlLcNYk2P3kkgwL3qw_D1rKfTzg",
              name: "How to start with React",
              channel:
                "https://yt3.ggpht.com/ytc/AKedOLQGnY6McntoY-eWaRDI047FWFqj7pVlw2nBfkwz7w=s88-c-k-c0x00ffffff-no-rj",
            },
            {
              img: "https://i.ytimg.com/vi/jLS0TkAHvRg/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB127T_aM5OC6ny3_vSkhjialrMHg",
              name: "How to start with React",
              channel:
                "https://yt3.ggpht.com/ytc/AKedOLQDTf95gNBGbmSrs0I54WEsOqOw9oddIblPuQnj1w=s88-c-k-c0x00ffffff-no-rj",
            },
            {
              img: "https://i.ytimg.com/vi/KUJsaM-hAjs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAYde0UmzWBWmbaVH3qI-S3GWOQZg",
              name: "How to start with React",
              channel:
                "https://yt3.ggpht.com/ytc/AKedOLQDTf95gNBGbmSrs0I54WEsOqOw9oddIblPuQnj1w=s88-c-k-c0x00ffffff-no-rj",
            },
            {
              img: "https://i.ytimg.com/vi/bbkBuqC1rU4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDQGroVBF0xrvRwaf-e6Vllzl2aRA",
              name: "How to start with React",
              channel:
                "https://yt3.ggpht.com/ytc/AKedOLQDTf95gNBGbmSrs0I54WEsOqOw9oddIblPuQnj1w=s88-c-k-c0x00ffffff-no-rj",
            },
            {
              img: "https://i.ytimg.com/vi/59IXY5IDrBA/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDJg0GfLm8L7L9_IbnM3mcm2llPAg",
              name: "How to start with React",
              channel:
                "https://yt3.ggpht.com/ytc/AKedOLQDTf95gNBGbmSrs0I54WEsOqOw9oddIblPuQnj1w=s88-c-k-c0x00ffffff-no-rj",
            },
            {
              img: "https://i.ytimg.com/vi/MKlx1DLa9EA/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCyoEo-v8R0Y5jtsPE8N_OYEIrf4w",
              name: "How to start with React",
              channel:
                "https://yt3.ggpht.com/ytc/AKedOLQDTf95gNBGbmSrs0I54WEsOqOw9oddIblPuQnj1w=s88-c-k-c0x00ffffff-no-rj",
            },
            {
              img: "https://i.ytimg.com/vi/qZv-rNx0jEA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA2gYin8mPBOWAhz_F3NJ2V3Z6azA",
              name: "How to start with React",
              channel:
                "https://yt3.ggpht.com/ytc/AKedOLQDTf95gNBGbmSrs0I54WEsOqOw9oddIblPuQnj1w=s88-c-k-c0x00ffffff-no-rj",
            },
            {
              img: "https://i.ytimg.com/vi/qj20o5UQ3qI/maxresdefault.jpg",
              name: "How to start with React",
              channel:
                "https://yt3.ggpht.com/ytc/AKedOLQDTf95gNBGbmSrs0I54WEsOqOw9oddIblPuQnj1w=s88-c-k-c0x00ffffff-no-rj",
            },
          ].map((x) => (
            <VideoCard data={x} />
          ))}
        </div>
      </main>
    </div>
  );
}
