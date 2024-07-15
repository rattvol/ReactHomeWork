import { useTheme } from "../themeContext/component";
import classNames from "classnames";
import styles from "./styles.module.css";

export const TabButton = ({ id, name, setActiveRestaurantId }) => {
  const { value: themeMode } = useTheme();
  return (
    <button
      className={classNames(styles.tabButton, {
        [styles.buttonDefault]: themeMode === "bw",
        [styles.buttonYellow]: themeMode === "yellow",
      })}
      onClick={() => setActiveRestaurantId(id)}
    >
      {name}
    </button>
  );
};
