const CategoryChips = ({ data }: { data: string }): React.ReactElement => {
  return (
    <div className="min-w-fit rounded-md border border-gray-500 hover:cursor-pointer hover:bg-hover">
      <span className="px-3">{data}</span>
    </div>
  );
};

export default CategoryChips;
