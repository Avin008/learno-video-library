import { useState } from "react";
const useToggle = () => {
  const [show, setShowToggle] = useState<boolean>(false);

  const toggle = (): void => {
    setShowToggle((prev) => !prev);
  };

  return { show, toggle };
};

export default useToggle;
