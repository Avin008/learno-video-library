import Image from "next/image";
import { useRouter } from "next/router";
import { Video } from "../types";

const SuggestedVideoCard = ({
  videoData,
}: {
  videoData: Video;
}): React.ReactElement => {
  const router = useRouter();

  return (
    <div className="grid grid-cols-7 gap-3">
      <div className="relative col-span-3 aspect-video">
        <Image
          src={videoData.thumbnail}
          alt=""
          fill
          onClick={() => {
            router.push(`/video/${videoData.id}`);
          }}
        />
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
