import { useEffect, useState } from "react";

export const useIsMobile = (maxWidth: number = 1440) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < maxWidth);

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, [maxWidth]);

  return isMobile;
};
