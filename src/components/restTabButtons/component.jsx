import { RestTabButtonContainer } from "../restTabButton/container";

export const RestTabButtons = ({ restaurants, setActiveRestaurantId }) => {
  return (
    <div>
      {restaurants.map(({ id, name }) => (
        <RestTabButtonContainer
          key={id}
          id={id}
          name={name}
          clickAction={setActiveRestaurantId}
        />
      ))}
    </div>
  );
};
