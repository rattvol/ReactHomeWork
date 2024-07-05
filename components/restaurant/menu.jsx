import { useCounter } from "../customHook/useCounter";

export const Menu = ({ name, price, ingredients }) => {
  const { counter, increase, decrease } = useCounter(0);
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
      <button onClick={increase}>+</button>
      {counter}
      <button onClick={decrease}>-</button>
    </div>
  );
};
