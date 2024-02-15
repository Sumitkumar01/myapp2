import { useEffect } from "react";

const ScrollTop = () => {
  return useEffect(() => {
    // window.scrollBy(0, 0);
    window.scrollTo({
      top: 0,
      // behavior: 'unset',
    });
  }, []);
};

export default ScrollTop;