import { Counter } from "../counter/counter.jsx";

export const Menu = ({ name, price, ingredients }) => {
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
      <Counter />
    </div>
  );
};
