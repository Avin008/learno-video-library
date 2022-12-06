import Image from "next/image";

const VideoCard = ({
  data,
}: {
  data: { img: string; name: string; channel: string };
}): React.ReactElement => {
  return (
    <div className="h-full w-full ">
      <div className="relative h-52">
        <Image className="" src={data.img} alt="" fill />
      </div>
      <div className="flex h-16 items-center gap-3 px-3 py-2">
        <div className="relative h-12 w-12 rounded-full border border-gray-300">
          <Image
            className="rounded-full object-cover"
            src={data.channel}
            alt=""
            fill
          />
        </div>
        <div className="">
          <h1 className="text-base font-semibold text-gray-300">{data.name}</h1>
          <h2 className="text-gray-400">CHANNEL NAME:</h2>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
