import PlaylistVideoCard from "../../components/PlaylistVideoCard";
import { data } from "../../data";

const PlaylistPage = (): React.ReactElement => {
  return (
    <div className="sm:col-span-12 lg:col-span-10">
      <div className="grid gap-5 p-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data.map((x) => (
          <PlaylistVideoCard key={x._id} data={x} />
        ))}
      </div>
    </div>
  );
};

export default PlaylistPage;
