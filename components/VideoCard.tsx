import Image from "next/image";
import { MdMoreVert } from "react-icons/md";

const VideoCard = ({
  data,
}: {
  data: { img: string; name: string; channel: string };
}): React.ReactElement => {
  return (
    <div className="h-full w-full ">
      <div className="relative h-52 hover:cursor-pointer">
        <Image className="" src={data.img} alt="" fill />
      </div>
      <div className="grid grid-cols-8 pt-3">
        <div className="col-span-2 flex justify-center">
          <div className="relative h-10 w-10">
            <Image className="rounded-full" src={data.channel} alt="" fill />
          </div>
        </div>
        <div className="col-span-5 space-y-1">
          <h1 className="text-sm font-semibold leading-5 text-gray-300">
            {data.name.length > 50 ? `${data.name.slice(0, 50)}..` : data.name}
          </h1>
          <h2 className="text-base font-semibold text-gray-400">
            Channel Name
          </h2>
        </div>
        <div className="col-span-1 flex items-start justify-end bg-gray-800">
          <span className="rounded-full p-1 hover:cursor-pointer hover:bg-hover">
            <MdMoreVert className="rounded-full text-gray-200" size={25} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
