/* eslint-disable react/react-in-jsx-scope */
import { Layout } from "../layout/layout";
import { restaurants } from "../../materials/mock";
import { Restaurant } from "../restaurant/restaurant";
import { useState, useEffect } from "react";

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
    <Layout>
      <div>
        {restaurants.map(({ id, name }) => {
          return (
            <button
              key={id}
              className="tabButton"
              onClick={() => setActiveRestaurantId(id)}
            >
              {name}
            </button>
          );
        })}
        <div id="content">
          {activeRestaurant && <Restaurant restaurant={activeRestaurant} />}
        </div>
      </div>
    </Layout>
  );
};
