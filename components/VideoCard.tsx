import Image from "next/image";

const VideoCard = ({ data }): React.ReactElement => {
  return (
    <div className="relative h-52 border border-gray-500">
      <Image className="" src={data.img} alt="" fill />
    </div>
  );
};

export default VideoCard;
