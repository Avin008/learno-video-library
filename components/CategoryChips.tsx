import { data } from "../data";
import { Video } from "../types";
import { removeDuplicate } from "../utility";

const CategoryChips = ({
  videoData,
  category,
  categorySetterFunc,
}: {
  videoData: Video[];
  categorySetterFunc: (
    categoryName: string
  ) => void;
  category: string | null;
}) => {
  return (
    <div className="sticky top-14 z-10 flex h-fit items-center gap-4 bg-opacity-95 px-2 py-2 pt-4 dark:bg-dark-background sm:overflow-x-scroll md:overflow-auto">
      {removeDuplicate(videoData).map((x) => (
        <span
          key={x}
          className={`max-w-fit rounded-md border py-1 px-3 transition-all hover:cursor-pointer ${
            category === x
              ? "bg-dark-primary text-white"
              : "bg-dark-hover"
          } dark:border-gray-600 dark:text-dark-text`}
          onClick={() => {
            categorySetterFunc(x);
          }}
        >
          {x}
        </span>
      ))}
    </div>
  );
};

export default CategoryChips;
