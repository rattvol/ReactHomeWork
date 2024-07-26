import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import styles from "./styles.module.css";
import { SwitchThemeButton } from "../switchThemeButton/switchThemeButton";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className={styles.layoutCustom}>
      <Header />
      <SwitchThemeButton />
      <Outlet />
      <Footer />
    </div>
  );
};
