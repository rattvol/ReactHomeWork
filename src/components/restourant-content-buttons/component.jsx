import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import classNames from "classnames";
import styles from "./styles.module.css";

export const RestaurantContentButtons = () => {
  return (
    <div>
      <NavLink
        className={({ isActive }) =>
          classNames(styles.tabButton, {
            [styles.activeLink]: isActive,
          })
        }
        to="menu"
      >
        Menu
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          classNames(styles.tabButton, {
            [styles.activeLink]: isActive,
          })
        }
        to="reviews"
      >
        Reviews
      </NavLink>
      <Outlet />
    </div>
  );
};
