import { data } from "..";
import LikedVideoCard from "../../components/LikedVideoCard";

const LikedPage = (): React.ReactElement => {
  return (
    <div className="grid gap-5 p-2 sm:col-span-12 sm:grid-cols-1 md:grid-cols-2 lg:col-span-10 lg:grid-cols-3">
      {data.map((x) => (
        <LikedVideoCard data={x} />
      ))}
    </div>
  );
};

export default LikedPage;
