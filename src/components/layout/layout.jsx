import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import styles from "./styles.module.css";

export const Layout = ({ children }) => {
  return (
    <div className={styles.layoutCustom}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
