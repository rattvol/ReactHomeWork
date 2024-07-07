import { useEffect, useState } from "react";

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

    return window.removeEventListener("scroll", () =>
      setPercent(getNewPercent)
    );
  });

  return (
    <>
      <div id="progressBar" style={{ width: percent }}></div>
    </>
  );
};
