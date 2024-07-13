import { useCounter } from "../useCounter/useCounter";
import classNames from "classnames";
import { useTheme } from "../themeContext/component";
import styles from "./styles.module.css";

export const Counter = () => {
  const { counter, increase, decrease } = useCounter(0);
  const { value: themeMode } = useTheme();

  return (
    <div>
      <button
        className={classNames({
          [styles.buttonDefault]: themeMode === "bw",
          [styles.buttonYellow]: themeMode === "yellow",
        })}
        onClick={increase}
      >
        +
      </button>
      {counter}
      <button
        className={classNames({
          [styles.buttonDefault]: themeMode === "bw",
          [styles.buttonYellow]: themeMode === "yellow",
        })}
        onClick={decrease}
      >
        -
      </button>
    </div>
  );
};
