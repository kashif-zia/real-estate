import { useEffect, useState } from "react";

const useStickyBar = () => {
  const [fix, setFix] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 600) setFix(true);
      else setFix(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [fix]);

  return fix;
};

export default useStickyBar;
