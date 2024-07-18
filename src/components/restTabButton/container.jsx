import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurant";
import { RestTabButton } from "./component";

export const RestTabButtonContainer = ({ id, clickAction }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));
  if (!restaurant) {
    return null;
  }
  return (
    <RestTabButton id={id} name={restaurant.name} clickAction={clickAction} />
  );
};
