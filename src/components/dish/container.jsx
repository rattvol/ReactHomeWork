import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dish";
import { Dish } from "./component";

export const DishContainer = ({ id }) => {
  const dish = useSelector((state) => selectDishById(state, id));
  if (!dish) {
    return null;
  }

  const { name, price, ingredients } = dish;

  return <Dish name={name} price={price} ingredients={ingredients} />;
};
