import { RestTabButton } from "../restTabButton/component";

export const RestTabButtons = ({ restaurants }) => {
  return (
    <div>
      {restaurants.map(({ id, name }) => (
        <RestTabButton key={id} id={id} name={name} />
      ))}
    </div>
  );
};
