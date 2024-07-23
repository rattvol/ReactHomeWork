import { Dish } from "./component";

export const DishContainer = ({ dish }) => {
  const { name, price, ingredients } = dish;

  return <Dish name={name} price={price} ingredients={ingredients} />;
};
