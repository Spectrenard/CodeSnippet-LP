import { useEffect, useState } from "react";
import { useInView } from "./useInView";

export function useResponsiveInView<T extends Element = Element>(options = {}) {
  const [isMobile, setIsMobile] = useState(false);
  const [ref, isInView] = useInView<T>(options);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Sur mobile, on considère toujours l'élément comme visible
  return [ref, isMobile ? true : isInView] as const;
}
