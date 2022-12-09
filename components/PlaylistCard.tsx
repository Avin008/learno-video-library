import Image from "next/image";
import { MdMoreVert } from "react-icons/md";
import PlaylistCardMenu from "./PlaylistCardMenu";
import { useState } from "react";
import { useRouter } from "next/router";

type Props = {
  _id: string;
  title: string;
  thumbnail: string;
  channelIcon: string;
  channelName: string;
  videoLink: string;
  category: string;
};

const PlaylistCard = ({ data }: { data: Props }): React.ReactElement => {
  const [showVideoOptions, setShowVideoOptions] = useState<boolean>(false);

  const toggleVideoOptions = (): void => {
    setShowVideoOptions((prev) => !prev);
  };

  const router = useRouter();

  const navigate = () => {
    router.push(`/video/${data._id}`);
  };

  return (
    <div className="h-full w-full ">
      <div className="relative aspect-video hover:cursor-pointer">
        <Image
          className=""
          src={data.thumbnail}
          alt=""
          fill
          onClick={navigate}
        />
        {showVideoOptions && <PlaylistCardMenu />}
        <div className="absolute top-0 bottom-0 left-[50%] right-0 flex items-center justify-center bg-gray-800 bg-opacity-70">
          <span className="text-3xl font-semibold text-white">5</span>
        </div>
      </div>
      <div className="grid grid-cols-8 pt-3">
        <div className="col-span-6 space-y-1">
          <h2 className="text-base font-semibold text-gray-300">
            {data.channelName}
          </h2>
        </div>
        <div className="col-span-2 flex items-start justify-end bg-gray-800">
          <span
            className="rounded-full p-1 hover:cursor-pointer hover:bg-hover"
            onClick={toggleVideoOptions}
          >
            <MdMoreVert className="rounded-full text-gray-200" size={25} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default PlaylistCard;
