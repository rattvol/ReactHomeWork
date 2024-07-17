import { useUser } from "../userContext/component";
import { Counter } from "../counter/counter";

export const Dish = ({ name, price, ingredients }) => {
  const { value } = useUser();

  return (
    <div>
      <h4>{name}</h4>
      <div>price: {price}</div>
      <div>Ingridients:</div>
      <ul>
        {ingredients?.length ? (
          ingredients.map((value) => <li key={value}>{value}</li>)
        ) : (
          <div>-</div>
        )}
      </ul>
      {value && <Counter />}
    </div>
  );
};
