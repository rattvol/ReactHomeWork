import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import styles from "./styles.module.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getRestaurants } from "../../redux/entities/restaurant/get-restaurants";

export const Layout = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurants());
  }, [dispatch]);

  return (
    <div className={styles.layoutCustom}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
