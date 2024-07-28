import { Restaurant } from "./component";
import { useGetRestaurantByIdQuery } from "../../redux/services/api";
import { useParams } from "react-router-dom";

export const RestaurantContainer = () => {
  const { restaurantId: id } = useParams();

  const {
    data: restaurant,
    isLoading,
    isFetching,
  } = useGetRestaurantByIdQuery(id);

  if (isLoading || isFetching) return "loading";

  if (!restaurant) {
    return null;
  }

  const { id: restaurantId, name } = restaurant;

  return <Restaurant key={restaurantId} name={name} />;
};
