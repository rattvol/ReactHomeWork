import { useUser } from "../userContext/component";
import classNames from "classnames";
import styles from "./styles.module.css";
import { useTheme } from "../themeContext/component";

function getText(userName) {
  return userName ? "User: " + userName : "";
}

function getButtonValue(userName) {
  return userName ? "Выйти" : "Войти";
}

export const SwitchUserButton = () => {
  const { value, toggleButton } = useUser();
  const text = getText(value);
  const buttonValue = getButtonValue(value);
  const { value: themeMode } = useTheme();

  return (
    <div>
      <button
        className={classNames({
          [styles.buttonDefault]: themeMode === "bw",
          [styles.buttonYellow]: themeMode === "yellow",
        })}
        onClick={toggleButton}
      >
        {buttonValue}
      </button>{" "}
      {text}
    </div>
  );
};
