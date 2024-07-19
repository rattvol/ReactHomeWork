import { useSelector, useDispatch } from "react-redux";
import { selectRestaurantIds } from "../../redux/entities/restaurant/restaurant";
import { RestTabButtons } from "./component";
import { useEffect } from "react";
import { getRestaurants } from "../../redux/entities/restaurant/get-restaurants";

export const RestTabButtonsContainer = ({ setActiveRestaurantId }) => {
  const restIds = useSelector(selectRestaurantIds);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurants());
  }, [dispatch]);

  if (!restIds.length) {
    return null;
  }
  return (
    <RestTabButtons
      restIds={restIds}
      setActiveRestaurantId={setActiveRestaurantId}
    />
  );
};
