import { useEffect, useState } from "react";
import styles from "./styles.module.css";

const getNewPercent = () => {
  return (
    Math.floor(
      (window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight)) *
        100
    ) + "%"
  );
};

export const ProgressBar = () => {
  const [percent, setPercent] = useState("0%");

  useEffect(() => {
    window.addEventListener("scroll", () => setPercent(getNewPercent));

    return () =>
      window.removeEventListener("scroll", () => setPercent(getNewPercent));
  }, []);

  return (
    <>
      <div className={styles.progressBar} style={{ width: percent }}></div>
    </>
  );
};
