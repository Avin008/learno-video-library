import { data } from "..";
import SuggestedVideoCard from "../../components/SuggestedVideoCard";

const SingleVideoPage = (): React.ReactElement => {
  return (
    <div className="mt-2 grid gap-5 px-2 sm:col-span-12 sm:grid-cols-1 md:grid-cols-8 lg:col-span-10">
      <div className="md:col-span-5">
        <div className="relative aspect-video">
          <iframe
            height="100%"
            width="100%"
            src="https://www.youtube.com/embed/RbOOwTcXDPs"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <div className="mt-5 px-1">
          <h1 className="text-xl font-medium text-gray-300">
            Yuval Noah Harari | 21 Lessons for the 21st Century | Talks at
            Google
          </h1>
        </div>
      </div>
      <div className="space-y-5 p-1 md:col-span-3">
        {data.map((x) => (
          <SuggestedVideoCard key={x._id} videoData={x} />
        ))}
      </div>
    </div>
  );
};

export default SingleVideoPage;
