import { RestTabButtons } from "./component";
import { useGetRestaurantsQuery } from "../../redux/services/api";

export const RestTabButtonsContainer = ({ setActiveRestaurantId }) => {
  const { data: restaurants } = useGetRestaurantsQuery();

  if (!restaurants) return null;

  return (
    <RestTabButtons
      restaurants={restaurants}
      setActiveRestaurantId={setActiveRestaurantId}
    />
  );
};
