import { useTheme } from "../themeContext/component";
import classNames from "classnames";
import styles from "./styles.module.css";

export const RestTabButton = ({ id, name, clickAction }) => {
  const { value: themeMode } = useTheme();

  return (
    <button
      className={classNames(styles.tabButton, {
        [styles.buttonDefault]: themeMode === "bw",
        [styles.buttonYellow]: themeMode === "yellow",
      })}
      onClick={() => clickAction(id)}
    >
      {name}
    </button>
  );
};
