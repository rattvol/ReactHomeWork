import { Footer } from "../footer/footer";
import { Header } from "../header/header";

export const Layout = ({ children }) => {
  return (
    <div id="layoutCustom">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
