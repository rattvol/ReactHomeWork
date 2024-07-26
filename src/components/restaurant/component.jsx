import { RestaurantContentButtons } from "../restourant-content-buttons/component";

export const Restaurant = ({ name }) => {
  return (
    <div>
      <h2>
        Restaurant: <i>{name}</i>
      </h2>
      <RestaurantContentButtons />
    </div>
  );
};
