import { useSelector, useDispatch } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurant/restaurant";
import { RestTabButton } from "./component";
import { useEffect } from "react";
import { getRestaurants } from "../../redux/entities/restaurant/get-restaurants";

export const RestTabButtonContainer = ({ id, clickAction }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurants());
  }, [dispatch]);

  if (!restaurant) {
    return null;
  }
  return (
    <RestTabButton id={id} name={restaurant.name} clickAction={clickAction} />
  );
};
