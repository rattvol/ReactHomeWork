import { useSelector } from "react-redux";
import { selectRestaurantIds } from "../../redux/entities/restaurant";
import { RestTabButtons } from "./component";

export const RestTabButtonsContainer = ({ setActiveRestaurantId }) => {
  const restIds = useSelector(selectRestaurantIds);
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
