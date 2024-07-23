import { useGetDishByRestaurantIdQuery } from "../../redux/services/api";
import { DishContainer } from "../dish/container";

export const DishList = ({ restaurantId }) => {
  const { data: dishes } = useGetDishByRestaurantIdQuery(restaurantId);

  if (!dishes) {
    return null;
  }

  return (
    <div>
      <ul>
        {dishes.map((dish) => (
          <li key={dish.id}>
            <DishContainer dish={dish} />
          </li>
        ))}
      </ul>
    </div>
  );
};
