import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import classNames from "classnames";

export const MainPage = () => {
  return (
    <p>
      <Link className={classNames(styles.mainPage)} to="restaurants">
        Open Restourants
      </Link>
    </p>
  );
};
