import { useTheme } from "../themeContext/component";
import classNames from "classnames";
import styles from "./styles.module.css";
import { NavLink } from "react-router-dom";

export const RestTabButton = ({ id, name }) => {
  const { value: themeMode } = useTheme();

  return (
    <NavLink
      className={({ isActive }) =>
        classNames(
          styles.tabButton,
          {
            [styles.activeLink]: isActive,
          },
          {
            [styles.buttonDefault]: themeMode === "bw",
            [styles.buttonYellow]: themeMode === "yellow",
          }
        )
      }
      to={id}
    >
      {name}
    </NavLink>
  );
};
