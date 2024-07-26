import { RestTabButtons } from "./component";
import { useGetRestaurantsQuery } from "../../redux/services/api";
import { Outlet } from "react-router-dom";

export const RestTabButtonsContainer = () => {
  const { data: restaurants } = useGetRestaurantsQuery();

  if (!restaurants) return null;

  return (
    <div>
      <RestTabButtons restaurants={restaurants} />
      <Outlet />
    </div>
  );
};
