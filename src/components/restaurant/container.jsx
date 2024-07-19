import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurant/restaurant";
import { Restaurant } from "./component";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getRestaurants } from "../../redux/entities/restaurant/get-restaurants";

export const RestaurantContainer = ({ id }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurants());
  }, [dispatch]);

  if (!restaurant) {
    return null;
  }

  const { name, reviews, menu } = restaurant;

  return <Restaurant name={name} dishIds={menu} reviewIds={reviews} />;
};
