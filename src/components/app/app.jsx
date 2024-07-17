import { Layout } from "../layout/layout";
import { restaurants } from "../../../materials/mock";
import { useState } from "react";
import "./main.css";
import { ThemeContextProvider } from "../themeContext/component";
import { UserContextProvider } from "../userContext/component";
import { SwitchThemeButton } from "../switchThemeButton/switchThemeButton";
import { Provider } from "react-redux";
import { store } from "../../redux";
import { RestaurantContainer } from "../restaurant/container";
import { TabButtons } from "../tabButtons/container";

const useTab = () => {
  const [activeRestaurantId, setActiveRestaurantId] = useState(
    restaurants[0].id
  );

  return { activeRestaurantId, setActiveRestaurantId };
};

export const App = () => {
  const { activeRestaurantId, setActiveRestaurantId } = useTab();

  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <UserContextProvider>
          <Layout>
            <SwitchThemeButton />
            <div>
              <TabButtons setActiveRestaurantId={setActiveRestaurantId} />
              <RestaurantContainer id={activeRestaurantId} />
            </div>
          </Layout>
        </UserContextProvider>
      </ThemeContextProvider>
    </Provider>
  );
};
