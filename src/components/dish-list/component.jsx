import { NavLink } from "react-router-dom";
import { useGetDishByRestaurantIdQuery } from "../../redux/services/api";
import { useParams } from "react-router-dom";

export const DishList = () => {
  const { restaurantId } = useParams();
  const { data: dishes } = useGetDishByRestaurantIdQuery(restaurantId);

  if (!dishes) {
    return null;
  }

  return (
    <div>
      <h3>MENU</h3>
      <ul>
        {dishes.map((dish) => (
          <li key={dish.id}>
            <NavLink to={`/dishes/${dish.id}`}>{dish.name}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
