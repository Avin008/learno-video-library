const filterByCategory = (
  videoData: Video[],
  category: string
) => {
  if (category !== "All") {
    return videoData.filter(
      (x) => x.category === category
    );
  } else {
    return videoData;
  }
};

export default filterByCategory;
