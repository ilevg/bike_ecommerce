import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from "./ScrollTop.module.scss";

const ScrollTop = () => {
  const { pathname } = useLocation();
  const [showOpacityEl, setShowOpacityEl] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    setShowOpacityEl(true);
    const timeout = setTimeout(() => {
      setShowOpacityEl(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <div
      className={`${showOpacityEl ? styles.opacityElem : styles.hide}`}
    ></div>
  );
};

export default ScrollTop;
