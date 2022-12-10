import { data } from "..";
import WatchLaterVideoCard from "../../components/WatchLaterVideoCard";

const WatchLaterPage = (): React.ReactElement => {
  return (
    <div className="grid gap-5 p-2 sm:col-span-12 sm:grid-cols-1 md:grid-cols-2 lg:col-span-10 lg:grid-cols-3">
      {data.map((x) => (
        <WatchLaterVideoCard key={x._id} data={x} />
      ))}
    </div>
  );
};

export default WatchLaterPage;
