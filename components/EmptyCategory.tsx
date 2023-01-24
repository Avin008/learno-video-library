import { useRouter } from "next/router";

const EmptyCategory = ({
  img,
  message,
  link,
}: {
  img: string;
  message: string;
  link: string;
}): React.ReactElement => {
  const router = useRouter();

  return (
    <div className="mt-24 flex flex-col items-center space-y-3 sm:col-span-12 lg:col-span-10 lg:-translate-x-10">
      <div className="relative h-16 w-16">
        <img src={img} alt="" />
      </div>
      <p className="text-lg font-normal text-gray-200">
        {message}
      </p>
      <button
        className="rounded-md bg-dark-primary px-3 py-1 text-base font-normal text-dark-text shadow-sm"
        onClick={() => {
          router.push(link);
        }}
      >
        Watch Videos
      </button>
    </div>
  );
};

export default EmptyCategory;
