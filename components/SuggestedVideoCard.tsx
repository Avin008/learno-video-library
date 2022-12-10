import Image from "next/image";

type Props = {
  _id: string;
  title: string;
  thumbnail: string;
  channelIcon: string;
  channelName: string;
  videoLink: string;
  category: string;
};

const SuggestedVideoCard = ({
  videoData,
}: {
  videoData: Props;
}): React.ReactElement => {
  return (
    <div className="grid grid-cols-7 gap-3">
      <div className="relative col-span-3 aspect-video">
        <Image src={videoData.thumbnail} alt="" fill />
      </div>
      <div className="col-span-4 space-y-1">
        <h1 className="text-sm font-semibold leading-5 dark:text-gray-300 sm:hidden md:block">
          {videoData.title.length > 50
            ? `${videoData.title.slice(0, 50)}...`
            : videoData.title}
        </h1>
        <h1 className="text-sm font-semibold leading-5 dark:text-gray-300 sm:block md:hidden">
          {videoData.title.length > 30
            ? `${videoData.title.slice(0, 30)}...`
            : videoData.title}
        </h1>
        <h2 className="text-sm font-semibold dark:text-gray-400">
          {videoData.channelName}
        </h2>
      </div>
    </div>
  );
};

export default SuggestedVideoCard;
