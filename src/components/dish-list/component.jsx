import { DishContainer } from "../dish/container";

export const DishList = ({ dishIds }) => {
  if (!dishIds.length) {
    return null;
  }

  return (
    <div>
      <ul>
        {dishIds.map((id) => (
          <li key={id}>
            <DishContainer id={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};
