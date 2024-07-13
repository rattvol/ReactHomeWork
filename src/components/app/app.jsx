/* eslint-disable react/react-in-jsx-scope */
import { Layout } from "../layout/layout";
import { restaurants } from "../../../materials/mock";
import { useState } from "react";
import { Restaurant } from "../restaurant/restaurant";
import "./main.css";
import { ThemeContextProvider } from "../themeContext/component";
import { UserContextProvider } from "../userContext/component";
import { SwitchThemeButton } from "../switchThemeButton/switchThemeButton";
import { TabButton } from "./tabButton";

const useTab = () => {
  const [activeRestaurantId, setActiveRestaurantId] = useState(
    restaurants[0].id
  );

  return { activeRestaurantId, setActiveRestaurantId };
};

export const App = () => {
  const { activeRestaurantId, setActiveRestaurantId } = useTab();

  const activeRestaurant = restaurants.find(
    (restaurant) => restaurant.id === activeRestaurantId
  );

  return (
    <ThemeContextProvider>
      <UserContextProvider>
        <Layout>
          <SwitchThemeButton />
          <div>
            {restaurants.map(({ id, name }) => {
              return (
                <TabButton
                  key={id}
                  id={id}
                  name={name}
                  setActiveRestaurantId={setActiveRestaurantId}
                />
              );
            })}
            <div id="content">
              {activeRestaurant && <Restaurant restaurant={activeRestaurant} />}
            </div>
          </div>
        </Layout>
      </UserContextProvider>
    </ThemeContextProvider>
  );
};
