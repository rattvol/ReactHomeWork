import { useSelector } from "react-redux";
import { selectRestaurantIdsAndNames } from "../../redux/entities/restaurant";
import { TabButton } from "./component";

export const TabButtons = ({ setActiveRestaurantId }) => {
  const restNames = useSelector(selectRestaurantIdsAndNames);
  if (!restNames.length) {
    return null;
  }
  return (
    <div>
      {restNames.map(({ id, name }) => (
        <TabButton
          key={id}
          id={id}
          name={name}
          setActiveRestaurantId={setActiveRestaurantId}
        />
      ))}
    </div>
  );
};
