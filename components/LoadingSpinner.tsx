import { ClipLoader } from "react-spinners";

const LoadingSpinner = (): React.ReactElement => {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center">
      <ClipLoader size={30} color="gray" />
    </div>
  );
};

export default LoadingSpinner;
