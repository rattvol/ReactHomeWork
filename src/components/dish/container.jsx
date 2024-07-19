import { useSelector, useDispatch } from "react-redux";
import { selectDishById } from "../../redux/entities/dish/dish";
import { Dish } from "./component";
import { useEffect } from "react";
import { getDishes } from "../../redux/entities/dish/get-dishes";

export const DishContainer = ({ id }) => {
  const dish = useSelector((state) => selectDishById(state, id));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDishes());
  }, [dispatch]);

  if (!dish) {
    return null;
  }

  const { name, price, ingredients } = dish;

  return <Dish name={name} price={price} ingredients={ingredients} />;
};
