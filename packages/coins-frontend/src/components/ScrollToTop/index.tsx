import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scrollToTop } from "../../utils";

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    scrollToTop({ behavior: "auto" });
  }, [pathname]);

  return null;
};
