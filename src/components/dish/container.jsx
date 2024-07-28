import { useGetDishByIdQuery } from "../../redux/services/api";
import { Dish } from "../dish/component";
import { useParams } from "react-router-dom";

export const DishContainer = () => {
  const { dishId } = useParams();
  const { data: dish } = useGetDishByIdQuery(dishId);

  if (!dish) {
    return null;
  }

  return (
    <Dish name={dish.name} price={dish.price} ingredients={dish.ingredients} />
  );
};
