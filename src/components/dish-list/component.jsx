import { useGetDishByRestaurantIdQuery } from "../../redux/services/api";
import { Dish } from "../dish/component";

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
            <Dish
              name={dish.name}
              price={dish.price}
              ingredients={dish.ingredients}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
