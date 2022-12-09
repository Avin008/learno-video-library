import Image from "next/image";
import { data } from "..";
import SingleVideoCard from "../../components/SingleVideoCard";
import SuggestedVideoCard from "../../components/SuggestedVideoCard";

const SingleVideoPage = (): React.ReactElement => {
  return (
    <div className="mt-2 grid gap-5 px-2 sm:col-span-12 sm:grid-cols-1 md:grid-cols-8 lg:col-span-10">
      <div className="md:col-span-5">
        <SingleVideoCard />
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
