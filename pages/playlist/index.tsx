import { data } from "..";
import PlaylistCard from "../../components/PlaylistCard";

const PlaylistPage = (): React.ReactElement => {
  return (
    <div className="space-y-3  sm:col-span-12 lg:col-span-10">
      <div className="grid gap-5 p-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data.map((x) => (
          <PlaylistCard data={x} />
        ))}
      </div>
    </div>
  );
};

export default PlaylistPage;
