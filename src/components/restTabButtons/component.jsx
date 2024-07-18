import { RestTabButtonContainer } from "../restTabButton/container";

export const RestTabButtons = ({ restIds, setActiveRestaurantId }) => {
  return (
    <div>
      {restIds.map((id) => (
        <RestTabButtonContainer
          key={id}
          id={id}
          clickAction={setActiveRestaurantId}
        />
      ))}
    </div>
  );
};
